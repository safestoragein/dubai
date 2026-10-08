<?php
// Every scenario: setup(), which controller/method to call, and what the answer must be.
// Used by runner.php (executes one case in its own process) and run.php (checks the answers).
const GOODKEY = 'abcdefghijklmnopqrstuvwxyz0123456789ABCD';

function future_date($minDays = 5) {   // a legal retrieval date: not a blocked billing day, inside the window
    $d = new DateTime('today', new DateTimeZone('Asia/Dubai')); $d->modify("+$minDays days");
    while (in_array((int) $d->format('j'), array(1, 2, 26, 27, 28, 29, 30, 31))) $d->modify('+1 day');
    return $d;
}
function blocked_date() { $d = new DateTime('today', new DateTimeZone('Asia/Dubai')); $d->modify('+10 days'); while ((int) $d->format('j') !== 28) $d->modify('+1 day'); return $d; }

$A = 'Dubai_auth'; $R = 'Dubai_retrieval';
$cust = array('customer_id' => 7, 'customer_unique_id' => 'DXB7', 'customer_name' => 'Test', 'customer_email' => 't@x.ae', 'customer_contact1' => '0501112222',
    'customer_contact2' => '', 'customer_local_city' => 'Dubai', 'pickup_address' => 'Marina', 'pickup_lat' => '25.08', 'pickup_lang' => '55.14',
    'pickup_floor' => 'ground', 'pickup_lift' => 'yes', 'permanent_address' => '', 'status' => '0', 'is_customer' => '1', 'customer_created_at' => '2026-01-01',
    'registration_date' => '', 'storage_date' => '2026-01-02', 'storage_month' => '3', 'next_bill_date' => '', 'billing_date' => '2026-09-27', 'payment_type' => 'monthly');
$items = array(
    array('inventory_id' => 1, 'quotation_id' => 5, 'barcode' => 'B1', 'goods_name' => 'Box', 'goods_type' => 'box', 'goods_quantity' => 2, 'goods_point' => 2.5,
        'goods_size' => 'M', 'goods_color' => 'red', 'start_date' => '2026-02-01', 'end_date' => '', 'inventory_status' => 'active', 'is_removed_item' => '0',
        'goods_storage_id' => 9, 'goods_price' => '12.5', 'goods_location' => 'A1', 'retrivel_date' => ''),
    array('inventory_id' => 2, 'quotation_id' => 5, 'barcode' => 'B2', 'goods_name' => 'Sofa', 'goods_type' => 'furniture', 'goods_quantity' => 1, 'goods_point' => 8,
        'goods_size' => '', 'goods_color' => '', 'start_date' => '2026-02-03', 'end_date' => '', 'inventory_status' => 'active', 'is_removed_item' => '0',
        'goods_storage_id' => 0, 'goods_price' => '', 'goods_location' => '', 'retrivel_date' => ''),
    array('inventory_id' => 3, 'quotation_id' => 0, 'barcode' => 'B3', 'goods_name' => 'Old', 'goods_type' => 'box', 'goods_quantity' => 1, 'goods_point' => 1,
        'goods_size' => '', 'goods_color' => 'x', 'start_date' => '', 'end_date' => '2026-03-01', 'inventory_status' => 'retrieved', 'is_removed_item' => '0',
        'goods_storage_id' => 0, 'goods_price' => '1', 'goods_location' => 'Z', 'retrivel_date' => '2026-03-02'),
    array('inventory_id' => 4, 'quotation_id' => 0, 'barcode' => 'B4', 'goods_name' => 'Gone', 'goods_type' => 'box', 'goods_quantity' => 1, 'goods_point' => 1,
        'goods_size' => '', 'goods_color' => '', 'start_date' => '', 'end_date' => '', 'inventory_status' => 'active', 'is_removed_item' => '1',
        'goods_storage_id' => 0, 'goods_price' => '', 'goods_location' => '', 'retrivel_date' => ''),
);
$activeItems = array_slice($items, 0, 2);
$four = array(); for ($i = 1; $i <= 4; $i++) { $x = $items[0]; $x['inventory_id'] = $i; $four[] = $x; }
$summary = array('payable_due' => 100.0, 'total_monthly_return' => 0, 'storage_charges_till_date' => 40.0, 'wallet_amount' => 10.0, 'monthly_amount' => 300,
    'from_date' => '2026-09-27', 'to_date' => '2026-10-20', 'last_bill_date' => '2026-09-27', 'next_bill_date' => '2026-10-27', 'total_due_amt' => 3, 'is_return_to_cust' => 'no');
$order = array('order_id' => 11, 'order_type' => 'pickup', 'order_sub_type' => 'pickup', 'order_status' => 'completed', 'quotation_id' => 5, 'manager_id' => 1,
    'supervisor_id' => 2, 'm_fname' => 'Mo', 'm_lname' => 'Ma', 's_fname' => 'Su', 's_lname' => 'Pe', 'order_schedule_date' => '2026-02-01', 'order_timeslot' => '9-12',
    'order_address' => 'Marina', 'order_note' => '', 'order_created_at' => '2026-01-20', 'is_intercity' => '0');
