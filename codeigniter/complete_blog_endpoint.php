<?php

// Complete endpoint with ALL columns for blog_content table
// Table columns: blog_id (AI), content_type, content, meta_title, meta_description, slug, tags, extra_data

/**
 * Insert blog post with all columns
 * Complete endpoint matching your table structure exactly
 */
public function insert_blog_post() {
    date_default_timezone_set('Asia/Kolkata');
    
    // Get all POST data matching your table columns
    $content_type = $this->input->post('content_type');
    $content = $this->input->post('content'); // HTML from TipTap editor
    $meta_title = $this->input->post('meta_title');
    $meta_description = $this->input->post('meta_description'); // SEO description
    $slug = $this->input->post('slug');
    $tags = $this->input->post('tags'); // Array or string of tags
    $extra_data = $this->input->post('extra_data'); // Additional data as array
    
    // Additional fields that can go in extra_data
    $author = $this->input->post('author');
    $category = $this->input->post('category');
    $featured_image = $this->input->post('featured_image');
    $excerpt = $this->input->post('excerpt');
    $is_published = $this->input->post('is_published');
    $read_time = $this->input->post('read_time');
    
    // Validation - content is required
    if (!empty($content)) {
        
        // Set default content_type if not provided
        if (empty($content_type)) {
            $content_type = 'post';
        }
        
        // Generate slug if not provided
        if (empty($slug)) {
            if (!empty($meta_title)) {
                $slug = $this->generate_slug($meta_title);
            } else {
                $slug = 'blog-' . time();
            }
        }
        
        // Convert tags array to JSON string if needed
        if (is_array($tags)) {
            $tags = json_encode($tags);
        } elseif (empty($tags)) {
            $tags = null;
        }
        
        // Build extra_data JSON
        $extra_data_array = array();
        
        // If extra_data was posted as array, use it
        if (is_array($extra_data)) {
            $extra_data_array = $extra_data;
        }
        
        // Add additional fields to extra_data
        if (!empty($author)) $extra_data_array['author'] = $author;
        if (!empty($category)) $extra_data_array['category'] = $category;
        if (!empty($featured_image)) $extra_data_array['featured_image'] = $featured_image;
        if (!empty($excerpt)) $extra_data_array['excerpt'] = $excerpt;
        if (!empty($read_time)) $extra_data_array['read_time'] = $read_time;
        
        // Add default values
        $extra_data_array['is_published'] = isset($is_published) ? $is_published : true;
        $extra_data_array['views'] = 0;
        $extra_data_array['likes'] = 0;
        $extra_data_array['created_at'] = date('Y-m-d H:i:s');
        $extra_data_array['created_by'] = 'admin'; // Or get from session
        
        // Convert extra_data to JSON
        $extra_data_json = !empty($extra_data_array) ? json_encode($extra_data_array) : null;
        
        // Prepare data array matching EXACTLY your table columns
        $data = array(
            // blog_id is AUTO_INCREMENT, don't include it
            'content_type'      => $content_type,
            'content'          => $content,
            'meta_title'       => $meta_title,
            'meta_description' => $meta_description,
            'slug'             => $slug,
            'tags'             => $tags,
            'extra_data'       => $extra_data_json
        );
        
        // Insert into blog_content table
        $blog_id = $this->common_model->addRecord('blog_content', $data);
        
        if ($blog_id) {
            // Success response
            http_response_code(200);
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Blog post created successfully',
                'blog_id' => $blog_id,
                'slug' => $slug
            ));
        } else {
            // Database error
            http_response_code(500);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Failed to insert blog post'
            ));
        }
        
    } else {
        // Validation error
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Content is required'
        ));
    }
}

/**
 * Simple version - minimal required fields only
 */
public function insert_blog_simple() {
    date_default_timezone_set('Asia/Kolkata');
    
    // Only get essential fields
    $title = $this->input->post('title');
    $content = $this->input->post('content'); // HTML from TipTap
    $description = $this->input->post('description');
    
    if (!empty($content)) {
        
        // Generate slug from title
        $slug = $this->generate_slug($title ?: 'blog');
        
        // Prepare data - ALL columns must be included or set to null
        $data = array(
            'content_type'      => 'post',                    // Default to 'post'
            'content'          => $content,                   // Required - HTML content
            'meta_title'       => $title ?: null,            // Can be null
            'meta_description' => $description ?: null,       // Can be null
            'slug'             => $slug,                      // Generated
            'tags'             => null,                       // Can be null
            'extra_data'       => null                        // Can be null
        );
        
        $this->common_model->addRecord('blog_content', $data);
        http_response_code(200);
        echo "success";
    } else {
        http_response_code(400);
        echo "Content is required";
    }
}

/**
 * Insert with ALL fields populated
 */
