-- First, let's create a temporary column for new auto-increment IDs
ALTER TABLE safestorage_dubai_form ADD COLUMN temp_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

-- Now drop the old lead_id column
ALTER TABLE safestorage_dubai_form DROP COLUMN lead_id;

-- Rename temp_id to lead_id
ALTER TABLE safestorage_dubai_form CHANGE COLUMN temp_id lead_id INT NOT NULL AUTO_INCREMENT;

-- You can run this SQL script in your MySQL database using:
-- mysql -u root -p safestor_india < database/fix_lead_id_properly.sql