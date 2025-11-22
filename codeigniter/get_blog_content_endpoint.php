<?php

/**
 * Get Blog Content Endpoint
 * Returns ALL blogs with FULL content for editing
 * URL: https://safestorage.in/back/app/get_blog_content
 */

/**
 * Get all blog content with complete details for editing
 * Returns all content types with full data
 */
public function get_blog_content() {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    
    try {
        // Get ALL content from blog_content table (not just posts)
        $query = $this->db->select('*')
                          ->order_by('id', 'DESC')
                          ->get('blog_content');
        
        $content = $query->result_array();
        
        // Process each item and parse JSON fields
        foreach ($content as &$item) {
            // Parse JSON fields if they exist
            if (!empty($item['tags'])) {
                $item['tags'] = json_decode($item['tags'], true);
            }
            
            if (!empty($item['extra_data'])) {
                $item['extra_data'] = json_decode($item['extra_data'], true);
            }
            
            // Add edit-friendly fields
            $item['created_date'] = date('Y-m-d', strtotime($item['created_at'] ?? 'now'));
            $item['created_time'] = date('H:i:s', strtotime($item['created_at'] ?? 'now'));
            
            // Extract common fields from extra_data for easier editing
            if (is_array($item['extra_data'])) {
                $extra = $item['extra_data'];
                $item['author'] = $extra['author'] ?? '';
                $item['category'] = $extra['category'] ?? '';
                $item['featured_image'] = $extra['featured_image'] ?? '';
                $item['excerpt'] = $extra['excerpt'] ?? '';
                $item['is_published'] = $extra['is_published'] ?? true;
                $item['is_featured'] = $extra['is_featured'] ?? false;
                $item['views'] = $extra['views'] ?? 0;
                $item['likes'] = $extra['likes'] ?? 0;
                $item['read_time'] = $extra['read_time'] ?? 5;
            }
        }
        
        // Separate content by type for easier management
        $response = array(
            'status' => 'success',
            'timestamp' => date('Y-m-d H:i:s'),
            'total_items' => count($content),
            'data' => array(
                'all_content' => $content,
                'posts' => array_filter($content, function($item) {
                    return $item['content_type'] === 'post';
                }),
                'categories' => array_filter($content, function($item) {
                    return $item['content_type'] === 'category';
                }),
                'leads' => array_filter($content, function($item) {
                    return $item['content_type'] === 'lead';
                }),
                'admin_users' => array_filter($content, function($item) {
                    return $item['content_type'] === 'admin_user';
                }),
                'other' => array_filter($content, function($item) {
                    return !in_array($item['content_type'], ['post', 'category', 'lead', 'admin_user']);
                })
            ),
            'content_types' => array_unique(array_column($content, 'content_type')),
            'edit_info' => array(
                'editable_fields' => array(
                    'content_type', 'title', 'content', 'meta_title', 
                    'meta_description', 'slug', 'tags', 'status', 
                    'author', 'category', 'featured_image', 'excerpt',
                    'is_published', 'is_featured'
                ),
                'required_fields' => array('content_type', 'content'),
                'json_fields' => array('tags', 'extra_data')
            )
        );
        
        echo json_encode($response, JSON_PRETTY_PRINT);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Database error: ' . $e->getMessage(),
            'timestamp' => date('Y-m-d H:i:s')
        ));
    }
}

/**
 * Get single blog content by ID for detailed editing
 */
public function get_blog_content_by_id($id) {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    if (empty($id)) {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'ID parameter is required'
        ));
        return;
    }
    
    try {
        $query = $this->db->select('*')
                          ->where('id', $id)
                          ->get('blog_content');
        
        $item = $query->row_array();
        
        if (!$item) {
            http_response_code(404);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Content not found'
            ));
            return;
        }
        
        // Parse JSON fields
        if (!empty($item['tags'])) {
            $item['tags'] = json_decode($item['tags'], true);
        }
        
        if (!empty($item['extra_data'])) {
            $item['extra_data'] = json_decode($item['extra_data'], true);
            
            // Extract fields for easier editing
            $extra = $item['extra_data'];
            $item['author'] = $extra['author'] ?? '';
            $item['category'] = $extra['category'] ?? '';
            $item['featured_image'] = $extra['featured_image'] ?? '';
            $item['excerpt'] = $extra['excerpt'] ?? '';
            $item['is_published'] = $extra['is_published'] ?? true;
            $item['is_featured'] = $extra['is_featured'] ?? false;
            $item['views'] = $extra['views'] ?? 0;
            $item['likes'] = $extra['likes'] ?? 0;
            $item['read_time'] = $extra['read_time'] ?? 5;
        }
        
        echo json_encode(array(
            'status' => 'success',
            'data' => $item,
            'timestamp' => date('Y-m-d H:i:s')
        ), JSON_PRETTY_PRINT);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Database error: ' . $e->getMessage()
        ));
    }
}

