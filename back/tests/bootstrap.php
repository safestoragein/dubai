<?php
// Minimal CodeIgniter stand-ins so the Dubai controllers run without a database, a web server or the legacy app.
define('BASEPATH', __DIR__);

class FakeRes {
    private $rows;
    function __construct($rows) { $this->rows = array_map(function ($r) { return (object) $r; }, $rows); }
    function row() { return $this->rows ? $this->rows[0] : null; }
    function result() { return $this->rows; }
    function num_rows() { return count($this->rows); }
}
class FakeDb {
    public $db_debug = true; public $rules = array(); public $log = array(); public $nextId = 500; public $lastId = 0; public $failInsert = array();
    function query($sql, $binds = array()) {
        $sql = preg_replace('/\s+/', ' ', $sql);
        foreach ($this->rules as $r) if (preg_match($r[0], $sql)) { $rows = is_callable($r[1]) ? call_user_func($r[1], $binds) : $r[1]; return new FakeRes($rows); }
        return new FakeRes(array());
    }
    function insert($t, $d) { $this->log[] = array('insert', $t, $d); if (in_array($t, $this->failInsert, true)) { $this->lastId = 0; return false; } $this->lastId = ++$this->nextId; return true; }
    function insert_id() { return $this->lastId; }
    function where() { return $this; } function where_in() { return $this; }
    function update($t, $d) { $this->log[] = array('update', $t, $d); return true; }
    function delete($t, $w) { $this->log[] = array('delete', $t, $w); return true; }
}
class FakeInput {
    function post($k = null) { return isset($_POST[$k]) ? $_POST[$k] : null; }
    function ip_address() { return '10.0.0.9'; }
}
class FakeConfig {
    public $items = array();
    function load() { return true; }
    function item($k) { return isset($this->items[$k]) ? $this->items[$k] : null; }
}
class FakeAny { function __call($n, $a) { return true; } }
class FakeLoad extends FakeAny {}
class Modules { static $summary = null; static function run() { return self::$summary; } }
class MY_Controller {
    function __get($n) { return $GLOBALS['CI_' . $n] ?? null; }
}
