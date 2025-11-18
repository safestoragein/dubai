-- SafeStorage Dubai New Quotation Table
-- Table: ss_new_dubai_customer_quotation
-- Description: Store customer quotation data with pricing and storage details

DROP TABLE IF EXISTS `ss_new_dubai_customer_quotation`;

CREATE TABLE `ss_new_dubai_customer_quotation` (
  `quotation_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `storage_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `closed_storage_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `shared_storage_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `selected_storage_type` enum('closed','shared') DEFAULT NULL,
  `lift` enum('yes','no') DEFAULT NULL,
  `floor` varchar(50) DEFAULT NULL,
  `total_sqft` int(11) DEFAULT '0',
  `total_points` int(11) DEFAULT '0',
  `total_pallets` int(11) DEFAULT '0',
  `quotation_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`quotation_id`),
  KEY `idx_customer_id` (`customer_id`),
  KEY `idx_quotation_created_at` (`quotation_created_at`),
  KEY `idx_storage_price` (`storage_price`),
  KEY `idx_closed_storage_price` (`closed_storage_price`),
  KEY `idx_shared_storage_price` (`shared_storage_price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Show table structure
DESCRIBE `ss_new_dubai_customer_quotation`;