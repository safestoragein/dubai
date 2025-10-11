<?php

// Add this function to your existing controller

/**
 * Insert blog content into blog_content table
 * POST endpoint for blog submission
 */
public function insert_blog_content() {
    date_default_timezone_set('Asia/Kolkata'); // Set timezone to Asia/Kolkata
    
    // Get POST data
    $content_type = $this->input->post('content_type');
    $content = $this->input->post('content');
    $meta_title = $this->input->post('meta_title');
    $meta_description = $this->input->post('meta_description');
    $slug = $this->input->post('slug');
    $tags = $this->input->post('tags'); // Can be array or string
    $extra_data = $this->input->post('extra_data'); // Can be array or string
    
    // Basic validation - content and content_type are required
    if (!empty($content) && !empty($content_type)) {
        
        // Generate slug if not provided
        if (empty($slug) && !empty($meta_title)) {
            $slug = $this->generate_slug($meta_title);
        } elseif (empty($slug)) {
            $slug = 'blog-' . time();
        }
        
        // Convert arrays to JSON if needed
        if (is_array($tags)) {
            $tags = json_encode($tags);
        }
        
        if (is_array($extra_data)) {
            $extra_data = json_encode($extra_data);
        }
        
        // Prepare data for insertion
        $data = array(
            'content_type'      => $content_type,
            'content'          => $content, // HTML content from rich text editor
            'meta_title'       => $meta_title,
            'meta_description' => $meta_description,
            'slug'             => $slug,
            'tags'             => $tags,
            'extra_data'       => $extra_data
        );
        
        // Insert into blog_content table
        $insert_id = $this->common_model->addRecord('blog_content', $data);
        
        if ($insert_id) {
            // Return success with blog_id
            http_response_code(200);
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Blog content created successfully',
                'blog_id' => $insert_id,
                'slug' => $slug
            ));
        } else {
            http_response_code(500);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Failed to insert blog content'
            ));
        }
        
    } else {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Failed to submit data: Missing required fields (content and content_type)'
        ));
    }
}

/**
 * Insert blog post specifically
 * Simplified endpoint for blog posts only
 */
public function insert_blog_post() {
    date_default_timezone_set('Asia/Kolkata');
    
    // Get POST data
    $title = $this->input->post('title');
    $content = $this->input->post('content'); // HTML from TipTap editor
    $excerpt = $this->input->post('excerpt');
    $category = $this->input->post('category');
    $author = $this->input->post('author');
    $featured_image = $this->input->post('featured_image');
    $tags = $this->input->post('tags'); // Array of tags
    $is_published = $this->input->post('is_published');
    
    // Validation
    if (!empty($title) && !empty($content)) {
        
        // Generate slug from title
        $slug = $this->generate_slug($title);
        
        // Prepare tags
        $tags_json = is_array($tags) ? json_encode($tags) : $tags;
        
        // Prepare extra data with all blog-specific fields
        $extra_data = array(
            'author' => $author ?: 'SafeStorage Team',
            'category' => $category ?: 'General',
            'featured_image' => $featured_image,
            'excerpt' => $excerpt,
            'is_published' => $is_published ?: true,
            'views' => 0,
            'likes' => 0,
            'read_time' => $this->calculate_read_time($content),
            'created_at' => date('Y-m-d H:i:s')
        );
        
        // Main data for blog_content table
        $data = array(
            'content_type'      => 'post',
            'content'          => $content,
            'meta_title'       => $title,
            'meta_description' => $excerpt ?: substr(strip_tags($content), 0, 160),
            'slug'             => $slug,
            'tags'             => $tags_json,
            'extra_data'       => json_encode($extra_data)
        );
        
        $blog_id = $this->common_model->addRecord('blog_content', $data);
        
        if ($blog_id) {
            http_response_code(200);
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Blog post created successfully',
                'blog_id' => $blog_id,
                'slug' => $slug,
                'url' => base_url('blog/' . $slug)
            ));
        } else {
            http_response_code(500);
            echo "Failed to create blog post";
        }
        
    } else {
        http_response_code(400);
        echo "Failed to submit: Title and content are required";
    }
}

/**
 * Insert lead/inquiry (similar to your customer details)
 */
