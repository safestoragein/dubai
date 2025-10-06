-- Add company_name field to safestorage_dubai_form table
ALTER TABLE safestorage_dubai_form 
ADD COLUMN company_name VARCHAR(255) DEFAULT NULL AFTER customer_name;

-- You can run this SQL script in your MySQL database using:
-- mysql -u root -p safestor_india < database/add_company_name_field.sql