/**
 * Update blog content - comprehensive update function
 */
public function update_blog_content() {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
    
    try {
        $id = $this->input->post('id');
        
        if (empty($id)) {
            http_response_code(400);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'ID is required for updating'
            ));
            return;
        }
        
        // Check if content exists
        $existing = $this->db->select('*')->where('id', $id)->get('blog_content')->row_array();
        
        if (!$existing) {
            http_response_code(404);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Content not found'
            ));
            return;
        }
        
        // Collect update data
        $update_data = array();
        
        // Direct field updates
        $direct_fields = array('content_type', 'title', 'content', 'meta_title', 'meta_description', 'slug', 'status');
        
        foreach ($direct_fields as $field) {
            $value = $this->input->post($field);
            if ($value !== null && $value !== '') {
                $update_data[$field] = $value;
            }
        }
        
        // Handle tags
        $tags = $this->input->post('tags');
        if ($tags !== null) {
            if (is_array($tags)) {
                $update_data['tags'] = json_encode($tags);
            } elseif (!empty($tags)) {
                $tags_array = array_map('trim', explode(',', $tags));
                $update_data['tags'] = json_encode($tags_array);
            } else {
                $update_data['tags'] = null;
            }
        }
        
        // Handle extra_data updates
        $existing_extra = !empty($existing['extra_data']) ? json_decode($existing['extra_data'], true) : array();
        
        $extra_fields = array('author', 'category', 'featured_image', 'excerpt', 'is_published', 'is_featured', 'views', 'likes', 'read_time');
        $extra_updated = false;
        
        foreach ($extra_fields as $field) {
            $value = $this->input->post($field);
            if ($value !== null) {
                $existing_extra[$field] = $value;
                $extra_updated = true;
            }
        }
        
        if ($extra_updated) {
            $existing_extra['updated_at'] = date('Y-m-d H:i:s');
            $update_data['extra_data'] = json_encode($existing_extra);
        }
        
        // Perform update
        if (!empty($update_data)) {
            $this->db->where('id', $id)->update('blog_content', $update_data);
            
            if ($this->db->affected_rows() > 0) {
                echo json_encode(array(
                    'status' => 'success',
                    'message' => 'Content updated successfully',
                    'updated_fields' => array_keys($update_data),
                    'id' => $id,
                    'timestamp' => date('Y-m-d H:i:s')
                ));
            } else {
                echo json_encode(array(
                    'status' => 'info',
                    'message' => 'No changes were made',
                    'id' => $id
                ));
            }
        } else {
            http_response_code(400);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'No valid update data provided'
            ));
        }
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Update failed: ' . $e->getMessage()
        ));
    }
}

/**
 * Delete blog content
 */
public function delete_blog_content($id = null) {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: DELETE, POST');
    
    if (empty($id)) {
        $id = $this->input->post('id');
    }
    
    if (empty($id)) {
        http_response_code(400);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'ID is required for deletion'
        ));
        return;
    }
    
    try {
        // Check if content exists
        $existing = $this->db->select('id, content_type, meta_title')->where('id', $id)->get('blog_content')->row_array();
        
        if (!$existing) {
            http_response_code(404);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Content not found'
            ));
            return;
        }
        
        // Perform deletion
        $this->db->where('id', $id)->delete('blog_content');
        
        if ($this->db->affected_rows() > 0) {
            echo json_encode(array(
                'status' => 'success',
                'message' => 'Content deleted successfully',
                'deleted_item' => $existing,
                'timestamp' => date('Y-m-d H:i:s')
            ));
        } else {
            http_response_code(500);
            echo json_encode(array(
                'status' => 'error',
                'message' => 'Failed to delete content'
            ));
        }
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Delete failed: ' . $e->getMessage()
        ));
    }
}

/**
 * Get blog statistics for dashboard
 */
public function get_blog_stats() {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    try {
        // Count by content type
        $stats = array();
        
        $content_types = $this->db->select('content_type, COUNT(*) as count')
                                  ->group_by('content_type')
                                  ->get('blog_content')
                                  ->result_array();
        
        foreach ($content_types as $type) {
            $stats[$type['content_type']] = $type['count'];
        }
        
        // Total items
        $total = $this->db->count_all('blog_content');
        
        // Recent items
        $recent = $this->db->select('id, content_type, meta_title, created_at')
                           ->order_by('id', 'DESC')
                           ->limit(10)
                           ->get('blog_content')
                           ->result_array();
        
        echo json_encode(array(
            'status' => 'success',
            'data' => array(
                'total_items' => $total,
                'by_type' => $stats,
                'recent_items' => $recent
            ),
            'timestamp' => date('Y-m-d H:i:s')
        ), JSON_PRETTY_PRINT);
        
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array(
            'status' => 'error',
            'message' => 'Stats error: ' . $e->getMessage()
        ));
    }
}

?>