<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * safestorage.ae customer sign-in (PHP side) — the Dubai copy of Auth::login.
 *
 *   POST dubai/dubai_auth/login     username (email), password   [X-Forwarded-For = visitor IP]
 *   POST dubai/dubai_auth/account   customer_id
 *   POST dubai/dubai_auth/orders    customer_id   (every order of that customer)
 *   POST dubai/dubai_auth/payments  customer_id   (every bill + every payment received)
 *   POST dubai/dubai_auth/details   customer_id   (profile, storage summary, timeline, stored items)
 *
 * Same rules as auth/login for a customer: ss_user with user_email, base64(password),
 * status '0', role_id 6 — plus ONE extra rule for this site: ss_user.user_country
 * must be 'AE', so an Indian customer cannot sign in on safestorage.ae.
 *
 * Same bookkeeping as auth/login: failed attempts go to ss_failed_login, every
 * attempt to ss_login_logs, and a success clears that IP's failed attempts.
 * Differences (it answers JSON to the Next.js server instead of redirecting):
 * no PHP session, no captcha (a lock-out replaces it) and no geo-IP lookup.
 *
 * Called ONLY by the Next.js server; every request must carry
 * X-Dubai-Key = config/dubai_back.php `dubai_back_key`. Creates / changes no password.
 */
class Dubai_auth extends MY_Controller {

    const MAX_FAILS   = 8;   // same limit as auth/login
    const WINDOW_MINS = 15;

