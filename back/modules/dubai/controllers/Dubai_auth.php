<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * safestorage.ae customer sign-in (PHP side) — the Dubai copy of Auth::login.
 *
 *   POST dubai/dubai_auth/login     username (email), password   [X-Forwarded-For = visitor IP]
 *   POST dubai/dubai_auth/account   customer_id
 *   POST dubai/dubai_auth/orders    customer_id   (every order of that customer)
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

        $orders = $this->db->query(
            "SELECT order_type, order_sub_type, order_schedule_date, order_status
               FROM ss_order WHERE customer_id = ?
              ORDER BY order_id DESC LIMIT 5", array($cid))->result();

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
            'orders' => array_map(function ($o) {
                return array('type' => (string) $o->order_type, 'sub_type' => (string) $o->order_sub_type,
                             'date' => (string) $o->order_schedule_date, 'status' => (string) $o->order_status);
            }, (array) $orders),
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

        $rows = $this->db->query(
            "SELECT * FROM ss_order WHERE customer_id = ? ORDER BY order_id DESC LIMIT 200", array($cid))->result();

        $out = array();
        foreach ($rows as $o) {
            $created = isset($o->order_created_at) ? $o->order_created_at : (isset($o->created_at) ? $o->created_at : '');
            $out[] = array(
                'ref'       => 'DXB-O-' . (int) $o->order_id,
                'type'      => (string) $o->order_type,
                'sub_type'  => (string) (isset($o->order_sub_type) ? $o->order_sub_type : ''),
                'status'    => (string) $o->order_status,
                'date'      => (string) (isset($o->order_schedule_date) ? $o->order_schedule_date : ''),
                'timeslot'  => (string) (isset($o->order_timeslot) ? $o->order_timeslot : ''),
                'address'   => (string) (isset($o->order_address) ? $o->order_address : ''),
                'note'      => (string) (isset($o->order_note) ? $o->order_note : ''),
                'created'   => (string) $created,
            );
        }
        $this->_json(array('status' => 'success', 'orders' => $out));
    }

    // ---------------------------------------------------------------- helpers
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
