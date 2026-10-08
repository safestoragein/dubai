<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * safestorage.ae customer login + account summary (PHP side).
 *
 * Lives in the Dubai repo (back/) and is COPIED to the PHP server as
 *   application/modules/dubai_customer/controllers/Dubai_customer.php
 *   application/config/dubai_back.php   (with the real key filled in)
 *
 * Called ONLY by the Next.js server (app/api/customer/*), never by a browser:
 * every request must carry the header  X-Dubai-Key: <config dubai_back_key>.
 * The browser talks to Next; Next holds the session (signed httpOnly cookie).
 *
 *   POST .../dubai_customer/login     email, password  [X-Forwarded-For = visitor IP]
 *   POST .../dubai_customer/account   customer_id
 *
 * Who can log in = the SAME rows the existing customer login on safestorage.in uses
 * (Auth::login): ss_user with role_id 6, status '0', password stored as
 * base64(plain) — that is the existing format, so existing customers keep their
 * password. Extra rule here: the linked ss_customer must be an AE customer
 * (country_code 'AE'), so an Indian customer cannot sign in on the .ae site.
 *
 * Brute-force limit: failed attempts are logged in the EXISTING ss_failed_login
 * table (ip_address column holds "dubai:<ip>" and "dubai-email:<sha1>") — no new
 * table. 5 failures in 15 minutes for the same visitor IP or the same email
 * blocks further tries until the window passes.
 *
 * This file does not create or change passwords and does not send email.
 */
class Dubai_customer extends MY_Controller {

    const MAX_FAILS   = 5;
    const WINDOW_MINS = 15;

    public function __construct()
    {
        // Same convention as the other open modules: no session, parent
        // constructor skipped (it applies back-office session rules).
        header('Content-Type: application/json');
        header('Cache-Control: no-store');

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            exit(0);
        }

        $this->load->model('common/common_model');
        $this->_require_key();
    }

    /** Every request must carry the shared key; empty config key = refuse all. */
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

        $email = strtolower(trim((string) $this->input->post('email')));
        $pass  = (string) $this->input->post('password');
        $ip    = $this->_visitor_ip();

        if ($email === '' || $pass === '' || strlen($email) > 200 || strlen($pass) > 200) {
            $this->_json(array('status' => 'error', 'message' => 'Email and password are required.'), 400);
        }

        $ipKey    = 'dubai:' . $ip;
        $emailKey = 'dubai-email:' . sha1($email);
        if ($this->_fails($ipKey) >= self::MAX_FAILS || $this->_fails($emailKey) >= self::MAX_FAILS) {
            $this->_json(array('status' => 'error', 'message' => 'Too many attempts. Please try again in a few minutes.'), 429);
        }

        $row = $this->db->query(
            "SELECT u.user_id, u.user_password, u.customer_id,
                    c.customer_name, c.customer_email, c.customer_unique_id
               FROM ss_user u
               JOIN ss_customer c ON c.customer_id = u.customer_id
              WHERE LOWER(u.user_email) = ? AND u.role_id = 6 AND u.status = '0'
                AND c.country_code = 'AE'
              LIMIT 1", array($email))->row();

        // base64(plain) is the stored format; compare in constant time.
        $ok = $row && hash_equals((string) base64_decode((string) $row->user_password), $pass);

        if (!$ok) {
            $this->_log_fail($ipKey);
            $this->_log_fail($emailKey);
            // One message for "no such customer" and "wrong password".
            $this->_json(array('status' => 'error', 'message' => 'Invalid email or password.'), 401);
        }

        $this->_json(array('status' => 'success', 'customer' => array(
            'customer_id'        => (int) $row->customer_id,
            'customer_unique_id' => (string) $row->customer_unique_id,
            'name'               => (string) $row->customer_name,
            'email'              => (string) $row->customer_email,
        )));
    }

    // ---------------------------------------------------------------- account
    public function account()
    {
        $cid = (int) $this->input->post('customer_id');
        if ($cid <= 0) {
            $this->_json(array('status' => 'error', 'message' => 'customer_id required.'), 400);
        }

        $c = $this->db->query(
            "SELECT customer_id, customer_unique_id, customer_name, customer_email,
                    customer_contact1, customer_local_city
               FROM ss_customer WHERE customer_id = ? AND country_code = 'AE' LIMIT 1", array($cid))->row();
        if (!$c) {
            $this->_json(array('status' => 'error', 'message' => 'Not found.'), 404);
        }

        // Latest orders (pickups / retrievals).
        $orders = $this->db->query(
            "SELECT order_type, order_sub_type, order_schedule_date, order_status
               FROM ss_order WHERE customer_id = ?
              ORDER BY order_id DESC LIMIT 5", array($cid))->result();

        // Unpaid dues. payable_amount is varchar, so cast in PHP.
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
                'name'    => (string) $c->customer_name,
                'email'   => (string) $c->customer_email,
                'phone'   => (string) $c->customer_contact1,
                'city'    => (string) $c->customer_local_city,
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

    private function _log_fail($key)
    {
        $this->db->insert('ss_failed_login', array('ip_address' => $key));
    }

    private function _json($data, $code = 200)
    {
        http_response_code($code);
        echo json_encode($data);
        die;
    }
}
