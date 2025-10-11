-- Single Table Solution for Blog Management
-- SafeStorage Dubai - All-in-One Blog Table

DROP TABLE IF EXISTS blog_content;

CREATE TABLE blog_content (
    -- Primary Identification
    id INT AUTO_INCREMENT PRIMARY KEY,
    content_type ENUM('post', 'category', 'lead', 'admin_user', 'media', 'comment', 'like') NOT NULL DEFAULT 'post',
    
    -- Common Fields (Used across different content types)
    slug VARCHAR(255),
    title VARCHAR(500),
    content LONGTEXT, -- For posts: HTML content, For leads: message, For categories: description
    excerpt TEXT, -- Short description for posts, notes for leads
    status VARCHAR(50) DEFAULT 'active', -- active/inactive/draft/published/new/contacted/converted
    
    -- User/Author Information
    author_name VARCHAR(255),
    author_email VARCHAR(255),
    author_phone VARCHAR(50),
    author_avatar VARCHAR(500),
    password_hash VARCHAR(255), -- For admin users only
    user_role VARCHAR(50), -- admin/editor/author for admin users
    
    -- Media/Images
    featured_image TEXT, -- Can store URL or base64
    image_gallery JSON, -- Multiple images as JSON array
    
    -- Post Specific Fields
    category VARCHAR(255),
    tags JSON, -- Array of tags
    read_time INT DEFAULT 5,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT TRUE,
    
    -- SEO Fields
    meta_title VARCHAR(500),
    meta_description TEXT,
    meta_keywords TEXT,
    
    -- Relationships (Using IDs to reference other rows in same table)
    parent_id INT DEFAULT NULL, -- For comments (parent comment), categories (parent category)
    post_id INT DEFAULT NULL, -- For comments, likes, media (which post they belong to)
    
    -- Additional Data (Flexible JSON storage)
    extra_data JSON, -- Store any additional data as JSON
    
    -- Tracking Fields
    ip_address VARCHAR(45), -- For tracking likes, comments
    user_agent TEXT, -- Browser/device info
    source VARCHAR(100), -- website/blog/admin/api
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP NULL,
    deleted_at TIMESTAMP NULL, -- Soft delete
    
    -- Indexes for Performance
    INDEX idx_type (content_type),
    INDEX idx_slug (slug),
    INDEX idx_status (status),
    INDEX idx_category (category),
    INDEX idx_parent (parent_id),
    INDEX idx_post (post_id),
    INDEX idx_published (is_published, published_at),
    INDEX idx_featured (is_featured),
    INDEX idx_deleted (deleted_at),
    INDEX idx_email (author_email),
    UNIQUE KEY unique_slug_type (slug, content_type),
    UNIQUE KEY unique_like (post_id, ip_address, content_type),
    FULLTEXT(title, content, excerpt) -- For search functionality
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- USAGE EXAMPLES
-- ============================================

-- 1. INSERT A BLOG POST
INSERT INTO blog_content (
    content_type, 
    slug, 
    title, 
    content, 
    excerpt,
    category, 
    tags, 
    author_name,
    featured_image,
    meta_title,
    meta_description,
    is_published,
    published_at
) VALUES (
    'post',
    'storage-tips-dubai',
    '10 Best Storage Tips for Dubai Residents',
    '<h1>Storage Tips</h1><p>Content from rich text editor...</p>',
    'Discover the best storage tips for Dubai residents...',
    'Storage Tips',
    '["storage", "dubai", "organization"]',
    'SafeStorage Team',
    'https://example.com/image.jpg',
    '10 Best Storage Tips | SafeStorage Dubai',
    'Learn the top 10 storage tips for Dubai residents...',
    TRUE,
    NOW()
);

-- 2. INSERT A CATEGORY
INSERT INTO blog_content (
    content_type,
    slug,
    title,
    content,
    featured_image
) VALUES (
    'category',
    'storage-tips',
    'Storage Tips',
    'Helpful tips and guides for storage solutions',
    'https://example.com/category-image.jpg'
);

-- 3. INSERT A LEAD/INQUIRY
INSERT INTO blog_content (
    content_type,
    author_name,
    author_email,
    author_phone,
    content,
    status,
    source,
    extra_data
) VALUES (
    'lead',
    'John Doe',
    'john@example.com',
    '+971501234567',
    'I need a storage unit for 3 months',
    'new',
    'website',
    '{"storage_size": "30 sqft", "duration": "3 months", "location": "Dubai Marina"}'
);

-- 4. INSERT AN ADMIN USER
INSERT INTO blog_content (
    content_type,
    author_email,
    password_hash,
    author_name,
    user_role,
    status
) VALUES (
    'admin_user',
    'kushal@safestorage.ae',
    '$2b$10$6PvaZ6VLGcQeVKZ3hXiVQ.TWweE5uxW9PI4fTb7kLJnL6glss2eza',
    'Kushal',
    'admin',
    'active'
);

-- 5. INSERT A MEDIA/IMAGE
INSERT INTO blog_content (
    content_type,
    title,
    featured_image,
    extra_data,
    post_id
) VALUES (
    'media',
    'Hero Banner Image',
    'https://example.com/uploads/hero-banner.jpg',
    '{"size": "245KB", "dimensions": "1920x1080", "alt_text": "Storage facility in Dubai"}',
    1
);

-- 6. INSERT A COMMENT
INSERT INTO blog_content (
    content_type,
    post_id,
    author_name,
    author_email,
    content,
    status,
    ip_address
) VALUES (
    'comment',
    1, -- References the blog post ID
    'Jane Smith',
    'jane@example.com',
    'Great tips! Very helpful for organizing my storage.',
    'approved',
    '192.168.1.1'
);

-- 7. INSERT A LIKE
INSERT INTO blog_content (
    content_type,
    post_id,
    ip_address,
    user_agent
) VALUES (
    'like',
    1, -- References the blog post ID
    '192.168.1.1',
    'Mozilla/5.0...'
);

-- ============================================
-- QUERY EXAMPLES
-- ============================================

-- Get all published blog posts
SELECT 
    id, slug, title, excerpt, featured_image,
    category, tags, author_name, views, likes,
    created_at, published_at
FROM blog_content
WHERE content_type = 'post' 
    AND is_published = TRUE 
    AND deleted_at IS NULL
ORDER BY published_at DESC;

-- Get single blog post with view count increment
UPDATE blog_content 
SET views = views + 1 
WHERE slug = 'storage-tips-dubai' AND content_type = 'post';

SELECT * FROM blog_content 
WHERE slug = 'storage-tips-dubai' 
    AND content_type = 'post' 
    AND deleted_at IS NULL;

-- Get all categories with post count
SELECT 
    c.id,
    c.title as category_name,
    c.slug,
    c.content as description,
    c.featured_image,
    COUNT(p.id) as post_count
FROM blog_content c
LEFT JOIN blog_content p ON p.category = c.title AND p.content_type = 'post'
WHERE c.content_type = 'category'
GROUP BY c.id;

-- Get all leads
SELECT 
    id,
    author_name as name,
    author_email as email,
    author_phone as phone,
    content as message,
    status,
    extra_data,
    created_at
FROM blog_content
WHERE content_type = 'lead'
    AND deleted_at IS NULL
ORDER BY created_at DESC;

-- Get comments for a post
SELECT 
    id,
    author_name,
    author_email,
    content,
    created_at
FROM blog_content
WHERE content_type = 'comment'
    AND post_id = 1
    AND status = 'approved'
    AND deleted_at IS NULL
ORDER BY created_at DESC;

-- Get like count for a post
SELECT COUNT(*) as like_count
FROM blog_content
WHERE content_type = 'like'
    AND post_id = 1
    AND deleted_at IS NULL;

-- Admin login check
SELECT 
    id,
    author_email as email,
    password_hash,
    author_name as name,
    user_role as role
FROM blog_content
WHERE content_type = 'admin_user'
    AND author_email = 'kushal@safestorage.ae'
    AND status = 'active'
    AND deleted_at IS NULL;

-- Search blogs
SELECT 
    id, slug, title, excerpt, featured_image,
    MATCH(title, content, excerpt) AGAINST('storage tips' IN NATURAL LANGUAGE MODE) as relevance
FROM blog_content
WHERE content_type = 'post'
    AND is_published = TRUE
    AND deleted_at IS NULL
    AND MATCH(title, content, excerpt) AGAINST('storage tips' IN NATURAL LANGUAGE MODE)
ORDER BY relevance DESC
LIMIT 10;

-- Soft delete a record
UPDATE blog_content 
SET deleted_at = NOW() 
WHERE id = 1;

-- Get dashboard statistics
SELECT 
    SUM(CASE WHEN content_type = 'post' THEN 1 ELSE 0 END) as total_posts,
    SUM(CASE WHEN content_type = 'lead' THEN 1 ELSE 0 END) as total_leads,
    SUM(CASE WHEN content_type = 'post' THEN views ELSE 0 END) as total_views,
    SUM(CASE WHEN content_type = 'lead' AND status = 'new' THEN 1 ELSE 0 END) as new_leads
FROM blog_content
WHERE deleted_at IS NULL;