-- Local blog table for the Dubai site (EC2 MariaDB).
-- Column shape mirrors the safestorage.in /get_blog_content feed exactly so the
-- app's existing blog code consumes it unchanged.
-- This script does not create or select a database. Run it against the schema
-- named by DB_NAME, e.g.  mysql -u "$DB_USER" -p "$DB_NAME" < blog_content_dubai.sql
CREATE TABLE IF NOT EXISTS blog_content (
  post_id       INT AUTO_INCREMENT PRIMARY KEY,
  title         VARCHAR(500),
  post_category VARCHAR(255),
  post_images   TEXT,                       -- image filename (served from /blog-images/)
  description   LONGTEXT,                    -- full HTML body
  seo_title     VARCHAR(500),
  seo_desc      TEXT,
  tags          TEXT,
  status        VARCHAR(50) DEFAULT '1',
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  KEY idx_status (status),
  KEY idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