$order2 = array_merge($order, array('order_id' => 12, 'order_type' => 'full_retrieval', 'order_sub_type' => 'safestorage_transport', 'order_status' => 'request_raise', 'is_intercity' => '1'));
$guard = array('/SELECT 1 FROM ss_customer c JOIN ss_user u/', array(array('1' => 1)));
$accountRow = array('/FROM ss_customer c JOIN ss_user u ON u\.customer_id = c\.customer_id WHERE c\.customer_id = \? AND u\.role_id = 6 AND u\.status = .0. AND u\.user_country = .AE. LIMIT 1/', array($cust));
$quote = array('quotation_id' => 5, 'total_storage_charges' => '300', 'extra_item_storage_charges' => '20', 'item_reduced_charges' => '10', 'extra_item_transport_charges_gst' => '15',
    'extra_item_transport_charges' => '10', 'extra_item_stack_charges_gst' => '0', 'extra_item_stack_charges' => '8', 'storage_coupen' => 'x-flat-30', 'storage_multi_factor' => '2');
$quote2 = array_merge($quote, array('quotation_id' => 6, 'storage_coupen' => 'x-per-10', 'storage_multi_factor' => ''));
$quote3 = array_merge($quote, array('quotation_id' => 8));
$bill = array('payment_id' => 31, 'payment_unique_id' => '', 'sub_total_amt' => '3.00', 'tax' => '5', 'payable_amount' => '3.00', 'total_amount' => '3.00', 'late_charges' => '0',
    'payment_status' => 'Unpaid', 'billing_date' => '2026-08-27', 'bill_genrated_date' => '', 'charges_type' => '', 'offer_note' => 'Storage', 'quotation_id' => 5, 'order_id' => 11);
$paidBill = array_merge($bill, array('payment_id' => 30, 'payment_status' => 'Paid', 'payment_unique_id' => 'AE-1', 'payable_amount' => '1,200.50', 'billing_date' => '', 'bill_genrated_date' => '2026-07-27'));
$tx = array('cust_transaction_id' => 1, 'paid_amount' => '1,200.50', 'transaction_type' => 'credit', 'payment_type' => 'card', 'transaction_order_id' => 'pi_1', 'transaction_note' => 'n',
    'transaction_payment_date' => '', 'transaction_created_at' => '2026-07-27');
$img = array(array('image_id' => 1, 'document_type' => 'stacking_images', 'damaged_image' => 'a b.jpg', 'quotation_id' => 5, 'created_at' => '2026-02-01'),
    array('image_id' => 2, 'document_type' => 'agreement', 'damaged_image' => 'ag.pdf', 'quotation_id' => 0, 'created_at' => ''),
    array('image_id' => 3, 'document_type' => 'unknown_type', 'damaged_image' => 'x.jpg', 'quotation_id' => 0, 'created_at' => ''));

// the rules a normal retrieval request needs
$retr = function () use ($cust, $activeItems, $summary) {
    return array(
        array('/SELECT c\.\* FROM ss_customer c JOIN ss_user u/', array($cust)),
        array('/FROM ss_order_inventory WHERE customer_id = \? AND inventory_status = .active./', $activeItems),
        array('/SELECT floor_slug FROM ss_floor/', array(array('floor_slug' => 'ground'), array('floor_slug' => 'first'))),
        array('/SELECT goods_point, goods_quantity FROM ss_order_inventory/', array(array('goods_point' => 2.5, 'goods_quantity' => 2), array('goods_point' => 8, 'goods_quantity' => 1))),
        array('/SELECT user_id FROM ss_user WHERE customer_id = \? AND role_id = 6/', array(array('user_id' => 70))),
        array('/COUNT\(\*\) AS n FROM ss_customer_payment/', array(array('n' => 0))),
    );
};
$post = function ($o = array()) { $d = future_date(); return array_merge(array('customer_id' => '7', 'type' => 'full', 'date' => $d->format('d/m/Y'), 'lat' => '25.20', 'lng' => '55.27',
    'floor' => 'ground', 'lift' => 'yes', 'address' => 'Downtown Dubai', 'phone' => '+971 50 111 2222', 'note' => 'call me'), $o); };
$ok = function ($r) { return $r['code'] === 200 && ($r['json']['status'] ?? '') === 'success'; };
$err = function ($code, $needle = '') { return function ($r) use ($code, $needle) { return $r['code'] === $code && ($needle === '' || stripos($r['body'], $needle) !== false); }; };
$ins = function ($r, $table) { foreach ($r['log'] as $l) if ($l[0] === 'insert' && $l[1] === $table) return true; return false; };

$C = array();
// ---------------------------------------------------------------- key / transport guards
foreach (array($A, $R) as $cl) {
    $C["$cl: no key header => 403"]    = array($cl, 'options', array('post' => array('customer_id' => '7'), 'key' => '', 'config' => array('dubai_back_key' => GOODKEY)), $err(403));
    $C["$cl: wrong key => 403"]        = array($cl, 'options', array('post' => array('customer_id' => '7'), 'key' => 'wrong', 'config' => array('dubai_back_key' => GOODKEY)), $err(403));
    $C["$cl: key not configured => 503"] = array($cl, 'options', array('post' => array(), 'key' => GOODKEY, 'config' => array('dubai_back_key' => 'short')), $err(503));
    $C["$cl: OPTIONS preflight exits"] = array($cl, 'options', array('method' => 'OPTIONS'), function ($r) { return $r['body'] === ''; });
}
$C["$R: GET => 405"] = array($R, 'options', array('method' => 'GET'), $err(405));

