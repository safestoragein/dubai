-- Packers & movers quote requests (safestorage.ae/packers-and-movers/get-quote).
-- Lives in the Dubai site's own `safestorage_dubai` database, separate from the storage quote
-- (ss_new_dubai_customer_quotation). Created automatically by lib/movers-quote-db.ts on first
-- use; this file is the same DDL for running by hand.

CREATE TABLE IF NOT EXISTS movers_quotes (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  reference     VARCHAR(24)  NOT NULL,
  status        VARCHAR(20)  NOT NULL DEFAULT 'new',      -- new | contacted | quoted | booked | lost
  name          VARCHAR(100) NOT NULL,
  phone         VARCHAR(30)  NOT NULL,
  email         VARCHAR(120) NOT NULL,
  move_type     VARCHAR(20)  NOT NULL,                    -- home | villa | office
  home_size     VARCHAR(30)  NOT NULL,
  move_date     DATE         NOT NULL,
  flexible_date TINYINT(1)   NOT NULL DEFAULT 0,
  from_address  VARCHAR(300) NOT NULL,
  from_emirate  VARCHAR(30)  NOT NULL,
  from_floor    VARCHAR(10)  DEFAULT NULL,
  from_lift     VARCHAR(3)   NOT NULL,                    -- yes | no
  to_address    VARCHAR(300) NOT NULL,
  to_emirate    VARCHAR(30)  NOT NULL,
  to_floor      VARCHAR(10)  DEFAULT NULL,
  to_lift       VARCHAR(3)   NOT NULL,
  packing_level VARCHAR(20)  NOT NULL,                    -- full | fragile | none
  extras        TEXT         DEFAULT NULL,                -- comma-separated extra ids
  items_unsure  TINYINT(1)   NOT NULL DEFAULT 0,          -- customer asked for a survey instead of listing items
  notes         TEXT         DEFAULT NULL,
  email_sent    TINYINT(1)   NOT NULL DEFAULT 0,
  source_page   VARCHAR(200) DEFAULT NULL,
  ip_address    VARCHAR(45)  DEFAULT NULL,
  user_agent    VARCHAR(300) DEFAULT NULL,
  created_at    DATETIME     NOT NULL,
  updated_at    DATETIME     NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_reference (reference),
  KEY idx_status_created (status, created_at),
  KEY idx_move_date (move_date),
  KEY idx_phone (phone),
  KEY idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS movers_quote_items (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  quote_id   INT UNSIGNED NOT NULL,
  item_group VARCHAR(40)  NOT NULL,
  item_code  VARCHAR(30)  NOT NULL,
  item_label VARCHAR(80)  NOT NULL,
  quantity   SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY idx_quote (quote_id),
  CONSTRAINT fk_movers_item_quote FOREIGN KEY (quote_id) REFERENCES movers_quotes (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
