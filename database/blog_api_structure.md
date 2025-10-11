# Blog Database Structure & API Documentation

## Database Tables Overview

### 1. **blog_posts** (Main Blog Table)
Primary table for storing all blog content.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Auto-increment ID |
| slug | VARCHAR(255) | URL-friendly unique identifier |
| title | VARCHAR(255) | Blog post title |
| excerpt | TEXT | Short description/summary |
| content | LONGTEXT | HTML content from rich editor |
| featured_image | VARCHAR(500) | URL/path to featured image |
| author_name | VARCHAR(100) | Author's display name |
| author_avatar | VARCHAR(500) | Author's avatar URL |
| category | VARCHAR(100) | Main category |
| tags | JSON | Array of tags ["tag1", "tag2"] |
| read_time | INT | Estimated reading time in minutes |
| views | INT | View counter |
| likes | INT | Like counter |
| is_featured | BOOLEAN | Featured post flag |
| is_published | BOOLEAN | Publication status |
| meta_title | VARCHAR(255) | SEO title |
| meta_description | TEXT | SEO description |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |
| published_at | TIMESTAMP | Publication timestamp |

### 2. **blog_categories**
Store blog categories separately for better organization.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Auto-increment ID |
| name | VARCHAR(100) | Category name |
| slug | VARCHAR(100) | URL-friendly slug |
| description | TEXT | Category description |
| image_url | VARCHAR(500) | Category image |
| post_count | INT | Number of posts |

### 3. **admin_users**
Admin users who can create/edit blogs.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Auto-increment ID |
| email | VARCHAR(255) | Login email |
| password_hash | VARCHAR(255) | Bcrypt hashed password |
| full_name | VARCHAR(100) | Display name |
| role | ENUM | admin/editor/author |
| is_active | BOOLEAN | Account status |
| last_login | TIMESTAMP | Last login time |

### 4. **leads**
Customer inquiries and leads from forms.

| Column | Type | Description |
|--------|------|-------------|
| id | INT (Primary Key) | Auto-increment ID |
| name | VARCHAR(100) | Customer name |
| email | VARCHAR(255) | Customer email |
| phone | VARCHAR(50) | Phone number |
| message | TEXT | Inquiry message |
| status | ENUM | new/contacted/converted |
| created_at | TIMESTAMP | Submission time |

## API Routes Structure

### Blog Posts API

```javascript
// GET - Fetch all published blogs
GET /api/blogs
Response: {
  success: true,
  data: [{
    id: 1,
    slug: "storage-tips",
    title: "10 Storage Tips",
    excerpt: "...",
    featured_image: "...",
    author_name: "...",
    category: "Storage Tips",
    read_time: 5,
    created_at: "2024-01-01"
  }]
}

// GET - Fetch single blog by slug
GET /api/blogs/[slug]
Response: {
  success: true,
  data: {
    id: 1,
    title: "...",
    content: "<html content>",
    // ... all fields
  }
}

// POST - Create new blog (Admin only)
POST /api/admin/blogs
Headers: { Authorization: "Bearer <token>" }
Body: {
  title: "New Blog Post",
  content: "<html from editor>",
  excerpt: "...",
  category: "Storage Tips",
  featured_image: "base64 or URL",
  tags: ["tag1", "tag2"]
}

// PUT - Update blog (Admin only)
PUT /api/admin/blogs/[id]
Headers: { Authorization: "Bearer <token>" }
Body: {
  // Same as POST
}

// DELETE - Delete blog (Admin only)
DELETE /api/admin/blogs/[id]
Headers: { Authorization: "Bearer <token>" }

// POST - Like a blog post
POST /api/blogs/[id]/like
Body: { user_ip: "..." }

// GET - Increment view count
GET /api/blogs/[id]/view
```

### Categories API

```javascript
// GET - All categories with post count
GET /api/categories
Response: {
  data: [{
    id: 1,
    name: "Storage Tips",
    slug: "storage-tips",
    post_count: 15
  }]
}
```

### Leads API (Admin only)

```javascript
// GET - All leads
GET /api/admin/leads
Headers: { Authorization: "Bearer <token>" }

// PUT - Update lead status
PUT /api/admin/leads/[id]
Headers: { Authorization: "Bearer <token>" }
Body: { status: "contacted" }

// POST - Create new lead (Public)
POST /api/leads
Body: {
  name: "John Doe",
  email: "john@example.com",
  phone: "+971501234567",
  message: "Need storage"
}
```

## Sample SQL Queries

### Fetch all published blogs
```sql
SELECT 
  id, slug, title, excerpt, featured_image,
  author_name, category, read_time, views, likes,
  created_at
FROM blog_posts
WHERE is_published = TRUE
ORDER BY published_at DESC
LIMIT 10 OFFSET 0;
```

### Fetch single blog by slug
```sql
SELECT * FROM blog_posts
WHERE slug = ? AND is_published = TRUE;

-- Also increment views
UPDATE blog_posts 
SET views = views + 1 
WHERE slug = ?;
```

### Create new blog post
```sql
INSERT INTO blog_posts (
  slug, title, excerpt, content, featured_image,
  author_name, category, tags, read_time,
  is_published, meta_title, meta_description
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
```

### Update blog post
```sql
UPDATE blog_posts SET
  title = ?,
  excerpt = ?,
  content = ?,
  featured_image = ?,
  category = ?,
  tags = ?,
  updated_at = NOW()
WHERE id = ?;
```

### Get blog statistics for dashboard
```sql
-- Total posts
SELECT COUNT(*) as total_posts FROM blog_posts;

-- Total views
SELECT SUM(views) as total_views FROM blog_posts;

-- Recent posts
SELECT title, views, created_at 
FROM blog_posts 
ORDER BY created_at DESC 
LIMIT 5;

-- Popular posts
SELECT title, views, likes 
FROM blog_posts 
ORDER BY views DESC 
LIMIT 5;
```

## Implementation Notes

1. **Security**:
   - Always hash passwords with bcrypt
   - Use JWT tokens for authentication
   - Sanitize HTML content before saving
   - Validate all inputs

2. **Performance**:
   - Add indexes on frequently queried columns
   - Use pagination for list endpoints
   - Cache popular blog posts
   - Optimize images before storing

3. **SEO**:
   - Generate slugs from titles
   - Store meta tags separately
   - Create XML sitemap from blog data
   - Use structured data (JSON-LD)

4. **Storage**:
   - Store images in cloud storage (S3, Cloudinary)
   - Save only URLs in database
   - Use CDN for serving images

5. **Features to Add**:
   - Blog search functionality
   - Related posts
   - Newsletter subscription
   - Social media sharing
   - Comment moderation
   - Blog analytics dashboard