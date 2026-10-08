<?php
// Runs ONE case in its own process (the controllers die() after answering) and prints what happened.
$name = $argv[1];
$C = require __DIR__ . '/cases.php';
[$class, $method, $cfg] = $C[$name];
require __DIR__ . '/bootstrap.php';
$src = realpath(__DIR__ . '/../modules/dubai/controllers') . '/';
if (function_exists('xdebug_start_code_coverage')) xdebug_start_code_coverage(XDEBUG_CC_UNUSED | XDEBUG_CC_DEAD_CODE);
require $src . $class . '.php';

$_SERVER['REQUEST_METHOD'] = $cfg['method'] ?? 'POST';
$_POST = $cfg['post'] ?? array();
foreach (($cfg['server'] ?? array()) as $k => $v) $_SERVER[$k] = $v;
$key = array_key_exists('key', $cfg) ? $cfg['key'] : GOODKEY;
if ($key !== '') $_SERVER['HTTP_X_DUBAI_KEY'] = $key;
$db = new FakeDb(); $db->rules = $cfg['rules'] ?? array(); $db->failInsert = $cfg['failInsert'] ?? array();
$conf = new FakeConfig(); $conf->items = $cfg['config'] ?? array('dubai_back_key' => GOODKEY);
$GLOBALS['CI_db'] = $db; $GLOBALS['CI_input'] = new FakeInput(); $GLOBALS['CI_config'] = $conf; $GLOBALS['CI_load'] = new FakeLoad(); $GLOBALS['CI_email'] = new FakeAny();
Modules::$summary = $cfg['summary'] ?? null;

ob_start();
register_shutdown_function(function () use ($db, $src) {
    $body = ob_get_clean();
    $cov = array();
    if (function_exists('xdebug_get_code_coverage')) {
        xdebug_stop_code_coverage(false);
        foreach (xdebug_get_code_coverage() as $f => $lines) if (strpos($f, $src) === 0) $cov[basename($f)] = $lines;
    }
    $code = http_response_code();
    fwrite(STDOUT, "\n@@RESULT@@" . json_encode(array('code' => $code === false ? 200 : $code, 'body' => $body, 'json' => json_decode($body, true), 'log' => $db->log, 'cov' => $cov)));
});
$ctl = (new ReflectionClass($class))->newInstanceWithoutConstructor();
try {
    $ctor = new ReflectionMethod($ctl, '__construct'); $ctor->invoke($ctl);
    $ctl->$method();
} catch (Throwable $e) { echo json_encode(array('status' => 'crash', 'message' => $e->getMessage() . ' @' . $e->getLine())); }