// ---------------------------------------------------------------- Dubai_auth
$C["$A: login GET => 405"]         = array($A, 'login', array('method' => 'GET'), $err(405));
$C["$A: login empty => 400"]       = array($A, 'login', array('post' => array('username' => '', 'password' => '')), $err(400));
$C["$A: login over-long => 400"]   = array($A, 'login', array('post' => array('username' => str_repeat('a', 201), 'password' => 'x')), $err(400));
$C["$A: login locked out => 429"]  = array($A, 'login', array('post' => array('username' => 'a@b.c', 'password' => 'p'), 'rules' => array(array('/FROM ss_failed_login/', array(array('n' => 8))))), $err(429));
$C["$A: login bad creds => 401 + failure rows"] = array($A, 'login', array('post' => array('username' => 'a@b.c', 'password' => 'p'), 'rules' => array(array('/FROM ss_failed_login/', array(array('n' => 0))))),
    function ($r) use ($ins) { return $r['code'] === 401 && $ins($r, 'ss_failed_login') && $ins($r, 'ss_login_logs') && stripos($r['body'], 'correct login') !== false; });
$C["$A: login ok => customer json, failures cleared"] = array($A, 'login', array('post' => array('username' => 'a@b.c', 'password' => 'p'), 'server' => array('HTTP_X_FORWARDED_FOR' => '203.0.113.5, 10.1.1.1'),
    'rules' => array(array('/FROM ss_failed_login/', array(array('n' => 0))), array('/FROM ss_user u JOIN ss_customer c/', array(array('user_id' => 1, 'customer_id' => 7, 'customer_unique_id' => 'DXB7', 'customer_name' => 'T', 'customer_email' => 't@x'))))),
    function ($r) { $d = array_filter($r['log'], function ($l) { return $l[0] === 'delete'; }); return $r['code'] === 200 && $r['json']['customer']['customer_id'] === 7 && count($d) === 2; });
$C["$A: login bad forwarded ip falls back"] = array($A, 'login', array('post' => array('username' => 'a@b.c', 'password' => 'p'), 'server' => array('HTTP_X_FORWARDED_FOR' => 'not-an-ip'), 'rules' => array(array('/FROM ss_failed_login/', array(array('n' => 0))))), $err(401));
foreach (array('account', 'orders', 'details', 'inventory', 'documents', 'payments', 'quotations') as $m) {
    $C["$A: $m no id => 400"]       = array($A, $m, array('post' => array()), $err(400));
    $C["$A: $m not a Dubai user => 404"] = array($A, $m, array('post' => array('customer_id' => '7')), $err(404));
}
$C["$A: account ok"] = array($A, 'account', array('post' => array('customer_id' => '7'), 'rules' => array($accountRow, array('/FROM ss_order_status/', array(array('order_status_slug' => 'completed', 'order_status' => 'Completed'))),
    array('/FROM ss_order o/', array($order)), array('/FROM ss_customer_payment WHERE customer_id = \? AND payment_status = .Unpaid./', array($bill, array_merge($bill, array('payable_amount' => '1,000.25')))))),
    function ($r) { return $r['code'] === 200 && $r['json']['dues']['count'] === 2 && abs($r['json']['dues']['total'] - 1003.25) < 0.001 && $r['json']['orders'][0]['ref'] === 'WO11'; });
$C["$A: orders ok"] = array($A, 'orders', array('post' => array('customer_id' => '7'), 'rules' => array($guard, array('/FROM ss_order o/', array($order, $order2)))),
    function ($r) { return $r['code'] === 200 && count($r['json']['orders']) === 2 && $r['json']['orders'][1]['type_text'] === 'Full retrieval(safestorage transport Intercity)' && $r['json']['orders'][0]['type_text'] === 'Pickup(safestorage transport)'; });
$C["$A: inventory ok"] = array($A, 'inventory', array('post' => array('customer_id' => '7'), 'rules' => array($guard, array('/FROM ss_order_inventory WHERE customer_id = \? ORDER BY inventory_id DESC LIMIT 1000/', $items))),
    function ($r) { $s = array_column($r['json']['items'], 'status'); return $r['code'] === 200 && $s === array('Stored', 'Stored', 'Retrieved', 'Removed'); });
$C["$A: details ok"] = array($A, 'details', array('post' => array('customer_id' => '7'), 'rules' => array($accountRow, array('/FROM ss_order_inventory WHERE customer_id = \? ORDER BY inventory_id DESC LIMIT 300/', $items),
    array('/SELECT \* FROM ss_order WHERE customer_id = \? AND order_type = .pickup./', array($order)), array('/FROM ss_customer_quotation/', array($quote)))),
    function ($r) { return $r['code'] === 200 && $r['json']['storage']['items'] === 3 && $r['json']['timeline']['pickup_done'] === true && $r['json']['timeline']['checked_in'] === '2026-02-01'; });
