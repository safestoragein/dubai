# Single Table Blog Management System

## Table Name: `blog_content`

This single table handles ALL your blog system needs using a `content_type` field to differentiate between different types of data.

## Content Types

| content_type | Purpose | Key Fields Used |
|--------------|---------|-----------------|
| **post** | Blog posts | title, content (HTML), slug, category, tags, featured_image |
| **category** | Blog categories | title, slug, content (description), featured_image |
| **lead** | Customer inquiries | author_name, author_email, author_phone, content (message) |
| **admin_user** | Admin users | author_email, password_hash, user_role |
| **media** | Image uploads | featured_image, extra_data, post_id |
| **comment** | Blog comments | post_id, author_name, content |
| **like** | Post likes | post_id, ip_address |

## Key Features

### 1. **Flexible Storage**
- Single table stores everything
- `content_type` field identifies record type
- `extra_data` JSON field for additional flexible data

### 2. **Rich Text Content**
- `content` field stores HTML from TipTap editor
- Supports full HTML content with formatting

### 3. **Relationships**
- `parent_id` - For hierarchical data (nested comments)
- `post_id` - Links comments, likes, media to posts

### 4. **Performance**
- Multiple indexes for fast queries
- Full-text search on title, content, excerpt
- Soft delete with `deleted_at` field

## Quick Usage Examples

### Save a Blog Post
```sql
INSERT INTO blog_content (
    content_type, 
    slug, 
    title, 
    content,  -- HTML from rich text editor
    excerpt,
    category,
    featured_image
) VALUES (
    'post',
    'my-blog-post',
    'My Blog Title',
    '<h1>Title</h1><p>Rich text HTML content...</p>',
    'Short description...',
    'Storage Tips',
    'https://image-url.jpg'
);
```

### Save a Lead/Inquiry
```sql
INSERT INTO blog_content (
    content_type,
    author_name,
    author_email,
    author_phone,
    content,
    status
) VALUES (
    'lead',
    'John Doe',
    'john@email.com',
    '+971501234567',
    'Need storage for 3 months',
    'new'
);
```

### Get All Blog Posts
```sql
SELECT * FROM blog_content 
WHERE content_type = 'post' 
AND is_published = TRUE
AND deleted_at IS NULL;
```

### Get All Leads
```sql
SELECT 
    author_name as name,
    author_email as email,
    author_phone as phone,
    content as message,
    status,
    created_at
FROM blog_content 
WHERE content_type = 'lead'
AND deleted_at IS NULL;
```

## Advantages of Single Table

✅ **Simplicity** - Only one table to manage
✅ **Flexibility** - Easy to add new content types
✅ **Maintenance** - Single backup, single migration
✅ **JSON Support** - Store complex data in extra_data field
✅ **Soft Delete** - Never lose data, just mark as deleted
✅ **Search** - Full-text search across all content

## Database Connection (Node.js Example)

```javascript
// api/blogs/route.js
import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
});

// Get all blog posts
export async function GET() {
  const [rows] = await db.execute(
    `SELECT * FROM blog_content 
     WHERE content_type = 'post' 
     AND is_published = TRUE 
     AND deleted_at IS NULL
     ORDER BY created_at DESC`
  );
  
  return Response.json({ success: true, data: rows });
}

// Create new blog post
export async function POST(request) {
  const data = await request.json();
  
  const [result] = await db.execute(
    `INSERT INTO blog_content 
     (content_type, slug, title, content, excerpt, category, featured_image) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ['post', data.slug, data.title, data.content, data.excerpt, data.category, data.featured_image]
  );
  
  return Response.json({ success: true, id: result.insertId });
}
```

## Required Columns Summary

The single `blog_content` table includes:

1. **id** - Primary key
2. **content_type** - Identifies data type
3. **title** - Post/category title
4. **content** - HTML content/message
5. **slug** - URL-friendly identifier
6. **author_name/email/phone** - User info
7. **featured_image** - Main image
8. **category** - Post category
9. **tags** - JSON array of tags
10. **status** - Record status
11. **extra_data** - Flexible JSON storage
12. **created_at/updated_at** - Timestamps
13. **deleted_at** - Soft delete

This single table solution eliminates complexity while providing all functionality needed for your blog system!