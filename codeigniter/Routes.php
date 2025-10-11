<?php

// Add these routes to your app/Config/Routes.php file

// API Routes for Blog Content
$routes->group('api', ['namespace' => 'App\Controllers\Api'], function($routes) {
    
    // Blog Content Routes
    $routes->get('blog-content', 'BlogContentController::index');                    // GET all
    $routes->post('blog-content', 'BlogContentController::create');                  // POST create new
    $routes->get('blog-content/(:num)', 'BlogContentController::show/$1');          // GET single by ID
    $routes->put('blog-content/(:num)', 'BlogContentController::update/$1');        // PUT update
    $routes->delete('blog-content/(:num)', 'BlogContentController::delete/$1');     // DELETE
    $routes->get('blog-content/slug/(:segment)', 'BlogContentController::getBySlug/$1'); // GET by slug
    
});

// OR use resource routes (includes all CRUD operations)
$routes->resource('api/blog-content', ['controller' => 'Api\BlogContentController']);

// Additional custom routes
$routes->group('api', ['namespace' => 'App\Controllers\Api'], function($routes) {
    
    // Specific content type routes
    $routes->get('posts', 'BlogContentController::index', ['filter' => 'content_type:post']);
    $routes->get('categories', 'BlogContentController::index', ['filter' => 'content_type:category']);
    $routes->get('leads', 'BlogContentController::index', ['filter' => 'content_type:lead']);
    
});