public function insert_blog_complete() {
    date_default_timezone_set('Asia/Kolkata');
    
    // Collect ALL possible data
    $content_type = $this->input->post('content_type') ?: 'post';
    $content = $this->input->post('content');
    $meta_title = $this->input->post('meta_title');
    $meta_description = $this->input->post('meta_description');
    $slug = $this->input->post('slug');
    $tags = $this->input->post('tags');
    
    // Extra fields for extra_data column
    $author = $this->input->post('author') ?: 'SafeStorage Team';
    $category = $this->input->post('category') ?: 'General';
    $featured_image = $this->input->post('featured_image');
    $excerpt = $this->input->post('excerpt');
    $keywords = $this->input->post('keywords');
    $is_featured = $this->input->post('is_featured');
    $is_published = $this->input->post('is_published');
    
    // Validation
    if (!empty($content) && !empty($meta_title)) {
        
        // Generate slug if not provided
        if (empty($slug)) {
            $slug = $this->generate_slug($meta_title);
        }
        
        // If meta_description is empty, generate from content
        if (empty($meta_description)) {
            $meta_description = substr(strip_tags($content), 0, 160) . '...';
        }
        
        // Process tags
        if (is_array($tags)) {
            $tags_json = json_encode($tags);
        } else if (!empty($tags)) {
            // If tags is comma-separated string, convert to array
            $tags_array = array_map('trim', explode(',', $tags));
            $tags_json = json_encode($tags_array);
        } else {
            $tags_json = null;
        }
        
        // Build comprehensive extra_data
        $extra_data = array(
            'author' => $author,
            'category' => $category,
            'featured_image' => $featured_image,
            'excerpt' => $excerpt ?: substr(strip_tags($content), 0, 200) . '...',
            'keywords' => $keywords,
            'is_featured' => $is_featured ? true : false,
            'is_published' => $is_published !== '0' ? true : false,
            'read_time' => $this->calculate_read_time($content),
            'views' => 0,
            'likes' => 0,
            'created_at' => date('Y-m-d H:i:s'),
            'published_at' => $is_published !== '0' ? date('Y-m-d H:i:s') : null
        );
        
        // Final data array with ALL columns
        $data = array(
            'content_type'      => $content_type,
            'content'          => $content,
            'meta_title'       => $meta_title,
            'meta_description' => $meta_description,
            'slug'             => $slug,
            'tags'             => $tags_json,
            'extra_data'       => json_encode($extra_data)
        );
        
        // Insert into database
        $blog_id = $this->common_model->addRecord('blog_content', $data);
        
        if ($blog_id) {
            http_response_code(200);
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Blog post created successfully',
                'data' => array(
                    'blog_id' => $blog_id,
                    'slug' => $slug,
                    'url' => base_url('blog/' . $slug)
                )
            ));
        } else {
            http_response_code(500);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Database error occurred'
            ));
        }
        
    } else {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Content and meta_title are required fields'
        ));
    }
}

/**
 * Get all blog posts with all columns
 */
public function get_all_blogs() {
    // Query all columns
    $posts = $this->db->select('blog_id, content_type, content, meta_title, meta_description, slug, tags, extra_data')
                      ->where('content_type', 'post')
                      ->order_by('blog_id', 'DESC')
                      ->get('blog_content')
                      ->result_array();
    
    // Process each post
    foreach ($posts as &$post) {
        // Parse JSON fields
        if ($post['tags']) {
            $post['tags'] = json_decode($post['tags'], true);
        }
        if ($post['extra_data']) {
            $post['extra_data'] = json_decode($post['extra_data'], true);
        }
    }
    
    echo json_encode(array(
        'status' => 'success',
        'total' => count($posts),
        'data' => $posts
    ));
}

/**
 * Update blog post - update any column
 */
public function update_blog($blog_id) {
    // Get all possible update fields
    $content_type = $this->input->post('content_type');
    $content = $this->input->post('content');
    $meta_title = $this->input->post('meta_title');
    $meta_description = $this->input->post('meta_description');
    $slug = $this->input->post('slug');
    $tags = $this->input->post('tags');
    $extra_data = $this->input->post('extra_data');
    
    // Build update array - only include fields that were posted
    $update_data = array();
    
    if (!empty($content_type)) $update_data['content_type'] = $content_type;
    if (!empty($content)) $update_data['content'] = $content;
    if (!empty($meta_title)) $update_data['meta_title'] = $meta_title;
    if (!empty($meta_description)) $update_data['meta_description'] = $meta_description;
    if (!empty($slug)) $update_data['slug'] = $slug;
    
    if (!empty($tags)) {
        $update_data['tags'] = is_array($tags) ? json_encode($tags) : $tags;
    }
    
    if (!empty($extra_data)) {
        $update_data['extra_data'] = is_array($extra_data) ? json_encode($extra_data) : $extra_data;
    }
    
    // Update if we have data
    if (!empty($update_data)) {
        $this->db->where('blog_id', $blog_id)
                 ->update('blog_content', $update_data);
        
        if ($this->db->affected_rows() > 0) {
            http_response_code(200);
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Blog updated successfully',
                'updated_fields' => array_keys($update_data)
            ));
        } else {
            http_response_code(404);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Blog not found or no changes made'
            ));
        }
    } else {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'No data to update'
        ));
    }
}

/**
 * Helper function to generate unique slug
 */
private function generate_slug($title) {
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9-]/', '-', $slug);
    $slug = preg_replace('/-+/', '-', $slug);
    $slug = trim($slug, '-');
    
    // Make unique
    $original_slug = $slug;
    $counter = 1;
    
    while ($this->db->where('slug', $slug)->get('blog_content')->num_rows() > 0) {
        $slug = $original_slug . '-' . $counter;
        $counter++;
    }
    
    return $slug;
}

/**
 * Calculate read time
 */
private function calculate_read_time($content) {
    $word_count = str_word_count(strip_tags($content));
    return ceil($word_count / 200); // 200 words per minute
}