$C["$A: quotations ok (items, pickup booking, read only)"] = array($A, 'quotations', array('post' => array('customer_id' => '7'), 'rules' => array($guard,
    array('/FROM ss_customer_quotation WHERE customer_id = \? AND country_code = .AE./', array(array('quotation_id' => 341715, 'created_at' => '2026-07-27 14:54:00', 'total_amount' => '806.4', 'storage_price' => '806.4', 'shared_storage_price' => '0', 'total_sqft' => '64', 'total_pallet' => 4, 'total_points' => 55, 'bedrooms' => '2', 'floor' => 'G', 'lift' => 'yes'), array('quotation_id' => 341716, 'created_at' => '', 'quotation_created_at' => '2026-07-28', 'total_amount' => '100', 'storage_price' => '0', 'shared_storage_price' => '0', 'total_sqft' => '0', 'total_pallet' => 0, 'total_points' => 0, 'bedrooms' => '', 'floor' => '', 'lift' => ''))),
    array('/FROM ss_customer_quotation_item/', array(array('item_name' => 'Air fryer', 'item_count' => 4, 'item_price' => '25.2'))),
    array('/FROM ss_order WHERE quotation_id = \? AND order_type = .pickup./', function ($b) { return $b[0] == 341715 ? array(array('order_schedule_date' => '2026-08-01', 'order_id' => 9, 'order_timeslot' => '9-12', 'order_status' => 'confirmed')) : array(); }))),
    function ($r) { $q = $r['json']['quotations'] ?? array(); return $r['code'] === 200 && count($q) === 2 && $q[0]['items'][0]['subtotal'] == 100.8 && $q[0]['pickup']['ref'] === 'WO9' && $q[1]['pickup'] === null && $q[0]['label'] === 'QT341715'; });
$C["$A: documents ok"] = array($A, 'documents', array('post' => array('customer_id' => '7'), 'rules' => array($guard, array('/FROM ss_inv_damaged_other_images/', $img),
    array('/FROM ss_damaged_items_images/', array(array('damaged_items_image_id' => 4, 'image' => 'v.jpg'), array('damaged_items_image_id' => 5, 'image' => ''))), array('/FROM ss_customer_quotation/', array(array('quotation_id' => 9))))),
    function ($r) { $j = $r['json']; return $r['code'] === 200 && $j['total'] === 3 && count($j['quotations']) === 2 && strpos($j['groups'][0]['images'][0]['url'], 'a%20b.jpg') !== false; });
$payRules = array($guard, array('/FROM ss_customer_payment WHERE customer_id = \? ORDER BY payment_id DESC LIMIT 300/', array($bill, $paidBill, array_merge($bill, array('payment_status' => '', 'payment_id' => 32)))),
    array('/FROM ss_customer_transaction/', array($tx)), array('/FROM ss_customer_wallet/', array(array('wallet_amount' => '10.95'))),
    array('/FROM ss_customer_quotation WHERE customer_id/', array($quote, $quote2, $quote3)),
    array('/FROM ss_inventory_insuration_amount/', array(array('is_extra_insurar_accepted' => 'Yes', 'extra_insurance_subtotal' => '12'))),
    array('/SELECT order_status FROM ss_order WHERE customer_id = \? AND quotation_id/', function ($b) { return $b[1] == 8 ? array(array('order_status' => 'cancelled')) : array(array('order_status' => 'confirmed')); }),
    array('/SELECT order_status FROM ss_order WHERE customer_id = \? AND order_type = .pickup./', array(array('order_status' => 'completed'))));
$C["$A: payments ok (totals, coupons, wallet, cancelled quote skipped)"] = array($A, 'payments', array('post' => array('customer_id' => '7'), 'rules' => $payRules),
    function ($r) { $j = $r['json']; return $r['code'] === 200 && $j['totals']['unpaid'] == 3 && $j['totals']['paid'] == 1200.5 && $j['wallet'] == 10.95 && count($j['summary']['quotations']) === 2
        && $j['summary']['quotations'][0]['coupon'] === 'Flat 30 OFF' && $j['summary']['quotations'][1]['coupon'] === '10% OFF' && $j['bills'][1]['id'] === 'AE-1' && $j['bills'][2]['status'] === 'Unknown'; });
$C["$A: payments, first pickup not complete => monthly total 0"] = array($A, 'payments', array('post' => array('customer_id' => '7'), 'rules' => array_merge(array(array('/SELECT order_status FROM ss_order WHERE customer_id = \? AND order_type = .pickup./', array(array('order_status' => 'pending')))), $payRules)),
    function ($r) { return $r['code'] === 200 && $r['json']['summary']['all']['total_monthly'] == 0; });

// ---------------------------------------------------------------- Dubai_retrieval: options / estimate
$C["$R: customer_id missing => 400"] = array($R, 'options', array('post' => array()), $err(400));
$C["$R: not a Dubai customer => 404"] = array($R, 'options', array('post' => array('customer_id' => '7')), $err(404));
$C["$R: options ok"] = array($R, 'options', array('post' => array('customer_id' => '7'), 'rules' => array_merge($retr(), array(
    array('/FROM ss_floor WHERE status/', array(array('floor_name' => 'Ground', 'floor_slug' => 'ground'))), array('/FROM ss_timeslot/', array(array('timeslot' => '9-12', 'timeslot_slug' => '9'))),
    array('/FROM ss_order WHERE customer_id = \? AND order_type IN/', array(array('order_id' => 3, 'order_type' => 'full_retrieval', 'order_status' => 'pending', 'order_schedule_date' => '2026-10-20')))))),
    function ($r) { return $r['code'] === 200 && count($r['json']['items']) === 2 && $r['json']['max_partial'] === 1 && $r['json']['has_dues'] === false && $r['json']['open_orders'][0]['ref'] === 'WO3'; });
