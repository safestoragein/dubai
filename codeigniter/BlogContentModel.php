<?php

namespace App\Models;

use CodeIgniter\Model;

class BlogContentModel extends Model
{
    protected $table = 'blog_content';
    protected $primaryKey = 'blog_id';
    protected $returnType = 'array';
    protected $useSoftDeletes = false;
    protected $useTimestamps = true;
    
    // Fields that can be set during insert/update
    protected $allowedFields = [
        'content_type',
        'content',
        'meta_title',
        'meta_description',
        'slug',
        'tags',
        'extra_data'
    ];
    
    // Validation rules
    protected $validationRules = [
        'content_type' => 'required|in_list[post,category,lead,admin_user,media,comment,like]',
        'content' => 'required',
        'slug' => 'permit_empty|alpha_dash|is_unique[blog_content.slug,blog_id,{blog_id}]'
    ];
    
    protected $validationMessages = [
        'content_type' => [
            'required' => 'Content type is required',
            'in_list' => 'Invalid content type'
        ],
        'content' => [
            'required' => 'Content is required'
        ],
        'slug' => [
            'alpha_dash' => 'Slug can only contain alphanumeric characters, dashes and underscores',
            'is_unique' => 'This slug already exists'
        ]
    ];
    
    // Automatically set timestamps
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    
    /**
     * Get all blog posts
     */
    public function getPosts($limit = 10, $offset = 0)
    {
        return $this->where('content_type', 'post')
                    ->orderBy('blog_id', 'DESC')
                    ->findAll($limit, $offset);
    }
    
    /**
     * Get all categories
     */
    public function getCategories()
    {
        return $this->where('content_type', 'category')
                    ->orderBy('meta_title', 'ASC')
                    ->findAll();
    }
    
    /**
     * Get all leads
     */
    public function getLeads($status = null)
    {
        $builder = $this->where('content_type', 'lead');
        
        if ($status) {
            $builder->where('JSON_EXTRACT(extra_data, "$.status")', $status);
        }
        
        return $builder->orderBy('blog_id', 'DESC')->findAll();
    }
    
    /**
     * Search blog posts
     */
    public function searchPosts($keyword)
    {
        return $this->where('content_type', 'post')
                    ->groupStart()
                        ->like('meta_title', $keyword)
                        ->orLike('content', $keyword)
                        ->orLike('meta_description', $keyword)
                        ->orLike('tags', $keyword)
                    ->groupEnd()
                    ->orderBy('blog_id', 'DESC')
                    ->findAll();
    }
    
    /**
     * Get posts by tag
     */
    public function getPostsByTag($tag)
    {
        return $this->where('content_type', 'post')
                    ->like('tags', $tag)
                    ->orderBy('blog_id', 'DESC')
                    ->findAll();
    }
    
    /**
     * Increment view count (stored in extra_data)
     */
    public function incrementViews($blog_id)
    {
        $post = $this->find($blog_id);
        if ($post) {
            $extra_data = json_decode($post['extra_data'], true) ?? [];
            $extra_data['views'] = ($extra_data['views'] ?? 0) + 1;
            
            return $this->update($blog_id, [
                'extra_data' => json_encode($extra_data)
            ]);
        }
        return false;
    }
}