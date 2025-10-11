<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Blog Controller
 * Complete controller for blog_content table management
 * Table: blog_content (blog_id, content_type, content, meta_title, meta_description, slug, tags, extra_data)
 */
class BlogController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('common_model');
        $this->load->database();
        $this->load->helper('url');
        
        // Set timezone
        date_default_timezone_set('Asia/Kolkata');
        
        // CORS headers for API access
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            exit(0);
        }
    }

    /**
     * Insert blog post - Main function
     * POST: /BlogController/insert_blog_post
     */
    public function insert_blog_post() {
        // Get all POST data
        $content_type = $this->input->post('content_type') ?: 'post';
        $content = $this->input->post('content');
        $meta_title = $this->input->post('meta_title');
        $meta_description = $this->input->post('meta_description');
        $slug = $this->input->post('slug');
        $tags = $this->input->post('tags');
        
        // Extra fields for extra_data
        $author = $this->input->post('author');
        $category = $this->input->post('category');
        $featured_image = $this->input->post('featured_image');
        $excerpt = $this->input->post('excerpt');
        $is_published = $this->input->post('is_published');
        $is_featured = $this->input->post('is_featured');
        $read_time = $this->input->post('read_time');
        
        // Validation
        if (!empty($content)) {
            
            // Generate slug if not provided
            if (empty($slug)) {
                if (!empty($meta_title)) {
                    $slug = $this->generate_slug($meta_title);
                } else {
                    $slug = 'blog-' . time();
                }
            }
            
            // Generate meta_description if not provided
            if (empty($meta_description) && !empty($content)) {
                $meta_description = substr(strip_tags($content), 0, 160) . '...';
            }
            
            // Process tags
            if (is_array($tags)) {
                $tags_json = json_encode($tags);
            } elseif (!empty($tags)) {
                $tags_array = array_map('trim', explode(',', $tags));
                $tags_json = json_encode($tags_array);
            } else {
                $tags_json = null;
            }
            
            // Build extra_data
            $extra_data = array(
                'author' => $author ?: 'SafeStorage Team',
                'category' => $category ?: 'General',
                'featured_image' => $featured_image,
                'excerpt' => $excerpt ?: substr(strip_tags($content), 0, 200) . '...',
                'is_featured' => $is_featured ? true : false,
                'is_published' => $is_published !== '0' ? true : false,
                'read_time' => $read_time ?: $this->calculate_read_time($content),
                'views' => 0,
                'likes' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'created_by' => 'admin',
                'published_at' => $is_published !== '0' ? date('Y-m-d H:i:s') : null
            );
            
            // Prepare data for database
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
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(200)
                    ->set_output(json_encode(array(
                        'status' => 'success',
                        'message' => 'Blog post created successfully',
                        'data' => array(
                            'blog_id' => $blog_id,
                            'slug' => $slug,
                            'url' => base_url('blog/' . $slug)
                        )
                    )));
            } else {
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(500)
                    ->set_output(json_encode(array(
                        'status' => 'error',
                        'message' => 'Failed to insert blog post'
                    )));
            }
            
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(400)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Content is required'
                )));
        }
    }

    /**
     * Get all blog posts
     * GET: /BlogController/get_all_blogs
     */
    public function get_all_blogs() {
        $limit = $this->input->get('limit') ?: 10;
        $offset = $this->input->get('offset') ?: 0;
        $content_type = $this->input->get('type') ?: 'post';
        
        // Get posts from database
        $this->db->select('blog_id, content_type, content, meta_title, meta_description, slug, tags, extra_data');
        $this->db->from('blog_content');
        $this->db->where('content_type', $content_type);
        $this->db->order_by('blog_id', 'DESC');
        $this->db->limit($limit, $offset);
        $query = $this->db->get();
        $posts = $query->result_array();
        
        // Get total count
        $this->db->where('content_type', $content_type);
        $total = $this->db->count_all_results('blog_content');
        
        // Process JSON fields
        foreach ($posts as &$post) {
            if (!empty($post['tags'])) {
                $post['tags'] = json_decode($post['tags'], true);
            }
            if (!empty($post['extra_data'])) {
                $post['extra_data'] = json_decode($post['extra_data'], true);
            }
        }
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'total' => $total,
                'limit' => $limit,
                'offset' => $offset,
                'data' => $posts
            )));
    }

    /**
     * Get single blog by ID
     * GET: /BlogController/get_blog/1
     */
    public function get_blog($blog_id) {
        $this->db->select('*');
        $this->db->from('blog_content');
        $this->db->where('blog_id', $blog_id);
        $query = $this->db->get();
        $post = $query->row_array();
        
        if ($post) {
            // Parse JSON fields
            if (!empty($post['tags'])) {
                $post['tags'] = json_decode($post['tags'], true);
            }
            if (!empty($post['extra_data'])) {
                $post['extra_data'] = json_decode($post['extra_data'], true);
            }
            
            // Increment views
            $this->increment_views($blog_id);
            
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(200)
                ->set_output(json_encode(array(
                    'status' => 'success',
                    'data' => $post
                )));
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(404)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Blog post not found'
                )));
        }
    }

    /**
     * Get blog by slug
     * GET: /BlogController/get_blog_by_slug/my-blog-post
     */
    public function get_blog_by_slug($slug) {
        $this->db->select('*');
        $this->db->from('blog_content');
        $this->db->where('slug', $slug);
        $this->db->where('content_type', 'post');
        $query = $this->db->get();
        $post = $query->row_array();
        
        if ($post) {
            // Parse JSON fields
            if (!empty($post['tags'])) {
                $post['tags'] = json_decode($post['tags'], true);
            }
            if (!empty($post['extra_data'])) {
                $post['extra_data'] = json_decode($post['extra_data'], true);
            }
            
            // Increment views
            $this->increment_views($post['blog_id']);
            
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(200)
                ->set_output(json_encode(array(
                    'status' => 'success',
                    'data' => $post
                )));
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(404)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Blog post not found'
                )));
        }
    }

    /**
     * Update blog post
     * POST: /BlogController/update_blog/1
     */
    public function update_blog($blog_id) {
        // Check if blog exists
        $this->db->where('blog_id', $blog_id);
        $exists = $this->db->get('blog_content')->num_rows() > 0;
        
        if (!$exists) {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(404)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Blog post not found'
                )));
            return;
        }
        
        // Get update data
        $content_type = $this->input->post('content_type');
        $content = $this->input->post('content');
        $meta_title = $this->input->post('meta_title');
        $meta_description = $this->input->post('meta_description');
        $slug = $this->input->post('slug');
        $tags = $this->input->post('tags');
        $extra_data = $this->input->post('extra_data');
        
        // Build update array
        $update_data = array();
        
        if (!empty($content_type)) $update_data['content_type'] = $content_type;
        if (!empty($content)) $update_data['content'] = $content;
        if (!empty($meta_title)) $update_data['meta_title'] = $meta_title;
        if (!empty($meta_description)) $update_data['meta_description'] = $meta_description;
        if (!empty($slug)) $update_data['slug'] = $slug;
        
        if (!empty($tags)) {
            if (is_array($tags)) {
                $update_data['tags'] = json_encode($tags);
            } else {
                $tags_array = array_map('trim', explode(',', $tags));
                $update_data['tags'] = json_encode($tags_array);
            }
        }
        
        if (!empty($extra_data)) {
            $update_data['extra_data'] = is_array($extra_data) ? json_encode($extra_data) : $extra_data;
        }
        
        // Update database
        if (!empty($update_data)) {
            $this->db->where('blog_id', $blog_id);
            $this->db->update('blog_content', $update_data);
            
            if ($this->db->affected_rows() >= 0) {
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(200)
                    ->set_output(json_encode(array(
                        'status' => 'success',
                        'message' => 'Blog post updated successfully',
                        'updated_fields' => array_keys($update_data)
                    )));
            } else {
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(500)
                    ->set_output(json_encode(array(
                        'status' => 'error',
                        'message' => 'Failed to update blog post'
                    )));
            }
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(400)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'No data to update'
                )));
        }
    }

    /**
     * Delete blog post
     * POST: /BlogController/delete_blog/1
     */
    public function delete_blog($blog_id) {
        $this->db->where('blog_id', $blog_id);
        $this->db->delete('blog_content');
        
        if ($this->db->affected_rows() > 0) {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(200)
                ->set_output(json_encode(array(
                    'status' => 'success',
                    'message' => 'Blog post deleted successfully'
                )));
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(404)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Blog post not found'
                )));
        }
    }

    /**
     * Search blogs
     * GET: /BlogController/search?q=storage
     */
    public function search() {
        $keyword = $this->input->get('q');
        $limit = $this->input->get('limit') ?: 10;
        
        if (empty($keyword)) {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(400)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Search keyword is required'
                )));
            return;
        }
        
        $this->db->select('blog_id, meta_title, meta_description, slug, tags, extra_data');
        $this->db->from('blog_content');
        $this->db->where('content_type', 'post');
        $this->db->group_start();
            $this->db->like('meta_title', $keyword);
            $this->db->or_like('meta_description', $keyword);
            $this->db->or_like('content', $keyword);
            $this->db->or_like('tags', $keyword);
        $this->db->group_end();
        $this->db->limit($limit);
        $this->db->order_by('blog_id', 'DESC');
        
        $query = $this->db->get();
        $results = $query->result_array();
        
        // Process JSON fields
        foreach ($results as &$result) {
            if (!empty($result['tags'])) {
                $result['tags'] = json_decode($result['tags'], true);
            }
            if (!empty($result['extra_data'])) {
                $result['extra_data'] = json_decode($result['extra_data'], true);
            }
        }
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'keyword' => $keyword,
                'count' => count($results),
                'data' => $results
            )));
    }

    /**
     * Get posts by category
     * GET: /BlogController/get_by_category/storage-tips
     */
    public function get_by_category($category) {
        $limit = $this->input->get('limit') ?: 10;
        $offset = $this->input->get('offset') ?: 0;
        
        $this->db->select('blog_id, meta_title, meta_description, slug, content, tags, extra_data');
        $this->db->from('blog_content');
        $this->db->where('content_type', 'post');
        $this->db->like('extra_data', '"category":"' . $category . '"');
        $this->db->limit($limit, $offset);
        $this->db->order_by('blog_id', 'DESC');
        
        $query = $this->db->get();
        $posts = $query->result_array();
        
        // Process JSON fields
        foreach ($posts as &$post) {
            if (!empty($post['tags'])) {
                $post['tags'] = json_decode($post['tags'], true);
            }
            if (!empty($post['extra_data'])) {
                $post['extra_data'] = json_decode($post['extra_data'], true);
            }
        }
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'category' => $category,
                'count' => count($posts),
                'data' => $posts
            )));
    }

    /**
     * Get posts by tag
     * GET: /BlogController/get_by_tag/storage
     */
    public function get_by_tag($tag) {
        $limit = $this->input->get('limit') ?: 10;
        
        $this->db->select('blog_id, meta_title, meta_description, slug, tags, extra_data');
        $this->db->from('blog_content');
        $this->db->where('content_type', 'post');
        $this->db->like('tags', $tag);
        $this->db->limit($limit);
        $this->db->order_by('blog_id', 'DESC');
        
        $query = $this->db->get();
        $posts = $query->result_array();
        
        // Process JSON fields
        foreach ($posts as &$post) {
            if (!empty($post['tags'])) {
                $post['tags'] = json_decode($post['tags'], true);
            }
            if (!empty($post['extra_data'])) {
                $post['extra_data'] = json_decode($post['extra_data'], true);
            }
        }
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'tag' => $tag,
                'count' => count($posts),
                'data' => $posts
            )));
    }

    /**
     * Insert lead/inquiry
     * POST: /BlogController/insert_lead
     */
    public function insert_lead() {
        $name = $this->input->post('name');
        $email = $this->input->post('email');
        $phone = $this->input->post('phone');
        $message = $this->input->post('message');
        $company = $this->input->post('company');
        $storage_size = $this->input->post('storage_size');
        
        if (!empty($email) && !empty($phone)) {
            
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
            
            $lead_id = $this->common_model->addRecord('blog_content', $data);
            
            if ($lead_id) {
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(200)
                    ->set_output(json_encode(array(
                        'status' => 'success',
                        'message' => 'Thank you for your inquiry. We will contact you soon.',
                        'lead_id' => $lead_id
                    )));
            } else {
                $this->output
                    ->set_content_type('application/json')
                    ->set_status_header(500)
                    ->set_output(json_encode(array(
                        'status' => 'error',
                        'message' => 'Failed to submit inquiry'
                    )));
            }
        } else {
            $this->output
                ->set_content_type('application/json')
                ->set_status_header(400)
                ->set_output(json_encode(array(
                    'status' => 'error',
                    'message' => 'Email and phone are required'
                )));
        }
    }

    /**
     * Get all leads
     * GET: /BlogController/get_leads
     */
    public function get_leads() {
        $status = $this->input->get('status');
        
        $this->db->select('blog_id, meta_title as name, meta_description as email, content as message, extra_data');
        $this->db->from('blog_content');
        $this->db->where('content_type', 'lead');
        
        if (!empty($status)) {
            $this->db->like('extra_data', '"status":"' . $status . '"');
        }
        
        $this->db->order_by('blog_id', 'DESC');
        $query = $this->db->get();
        $leads = $query->result_array();
        
        // Process JSON fields
        foreach ($leads as &$lead) {
            if (!empty($lead['extra_data'])) {
                $lead['extra_data'] = json_decode($lead['extra_data'], true);
            }
        }
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'total' => count($leads),
                'data' => $leads
            )));
    }

    /**
     * Get statistics
     * GET: /BlogController/get_stats
     */
    public function get_stats() {
        // Total posts
        $this->db->where('content_type', 'post');
        $total_posts = $this->db->count_all_results('blog_content');
        
        // Total leads
        $this->db->where('content_type', 'lead');
        $total_leads = $this->db->count_all_results('blog_content');
        
        // Recent posts
        $this->db->select('blog_id, meta_title, slug');
        $this->db->from('blog_content');
        $this->db->where('content_type', 'post');
        $this->db->order_by('blog_id', 'DESC');
        $this->db->limit(5);
        $recent_posts = $this->db->get()->result_array();
        
        $this->output
            ->set_content_type('application/json')
            ->set_status_header(200)
            ->set_output(json_encode(array(
                'status' => 'success',
                'stats' => array(
                    'total_posts' => $total_posts,
                    'total_leads' => $total_leads,
                    'recent_posts' => $recent_posts
                )
            )));
    }

    /**
     * Helper: Generate unique slug
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
     * Helper: Calculate read time
     */
    private function calculate_read_time($content) {
        $word_count = str_word_count(strip_tags($content));
        return ceil($word_count / 200); // 200 words per minute
    }

    /**
     * Helper: Increment views
     */
    private function increment_views($blog_id) {
        // Get current extra_data
        $this->db->select('extra_data');
        $this->db->where('blog_id', $blog_id);
        $post = $this->db->get('blog_content')->row_array();
        
        if ($post) {
            $extra_data = json_decode($post['extra_data'], true) ?: array();
            $extra_data['views'] = isset($extra_data['views']) ? $extra_data['views'] + 1 : 1;
            
            // Update views
            $this->db->where('blog_id', $blog_id);
            $this->db->update('blog_content', array(
                'extra_data' => json_encode($extra_data)
            ));
        }
    }
}

/* End of file BlogController.php */
/* Location: ./application/controllers/BlogController.php */