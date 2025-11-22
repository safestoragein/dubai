-- Database Schema for Blog System
-- SafeStorage Dubai

-- 1. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content LONGTEXT NOT NULL, -- HTML content from rich text editor
    featured_image VARCHAR(500),
    author_name VARCHAR(100) DEFAULT 'SafeStorage Team',
    author_avatar VARCHAR(500),
    category VARCHAR(100) DEFAULT 'Storage Tips',
    tags JSON, -- Store multiple tags as JSON array
    read_time INT DEFAULT 5, -- Reading time in minutes
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT TRUE,
    meta_title VARCHAR(255), -- SEO meta title
    meta_description TEXT, -- SEO meta description
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_slug (slug),
    INDEX idx_category (category),
    INDEX idx_published (is_published, published_at),
    INDEX idx_featured (is_featured)
);

-- 2. BLOG CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS blog_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    image_url VARCHAR(500),
    post_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_slug (slug)
);

-- 3. BLOG COMMENTS TABLE (Optional - for future use)
CREATE TABLE IF NOT EXISTS blog_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    parent_id INT DEFAULT NULL, -- For nested comments
    author_name VARCHAR(100) NOT NULL,
    author_email VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES blog_comments(id) ON DELETE CASCADE,
    INDEX idx_post (post_id),
    INDEX idx_approved (is_approved)
);

-- 4. BLOG LIKES TABLE (Track user likes)
CREATE TABLE IF NOT EXISTS blog_likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_ip VARCHAR(45), -- Store IP address or user ID
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
    UNIQUE KEY unique_like (post_id, user_ip),
    INDEX idx_post (post_id)
);

-- 5. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    role ENUM('admin', 'editor', 'author') DEFAULT 'author',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email)
);

-- 6. LEADS/INQUIRIES TABLE (Already exists but here's the structure)
CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(100),
    service_type VARCHAR(100),
    storage_size VARCHAR(50),
    message TEXT,
    source VARCHAR(50) DEFAULT 'website', -- website, blog, landing_page
    status ENUM('new', 'contacted', 'qualified', 'converted', 'closed') DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);

-- 7. MEDIA LIBRARY TABLE (For managing uploaded images)
CREATE TABLE IF NOT EXISTS media_library (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(50),
    file_size INT,
    alt_text VARCHAR(255),
    uploaded_by INT,
    used_in JSON, -- Track where this media is used
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (uploaded_by) REFERENCES admin_users(id) ON DELETE SET NULL,
    INDEX idx_type (file_type),
    INDEX idx_created (created_at)
);

-- Insert default categories
INSERT INTO blog_categories (name, slug, description) VALUES
('Storage Tips', 'storage-tips', 'Helpful tips for organizing and optimizing your storage space'),
('Moving Guide', 'moving-guide', 'Complete guides for smooth and stress-free moving'),
('Business Storage', 'business-storage', 'Storage solutions for businesses and enterprises'),
('Organization', 'organization', 'Home and office organization techniques'),
('News', 'news', 'Latest news and updates from SafeStorage Dubai'),
('Seasonal Storage', 'seasonal-storage', 'Seasonal storage tips and solutions')
ON DUPLICATE KEY UPDATE name=name;

-- Insert admin user (password: kushal@3344)
-- Note: In production, never store plain text passwords
INSERT INTO admin_users (email, password_hash, full_name, role) VALUES
('kushal@safestorage.in', '$2b$10$WKDjvx/93z.8A.4lbxJhUOvs4mMOx/3ai1Ut0B1eVy6MxcLW6ROGi', 'Kushal', 'admin')
ON DUPLICATE KEY UPDATE email=email;