-- Fix lead_id to be auto-increment
ALTER TABLE safestorage_dubai_form 
MODIFY COLUMN lead_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

-- You can run this SQL script in your MySQL database using:
-- mysql -u root -p safestor_india < database/fix_lead_id_autoincrement.sql