$C["$R: estimate full ok (pallets, distance charge, plan)"] = array($R, 'estimate', array('post' => $post(), 'rules' => $retr(), 'summary' => $summary),
    function ($r) { $e = $r['json']['estimate'] ?? null; return $r['code'] === 200 && $e && $e['pallets'] === 1 && $e['transport_total'] > 0 && $e['distance_charge'] > 0 && $e['plan']['mode'] === 'pay' && $e['plan']['wallet_used'] == 10.0; });
$C["$R: full retrieval dues — latest bill replaced by storage-till-date, older bills charged"] = array($R, 'estimate', array('post' => $post(), 'summary' => $summary, 'rules' => array_merge(array(array('/SELECT payment_id, payable_amount, total_amount, billing_date FROM ss_customer_payment/', array(
    array('payment_id' => 1, 'payable_amount' => '50', 'total_amount' => '50', 'billing_date' => '2026-08-27'),
    array('payment_id' => 2, 'payable_amount' => '', 'total_amount' => '30', 'billing_date' => '2026-09-27'),
    array('payment_id' => 3, 'payable_amount' => '0', 'total_amount' => '0', 'billing_date' => '2026-07-01')))), $retr())),
    function ($r) { $p = $r['json']['estimate']['plan'] ?? array(); return $r['code'] === 200 && $p['unpaid_ids'] === array(1) && $p['flag_ids'] === array(2, 3) && $p['unpaid_dues'] == 50; });
$C["$R: estimate module failure => 502"] = array($R, 'estimate', array('post' => $post(), 'rules' => $retr(), 'summary' => null), $err(502));
$C["$R: estimate full, prepaid storage returns => request"] = array($R, 'estimate', array('post' => $post(), 'rules' => $retr(), 'summary' => array_merge($summary, array('is_return_to_cust' => 'yes', 'total_monthly_return' => 900))),
    function ($r) { return $r['code'] === 200 && $r['json']['estimate']['plan']['mode'] === 'request' && $r['json']['estimate']['final_return_amt'] > 0; });
$C["$R: estimate full, wallet covers everything => request"] = array($R, 'estimate', array('post' => $post(), 'rules' => $retr(), 'summary' => array_merge($summary, array('wallet_amount' => 5000))),
    function ($r) { return $r['code'] === 200 && $r['json']['estimate']['plan']['mode'] === 'request'; });
$C["$R: estimate full, payable<=return branch"] = array($R, 'estimate', array('post' => $post(), 'rules' => $retr(), 'summary' => array_merge($summary, array('payable_due' => 50, 'total_monthly_return' => 50))), $ok);
$C["$R: estimate partial ok (transport only, no storage)"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('2'))), 'rules' => array_merge(array(array('/FROM ss_order_inventory WHERE customer_id = \? AND inventory_status = .active./', array($items[0], $items[1], array_merge($items[0], array('inventory_id' => 5)), array_merge($items[0], array('inventory_id' => 6))))), $retr()), 'summary' => $summary),
    function ($r) { $p = $r['json']['estimate']['plan'] ?? array(); return $r['code'] === 200 && $p['type'] === 'partial' && $p['storage'] == 0 && $p['wallet_used'] == 0; });
$C["$R: partial refused while dues exist"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('1'))), 'rules' => array_merge(array(array('/COUNT\(\*\) AS n FROM ss_customer_payment/', array(array('n' => 2)))), $retr())), $err(422, 'pay it first'));
$C["$R: partial with 1 stored item refused"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('1'))), 'rules' => array_merge(array(array('/FROM ss_order_inventory WHERE customer_id = \? AND inventory_status = .active./', array($items[0]))), $retr())), $err(422, 'at least 2'));
$C["$R: partial with no selection refused"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial')), 'rules' => $retr()), $err(422, 'Select the items'));
$C["$R: partial over 50% refused"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('1', '2'))), 'rules' => $retr()), $err(422, 'up to 1'));
$C["$R: partial cannot pick another customer's item"] = array($R, 'estimate', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('999'))), 'rules' => $retr()), $err(422, 'Select the items'));
$C["$R: bad type => 422"]       = array($R, 'estimate', array('post' => $post(array('type' => 'x')), 'rules' => $retr()), $err(422, 'Choose a retrieval type'));
$C["$R: intercity => contact team"] = array($R, 'estimate', array('post' => $post(array('type' => 'intercity')), 'rules' => $retr()), $err(422, 'arranged by our team'));
$C["$R: no stored items => 422"] = array($R, 'estimate', array('post' => $post(), 'rules' => array(array('/SELECT c\.\* FROM ss_customer c/', array($cust)))), $err(422, 'no stored items'));
$C["$R: bad date => 422"]       = array($R, 'estimate', array('post' => $post(array('date' => '31/02/2026')), 'rules' => $retr()), $err(422, 'valid date'));
$C["$R: too soon => 422"]       = array($R, 'estimate', array('post' => $post(array('date' => (new DateTime('today'))->format('d/m/Y'))), 'rules' => $retr()), $err(422, 'notice'));
$C["$R: past billing window => 422"] = array($R, 'estimate', array('post' => $post(array('date' => (new DateTime('today'))->modify('+120 days')->format('d/m/Y'))), 'rules' => $retr()), $err(422, 'on or before'));
$C["$R: blocked billing day => 422"] = array($R, 'estimate', array('post' => $post(array('date' => blocked_date()->format('d/m/Y'))), 'rules' => $retr()), $err(422));
$C["$R: already booked date => 422"] = array($R, 'estimate', array('post' => $post(), 'rules' => array_merge(array(array('/SELECT DISTINCT order_schedule_date/', array(array('d' => future_date()->format('Y-m-d'))))), $retr())), $err(422, 'already booked'));
$C["$R: last bill date drives the window"] = array($R, 'estimate', array('post' => $post(), 'rules' => array_merge(array(array('/SELECT billing_date FROM ss_customer_payment/', array(array('billing_date' => date('Y-m-d'))))), $retr()), 'summary' => $summary), $ok);
$C["$R: no coordinates => 422"] = array($R, 'estimate', array('post' => $post(array('lat' => '', 'lng' => '')), 'rules' => $retr()), $err(422, 'suggestions'));
$C["$R: beyond 60 km => 422"]   = array($R, 'estimate', array('post' => $post(array('lat' => '24.45', 'lng' => '54.37')), 'rules' => $retr()), $err(422, '60 km'));
$C["$R: unknown floor => 422"]  = array($R, 'estimate', array('post' => $post(array('floor' => 'roof')), 'rules' => $retr()), $err(422, 'floor'));
$C["$R: lift not yes/no => 422"] = array($R, 'estimate', array('post' => $post(array('lift' => 'maybe')), 'rules' => $retr()), $err(422, 'lift'));
$C["$R: oversize pallets tiers"] = array($R, 'estimate', array('post' => $post(), 'summary' => $summary, 'rules' => array_merge(array(array('/SELECT goods_point, goods_quantity/', array(array('goods_point' => 16, 'goods_quantity' => 8)))), $retr())),
    function ($r) { return $r['code'] === 200 && $r['json']['estimate']['pallets'] === 8 && $r['json']['estimate']['transport_base'] == 8 * 218; });