    public function __construct()
    {
        // Open endpoint (no back-office session): parent constructor skipped,
        // the same convention as the other key-guarded modules.
        header('Content-Type: application/json');
        header('Cache-Control: no-store');
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            exit(0);
        }
        $this->load->model('common/common_model');
        $this->_require_key();
    }

    private function _require_key()
    {
        $this->config->load('dubai_back', FALSE, TRUE);
        $expected = (string) $this->config->item('dubai_back_key');
        $given    = (string) (isset($_SERVER['HTTP_X_DUBAI_KEY']) ? $_SERVER['HTTP_X_DUBAI_KEY'] : '');
        if (strlen($expected) < 32) {
            $this->_json(array('status' => 'error', 'message' => 'Not configured.'), 503);
        }
        if ($given === '' || !hash_equals($expected, $given)) {
            $this->_json(array('status' => 'error', 'message' => 'Forbidden.'), 403);
        }
    }

    // ------------------------------------------------------------------ login
    public function login()
    {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->_json(array('status' => 'error', 'message' => 'POST required.'), 405);
        }

        $username = trim((string) $this->input->post('username'));
        $password = trim((string) $this->input->post('password'));
        $ip       = $this->_visitor_ip();

        if ($username === '' || $password === '' || strlen($username) > 200 || strlen($password) > 200) {
            $this->_json(array('status' => 'error', 'message' => 'Enter Email Id & password'), 400);
        }

        // block after too many failures from this IP or for this email
        $ipKey    = 'dubai:' . $ip;
        $emailKey = 'dubai-email:' . sha1(strtolower($username));
        if ($this->_fails($ipKey) >= self::MAX_FAILS || $this->_fails($emailKey) >= self::MAX_FAILS) {
            $this->_json(array('status' => 'error', 'message' => 'Too many attempts. Please try again in a few minutes.'), 429);
        }

        // Auth::login's lookup (role 6 customer, active) + the Dubai-only rule.
        $user = $this->db->query(
            "SELECT u.user_id, u.user_email, u.role_id, u.customer_id,
                    c.customer_name, c.customer_email, c.customer_unique_id
               FROM ss_user u
               JOIN ss_customer c ON c.customer_id = u.customer_id
              WHERE u.user_email = ? AND u.user_password = ?
                AND u.status = '0' AND u.role_id = 6
                AND u.user_country = 'AE'
              LIMIT 1", array($username, base64_encode($password)))->row();

        if (empty($user)) {
            $this->db->insert('ss_failed_login', array('ip_address' => $ipKey));
            $this->db->insert('ss_failed_login', array('ip_address' => $emailKey));
            $this->_login_log($username, $ip, 'failed');
            // one message for "no such customer", "wrong password" and "not a Dubai user"
            $this->_json(array('status' => 'error', 'message' => 'Please enter correct login details'), 401);
        }

        $this->db->delete('ss_failed_login', array('ip_address' => $ipKey));
        $this->db->delete('ss_failed_login', array('ip_address' => $emailKey));
        $this->_login_log($username, $ip, 'loggedin');

        $this->_json(array('status' => 'success', 'customer' => array(
            'customer_id'        => (int) $user->customer_id,
            'customer_unique_id' => (string) $user->customer_unique_id,
            'name'               => (string) $user->customer_name,
            'email'              => (string) $user->customer_email,
        )));
    }

    // ---------------------------------------------------------------- account
    public function account()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) {
            $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        }

        // must still be an active Dubai user (not just any customer id)
        $c = $this->db->query(
            "SELECT c.customer_id, c.customer_unique_id, c.customer_name, c.customer_email,
                    c.customer_contact1, c.customer_local_city
               FROM ss_customer c
               JOIN ss_user u ON u.customer_id = c.customer_id
              WHERE c.customer_id = ? AND u.role_id = 6 AND u.status = '0' AND u.user_country = 'AE'
              LIMIT 1", array($cid))->row();
        if (!$c) {
            $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        }

        // Latest orders, shaped like the back-office Work Orders table.
        $orders = $this->_order_rows($cid, 5);

        // payable_amount is varchar, so cast in PHP
        $dues = $this->db->query(
            "SELECT billing_date, offer_note, payable_amount
               FROM ss_customer_payment
              WHERE customer_id = ? AND payment_status = 'Unpaid'
              ORDER BY billing_date DESC LIMIT 20", array($cid))->result();
        $dueTotal = 0.0;
        foreach ($dues as $d) {
            $dueTotal += (float) str_replace(',', '', (string) $d->payable_amount);
        }

        $this->_json(array('status' => 'success',
            'profile' => array(
                'customer_unique_id' => (string) $c->customer_unique_id,
                'name'  => (string) $c->customer_name,
                'email' => (string) $c->customer_email,
                'phone' => (string) $c->customer_contact1,
                'city'  => (string) $c->customer_local_city,
            ),
            'orders' => $orders,
            'dues' => array(
                'count' => count($dues),
                'total' => round($dueTotal, 2),
                'items' => array_map(function ($d) {
                    return array('billing_date' => (string) $d->billing_date, 'note' => (string) $d->offer_note,
                                 'amount' => round((float) str_replace(',', '', (string) $d->payable_amount), 2));
                }, (array) $dues),
            ),
        ));
    }

    // ----------------------------------------------------------------- orders
    /** All orders of one Dubai customer (newest first) for the account Orders page. */
    public function orders()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) {
            $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        }

        // must be an active Dubai user, same guard as account()
        $ok = $this->db->query(
            "SELECT 1 FROM ss_customer c JOIN ss_user u ON u.customer_id = c.customer_id
              WHERE c.customer_id = ? AND u.role_id = 6 AND u.status = '0' AND u.user_country = 'AE' LIMIT 1", array($cid))->num_rows();
        if (!$ok) {
            $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        }

        $out = $this->_order_rows($cid, 200);
        $this->_json(array('status' => 'success', 'orders' => $out));
    }

    // ---------------------------------------------------------------- helpers
    // ---------------------------------------------------------------- details
    /** Profile, storage summary, timeline and stored items for the account "My details" page. */
    public function details()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) {
            $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        }
        $c = $this->db->query(
            "SELECT c.customer_id, c.customer_unique_id, c.customer_name, c.customer_email, c.customer_contact1, c.customer_contact2,
                    c.customer_local_city, c.permanent_address, c.pickup_address, c.status, c.is_customer,
                    c.customer_created_at, c.registration_date, c.storage_date, c.storage_month, c.next_bill_date, c.billing_date, c.payment_type
               FROM ss_customer c JOIN ss_user u ON u.customer_id = c.customer_id
              WHERE c.customer_id = ? AND u.role_id = 6 AND u.status = '0' AND u.user_country = 'AE' LIMIT 1", array($cid))->row();
        if (!$c) {
            $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        }

        // stored items (the "Inventory" tab of the back office: ss_order_inventory)
        $inv = $this->db->query(
            "SELECT quotation_id, barcode, goods_name, goods_size, goods_color, goods_type, goods_quantity, start_date, end_date, inventory_status, is_removed_item
               FROM ss_order_inventory WHERE customer_id = ? ORDER BY inventory_id DESC LIMIT 300", array($cid))->result();
        $items = array(); $stored = 0; $firstIn = '';
        foreach ($inv as $i) {
            $active = ($i->is_removed_item == '0' && $i->inventory_status == 'active');
            if ($active) {
                $stored += (int) $i->goods_quantity;
                if ($i->start_date && ($firstIn === '' || $i->start_date < $firstIn)) $firstIn = $i->start_date;
            }
            $extra = trim(($i->goods_size ? $i->goods_size . ', ' : '') . $i->goods_color);
            $items[] = array(
                'quotation' => $i->quotation_id ? 'QT' . $i->quotation_id : '',
                'barcode'   => (string) $i->barcode,
                'name'      => (string) $i->goods_name . ($extra !== '' ? ' (' . $extra . ')' : ''),
                'type'      => (string) $i->goods_type,
                'qty'       => (int) $i->goods_quantity,
                'start'     => (string) $i->start_date,
                'end'       => (string) $i->end_date,
                'status'    => $active ? 'Active' : ucfirst((string) ($i->is_removed_item == '1' ? 'removed' : $i->inventory_status)),
            );
        }

        // timeline of the first pickup order
        $o = $this->db->query("SELECT * FROM ss_order WHERE customer_id = ? AND order_type = 'pickup' ORDER BY order_id ASC LIMIT 1", array($cid))->row();
        $booked = $o ? (string) (isset($o->order_created_at) ? $o->order_created_at : (isset($o->created_at) ? $o->created_at : '')) : '';
        $timeline = array(
            'booked'    => $booked,
            'pickup'    => $o ? (string) $o->order_schedule_date : '',
            'pickup_done' => ($o && $o->order_status == 'completed'),
            'checked_in' => $firstIn,
            'in_storage' => $stored > 0,
        );

        $summary = $this->_account_summary($cid);
        $this->_json(array('status' => 'success',
            'profile' => array(
                'id'      => (string) $c->customer_unique_id,
                'name'    => (string) $c->customer_name,
                'email'   => (string) $c->customer_email,
                'phone'   => (string) $c->customer_contact1,
                'phone2'  => (string) $c->customer_contact2,
                'city'    => (string) $c->customer_local_city,
                'address' => (string) ($c->permanent_address ? $c->permanent_address : $c->pickup_address),
                'pickup_address' => (string) $c->pickup_address,
                'active'  => ($c->status == '0'),
                'since'   => (string) ($c->customer_created_at ? $c->customer_created_at : $c->registration_date),
            ),
            'storage' => array(
                'items'        => $stored,
                'item_rows'    => count($items),
                'monthly'      => $summary['all']['total_monthly'],
                'storage_date' => (string) $c->storage_date,
                'months'       => (string) $c->storage_month,
                'next_bill'    => (string) ($c->next_bill_date ? $c->next_bill_date : $c->billing_date),
                'payment_type' => (string) $c->payment_type,
            ),
            'timeline' => $timeline,
            'items'    => $items,
        ));
    }

    // --------------------------------------------------------------- payments
    /** Bills and payments of one Dubai customer for the account Payments page. */
    public function payments()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) {
            $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        }
        $ok = $this->db->query(
            "SELECT 1 FROM ss_customer c JOIN ss_user u ON u.customer_id = c.customer_id
              WHERE c.customer_id = ? AND u.role_id = 6 AND u.status = '0' AND u.user_country = 'AE' LIMIT 1", array($cid))->num_rows();
        if (!$ok) {
            $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        }

        $num = function ($v) { return round((float) str_replace(',', '', (string) $v), 2); };

        // every amount column in ss_customer_payment is varchar, so cast in PHP
        $rows = $this->db->query(
            "SELECT payment_id, payment_unique_id, sub_total_amt, tax, payable_amount, total_amount, late_charges, payment_status,
                    billing_date, bill_genrated_date, charges_type, offer_note, quotation_id, order_id
               FROM ss_customer_payment WHERE customer_id = ? ORDER BY payment_id DESC LIMIT 300", array($cid))->result();
        $bills = array();
        $unpaid = 0.0; $paid = 0.0; $nUnpaid = 0;
        foreach ($rows as $b) {
            $amt = $num($b->payable_amount);
            $status = ($b->payment_status === null || $b->payment_status === '') ? 'Unknown' : (string) $b->payment_status;
            if ($status === 'Unpaid') { $unpaid += $amt; $nUnpaid++; }
            if ($status === 'Paid')   { $paid += $amt; }
            $bills[] = array(
                'payment_id'  => (int) $b->payment_id,
                'id'          => !empty($b->payment_unique_id) ? (string) $b->payment_unique_id : 'INV' . $b->payment_id,
                'description' => (string) ($b->offer_note === null ? '' : $b->offer_note),
                'kind'        => (string) $b->charges_type,
                'date'        => (string) ($b->billing_date ? $b->billing_date : $b->bill_genrated_date),
                'amount'      => $amt,
                'charges'     => $num($b->sub_total_amt),
                'tax'         => (string) $b->tax,
                'total'       => $num($b->total_amount),
                'late'        => $num($b->late_charges),
                'status'      => $status,
                'quotation'   => !empty($b->quotation_id) ? 'QT' . $b->quotation_id : '',
                'order'       => !empty($b->order_id) ? 'WO' . $b->order_id : '',
            );
        }

        $tx = $this->db->query(
            "SELECT cust_transaction_id, paid_amount, transaction_type, payment_type, transaction_order_id, transaction_note,
                    transaction_payment_date, transaction_created_at
               FROM ss_customer_transaction WHERE customer_id = ? ORDER BY cust_transaction_id DESC LIMIT 300", array($cid))->result();
        $payments = array();
        foreach ($tx as $t) {
            $payments[] = array(
                'ref'    => (string) $t->transaction_order_id,
                'date'   => (string) ($t->transaction_payment_date ? $t->transaction_payment_date : $t->transaction_created_at),
                'amount' => $num($t->paid_amount),
                'type'   => (string) $t->transaction_type,
                'method' => (string) $t->payment_type,
                'note'   => (string) $t->transaction_note,
            );
        }

        $this->_json(array('status' => 'success',
            'totals' => array('unpaid' => round($unpaid, 2), 'unpaid_count' => $nUnpaid, 'paid' => round($paid, 2)),
            'summary' => $this->_account_summary($cid),
            'wallet'  => $this->_wallet($cid),
            'bills' => $bills, 'payments' => $payments));
    }

    /** Wallet balance (back-office "Credit Wallet Amount" figure: ss_customer_wallet.wallet_amount). */
    private function _wallet($cid)
    {
        $w = $this->db->query("SELECT wallet_amount FROM ss_customer_wallet WHERE customer_id = ? LIMIT 1", array($cid))->row();
        return $w ? round((float) $w->wallet_amount, 2) : 0.0;
    }

    /**
     * "Account Summary" of the back-office customer page (customer/views/payment_section.php),
     * for a Dubai customer (AE: 5% tax, stored price already includes VAT): one block per active
     * quotation plus the "All" totals. Same arithmetic as the view, read-only.
     */
    private function _account_summary($cid)
    {
        $taxRate = 5;
        $quotes = $this->db->query(
            "SELECT quotation_id, total_storage_charges, extra_item_storage_charges, item_reduced_charges,
                    extra_item_transport_charges_gst, extra_item_transport_charges,
                    extra_item_stack_charges_gst, extra_item_stack_charges, storage_coupen, storage_multi_factor
               FROM ss_customer_quotation
              WHERE customer_id = ? AND is_available = 'no' AND is_full_retrieved = '0'
              ORDER BY quotation_id", array($cid))->result();

        $ins = $this->db->query("SELECT is_extra_insurar_accepted, extra_insurance_subtotal FROM ss_inventory_insuration_amount WHERE customer_id = ? LIMIT 1", array($cid))->row();
        $extraIns = ($ins && $ins->is_extra_insurar_accepted == 'Yes') ? (float) $ins->extra_insurance_subtotal : 0;

        $list = array();
        $sum = array('storage' => 0.0, 'extra_storage' => 0.0, 'revised' => 0.0, 'total_monthly' => 0.0);
        foreach ($quotes as $q) {
            $o = $this->db->query("SELECT order_status FROM ss_order WHERE customer_id = ? AND quotation_id = ? ORDER BY order_id DESC LIMIT 1", array($cid, $q->quotation_id))->row();
            if ($o && $o->order_status == 'cancelled') continue;

            $storage = (float) $q->total_storage_charges;
            if (!empty($q->storage_multi_factor)) $storage = floatval($q->storage_multi_factor) * $storage;

            $coupAmt = 0; $coupText = '';
            if (!empty($q->storage_coupen)) {
                $c = explode('-', $q->storage_coupen);
                if (count($c) >= 3) {
                    if ($c[1] == 'flat') { $coupAmt = (float) $c[2]; $coupText = 'Flat ' . $c[2] . ' OFF'; }
                    else { $coupAmt = ((float) $c[2] / 100) * $storage; $coupText = $c[2] . '% OFF'; }
                }
            }
            $removed = (float) $q->item_reduced_charges;
            $revised = ((int) $storage + (int) $q->extra_item_storage_charges + (int) $extraIns) - ((int) $q->item_reduced_charges + 0 + (int) $coupAmt);
            $total   = round((float) $revised);            // VAT is already inside the stored price

            $trp   = ((float) $q->extra_item_transport_charges_gst > 0) ? (float) $q->extra_item_transport_charges_gst : (float) $q->extra_item_transport_charges;
            $stack = ((float) $q->extra_item_stack_charges_gst > 0) ? (float) $q->extra_item_stack_charges_gst : (float) $q->extra_item_stack_charges;

            $list[] = array(
                'id'               => 'QT' . sprintf('%03d', $q->quotation_id),
                'storage'          => round($storage, 2),
                'extra_storage'    => round((float) $q->extra_item_storage_charges, 2),
                'removed'          => round($removed > 0 ? $removed : 0, 2),
                'extra_insurance'  => round($extraIns, 2),
                'coupon'           => $coupText,
                'revised'          => round((float) $revised, 2),
                'tax_rate'         => $taxRate,
                'total_monthly'    => round($total, 2),
                'extra_transport'  => round($trp, 2),
                'extra_stack'      => round($stack, 2),
            );
            $sum['storage']       += $storage;
            $sum['extra_storage'] += (float) $q->extra_item_storage_charges;
            $sum['revised']       += (float) $revised;
            $sum['total_monthly'] += $total;
        }

        // The view zeroes the combined monthly total until the first pickup order is completed.
        $first = $this->db->query("SELECT order_status FROM ss_order WHERE customer_id = ? AND order_type = 'pickup' ORDER BY order_id ASC LIMIT 1", array($cid))->row();
        if (!($first && $first->order_status == 'completed')) $sum['total_monthly'] = 0.0;

        return array(
            'quotations' => $list,
            'all' => array(
                'storage' => round($sum['storage'], 2), 'extra_storage' => round($sum['extra_storage'], 2),
                'revised' => round($sum['revised'], 2), 'tax_rate' => $taxRate, 'total_monthly' => round($sum['total_monthly'], 2),
            ),
        );
    }

    /**
     * Orders of one customer, shaped like the back-office "Work Orders" table
     * (customer/get_customer_work_order): WO<order_id>, manager, supervisor, the
     * "Pickup(safestorage transport)" type text, pickup date and the status label.
     */
    private function _order_rows($cid, $limit)
    {
        $labels = array();
        foreach ($this->db->query("SELECT order_status_slug, order_status FROM ss_order_status")->result() as $r) {
            $labels[$r->order_status_slug] = $r->order_status;
        }
        $rows = $this->db->query(
            "SELECT o.*, m.user_fname AS m_fname, m.user_lname AS m_lname, s.user_fname AS s_fname, s.user_lname AS s_lname
               FROM ss_order o
               LEFT JOIN ss_user m ON m.user_id = o.manager_id
               LEFT JOIN ss_user s ON s.user_id = o.supervisor_id
              WHERE o.customer_id = ? AND o.order_type != 'intercity_retrieval'
              ORDER BY o.order_id DESC LIMIT " . (int) $limit, array($cid))->result();

        $out = array();
        foreach ($rows as $o) {
            $sub = (string) (isset($o->order_sub_type) ? $o->order_sub_type : '');
            if ($o->order_type === 'pickup') {
                $typeText = 'Pickup(' . ($sub === 'pickup' ? 'safestorage transport' : str_replace('_', ' ', $sub)) . ')';
            } else {
                $inter = (!empty($o->is_intercity) && $o->is_intercity == '1') ? ' Intercity' : '';
                $typeText = ucfirst(str_replace('_', ' ', (string) $o->order_type)) . '(' . str_replace('_', ' ', $sub) . $inter . ')';
            }
            $created = isset($o->order_created_at) ? $o->order_created_at : (isset($o->created_at) ? $o->created_at : '');
            $out[] = array(
                'ref'          => 'WO' . $o->order_id,
                'quotation'    => !empty($o->quotation_id) ? 'QT' . $o->quotation_id : '',
                'manager'      => trim($o->m_fname . ' ' . $o->m_lname),
                'supervisor'   => trim($o->s_fname . ' ' . $o->s_lname),
                'type'         => (string) $o->order_type,
                'sub_type'     => $sub,
                'type_text'    => $typeText,
                'status'       => (string) $o->order_status,
                'status_label' => isset($labels[$o->order_status]) ? (string) $labels[$o->order_status] : (string) $o->order_status,
                'date'         => (string) (isset($o->order_schedule_date) ? $o->order_schedule_date : ''),
                'timeslot'     => (string) (isset($o->order_timeslot) ? $o->order_timeslot : ''),
                'address'      => (string) (isset($o->order_address) ? $o->order_address : ''),
                'note'         => (string) (isset($o->order_note) ? $o->order_note : ''),
                'created'      => (string) $created,
            );
        }
        return $out;
    }

    /** Visitor IP forwarded by the Next server (trusted only because the key matched). */
    private function _visitor_ip()
    {
        $f = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0]) : '';
        return filter_var($f, FILTER_VALIDATE_IP) ? $f : $this->input->ip_address();
    }

    private function _fails($key)
    {
        return (int) $this->db->query(
            "SELECT COUNT(*) AS n FROM ss_failed_login
              WHERE ip_address = ? AND `date` > (NOW() - INTERVAL " . (int) self::WINDOW_MINS . " MINUTE)",
            array($key))->row()->n;
    }

    /** ss_login_logs row like auth/login writes (geo columns left empty). Never breaks the login. */
    private function _login_log($username, $ip, $status)
    {
        $dbg = $this->db->db_debug;
        $this->db->db_debug = FALSE;
        $this->db->insert('ss_login_logs', array('user_name' => $username, 'ipaddress' => $ip, 'status' => $status));
        $this->db->db_debug = $dbg;
    }

    private function _json($data, $code = 200)
    {
        http_response_code($code);
        echo json_encode($data);
        die;
    }
}
