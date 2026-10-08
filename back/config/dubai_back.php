<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*
 * Shared key between the safestorage.ae Next.js server and the dubai_customer
 * endpoints (modules/dubai_customer/controllers/Dubai_customer.php).
 *
 * LEAVE EMPTY IN THE REPO. The real value (>= 32 random chars) lives only in
 * the PHP server's copy of this file AND in the Next server's DUBAI_BACK_KEY
 * (/home/ubuntu/shared/.env.local on the AE box). While it is empty the
 * endpoints answer 503 to everything.
 */
$config['dubai_back_key'] = '';