foreach (array(array(1, 500), array(3, 900), array(5, 1175), array(6, 1308)) as $t) {
    $C["$R: transport tier {$t[0]} pallet(s) = {$t[1]}"] = array($R, 'estimate', array('post' => $post(), 'summary' => $summary, 'rules' => array_merge(array(array('/SELECT goods_point, goods_quantity/', array(array('goods_point' => 16 * $t[0], 'goods_quantity' => 1)))), $retr())),
        function ($r) use ($t) { return $r['code'] === 200 && $r['json']['estimate']['transport_base'] == $t[1]; });
}

// ---------------------------------------------------------------- create / prepare
$C["$R: create ok"] = array($R, 'create', array('post' => $post(), 'rules' => array_merge($retr(), array(array('/SELECT user_id FROM ss_user WHERE role_id = 2/', array(array('user_id' => 3))), array('/FROM ss_transport_commission/', array(array('commission_percent' => 10))))), 'summary' => $summary),
    function ($r) use ($ins) { return $r['code'] === 200 && $r['json']['ref'] === 'WO501' && $ins($r, 'ss_order') && $ins($r, 'ss_partial_retrieval_item') && $ins($r, 'ss_dubai_log'); });
$C["$R: create stores only server-side figures"] = array($R, 'create', array('post' => $post(array('final_payable_amt' => '1', 'transport_charges' => '1')), 'rules' => $retr(), 'summary' => $summary),
    function ($r) { foreach ($r['log'] as $l) if ($l[1] === 'ss_order') return $l[2]['order_status'] === 'request_raise' && $l[2]['final_payable_amt'] > 1 && $l[2]['country_code'] === 'AE'; return false; });
$C["$R: create blocked by an open request => 409"] = array($R, 'create', array('post' => $post(), 'rules' => array_merge(array(array('/SELECT order_id FROM ss_order WHERE customer_id = \? AND order_type IN/', array(array('order_id' => 3)))), $retr()), 'summary' => $summary), $err(409, 'open retrieval'));
$C["$R: create blocked, date just booked => 409"] = array($R, 'create', array('post' => $post(), 'rules' => array_merge(array(array('/SELECT order_id FROM ss_order WHERE country_code = .AE. AND order_type IN/', array(array('order_id' => 4)))), $retr()), 'summary' => $summary), $err(409, 'just been booked'));
$C["$R: create blocked by another customer's live payment hold => 409"] = array($R, 'create', array('post' => $post(), 'summary' => $summary, 'rules' => array_merge(array(array('/FROM ss_dubai_log i/', function () { static $n = 0; return ++$n === 1 ? array() : array(array('log_id' => 1, 'customer_id' => 99, 'changes' => json_encode(array('in' => array('date_ymd' => future_date()->format('Y-m-d')))))); })), $retr())), $err(409, 'booking that date'));
$C["$R: a live hold already greys the date out in validation"] = array($R, 'estimate', array('post' => $post(), 'summary' => $summary, 'rules' => array_merge(array(array('/FROM ss_dubai_log i/', array(array('log_id' => 1, 'customer_id' => 99, 'changes' => json_encode(array('in' => array('date_ymd' => future_date()->format('Y-m-d')))))))), $retr())), $err(422, 'already booked'));
$C["$R: create loses the race at the database unique key => 409 (not a 500)"] = array($R, 'create', array('post' => $post(), 'summary' => $summary, 'failInsert' => array('ss_order'), 'rules' => array_merge(array(array('/SELECT order_id FROM ss_order WHERE country_code = .AE. AND order_type IN \(.full_retrieval.,.partial_retrieval.\) AND order_status <> .cancelled. AND order_schedule_date = \? LIMIT 1/', function () { static $n = 0; return ++$n === 1 ? array() : array(array('order_id' => 88)); })), $retr())),
    function ($r) { return $r['code'] === 409 && stripos($r['body'], 'just been booked') !== false; });
