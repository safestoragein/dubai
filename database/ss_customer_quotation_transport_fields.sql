-- Columns `ss_customer_quotation` needs for the Dubai quote form's transport
-- fields. Run on the safestorage.in database (NOT the EC2 one).
--
-- Why: the Dubai quote form posts these to insert_quotation_dubai, but that
-- endpoint builds its INSERT from a fixed column list, so any field without a
-- matching column is silently discarded. Adding the columns is only half the
-- fix — insert_quotation_dubai.php must also read and bind them (see below).
--
-- MariaDB supports ADD COLUMN IF NOT EXISTS. On MySQL 8 remove the
-- "IF NOT EXISTS" from each line and skip any column that already exists.

ALTER TABLE ss_customer_quotation
  -- How the goods reach the warehouse: 'transport' (we collect) or 'self_drop'
  ADD COLUMN IF NOT EXISTS delivery_mode          VARCHAR(32)   DEFAULT NULL,

  -- What the customer pays for door-to-door collection, incl. the AED 60
  -- handling amount. 0 for self_drop, and 0 when out of area (see below).
  ADD COLUMN IF NOT EXISTS transport_price        DECIMAL(10,2) DEFAULT NULL,

  -- Vehicle tier rate before handling (500 / 900 / 1308, or pallets x 218)
  ADD COLUMN IF NOT EXISTS transport_base_price   DECIMAL(10,2) DEFAULT NULL,

  -- Flat handling amount added to transport (currently 60)
  ADD COLUMN IF NOT EXISTS transport_surcharge    DECIMAL(10,2) DEFAULT NULL,

  -- Booking token: 50 for transport, 20 for self drop. Adjusted later against
  -- the transport bill (transport) or the storage bill (self drop).
  ADD COLUMN IF NOT EXISTS token_amount           DECIMAL(10,2) DEFAULT NULL,

  -- 1 = pickup is beyond the 60 km service radius, so transport could not be
  -- auto-priced and the team must quote it by hand. THE IMPORTANT ONE: without
  -- this, out-of-area leads look like ordinary leads with no transport price.
  ADD COLUMN IF NOT EXISTS transport_custom_quote TINYINT(1)    NOT NULL DEFAULT 0,

  -- Straight-line distance from the warehouse (24.989924, 55.154235)
  ADD COLUMN IF NOT EXISTS pickup_distance_km     DECIMAL(7,2)  DEFAULT NULL,

  -- Exact pickup coordinates from the Google Places selection. Null when the
  -- customer typed the address by hand instead of picking a suggestion.
  ADD COLUMN IF NOT EXISTS pickup_lat             DECIMAL(10,7) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS pickup_lng             DECIMAL(10,7) DEFAULT NULL;

-- Lets the team pull the leads that need a manual transport price.
ALTER TABLE ss_customer_quotation
  ADD INDEX IF NOT EXISTS idx_transport_custom_quote (transport_custom_quote);


-- ---------------------------------------------------------------------------
-- insert_quotation_dubai.php also needs to read and bind the new fields.
-- Follow whatever pattern the file already uses for total_pallets; the POST
-- keys are exactly these:
--
--   delivery_mode           string   'transport' | 'self_drop'
--   transport_price         numeric
--   transport_base_price    numeric  (sent on the step-2 save only)
--   transport_surcharge     numeric  (sent on the step-2 save only)
--   token_amount            numeric
--   transport_custom_quote  '0' | '1'
--   pickup_distance_km      numeric, '' when the address was hand-typed
--   pickup_lat              numeric, '' when the address was hand-typed
--   pickup_lng              numeric, '' when the address was hand-typed
--
-- Note the empty strings: pickup_distance_km / lat / lng are sent as '' rather
-- than omitted when there are no coordinates, so cast '' to NULL rather than
-- letting it become 0 — a stored 0,0 would read as a real position off Africa.
--
-- Verifying it worked: submit a test quote from https://safestorage.ae/get-quote
-- and check the newest row —
--   SELECT quotation_id, delivery_mode, transport_price, token_amount,
--          transport_custom_quote, pickup_distance_km, pickup_lat, pickup_lng
--   FROM ss_customer_quotation ORDER BY quotation_id DESC LIMIT 1;
--
-- Until this is applied, the same data is being captured in the EC2 MariaDB
-- table `quotation_dubai` (see lib/quotation-db.ts), which stores every field
-- plus the complete raw payload. That is the fallback, not the fix.
-- ---------------------------------------------------------------------------