public function insert_lead() {
    date_default_timezone_set('Asia/Kolkata');
    
    $name = $this->input->post('name');
    $email = $this->input->post('email');
    $phone = $this->input->post('phone');
    $message = $this->input->post('message');
    $storage_size = $this->input->post('storage_size');
    $company = $this->input->post('company');
    
    if (!empty($email) && !empty($phone)) {
        
        // Store customer info in extra_data
        $extra_data = array(
            'phone' => $phone,
            'company' => $company,
            'storage_size' => $storage_size,
            'status' => 'new',
            'source' => 'website',
            'created_at' => date('Y-m-d H:i:s')
        );
        
        $data = array(
            'content_type'      => 'lead',
            'content'          => $message ?: 'No message provided',
            'meta_title'       => $name,
            'meta_description' => $email,
            'slug'             => null,
            'tags'             => null,
            'extra_data'       => json_encode($extra_data)
        );
        
        $this->common_model->addRecord('blog_content', $data);
        http_response_code(200);
        echo "success";
    } else {
        http_response_code(400);
        echo "Failed to submit: Email and phone are required";
    }
}

/**
 * Get all blog posts
 */
public function get_blog_posts() {
    $posts = $this->db->where('content_type', 'post')
                      ->order_by('blog_id', 'DESC')
                      ->get('blog_content')
                      ->result_array();
    
    // Parse JSON fields
    foreach ($posts as &$post) {
        if ($post['tags']) {
            $post['tags'] = json_decode($post['tags'], true);
        }
        if ($post['extra_data']) {
            $post['extra_data'] = json_decode($post['extra_data'], true);
        }
    }
    
    echo json_encode(array(
        'status' => 'success',
        'data' => $posts
    ));
}

/**
 * Get single blog post by slug
 */
public function get_blog_by_slug($slug) {
    $post = $this->db->where('slug', $slug)
                     ->where('content_type', 'post')
                     ->get('blog_content')
                     ->row_array();
    
    if ($post) {
        // Parse JSON fields
        if ($post['tags']) {
            $post['tags'] = json_decode($post['tags'], true);
        }
        if ($post['extra_data']) {
            $post['extra_data'] = json_decode($post['extra_data'], true);
        }
        
        // Increment views
        $extra_data = $post['extra_data'];
        $extra_data['views'] = ($extra_data['views'] ?? 0) + 1;
        
        $this->db->where('blog_id', $post['blog_id'])
                 ->update('blog_content', array(
                     'extra_data' => json_encode($extra_data)
                 ));
        
        echo json_encode(array(
            'status' => 'success',
            'data' => $post
        ));
    } else {
        http_response_code(404);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Blog post not found'
        ));
    }
}

/**
 * Update blog post
 */
public function update_blog_post($blog_id) {
    $title = $this->input->post('title');
    $content = $this->input->post('content');
    $excerpt = $this->input->post('excerpt');
    $tags = $this->input->post('tags');
    
    $data = array();
    
    if (!empty($title)) {
        $data['meta_title'] = $title;
    }
    
    if (!empty($content)) {
        $data['content'] = $content;
    }
    
    if (!empty($excerpt)) {
        $data['meta_description'] = $excerpt;
    }
    
    if (!empty($tags)) {
        $data['tags'] = is_array($tags) ? json_encode($tags) : $tags;
    }
    
    if (!empty($data)) {
        $this->db->where('blog_id', $blog_id)
                 ->where('content_type', 'post')
                 ->update('blog_content', $data);
        
        http_response_code(200);
        echo json_encode(array(
            'status' => 'success',
            'message' => 'Blog post updated successfully'
        ));
    } else {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'No data to update'
        ));
    }
}

/**
 * Delete blog post (soft delete by adding deleted_at timestamp)
 */
public function delete_blog_post($blog_id) {
    // For hard delete
    $this->db->where('blog_id', $blog_id)
             ->where('content_type', 'post')
             ->delete('blog_content');
    
    if ($this->db->affected_rows() > 0) {
        http_response_code(200);
        echo json_encode(array(
            'status' => 'success',
            'message' => 'Blog post deleted successfully'
        ));
    } else {
        http_response_code(404);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Blog post not found'
        ));
    }
}

/**
 * Helper function to generate slug
 */
private function generate_slug($title) {
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9-]/', '-', $slug);
    $slug = preg_replace('/-+/', '-', $slug);
    $slug = trim($slug, '-');
    
    // Check if slug exists and make unique
    $original_slug = $slug;
    $counter = 1;
    
    while ($this->db->where('slug', $slug)->get('blog_content')->num_rows() > 0) {
        $slug = $original_slug . '-' . $counter;
        $counter++;
    }
    
    return $slug;
}

/**
 * Calculate read time based on content
 */
private function calculate_read_time($content) {
    $word_count = str_word_count(strip_tags($content));
    $read_time = ceil($word_count / 200); // Assuming 200 words per minute
    return $read_time;
}