$C["$R: create bad phone => 422"] = array($R, 'create', array('post' => $post(array('phone' => 'abc<script>')), 'rules' => $retr()), $err(422, 'phone'));
$C["$R: create empty address => 422"] = array($R, 'create', array('post' => $post(array('address' => '')), 'rules' => $retr()), $err(422, 'address'));
$C["$R: create order insert fails => 500"] = array($R, 'create', array('post' => $post(), 'rules' => $retr(), 'summary' => $summary, 'failInsert' => array('ss_order')), $err(500));
$C["$R: create known timeslot slug"] = array($R, 'create', array('post' => $post(array('timeslot' => '9')), 'summary' => $summary, 'rules' => array_merge(array(array('/SELECT timeslot FROM ss_timeslot/', array(array('timeslot' => '9-12')))), $retr())), $ok);
$C["$R: prepare => pay intent saved"] = array($R, 'prepare', array('post' => $post(), 'rules' => $retr(), 'summary' => $summary),
    function ($r) use ($ins) { return $r['code'] === 200 && $r['json']['mode'] === 'pay' && $r['json']['intent_id'] > 0 && $r['json']['amount_aed'] > 2 && $ins($r, 'ss_dubai_log'); });
$C["$R: prepare, payment switched off => request"] = array($R, 'prepare', array('post' => $post(), 'rules' => $retr(), 'summary' => $summary, 'config' => array('dubai_back_key' => GOODKEY, 'dubai_retrieval_pay' => false)),
    function ($r) { return $r['code'] === 200 && $r['json']['mode'] === 'request' && stripos($r['json']['why'], 'switched off') !== false; });
$C["$R: prepare, amount under AED 2 => request"] = array($R, 'prepare', array('post' => $post(), 'rules' => $retr(), 'summary' => array_merge($summary, array('payable_due' => 0, 'storage_charges_till_date' => 0, 'wallet_amount' => 5000))),
    function ($r) { return $r['code'] === 200 && $r['json']['mode'] === 'request'; });
$C["$R: prepare, intent log fails => 500"] = array($R, 'prepare', array('post' => $post(), 'rules' => $retr(), 'summary' => $summary, 'failInsert' => array('ss_dubai_log')), $err(500));
$C["$R: prepare partial pays transport only"] = array($R, 'prepare', array('post' => $post(array('type' => 'partial', 'inventory_id' => array('2'))), 'summary' => $summary,
    'rules' => array_merge(array(array('/FROM ss_order_inventory WHERE customer_id = \? AND inventory_status = .active./', array($items[0], $items[1], array_merge($items[0], array('inventory_id' => 5)), array_merge($items[0], array('inventory_id' => 6))))), $retr())),
    function ($r) { return $r['code'] === 200 && $r['json']['mode'] === 'pay' && $r['json']['plan']['storage'] == 0; });

// ---------------------------------------------------------------- settle
$planFull = array('mode' => 'pay', 'why' => '', 'type' => 'full', 'unpaid_ids' => array(31), 'flag_ids' => array(30), 'unpaid_dues' => 3.0, 'storage' => 40.0, 'transport' => 600.0, 'bills_total' => 643.0, 'wallet_used' => 10.0, 'amount_due_now' => 633.0);
$planPart = array('mode' => 'pay', 'why' => '', 'type' => 'partial', 'unpaid_ids' => array(), 'flag_ids' => array(), 'unpaid_dues' => 0.0, 'storage' => 0.0, 'transport' => 600.0, 'bills_total' => 600.0, 'wallet_used' => 0.0, 'amount_due_now' => 600.0);
$intent = function ($plan, $type) use ($cust) { $in = array('type' => $type, 'ids' => array(1, 2), 'date' => future_date()->format('d/m/Y'), 'date_ymd' => future_date()->format('Y-m-d'), 'lat' => '25.20', 'lng' => '55.27',
    'floor' => 'ground', 'lift' => 'yes', 'timeslot_name' => 'To be confirmed', 'address' => 'Downtown', 'phone' => '+971501112222', 'note' => ''); return array('/SELECT \* FROM ss_dubai_log WHERE log_id = \? AND action_type = .retrieval_intent./', array(array('log_id' => 40, 'changes' => json_encode(array('in' => $in, 'plan' => $plan))))); };
$sp = function ($o = array()) { return array_merge(array('customer_id' => '7', 'intent_id' => '40', 'payment_ref' => 'pi_123', 'amount_aed' => '633'), $o); };
$C["$R: settle missing fields => 400"] = array($R, 'settle', array('post' => $sp(array('payment_ref' => '')), 'rules' => $retr()), $err(400));
$C["$R: settle unknown intent => 404"] = array($R, 'settle', array('post' => $sp(), 'rules' => $retr()), $err(404, 'intent_not_found'));
$C["$R: settle retry is a no-op (idempotent)"] = array($R, 'settle', array('post' => $sp(), 'rules' => array_merge(array(array('/action_type = .retrieval_settled./', array(array('message' => 'x')))), array($intent($planFull, 'full')), $retr())),
    function ($r) use ($ins) { return $r['code'] === 200 && ($r['json']['duplicate'] ?? false) === true && !$ins($r, 'ss_order'); });
