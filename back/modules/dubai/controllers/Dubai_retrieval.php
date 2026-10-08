<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * safestorage.ae customer RETRIEVAL requests (PHP side) — the Dubai copy of the back-office
 * retrieval flow (customer/retrieval_order_form, add_retrieval_data, add_partial_retrieval_data).
 *
 *   POST dubai/dubai_retrieval/options    customer_id
 *   POST dubai/dubai_retrieval/estimate   customer_id, type, [inventory_id[]], date, lat, lng, floor, lift
 *   POST dubai/dubai_retrieval/create     + timeslot, address, phone, [note]
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

        // one open retrieval request at a time
        $open = $this->db->query(
            "SELECT order_id FROM ss_order WHERE customer_id = ? AND order_type IN ('full_retrieval','partial_retrieval')
                AND order_status NOT IN ('completed','cancelled') LIMIT 1", array($c->customer_id))->row();
        if ($open) $this->_json(array('status' => 'error', 'message' => 'You already have an open retrieval request (WO' . $open->order_id . '). Please wait for our team or call us.'), 409);

        $taken = $this->db->query("SELECT order_id FROM ss_order WHERE country_code = 'AE' AND order_type IN ('full_retrieval','partial_retrieval') AND order_status <> 'cancelled' AND order_schedule_date = ? LIMIT 1", array($in['date_ymd']))->row();
        if ($taken) $this->_json(array('status' => 'error', 'message' => 'That date has just been booked. Please choose another date.'), 409);

        $est = $this->_estimate($c, $in);

        $mgr = $this->db->query("SELECT user_id FROM ss_user WHERE role_id = 2 AND user_city = ? AND user_country = 'AE' AND status = '0' LIMIT 1", array((string) $c->customer_local_city))->row();
        $com = $this->db->query("SELECT commission_percent FROM ss_transport_commission WHERE status = '0' ORDER BY commission_id DESC LIMIT 1")->row();
        $uid = $this->db->query("SELECT user_id FROM ss_user WHERE customer_id = ? AND role_id = 6 LIMIT 1", array($c->customer_id))->row();
        $actor = $uid ? (int) $uid->user_id : 0;

        $order = array(
            'country_code'       => 'AE',
            'customer_id'        => $c->customer_id,
            'is_confirmed'       => 'Yes',
            'order_status'       => 'request_raise',          // waits for the team; not billed here
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
        if ($oid <= 0) $this->_json(array('status' => 'error', 'message' => 'Could not create the request. Please try again.'), 500);

        foreach ($in['ids'] as $iid) {
            $this->db->insert('ss_partial_retrieval_item', array('customer_id' => $c->customer_id, 'order_id' => $oid, 'inventory_id' => $iid));
        }

        // activity log + transport-app event + team e-mail: best effort, never fail a saved request
        $label = array('partial' => 'Partial retrieval', 'full' => 'Full retrieval', 'intercity' => 'Intercity full retrieval');
        try {
            $this->db->insert('ss_dubai_log', array(
                'customer_id' => $c->customer_id, 'user_id' => $actor, 'action_type' => 'retrieval_requested',
                'message' => $label[$in['type']] . ' requested by the customer for ' . $in['date_ymd'] . ' · ' . $in['timeslot_name'] . ' · ' . count($in['ids']) . ' item(s) · WO' . $oid,
                'ip_address' => $this->input->ip_address(),
            ));
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
                'Items: ' . count($in['ids']) . '<br>Estimated transport: AED ' . number_format($est['transport_total'], 2) . ' (to be confirmed)</p>' .
                ($in['note'] !== '' ? '<p>Note: ' . htmlspecialchars($in['note']) . '</p>' : ''));
            $this->email->send();
        } catch (\Throwable $e) {}

        $this->_json(array('status' => 'success', 'ref' => 'WO' . $oid, 'order_id' => $oid));
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
    private function _booked_dates($from, $to)
    {
        $rows = $this->db->query(
            "SELECT DISTINCT order_schedule_date AS d FROM ss_order
              WHERE country_code = 'AE' AND order_type IN ('full_retrieval','partial_retrieval')
                AND order_status <> 'cancelled' AND order_schedule_date BETWEEN ? AND ?", array($from, $to))->result();
        $out = array(); foreach ($rows as $r) $out[] = (string) $r->d;
        return $out;
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
                     'booked_dates' => $this->_booked_dates($min->format('Y-m-d'), $max));
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

        return array(
            'type'               => $in['type'],
            'items'              => count($in['ids']),
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
