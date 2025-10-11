<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class BlogContentController extends ResourceController
{
    use ResponseTrait;
    
    protected $modelName = 'App\Models\BlogContentModel';
    protected $format = 'json';
    
    /**
     * Create new blog content
     * POST: /api/blog-content
     */
    public function create()
    {
        try {
            // Get JSON data from request
            $json = $this->request->getJSON();
            
            // Validate required fields
            $rules = [
                'content_type' => 'required|in_list[post,category,lead,admin_user,media,comment,like]',
                'content' => 'required'
            ];
            
            if (!$this->validate($rules)) {
                return $this->failValidationErrors($this->validator->getErrors());
            }
            
            // Prepare data for insertion
            $data = [
                'content_type' => $json->content_type ?? 'post',
                'content' => $json->content ?? '',
                'meta_title' => $json->meta_title ?? null,
                'meta_description' => $json->meta_description ?? null,
                'slug' => $json->slug ?? $this->generateSlug($json->meta_title ?? ''),
                'tags' => isset($json->tags) ? json_encode($json->tags) : null,
                'extra_data' => isset($json->extra_data) ? json_encode($json->extra_data) : null
            ];
            
            // Insert into database
            $model = new \App\Models\BlogContentModel();
            $blog_id = $model->insert($data);
            
            if ($blog_id) {
                // Get the inserted record
                $newData = $model->find($blog_id);
                
                // Return success response
                return $this->respondCreated([
                    'status' => true,
                    'message' => 'Blog content created successfully',
                    'data' => [
                        'blog_id' => $blog_id,
                        'content_type' => $newData['content_type'],
                        'slug' => $newData['slug']
                    ]
                ]);
            } else {
                return $this->failServerError('Failed to create blog content');
            }
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent creation error: ' . $e->getMessage());
            return $this->failServerError('Internal server error: ' . $e->getMessage());
        }
    }
    
    /**
     * Get all blog content
     * GET: /api/blog-content
     */
    public function index()
    {
        try {
            $model = new \App\Models\BlogContentModel();
            
            // Get query parameters
            $content_type = $this->request->getGet('content_type');
            $limit = $this->request->getGet('limit') ?? 10;
            $offset = $this->request->getGet('offset') ?? 0;
            
            // Build query
            $builder = $model->builder();
            
            if ($content_type) {
                $builder->where('content_type', $content_type);
            }
            
            $data = $builder->limit($limit, $offset)
                          ->orderBy('blog_id', 'DESC')
                          ->get()
                          ->getResultArray();
            
            // Parse JSON fields
            foreach ($data as &$item) {
                if ($item['tags']) {
                    $item['tags'] = json_decode($item['tags'], true);
                }
                if ($item['extra_data']) {
                    $item['extra_data'] = json_decode($item['extra_data'], true);
                }
            }
            
            return $this->respond([
                'status' => true,
                'data' => $data,
                'total' => $model->countAllResults()
            ]);
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent fetch error: ' . $e->getMessage());
            return $this->failServerError('Internal server error');
        }
    }
    
    /**
     * Get single blog content by ID
     * GET: /api/blog-content/{id}
     */
    public function show($id = null)
    {
        try {
            $model = new \App\Models\BlogContentModel();
            $data = $model->find($id);
            
            if (!$data) {
                return $this->failNotFound('Blog content not found');
            }
            
            // Parse JSON fields
            if ($data['tags']) {
                $data['tags'] = json_decode($data['tags'], true);
            }
            if ($data['extra_data']) {
                $data['extra_data'] = json_decode($data['extra_data'], true);
            }
            
            return $this->respond([
                'status' => true,
                'data' => $data
            ]);
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent show error: ' . $e->getMessage());
            return $this->failServerError('Internal server error');
        }
    }
    
    /**
     * Update blog content
     * PUT: /api/blog-content/{id}
     */
    public function update($id = null)
    {
        try {
            $model = new \App\Models\BlogContentModel();
            
            // Check if record exists
            if (!$model->find($id)) {
                return $this->failNotFound('Blog content not found');
            }
            
            // Get JSON data
            $json = $this->request->getJSON();
            
            // Prepare update data
            $data = [];
            
            if (isset($json->content_type)) {
                $data['content_type'] = $json->content_type;
            }
            if (isset($json->content)) {
                $data['content'] = $json->content;
            }
            if (isset($json->meta_title)) {
                $data['meta_title'] = $json->meta_title;
            }
            if (isset($json->meta_description)) {
                $data['meta_description'] = $json->meta_description;
            }
            if (isset($json->slug)) {
                $data['slug'] = $json->slug;
            }
            if (isset($json->tags)) {
                $data['tags'] = json_encode($json->tags);
            }
            if (isset($json->extra_data)) {
                $data['extra_data'] = json_encode($json->extra_data);
            }
            
            // Update record
            if ($model->update($id, $data)) {
                return $this->respond([
                    'status' => true,
                    'message' => 'Blog content updated successfully',
                    'data' => ['blog_id' => $id]
                ]);
            } else {
                return $this->failServerError('Failed to update blog content');
            }
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent update error: ' . $e->getMessage());
            return $this->failServerError('Internal server error');
        }
    }
    
    /**
     * Delete blog content
     * DELETE: /api/blog-content/{id}
     */
    public function delete($id = null)
    {
        try {
            $model = new \App\Models\BlogContentModel();
            
            // Check if record exists
            if (!$model->find($id)) {
                return $this->failNotFound('Blog content not found');
            }
            
            // Delete record
            if ($model->delete($id)) {
                return $this->respond([
                    'status' => true,
                    'message' => 'Blog content deleted successfully'
                ]);
            } else {
                return $this->failServerError('Failed to delete blog content');
            }
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent delete error: ' . $e->getMessage());
            return $this->failServerError('Internal server error');
        }
    }
    
    /**
     * Get blog content by slug
     * GET: /api/blog-content/slug/{slug}
     */
    public function getBySlug($slug = null)
    {
        try {
            $model = new \App\Models\BlogContentModel();
            $data = $model->where('slug', $slug)->first();
            
            if (!$data) {
                return $this->failNotFound('Blog content not found');
            }
            
            // Parse JSON fields
            if ($data['tags']) {
                $data['tags'] = json_decode($data['tags'], true);
            }
            if ($data['extra_data']) {
                $data['extra_data'] = json_decode($data['extra_data'], true);
            }
            
            return $this->respond([
                'status' => true,
                'data' => $data
            ]);
            
        } catch (\Exception $e) {
            log_message('error', 'BlogContent getBySlug error: ' . $e->getMessage());
            return $this->failServerError('Internal server error');
        }
    }
    
    /**
     * Generate slug from title
     */
    private function generateSlug($title)
    {
        if (empty($title)) {
            return 'blog-' . time();
        }
        
        $slug = strtolower(trim($title));
        $slug = preg_replace('/[^a-z0-9-]/', '-', $slug);
        $slug = preg_replace('/-+/', '-', $slug);
        $slug = trim($slug, '-');
        
        // Check if slug exists and make it unique
        $model = new \App\Models\BlogContentModel();
        $originalSlug = $slug;
        $counter = 1;
        
        while ($model->where('slug', $slug)->first()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }
        
        return $slug;
    }
}