$C["$R: settle corrupt intent => 500"] = array($R, 'settle', array('post' => $sp(), 'rules' => array_merge(array(array('/SELECT \* FROM ss_dubai_log WHERE log_id/', array(array('log_id' => 40, 'changes' => 'not json')))), $retr())), $err(500, 'intent_corrupt'));
$C["$R: settle amount mismatch => 409, nothing created"] = array($R, 'settle', array('post' => $sp(array('amount_aed' => '1')), 'rules' => array_merge(array($intent($planFull, 'full')), $retr())),
    function ($r) use ($ins) { return $r['code'] === 409 && !$ins($r, 'ss_order') && $ins($r, 'ss_dubai_log'); });
$C["$R: settle, date meanwhile taken => 409 + team alert"] = array($R, 'settle', array('post' => $sp(), 'rules' => array_merge(array($intent($planFull, 'full'), array('/SELECT order_id FROM ss_order WHERE country_code = .AE./', array(array('order_id' => 77)))), $retr())),
    function ($r) use ($ins) { return $r['code'] === 409 && !$ins($r, 'ss_order'); });
$C["$R: settle full ok (order, bills, wallet, summary rows)"] = array($R, 'settle', array('post' => $sp(), 'summary' => $summary, 'rules' => array_merge(array($intent($planFull, 'full'),
    array('/FROM ss_customer_wallet/', array(array('wallet_id' => 1, 'wallet_amount' => '10.95')))), $retr())),
    function ($r) use ($ins) { return $r['code'] === 200 && $r['json']['ref'] === 'WO501' && $ins($r, 'ss_order') && $ins($r, 'ss_customer_payment') && $ins($r, 'ss_paid_dues_retrieval') && $ins($r, 'ss_retrieval_summary')
        && count(array_filter($r['log'], function ($l) { return $l[0] === 'update' && $l[1] === 'ss_customer_wallet'; })) === 1; });
$C["$R: settle partial ok (no wallet / summary rows)"] = array($R, 'settle', array('post' => $sp(array('amount_aed' => '600')), 'summary' => $summary, 'rules' => array_merge(array($intent($planPart, 'partial')), $retr())),
    function ($r) use ($ins) { return $r['code'] === 200 && $ins($r, 'ss_order') && !$ins($r, 'ss_retrieval_summary') && !$ins($r, 'ss_paid_dues_retrieval'); });
$C["$R: settle, same Stripe payment cannot settle a second intent => 409"] = array($R, 'settle', array('post' => $sp(), 'rules' => array_merge(array(array('/message LIKE/', array(array('log_id' => 9))), $intent($planFull, 'full')), $retr())),
    function ($r) use ($ins) { return $r['code'] === 409 && stripos($r['body'], 'payment_ref_already_used') !== false && !$ins($r, 'ss_order'); });
$C["$R: settle marks the intent settled right after the order (before bills), so a retry cannot duplicate"] = array($R, 'settle', array('post' => $sp(), 'summary' => $summary, 'rules' => array_merge(array($intent($planFull, 'full')), $retr())),
    function ($r) { $seq = array(); foreach ($r['log'] as $l) { if ($l[0] !== 'insert') continue; if ($l[1] === 'ss_order') $seq[] = 'order'; elseif ($l[1] === 'ss_dubai_log' && ($l[2]['action_type'] ?? '') === 'retrieval_settled') $seq[] = 'settled'; elseif ($l[1] === 'ss_customer_payment') $seq[] = 'bill'; }
        return array_slice($seq, 0, 3) === array('order', 'settled', 'bill'); });
$C["$R: create, date lock busy (another booking being saved) => 409"] = array($R, 'create', array('post' => $post(), 'rules' => array_merge(array(array('/GET_LOCK\(\?, 15\)/', array(array('l' => 0)))), $retr()), 'summary' => $summary),
    function ($r) use ($ins) { return $r['code'] === 409 && stripos($r['body'], 'being saved') !== false && !$ins($r, 'ss_order'); });
$C["$R: settle, date lock busy => 409, nothing created"] = array($R, 'settle', array('post' => $sp(), 'summary' => $summary, 'rules' => array_merge(array(array('/GET_LOCK\(\?, 15\)/', array(array('l' => 0))), $intent($planFull, 'full')), $retr())),
    function ($r) use ($ins) { return $r['code'] === 409 && !$ins($r, 'ss_order'); });
$C["$R: settle order insert fails => 500 + alert"] = array($R, 'settle', array('post' => $sp(), 'summary' => $summary, 'failInsert' => array('ss_order'), 'rules' => array_merge(array($intent($planFull, 'full')), $retr())), $err(500, 'order_failed'));
$C["$R: settle, existing settlement unreachable => still success + alert"] = array($R, 'settle', array('post' => $sp(), 'summary' => $summary, 'rules' => array_merge(array($intent($planFull, 'full')), $retr())),
    function ($r) { return $r['code'] === 200; });
return $C;
