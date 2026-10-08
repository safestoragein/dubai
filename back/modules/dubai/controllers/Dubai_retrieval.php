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
    const MAX_DAYS     = 60;        // booking window

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
            'transport_charges'  => $est['transport_subtotal'],
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
        $today = new DateTime('today', new DateTimeZone('Asia/Dubai'));
        $today->setTime(0, 0, 0);
        $days = (int) $today->diff($d)->format('%r%a');
        if ($days < 1) $this->_err('Choose a date from tomorrow onwards.');
        if ($days > self::MAX_DAYS) $this->_err('Choose a date within the next ' . self::MAX_DAYS . ' days.');

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
            $slot = (string) $this->input->post('timeslot');
            $row = $this->db->query("SELECT timeslot FROM ss_timeslot WHERE status = '0' AND timeslot_slug = ? LIMIT 1", array($slot))->row();
            if (!$row) $this->_err('Choose a time slot.');
            $addr = trim((string) $this->input->post('address'));
            if ($addr === '' || strlen($addr) > 400) $this->_err('Enter your delivery address.');
            $phone = trim((string) $this->input->post('phone'));
            if (!preg_match('/^[0-9+\s\-]{6,20}$/', $phone)) $this->_err('Enter a valid phone number.');
            $in['timeslot_name'] = $row->timeslot;
            $in['address'] = $addr;
            $in['phone'] = $phone;
            $in['note'] = substr(trim((string) $this->input->post('note')), 0, 500);
        }
        return $in;
    }

    /** Same pipeline as get_retrieval_info, run through the retrieval module and seeded like get_retrieval_estimate_api. */
    private function _estimate($c, $in)
    {
        $d = null;
        if ($in['type'] !== 'intercity') {
            $backup = $_POST;
            $_POST = array(
                'customer_id'         => $c->customer_id,
                'order_schedule_date' => $in['date'],
                'delivery_lat'        => $in['lat'],
                'delivery_lang'       => $in['lng'],
                'floor'               => $in['floor'],
                'lift'                => $in['lift'],
                'inventory_id'        => $in['ids'],
                'retrieval_type'      => ($in['type'] === 'partial') ? 'partial_retrieval' : 'full_retrieval',
                'warehouse_delivery'  => '',
            );
            $d = Modules::run('retrieval/_api_retrieval_summary');
            $_POST = $backup;
            if (!is_array($d)) $this->_json(array('status' => 'error', 'message' => 'The charge could not be worked out right now. Please try again or call us.'), 502);
        }
        $n = function ($k) use ($d) { return ($d && isset($d[$k])) ? round((float) $d[$k], 2) : 0.0; };
        return array(
            'type'                => $in['type'],
            'items'               => count($in['ids']),
            'team_quote'          => ($in['type'] === 'intercity'),   // intercity price is quoted by the team
            'pallets'             => $n('input_pallet'),
            'transport_cost'      => $n('total_transport_cost'),
            'labour_cost'         => $n('total_labor_cost'),
            'lift_cost'           => $n('total_lift_cost'),
            'stacking_barcode'    => $n('stacking_barcode_charges'),
            'urgent_date_surcharge' => $n('urgent_date_surcharge'),
            'transport_subtotal'  => $n('sub_total_transport') ?: $n('only_transport_charges'),
            'transport_tax'       => $n('transport_tax_amt'),
            'transport_total'     => $n('total_transport_charges_with_tax') ?: $n('total_transport_charges'),
            'storage_due'         => $n('payable_due'),
            'wallet'              => $n('wallet_amount'),
            'final_payable_amt'   => $n('final_payable_amt'),
            'final_return_amt'    => $n('final_return_amt'),
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
