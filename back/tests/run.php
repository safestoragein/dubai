<?php
// php -d zend_extension=xdebug.so -d xdebug.mode=coverage back/tests/run.php   → pass/fail list + line coverage of the Dubai controllers
$C = require __DIR__ . '/cases.php';
$filter = $argv[1] ?? '';
$pass = 0; $fail = array(); $cov = array();
foreach ($C as $name => $case) {
    if ($filter !== '' && stripos($name, $filter) === false) continue;
    $out = shell_exec(escapeshellarg(PHP_BINARY) . ' ' . ((extension_loaded('xdebug') && getenv('XDEBUG_SO')) ? '-d zend_extension=' . escapeshellarg((string) getenv('XDEBUG_SO')) . ' ' : '') . '-d xdebug.mode=coverage -d display_errors=0 ' . escapeshellarg(__DIR__ . '/runner.php') . ' ' . escapeshellarg($name) . ' 2>&1');
    $pos = strpos((string) $out, '@@RESULT@@');
    $r = $pos === false ? null : json_decode(substr($out, $pos + 10), true);
    $good = false;
    if ($r) { try { $good = (bool) $case[3]($r); } catch (Throwable $e) { $good = false; } foreach ($r['cov'] as $f => $lines) foreach ($lines as $ln => $hit) { if (!isset($cov[$f][$ln]) || $hit > 0) $cov[$f][$ln] = max($cov[$f][$ln] ?? -1, $hit); } }
    if ($good) $pass++; else $fail[] = $name . '   → ' . ($r ? substr($r['body'], 0, 160) . ' [HTTP ' . $r['code'] . ']' : 'no result: ' . substr((string) $out, 0, 200));
}
echo "\nTests: $pass passed, " . count($fail) . " failed, " . ($pass + count($fail)) . " total\n";
foreach ($fail as $f) echo "  FAIL  $f\n";
echo "\nLine coverage (executable lines of each controller)\n";
$tl = 0; $th = 0;
foreach ($cov as $f => $lines) {
    $exec = array_filter($lines, function ($h) { return $h !== -2; });
    $hit = array_filter($exec, function ($h) { return $h > 0; });
    printf("  %-22s %4d / %-4d  %5.1f%%\n", $f, count($hit), count($exec), count($exec) ? 100 * count($hit) / count($exec) : 0);
    $tl += count($exec); $th += count($hit);
    if (getenv('SHOW_MISSED')) { $miss = array_keys(array_filter($exec, function ($h) { return $h <= 0; })); echo '    missed lines: ' . implode(',', $miss) . "\n"; }
}
if ($tl) printf("  %-22s %4d / %-4d  %5.1f%%\n", 'TOTAL', $th, $tl, 100 * $th / $tl);
exit(count($fail) ? 1 : 0);
