<?php

class QuoteModel extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    /**
     * Find existing customer by email OR phone
     */
    public function find_existing_customer($email = null, $phone = null) {
        if (!$email && !$phone) {
            return null;
        }

        $this->db->select('*');
        $this->db->from('ss_customer_dubai');
        
        if ($email && $phone) {
            $this->db->group_start();
            $this->db->where('customer_email', $email);
            $this->db->or_where('customer_contact1', $phone);
            $this->db->group_end();
        } elseif ($email) {
            $this->db->where('customer_email', $email);
        } elseif ($phone) {
            $this->db->where('customer_contact1', $phone);
        }

        $query = $this->db->get();
        return $query->row_array();
    }

    /**
     * Insert or get existing customer
     */
    public function insert_or_get_customer($customer_data) {
        // Check if customer already exists
        $existing_customer = $this->find_existing_customer(
            $customer_data['customer_email'], 
            $customer_data['customer_contact1']
        );

        if ($existing_customer) {
            // Customer exists, return existing customer ID
            return [
                'status' => true,
                'customer_id' => $existing_customer['customer_id'],
                'action' => 'existing',
                'message' => 'Customer already exists'
            ];
        } else {
            // Insert new customer
            $customer_insert_data = [
                'customer_name' => $customer_data['customer_name'],
                'customer_email' => $customer_data['customer_email'],
                'customer_contact1' => $customer_data['customer_contact1'],
                'pickup_address' => $customer_data['pickup_address'],
                'created_at' => date('Y-m-d H:i:s')
            ];

            $this->db->insert('ss_customer_dubai', $customer_insert_data);
            $customer_id = $this->db->insert_id();

            if ($customer_id) {
                return [
                    'status' => true,
                    'customer_id' => $customer_id,
                    'action' => 'inserted',
                    'message' => 'New customer created'
                ];
            } else {
                return [
                    'status' => false,
                    'message' => 'Failed to insert customer'
                ];
            }
        }
    }

    /**
     * Insert quotation data
     */
    public function insert_quotation($customer_id, $quotation_data) {
        $quote_insert_data = [
            'customer_id' => $customer_id,
            'floor' => $quotation_data['floor'],
            'lift_available' => $quotation_data['lift_available'],
            'storage_type' => $quotation_data['storage_type'],
            'storage_option' => $quotation_data['storage_option'],
            'pickup_date' => $quotation_data['pickup_date'],
            'quoted_price' => $quotation_data['quoted_price'],
            'total_points' => $quotation_data['total_points'] ?: 0,
            'total_pallets' => $quotation_data['total_pallets'] ?: 0,
            'total_sqft' => $quotation_data['total_sqft'] ?: 0,
            'created_at' => date('Y-m-d H:i:s')
        ];

        $this->db->insert('ss_dubai_customer_quotation', $quote_insert_data);
        $quotation_id = $this->db->insert_id();

        if ($quotation_id) {
            return [
                'status' => true,
                'quotation_id' => $quotation_id
            ];
        } else {
            return [
                'status' => false,
                'message' => 'Failed to insert quotation'
            ];
        }
    }

    /**
     * Insert quotation items
     */
    public function insert_quotation_items($quotation_id, $selected_items) {
        if (empty($selected_items) || !is_array($selected_items)) {
            return [
                'status' => true,
                'message' => 'No items to insert'
            ];
        }

        $items_data = [];
        foreach ($selected_items as $item) {
            $items_data[] = [
                'quotation_id' => $quotation_id,
                'item_name' => $item['name'],
                'quantity' => $item['quantity'],
                'price_per_item' => $item['price'],
                'storage_points_per_item' => $item['storagePoints'] ?: 0,
                'total_price' => $item['price'] * $item['quantity'],
                'total_storage_points' => $item['storagePoints'] * $item['quantity'],
                'created_at' => date('Y-m-d H:i:s')
            ];
        }

        if (!empty($items_data)) {
            $this->db->insert_batch('ss_dubai_customer_quotation_item', $items_data);
            
            if ($this->db->affected_rows() > 0) {
                return [
                    'status' => true,
                    'items_inserted' => count($items_data)
                ];
            } else {
                return [
                    'status' => false,
                    'message' => 'Failed to insert quotation items'
                ];
            }
        }

        return [
            'status' => true,
            'items_inserted' => 0
        ];
    }

    /**
     * Complete quote insertion - handles all 3 tables
     */
    public function insert_complete_quote($data) {
        // Start transaction
        $this->db->trans_begin();

        try {
            // Step 1: Insert or get customer
            $customer_result = $this->insert_or_get_customer($data);
            
            if (!$customer_result['status']) {
                $this->db->trans_rollback();
                return $customer_result;
            }

            $customer_id = $customer_result['customer_id'];

            // Step 2: Insert quotation
            $quotation_result = $this->insert_quotation($customer_id, $data);
            
            if (!$quotation_result['status']) {
                $this->db->trans_rollback();
                return $quotation_result;
            }

            $quotation_id = $quotation_result['quotation_id'];

            // Step 3: Insert quotation items
            $items_result = $this->insert_quotation_items($quotation_id, $data['selected_items']);
            
            if (!$items_result['status']) {
                $this->db->trans_rollback();
                return $items_result;
            }

            // Commit transaction
            $this->db->trans_commit();

            return [
                'status' => true,
                'message' => 'Quote inserted successfully',
                'data' => [
                    'customer_id' => $customer_id,
                    'quotation_id' => $quotation_id,
                    'customer_action' => $customer_result['action'],
                    'items_inserted' => $items_result['items_inserted']
                ]
            ];

        } catch (Exception $e) {
            $this->db->trans_rollback();
            return [
                'status' => false,
                'message' => 'Transaction failed: ' . $e->getMessage()
            ];
        }
    }

    /**
     * Get customer quotes
     */
    public function get_customer_quotes($customer_id) {
        $this->db->select('q.*, c.customer_name, c.customer_email');
        $this->db->from('ss_dubai_customer_quotation q');
        $this->db->join('ss_customer_dubai c', 'c.id = q.customer_id');
        $this->db->where('q.customer_id', $customer_id);
        $this->db->order_by('q.created_at', 'DESC');
        
        $query = $this->db->get();
        return $query->result_array();
    }

    /**
     * Get complete quote details with items
     */
    public function get_quote_with_items($quotation_id) {
        // Get quotation details with customer info
        $this->db->select('q.*, c.customer_name, c.customer_email, c.customer_contact1, c.pickup_address');
        $this->db->from('ss_dubai_customer_quotation q');
        $this->db->join('ss_customer_dubai c', 'c.id = q.customer_id');
        $this->db->where('q.id', $quotation_id);
        
        $quote_query = $this->db->get();
        $quote = $quote_query->row_array();

        if (!$quote) {
            return null;
        }

        // Get quotation items
        $this->db->select('*');
        $this->db->from('ss_dubai_customer_quotation_item');
        $this->db->where('quotation_id', $quotation_id);
        
        $items_query = $this->db->get();
        $items = $items_query->result_array();

        // Combine quote with items
        $quote['items'] = $items;
        
        return $quote;
    }

    /**
     * Get summary statistics
     */
    public function get_quote_summary($days = 30) {
        $date_from = date('Y-m-d H:i:s', strtotime("-{$days} days"));
        
        $this->db->select('
            storage_option,
            COUNT(*) as total_quotes,
            AVG(quoted_price) as avg_price,
            SUM(quoted_price) as total_revenue,
            AVG(total_sqft) as avg_sqft
        ');
        $this->db->from('ss_dubai_customer_quotation');
        $this->db->where('created_at >=', $date_from);
        $this->db->group_by('storage_option');
        
        $query = $this->db->get();
        return $query->result_array();
    }
}