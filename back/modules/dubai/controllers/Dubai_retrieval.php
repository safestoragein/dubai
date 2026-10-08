<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * safestorage.ae customer RETRIEVAL requests (PHP side) — the Dubai copy of the back-office
 * retrieval flow (customer/retrieval_order_form, add_retrieval_data, add_partial_retrieval_data).
 *
 *   POST dubai/dubai_retrieval/options    customer_id
 *   POST dubai/dubai_retrieval/estimate   customer_id, type, [inventory_id[]], date, lat, lng, floor, lift
 *   POST dubai/dubai_retrieval/create     + address, phone, [note]        (request only, nothing to pay)
 *   POST dubai/dubai_retrieval/prepare    same input as create            (returns what to pay now, saves a pending request)
 *   POST dubai/dubai_retrieval/settle     intent_id, payment_ref, amount_aed   (called by the Stripe webhook once the card payment is confirmed)
 *
 * type = partial | full | intercity.
 *
 * What is the SAME as the back office: the transport charge is NOT re-implemented — it comes from
 * Modules::run('retrieval/_api_retrieval_summary'), the method behind retrieval/get_retrieval_info
 * (seeded through $_POST exactly like get_retrieval_estimate_api does), and the order row / item rows
 * are the ones add_retrieval_data / add_partial_retrieval_data write.
 *
 * What is DIFFERENT, on purpose: every figure is recomputed HERE (the old form posted browser-side
 * totals), items must belong to the customer, partial is capped at 50% of the active items, and the
 * order is created as 'request_raise' (awaiting the team) with NO bill — the team confirms the
 * charge and bills it in the back office, so a customer is never billed an unconfirmed amount.
 *
 * Called ONLY by the Next.js server; every request carries X-Dubai-Key (same key as dubai_auth).
 */
class Dubai_retrieval extends MY_Controller {

    const WAREHOUSE_ID = 32;        // "Dubai Warehouse" (DIP-1)
    const MAX_PARTIAL  = 0.5;       // up to 50% of active items
    const MIN_NOTICE   = 4;         // days — same as the Indian dashboard's SafeStorage-transport rule (minDate: 4)
    const BILL_WINDOW  = 90;        // days after the last bill — same as the Indian dashboard's maxDate
    // Days of the month the Indian dashboard blocks for customers (billing days).
    private static $BLOCKED_DAYS = array(1, 2, 26, 27, 28, 29, 30, 31);

    // Dubai door-to-door transport — the same tiers as lib/transport-pricing.ts on safestorage.ae and
    // Dubai::_dubai_transport_price(), so the website, the back office and this portal quote one figure.
    const POINTS_PER_PALLET = 16;
    const SURCHARGE_AED     = 60;
    const OVERSIZE_PER_PALLET = 218;
    const SERVICE_RADIUS_KM = 60;
    private static $ORIGINS = array(                     // Dubai warehouse and the Abu Dhabi service centre
        array(24.989924, 55.154235), array(24.453884, 54.377344),
    );

    public function __construct()
    {
        header('Content-Type: application/json');
        header('Cache-Control: no-store');
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);
        $this->load->model('common/common_model');
        $this->config->load('dubai_back', FALSE, TRUE);
        $expected = (string) $this->config->item('dubai_back_key');
        $given    = (string) (isset($_SERVER['HTTP_X_DUBAI_KEY']) ? $_SERVER['HTTP_X_DUBAI_KEY'] : '');
        if (strlen($expected) < 32) $this->_json(array('status' => 'error', 'message' => 'Not configured.'), 503);
        if ($given === '' || !hash_equals($expected, $given)) $this->_json(array('status' => 'error', 'message' => 'Forbidden.'), 403);
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') $this->_json(array('status' => 'error', 'message' => 'POST required.'), 405);
    }

    // ---------------------------------------------------------------- options
    public function options()
    {
        $c = $this->_customer();
        $items = $this->_active_items($c->customer_id);

        $open = $this->db->query(
            "SELECT order_id, order_type, order_status, order_schedule_date FROM ss_order
              WHERE customer_id = ? AND order_type IN ('full_retrieval','partial_retrieval')
                AND order_status NOT IN ('completed','cancelled') ORDER BY order_id DESC LIMIT 5", array($c->customer_id))->result();
        $openList = array();
        foreach ($open as $o) {
            $openList[] = array('ref' => 'WO' . $o->order_id, 'type' => $o->order_type, 'status' => $o->order_status, 'date' => (string) $o->order_schedule_date);
        }

        $floors = array(); foreach ($this->db->query("SELECT floor_name, floor_slug FROM ss_floor WHERE status = '0' ORDER BY floor_id")->result() as $f) $floors[] = array('slug' => $f->floor_slug, 'name' => $f->floor_name);
        $slots  = array(); foreach ($this->db->query("SELECT timeslot, timeslot_slug FROM ss_timeslot WHERE status = '0' ORDER BY timeslot_id")->result() as $t) $slots[] = array('slug' => $t->timeslot_slug, 'name' => $t->timeslot);

        $this->_json(array('status' => 'success',
            'items' => $items,
            'max_partial' => (int) floor(count($items) * self::MAX_PARTIAL),
            'open_orders' => $openList,
            'floors' => $floors, 'timeslots' => $slots,
            'rules' => $this->_date_rules($c),
            'defaults' => array(
                'address' => (string) $c->pickup_address, 'lat' => $c->pickup_lat, 'lng' => $c->pickup_lang,
                'floor' => (string) $c->pickup_floor, 'lift' => (string) $c->pickup_lift, 'phone' => (string) $c->customer_contact1,
            ),
        ));
    }

    // --------------------------------------------------------------- estimate
    public function estimate()
    {
        $c = $this->_customer();
        $in = $this->_validated($c, false);
        $this->_json(array('status' => 'success', 'estimate' => $this->_estimate($c, $in)));
    }

    // ----------------------------------------------------------------- create
    public function create()
    {
        $c  = $this->_customer();
        $in = $this->_validated($c, true);

        $this->_assert_free_to_book($c, $in);

        $est = $this->_estimate($c, $in);

        $oid = $this->_place_order($c, $in, $est, 'request_raise');
        if ($oid <= 0) $this->_json(array('status' => 'error', 'message' => 'Could not create the request. Please try again.'), 500);
        $this->_json(array('status' => 'success', 'ref' => 'WO' . $oid, 'order_id' => $oid));
    }

    /** Writes the order + item rows and tells the team. Returns the new order id (0 on failure). */
    private function _place_order($c, $in, $est, $status, $paidNote = '')
    {
        $mgr = $this->db->query("SELECT user_id FROM ss_user WHERE role_id = 2 AND user_city = ? AND user_country = 'AE' AND status = '0' LIMIT 1", array((string) $c->customer_local_city))->row();
        $com = $this->db->query("SELECT commission_percent FROM ss_transport_commission WHERE status = '0' ORDER BY commission_id DESC LIMIT 1")->row();
        $uid = $this->db->query("SELECT user_id FROM ss_user WHERE customer_id = ? AND role_id = 6 LIMIT 1", array($c->customer_id))->row();
        $actor = $uid ? (int) $uid->user_id : 0;

        $order = array(
            'country_code'       => 'AE',
            'customer_id'        => $c->customer_id,
            'is_confirmed'       => 'Yes',
            'order_status'       => $status,          // waits for the team to confirm the day
            'manager_id'         => $mgr ? $mgr->user_id : null,
            'warehouse_id'       => self::WAREHOUSE_ID,
            'vt_id'              => null,
            'order_sub_type'     => 'safestorage_transport',
            'order_address'      => $in['address'],
            'floor'              => $in['floor'],
            'lift'               => $in['lift'],
            'mobile_no1'         => $in['phone'],
            'mobile_no2'         => (string) $c->customer_contact2,
            'order_timeslot'     => $in['timeslot_name'],
            'order_schedule_date'=> $in['date_ymd'],
            'order_type'         => ($in['type'] === 'partial') ? 'partial_retrieval' : 'full_retrieval',
            'order_note'         => $in['note'],
            'final_payable_amt'  => $est['final_payable_amt'],
            'final_return_amt'   => $est['final_return_amt'],
            'transport_charges'  => $est['transport_base'],
            'transport_tax_amt'  => $est['transport_tax'],
            'total_transport_charges' => $est['transport_total'],
            'ss_commission_percent'   => $com ? $com->commission_percent : null,
            'order_created_by'   => $actor,
            'order_created_type' => 'dubai_customer',
            'user_id'            => $actor,
        );
        if ($in['type'] === 'intercity') $order['is_intercity'] = 1;

        $this->db->insert('ss_order', $order);
        $oid = (int) $this->db->insert_id();
        if ($oid <= 0) return 0;

        foreach ($in['ids'] as $iid) {
            $this->db->insert('ss_partial_retrieval_item', array('customer_id' => $c->customer_id, 'order_id' => $oid, 'inventory_id' => $iid));
        }

        // activity log + transport-app event + team e-mail: best effort, never fail a saved request
        $label = array('partial' => 'Partial retrieval', 'full' => 'Full retrieval', 'intercity' => 'Intercity full retrieval');
        try {
            $this->_log($c->customer_id, $actor, 'retrieval_requested',
                $label[$in['type']] . ' requested by the customer for ' . $in['date_ymd'] . ' · ' . count($in['ids']) . ' item(s) · WO' . $oid);
        } catch (\Throwable $e) {}
        try {
            $this->load->helper('transport_webhook');
            if (function_exists('push_transport_event')) push_transport_event($oid, 'created');
        } catch (\Throwable $e) {}
        try {
            $this->load->library('email');
            $this->email->initialize(array('protocol' => 'sendmail', 'mailpath' => '/usr/sbin/sendmail', 'charset' => 'utf-8', 'wordwrap' => TRUE, 'mailtype' => 'html'));
            $this->email->from('customers@safestorage.in', 'SafeStorage Dubai');
            $this->email->to('support@safestorage.ae');
            $this->email->subject($label[$in['type']] . ' request · ' . $c->customer_unique_id . ' · WO' . $oid);
            $this->email->message(
                '<p><b>' . htmlspecialchars($label[$in['type']]) . '</b> requested from the customer portal.</p>' .
                '<p>Customer: ' . htmlspecialchars($c->customer_name) . ' (' . htmlspecialchars($c->customer_unique_id) . ')<br>' .
                'Phone: ' . htmlspecialchars($in['phone']) . '<br>Order: WO' . $oid . ' (status: request_raise)<br>' .
                'Date: ' . htmlspecialchars($in['date_ymd']) . ' · ' . htmlspecialchars($in['timeslot_name']) . '<br>' .
                'Address: ' . htmlspecialchars($in['address']) . '<br>Floor: ' . htmlspecialchars($in['floor']) . ' · Lift: ' . htmlspecialchars($in['lift']) . '<br>' .
                ($paidNote !== '' ? '<b>' . htmlspecialchars($paidNote) . '</b><br>' : '') . 'Items: ' . count($in['ids']) . '<br>Estimated transport: AED ' . number_format($est['transport_total'], 2) . ' (to be confirmed)</p>' .
                ($in['note'] !== '' ? '<p>Note: ' . htmlspecialchars($in['note']) . '</p>' : ''));
            $this->email->send();
        } catch (\Throwable $e) {}
        return $oid;
    }

    /**
     * What the customer pays NOW. Built from the customer's real rows, not from the module's single number:
     *   existing unpaid bills + storage till the retrieval date + transport  -  wallet credit  =  pay now.
     * Online payment is offered only for the plain case (transport priced, nothing to refund, amount >= AED 2);
     * everything else is a request the team settles with the customer.
     */
    private function _plan($c, $d, $teamQuote, $transport, $storageTillDate, $wallet, $isReturn)
    {
        $dues = 0.0; $ids = array();
        foreach ($this->db->query("SELECT payment_id, payable_amount, total_amount FROM ss_customer_payment WHERE customer_id = ? AND payment_status = 'Unpaid'", array($c->customer_id))->result() as $r) {
            $a = is_numeric($r->payable_amount) ? (float) $r->payable_amount : (float) $r->total_amount;
            if ($a > 0) { $dues += $a; $ids[] = (int) $r->payment_id; }
        }
        $storage = max(0.0, round($storageTillDate, 2));
        $bills   = round($dues + $storage + ($teamQuote ? 0 : $transport), 2);
        $walletUsed = min(round($wallet, 2), $bills);
        $due     = round($bills - $walletUsed, 2);
        $mode = 'request'; $why = '';
        if (!$this->_pay_enabled())            $why = 'Online payment is switched off.';
        elseif ($teamQuote)                    $why = 'Our team will quote the transport price first.';
        elseif ($isReturn === 'yes')           $why = 'Part of your prepaid storage comes back to you, so our team settles the amounts with you.';
        elseif ($due < 2)                      $why = ($due > 0) ? 'Online card payment starts from AED 2. Our team will collect this amount.' : 'Your wallet covers the charges.';
        else                                   $mode = 'pay';
        return array('mode' => $mode, 'why' => $why, 'unpaid_ids' => $ids, 'unpaid_dues' => round($dues, 2), 'storage' => $storage,
                     'transport' => $teamQuote ? 0.0 : round($transport, 2), 'bills_total' => $bills, 'wallet_used' => $walletUsed, 'amount_due_now' => $due);
    }

    private function _pay_enabled()
    {
        $v = $this->config->item('dubai_retrieval_pay');
        return $v === null || $v === '' ? true : (bool) $v;          // on by default; set false in config/dubai_back.php to switch off
    }

    // ---------------------------------------------------------------- prepare
    /** Same input as create(). If there is something to pay online, saves a pending request and returns what to charge. */
    public function prepare()
    {
        $c  = $this->_customer();
        $in = $this->_validated($c, true);
        $this->_assert_free_to_book($c, $in);
        $est = $this->_estimate($c, $in);
        $plan = $est['plan'];
        if ($plan['mode'] !== 'pay') {
            $this->_json(array('status' => 'success', 'mode' => 'request', 'why' => $plan['why'], 'plan' => $plan));
        }
        $uid = $this->db->query("SELECT user_id FROM ss_user WHERE customer_id = ? AND role_id = 6 LIMIT 1", array($c->customer_id))->row();
        $iid = $this->_log($c->customer_id, $uid ? (int) $uid->user_id : 0, 'retrieval_intent',
            'Retrieval payment started · ' . $in['date_ymd'] . ' · AED ' . number_format($plan['amount_due_now'], 2),
            json_encode(array('in' => $in, 'plan' => $plan)));
        if ($iid <= 0) $this->_json(array('status' => 'error', 'message' => 'Could not start the payment. Please try again.'), 500);
        $this->_json(array('status' => 'success', 'mode' => 'pay', 'intent_id' => $iid, 'amount_aed' => $plan['amount_due_now'], 'plan' => $plan,
                           'description' => 'SafeStorage retrieval - ' . $c->customer_unique_id));
    }

    // ----------------------------------------------------------------- settle
    /** Called by the Stripe webhook once the card payment is CONFIRMED. Creates the order and settles the bills. Idempotent. */
    public function settle()
    {
        $iid  = (int) $this->input->post('intent_id');
        $ref  = trim((string) $this->input->post('payment_ref'));
        $paid = (float) $this->input->post('amount_aed');
        $c    = $this->_customer();
        if ($iid <= 0 || $ref === '' || $paid <= 0) $this->_json(array('status' => 'error', 'message' => 'missing_fields'), 400);

        $row = $this->db->query("SELECT * FROM ss_dubai_log WHERE log_id = ? AND action_type = 'retrieval_intent' AND customer_id = ? LIMIT 1", array($iid, $c->customer_id))->row();
        if (!$row) $this->_json(array('status' => 'error', 'message' => 'intent_not_found'), 404);
        $done = $this->db->query("SELECT message FROM ss_dubai_log WHERE action_type = 'retrieval_settled' AND lead_id = ? LIMIT 1", array($iid))->row();
        if ($done) $this->_json(array('status' => 'success', 'duplicate' => true));            // webhook retry: already done

        $j = json_decode((string) $row->changes, true);
        if (!is_array($j) || empty($j['in']) || empty($j['plan'])) $this->_json(array('status' => 'error', 'message' => 'intent_corrupt'), 500);
        $in = $j['in']; $plan = $j['plan'];

        if (abs($paid - (float) $plan['amount_due_now']) > 0.05) {
            $this->_alert_team('Retrieval payment amount mismatch', $c, 'Intent ' . $iid . ' expected AED ' . $plan['amount_due_now'] . ' but Stripe reported AED ' . $paid . ' (ref ' . $ref . '). Nothing was settled.');
            $this->_json(array('status' => 'error', 'message' => 'amount_mismatch'), 409);
        }
        $taken = $this->db->query("SELECT order_id FROM ss_order WHERE country_code = 'AE' AND order_type IN ('full_retrieval','partial_retrieval') AND order_status <> 'cancelled' AND order_schedule_date = ? LIMIT 1", array($in['date_ymd']))->row();
        if ($taken) {
            $this->_alert_team('Retrieval paid but the date was taken', $c, 'Intent ' . $iid . ' paid AED ' . $paid . ' (ref ' . $ref . ') for ' . $in['date_ymd'] . ', but that date is already booked (WO' . $taken->order_id . '). Please refund or re-schedule.');
            $this->_json(array('status' => 'error', 'message' => 'date_taken'), 409);
        }

        $est = $this->_estimate($c, $in);                                   // the order keeps the figures as they are now
        $oid = $this->_place_order($c, $in, $est, 'request_raise', 'PAID ONLINE: AED ' . number_format($paid, 2) . ' (Stripe ' . $ref . ')');
        if ($oid <= 0) {
            $this->_alert_team('Retrieval paid but the order could not be created', $c, 'Intent ' . $iid . ' paid AED ' . $paid . ' (ref ' . $ref . '). Please create the retrieval by hand.');
            $this->_json(array('status' => 'error', 'message' => 'order_failed'), 500);
        }

        // new bills for what is now owed (priced above), then the EXISTING settlement marks everything Paid and records the money
        $ids = array();
        foreach ($plan['unpaid_ids'] as $pid) $ids[] = (int) $pid;
        $now = date('Y-m-d');
        $mk = function ($amt, $note, $type, $tax) use ($c, $oid, $now) {
            $this->db->insert('ss_customer_payment', array(
                'country_code' => 'AE', 'customer_id' => $c->customer_id, 'sub_total_amt' => number_format($amt, 2, '.', ''), 'tax' => $tax,
                'total_amount' => number_format($amt, 2, '.', ''), 'payable_amount' => number_format($amt, 2, '.', ''),
                'bill_genrated_date' => $now, 'billing_date' => $now, 'offer_note' => $note, 'payment_status' => 'Unpaid',
                'is_extra_charges' => '1', 'is_instant' => '1', 'charges_type' => $type, 'order_id' => $oid, 'payment_unique_id' => mt_rand(100000, 999999),
            ));
            return (int) $this->db->insert_id();
        };
        if ($plan['storage'] > 0)   $ids[] = $mk($plan['storage'], 'Storage charges till retrieval (' . date('d/m/Y', strtotime($in['date_ymd'])) . ')', null, 5);
        if ($plan['transport'] > 0) $ids[] = $mk($plan['transport'], 'Retrieval transport charges', 'transport_charges', 0);

        // wallet credit is used up in the same step
        if ($plan['wallet_used'] > 0) {
            $w = $this->db->query("SELECT wallet_id, wallet_amount FROM ss_customer_wallet WHERE customer_id = ? LIMIT 1", array($c->customer_id))->row();
            if ($w) {
                $left = max(0, round((float) $w->wallet_amount - (float) $plan['wallet_used'], 2));
                $this->db->where('wallet_id', $w->wallet_id)->update('ss_customer_wallet', array('wallet_amount' => number_format($left, 2, '.', ''), 'old_amount' => (string) $w->wallet_amount, 'comment' => 'Used for retrieval WO' . $oid));
            }
        }

        $settle = $this->_call_due_settle($c->customer_id, $ids, $paid, $ref);
        $this->_log($c->customer_id, 0, 'retrieval_settled', 'Retrieval WO' . $oid . ' paid online · AED ' . number_format($paid, 2) . ' · wallet used AED ' . number_format($plan['wallet_used'], 2) . ' · ref ' . $ref . ' · settlement: ' . substr((string) $settle, 0, 160), json_encode(array('order_id' => $oid, 'bill_ids' => $ids)), $iid);
        if (strpos((string) $settle, '"status":true') === false) {
            $this->_alert_team('Retrieval paid — bills not marked Paid', $c, 'WO' . $oid . ', Stripe ' . $ref . ', AED ' . $paid . '. The settlement answered: ' . substr((string) $settle, 0, 200) . '. Please mark the bills ' . implode(',', $ids) . ' as Paid.');
        }
        $this->_json(array('status' => 'success', 'ref' => 'WO' . $oid, 'order_id' => $oid));
    }

    /** The existing live settlement on safestorage.in (marks bills Paid, writes the transactions and the invoice). */
    private function _call_due_settle($cid, $ids, $amount, $ref)
    {
        // shared with the public app's settlement; kept in config/dubai_back.php next to the Dubai key
        $secret = (string) $this->config->item('ae_pay_secret');
        if ($secret === '' && defined('AE_PAY_SECRET')) $secret = AE_PAY_SECRET;
        if ($secret === '') return '{"status":false,"reason":"ae_pay_secret_not_configured"}';
        $ch = curl_init('https://safestorage.in/customer/stripe_due_settle');
        curl_setopt_array($ch, array(
            CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 25, CURLOPT_CONNECTTIMEOUT => 6,
            CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
            CURLOPT_POSTFIELDS => json_encode(array('secret' => $secret, 'customerId' => $cid, 'paymentIds' => implode(',', $ids), 'amountAed' => $amount, 'paymentRef' => $ref)),
        ));
        $res = curl_exec($ch);
        curl_close($ch);
        return $res;
    }

    private function _alert_team($subject, $c, $text)
    {
        $this->_log($c->customer_id, 0, 'retrieval_alert', $subject . ' · ' . $text);
        try {
            $this->load->library('email');
            $this->email->initialize(array('protocol' => 'sendmail', 'mailpath' => '/usr/sbin/sendmail', 'charset' => 'utf-8', 'mailtype' => 'html'));
            $this->email->from('customers@safestorage.in', 'SafeStorage Dubai');
            $this->email->to('support@safestorage.ae');
            $this->email->subject('[ACTION NEEDED] ' . $subject . ' · ' . $c->customer_unique_id);
            $this->email->message('<p>' . htmlspecialchars($text) . '</p><p>Customer: ' . htmlspecialchars($c->customer_name) . ' (' . htmlspecialchars($c->customer_unique_id) . ')</p>');
            $this->email->send();
        } catch (\Throwable $e) {}
    }

    /** One open request at a time, and the day must be free (other customers' orders and live payment holds). */
    private function _assert_free_to_book($c, $in)
    {
        $open = $this->db->query(
            "SELECT order_id FROM ss_order WHERE customer_id = ? AND order_type IN ('full_retrieval','partial_retrieval')
                AND order_status NOT IN ('completed','cancelled') LIMIT 1", array($c->customer_id))->row();
        if ($open) $this->_json(array('status' => 'error', 'message' => 'You already have an open retrieval request (WO' . $open->order_id . '). Please wait for our team or call us.'), 409);
        $taken = $this->db->query("SELECT order_id FROM ss_order WHERE country_code = 'AE' AND order_type IN ('full_retrieval','partial_retrieval') AND order_status <> 'cancelled' AND order_schedule_date = ? LIMIT 1", array($in['date_ymd']))->row();
        if ($taken) $this->_json(array('status' => 'error', 'message' => 'That date has just been booked. Please choose another date.'), 409);
        foreach ($this->_live_holds() as $h) {
            if ((int) $h['customer_id'] !== (int) $c->customer_id && $h['date'] === $in['date_ymd']) $this->_json(array('status' => 'error', 'message' => 'Another customer is booking that date right now. Please choose another date.'), 409);
        }
    }

    // ---------------------------------------------------------------- helpers
    /** The signed-in customer, as the caller says it: must be an active Dubai customer with a login. */
    private function _customer()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        $c = $this->db->query(
            "SELECT c.* FROM ss_customer c JOIN ss_user u ON u.customer_id = c.customer_id
              WHERE c.customer_id = ? AND c.country_code = 'AE' AND c.is_customer = '1' AND c.status = '0'
                AND u.role_id = 6 AND u.status = '0' AND u.user_country = 'AE' LIMIT 1", array($cid))->row();
        if (!$c) $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        return $c;
    }

    private function _active_items($cid)
    {
        $rows = $this->db->query(
            "SELECT inventory_id, quotation_id, barcode, goods_name, goods_type, goods_quantity FROM ss_order_inventory
              WHERE customer_id = ? AND inventory_status = 'active' AND is_removed_item = '0' ORDER BY inventory_id", array($cid))->result();
        $out = array();
        foreach ($rows as $r) {
            $out[] = array('id' => (int) $r->inventory_id, 'quotation' => $r->quotation_id ? 'QT' . $r->quotation_id : '',
                'barcode' => (string) $r->barcode, 'name' => (string) $r->goods_name, 'type' => (string) $r->goods_type, 'qty' => (int) $r->goods_quantity);
        }
        return $out;
    }

    /** All input checks, shared by estimate and create. Returns the cleaned input. */
    private function _validated($c, $forCreate)
    {
        $type = (string) $this->input->post('type');
        if (!in_array($type, array('partial', 'full', 'intercity'), true)) $this->_err('Choose a retrieval type.');

        $active = $this->_active_items($c->customer_id);
        if (!$active) $this->_err('You have no stored items to retrieve.');
        $activeIds = array(); foreach ($active as $a) $activeIds[] = $a['id'];

        if ($type === 'partial') {
            $posted = $this->input->post('inventory_id');
            $posted = is_array($posted) ? array_values(array_unique(array_map('intval', $posted))) : array();
            $ids = array_values(array_intersect($posted, $activeIds));              // only the customer's own active items
            $max = (int) floor(count($activeIds) * self::MAX_PARTIAL);
            if ($max < 1) $this->_err('Partial retrieval needs at least 2 stored items. Please choose Full retrieval.');
            if (count($ids) < 1) $this->_err('Select the items you want back.');
            if (count($ids) > $max) $this->_err('You can select up to ' . $max . ' items for a partial retrieval.');
        } else {
            $ids = $activeIds;                                                       // everything that is still stored
        }

        $dateRaw = trim((string) $this->input->post('date'));
        $d = DateTime::createFromFormat('d/m/Y', $dateRaw);
        if (!$d || $d->format('d/m/Y') !== $dateRaw) $this->_err('Choose a valid date.');
        $d->setTime(0, 0, 0);
        $rules = $this->_date_rules($c);
        $ymd = $d->format('Y-m-d');
        if ($ymd < $rules['min_date']) $this->_err('Please choose a date from ' . date('d/m/Y', strtotime($rules['min_date'])) . ' onwards (' . self::MIN_NOTICE . ' days notice).');
        if ($ymd > $rules['max_date']) $this->_err('Please choose a date on or before ' . date('d/m/Y', strtotime($rules['max_date'])) . '.');
        if (in_array($ymd, $rules['booked_dates'], true)) $this->_err('That date is already booked. Please choose another date.');
        if (in_array((int) $d->format('j'), self::$BLOCKED_DAYS, true)) $this->_err('Retrieval is not available on the 1st, 2nd or from the 26th of the month. Please choose another date.');

        $lat = trim((string) $this->input->post('lat')); $lng = trim((string) $this->input->post('lng'));
        if ($type !== 'intercity' && (!is_numeric($lat) || !is_numeric($lng))) $this->_err('Please pick your delivery address from the suggestions.');
        $floor = (string) $this->input->post('floor');
        $okFloor = false; foreach ($this->db->query("SELECT floor_slug FROM ss_floor WHERE status = '0'")->result() as $f) if ($f->floor_slug === $floor) $okFloor = true;
        if (!$okFloor) $this->_err('Choose a floor.');
        $lift = strtolower((string) $this->input->post('lift'));
        if (!in_array($lift, array('yes', 'no'), true)) $this->_err('Tell us whether there is a lift.');

        $in = array('type' => $type, 'ids' => $ids, 'date' => $dateRaw, 'date_ymd' => $d->format('Y-m-d'),
                    'lat' => $lat, 'lng' => $lng, 'floor' => $floor, 'lift' => $lift);

        if ($forCreate) {
            // No slot is chosen by the customer: the team confirms the time with them.
            $slot = (string) $this->input->post('timeslot');
            $row = $slot !== '' ? $this->db->query("SELECT timeslot FROM ss_timeslot WHERE status = '0' AND timeslot_slug = ? LIMIT 1", array($slot))->row() : null;
            $addr = trim((string) $this->input->post('address'));
            if ($addr === '' || strlen($addr) > 400) $this->_err('Enter your delivery address.');
            $phone = trim((string) $this->input->post('phone'));
            if (!preg_match('/^[0-9+\s\-]{6,20}$/', $phone)) $this->_err('Enter a valid phone number.');
            $in['timeslot_name'] = $row ? $row->timeslot : 'To be confirmed by our team';
            $in['address'] = $addr;
            $in['phone'] = $phone;
            $in['note'] = substr(trim((string) $this->input->post('note')), 0, 500);
        }
        return $in;
    }

    /** Days already taken: only ONE retrieval can be booked per day (any Dubai customer). */
    private function _booked_dates($from, $to, $exceptCustomer = 0)
    {
        $rows = $this->db->query(
            "SELECT DISTINCT order_schedule_date AS d FROM ss_order
              WHERE country_code = 'AE' AND order_type IN ('full_retrieval','partial_retrieval')
                AND order_status <> 'cancelled' AND order_schedule_date BETWEEN ? AND ?", array($from, $to))->result();
        $out = array(); foreach ($rows as $r) $out[] = (string) $r->d;
        // a customer who is paying right now holds their date for 30 minutes
        foreach ($this->_live_holds() as $h) {
            if ((int) $h['customer_id'] !== (int) $exceptCustomer && $h['date'] >= $from && $h['date'] <= $to) $out[] = $h['date'];
        }
        return array_values(array_unique($out));
    }

    /** Pending (unpaid, unsettled) requests younger than 30 minutes: [customer_id, date]. */
    private function _live_holds()
    {
        $rows = $this->db->query(
            "SELECT i.log_id, i.customer_id, i.changes FROM ss_dubai_log i
              LEFT JOIN ss_dubai_log s ON s.action_type = 'retrieval_settled' AND s.lead_id = i.log_id
              WHERE i.action_type = 'retrieval_intent' AND i.created_at > (NOW() - INTERVAL 30 MINUTE) AND s.log_id IS NULL")->result();
        $out = array();
        foreach ($rows as $r) {
            $j = json_decode((string) $r->changes, true);
            if (is_array($j) && !empty($j['in']['date_ymd'])) $out[] = array('customer_id' => (int) $r->customer_id, 'date' => (string) $j['in']['date_ymd']);
        }
        return $out;
    }

    private function _log($cid, $uid, $action, $message, $changes = null, $ref = null)
    {
        try {
            $this->db->insert('ss_dubai_log', array(
                'customer_id' => $cid, 'user_id' => $uid, 'action_type' => $action, 'message' => $message,
                'changes' => $changes, 'lead_id' => $ref, 'ip_address' => $this->input->ip_address(), 'created_at' => date('Y-m-d H:i:s'),
            ));
            return (int) $this->db->insert_id();
        } catch (\Throwable $e) { return 0; }
    }

    /** The date window — the Indian dashboard's calendar rules (min notice, blocked billing days, last bill + 90 days). */
    private function _date_rules($c)
    {
        $tz = new DateTimeZone('Asia/Dubai');
        $min = new DateTime('today', $tz); $min->modify('+' . self::MIN_NOTICE . ' days');
        $last = $this->db->query("SELECT billing_date FROM ss_customer_payment WHERE customer_id = ? ORDER BY payment_id DESC LIMIT 1", array($c->customer_id))->row();
        if ($last && $last->billing_date && strpos((string) $last->billing_date, '0000') !== 0) {
            $max = date('Y-m-d', strtotime('+' . self::BILL_WINDOW . ' days', strtotime($last->billing_date)));
        } else {
            $m = new DateTime('today', $tz); $m->modify('+' . self::BILL_WINDOW . ' days'); $max = $m->format('Y-m-d');
        }
        return array('min_date' => $min->format('Y-m-d'), 'max_date' => $max, 'blocked_days' => self::$BLOCKED_DAYS,
                     'booked_dates' => $this->_booked_dates($min->format('Y-m-d'), $max, $c->customer_id));
    }

    /** Dubai transport price for a pallet count (the website's tiers). */
    private function _transport_price($pallets)
    {
        $pallets = (float) $pallets;
        if ($pallets <= 0) return array('base' => 0, 'surcharge' => 0, 'total' => 0, 'tier' => 'No items');
        $tiers = array(
            array(1,   'flat', 500,  'Up to 1 pallet'),
            array(3.5, 'flat', 900,  'Up to 3.5 pallets'),
            array(5.4, 'per',  235,  '3.6 to 5.4 pallets'),
            array(6,   'flat', 1308, 'Up to 6 pallets'),
        );
        foreach ($tiers as $t) {
            if ($pallets <= $t[0] + 1e-9) {
                $base = ($t[1] === 'flat') ? $t[2] : round($pallets * $t[2]);
                return array('base' => $base, 'surcharge' => self::SURCHARGE_AED, 'total' => $base + self::SURCHARGE_AED,
                             'tier' => ($t[1] === 'flat') ? $t[3] : ($pallets . ' pallets x AED ' . $t[2]));
            }
        }
        $base = round($pallets * self::OVERSIZE_PER_PALLET);
        return array('base' => $base, 'surcharge' => self::SURCHARGE_AED, 'total' => $base + self::SURCHARGE_AED, 'tier' => $pallets . ' pallets x AED ' . self::OVERSIZE_PER_PALLET);
    }

    private function _km($lat1, $lng1, $lat2, $lng2)
    {
        $r = 6371; $a = deg2rad($lat2 - $lat1); $b = deg2rad($lng2 - $lng1);
        $h = sin($a / 2) ** 2 + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($b / 2) ** 2;
        return 2 * $r * asin(sqrt($h));
    }

    /**
     * STORAGE side = the retrieval module's own calculation (what the Indian dashboard uses: storage till date,
     * unpaid dues, wallet, refund). TRANSPORT side = the Dubai website's pallet tiers. The final payable / refund
     * is then worked out with the SAME rule the module uses (get_retrieval_info), only with the Dubai transport.
     */
    private function _estimate($c, $in)
    {
        // pallets of exactly the items being retrieved: ceil(sum(points x qty) / 16)
        $pts = 0.0;
        if ($in['ids']) {
            $q = $this->db->query("SELECT goods_point, goods_quantity FROM ss_order_inventory WHERE customer_id = ? AND inventory_id IN (" . implode(',', array_map('intval', $in['ids'])) . ")", array($c->customer_id))->result();
            foreach ($q as $r) $pts += ((float) $r->goods_point) * max(1, (int) $r->goods_quantity);
        }
        $pallets = (int) ceil($pts / self::POINTS_PER_PALLET - 1e-9);

        // storage figures from the retrieval module (seeded like get_retrieval_estimate_api)
        $backup = $_POST;
        $_POST = array(
            'customer_id' => $c->customer_id, 'order_schedule_date' => $in['date'],
            'delivery_lat' => ($in['lat'] !== '' ? $in['lat'] : self::$ORIGINS[0][0]), 'delivery_lang' => ($in['lng'] !== '' ? $in['lng'] : self::$ORIGINS[0][1]),
            'floor' => $in['floor'], 'lift' => $in['lift'], 'inventory_id' => $in['ids'],
            'retrieval_type' => ($in['type'] === 'partial') ? 'partial_retrieval' : 'full_retrieval', 'warehouse_delivery' => '',
        );
        $d = Modules::run('retrieval/_api_retrieval_summary');
        $_POST = $backup;
        if (!is_array($d)) $this->_json(array('status' => 'error', 'message' => 'The charge could not be worked out right now. Please try again or call us.'), 502);
        $n = function ($k) use ($d) { return isset($d[$k]) ? round((float) $d[$k], 2) : 0.0; };

        // transport: Dubai tiers; outside 60 km (or intercity) the team quotes
        $km = null; $teamQuote = ($in['type'] === 'intercity');
        if (!$teamQuote && is_numeric($in['lat']) && is_numeric($in['lng'])) {
            $km = min($this->_km(self::$ORIGINS[0][0], self::$ORIGINS[0][1], (float) $in['lat'], (float) $in['lng']),
                      $this->_km(self::$ORIGINS[1][0], self::$ORIGINS[1][1], (float) $in['lat'], (float) $in['lng']));
            if ($km > self::SERVICE_RADIUS_KM + 1e-9) $teamQuote = true;
        }
        $tp = $teamQuote ? array('base' => 0, 'surcharge' => 0, 'total' => 0, 'tier' => 'Quoted by our team') : $this->_transport_price($pallets);
        $T = (float) $tp['total'];

        // same final-amount rule as the retrieval module, with the Dubai transport
        $payableDue = $n('payable_due'); $monthlyReturn = $n('total_monthly_return');
        $finalPay = 0.0; $finalRet = 0.0;
        if ($payableDue > $monthlyReturn) { $finalPay = $payableDue + $T; }
        elseif ($monthlyReturn > $T)      { $finalRet = $monthlyReturn - $T; }
        else                              { $finalPay = $T - $monthlyReturn; }

        $plan = $this->_plan($c, $d, $teamQuote, (float) $tp['total'], $n('storage_charges_till_date'), $n('wallet_amount'), isset($d['is_return_to_cust']) ? (string) $d['is_return_to_cust'] : '');
        return array(
            'type'               => $in['type'],
            'items'              => count($in['ids']),
            'plan'               => $plan,
            'team_quote'         => $teamQuote,
            'out_of_area'        => ($km !== null && $km > self::SERVICE_RADIUS_KM),
            'distance_km'        => $km === null ? null : round($km, 1),
            'points'             => round($pts, 1),
            'pallets'            => $pallets,
            'tier'               => $tp['tier'],
            'transport_base'     => (float) $tp['base'],
            'transport_surcharge'=> (float) $tp['surcharge'],
            'transport_subtotal' => (float) $tp['base'],
            'transport_tax'      => 0.0,
            'transport_total'    => $T,
            // storage side (same figures as the Indian dashboard)
            'monthly_amount'     => $n('monthly_amount'),
            'storage_till_date'  => $n('storage_charges_till_date'),
            'storage_from'       => isset($d['from_date']) ? (string) $d['from_date'] : '',
            'storage_to'         => isset($d['to_date']) ? (string) $d['to_date'] : '',
            'last_bill_date'     => isset($d['last_bill_date']) ? (string) $d['last_bill_date'] : '',
            'next_bill_date'     => isset($d['next_bill_date']) ? (string) $d['next_bill_date'] : '',
            'unpaid_dues'        => $n('total_due_amt'),
            'wallet'             => $n('wallet_amount'),
            'is_return_to_cust'  => isset($d['is_return_to_cust']) ? (string) $d['is_return_to_cust'] : '',
            'storage_due'        => $payableDue,
            'storage_return'     => $monthlyReturn,
            'final_payable_amt'  => round($finalPay, 2),
            'final_return_amt'   => round($finalRet, 2),
        );
    }

    private function _err($msg) { $this->_json(array('status' => 'error', 'message' => $msg), 422); }

    private function _json($data, $code = 200)
    {
        http_response_code($code);
        echo json_encode($data);
        die;
    }
}
