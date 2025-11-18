<?php

class QuoteController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('QuoteModel');
        $this->load->helper('url');
        
        // CORS headers
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }

    /**
     * POST: /QuoteController/insert_quote_dubai
     * Insert complete quote with customer check and 3-table logic
     */
    public function insert_quote_dubai() {
        try {
            // Get all POST data
            $input_data = [
                'customer_name' => $this->input->post('customer_name') ?: $this->input->post('fullName'),
                'customer_email' => $this->input->post('customer_email') ?: $this->input->post('email'),
                'customer_contact1' => $this->input->post('customer_contact1') ?: $this->input->post('phone'),
                'pickup_address' => $this->input->post('pickup_address') ?: $this->input->post('address'),
                'floor' => $this->input->post('floor'),
                'lift_available' => $this->input->post('lift_available') ?: $this->input->post('liftAvailable'),
                'storage_type' => $this->input->post('storage_type') ?: $this->input->post('storageType'),
                'storage_option' => $this->input->post('storage_option') ?: $this->input->post('storageOption'),
                'pickup_date' => $this->input->post('pickup_date') ?: $this->input->post('pickupDate'),
                'quoted_price' => $this->input->post('quoted_price') ?: $this->input->post('quotedPrice'),
                'total_points' => $this->input->post('total_points'),
                'total_pallets' => $this->input->post('total_pallets'),
                'total_sqft' => $this->input->post('total_sqft'),
                'selected_items' => $this->input->post('selected_items') ?: $this->input->post('selectedItems')
            ];

            // Validate required fields
            if (empty($input_data['customer_name']) || empty($input_data['customer_email']) || empty($input_data['customer_contact1'])) {
                echo json_encode([
                    'status' => false,
                    'message' => 'Missing required fields: customer_name, customer_email, customer_contact1'
                ]);
                return;
            }

            // Parse selected items if it's JSON string
            if (is_string($input_data['selected_items'])) {
                $input_data['selected_items'] = json_decode($input_data['selected_items'], true);
            }

            // Process the complete quote insertion
            $result = $this->QuoteModel->insert_complete_quote($input_data);

            if ($result['status']) {
                echo json_encode([
                    'status' => true,
                    'message' => 'Quote inserted successfully',
                    'data' => $result['data']
                ]);
            } else {
                echo json_encode([
                    'status' => false,
                    'message' => $result['message']
                ]);
            }

        } catch (Exception $e) {
            echo json_encode([
                'status' => false,
                'message' => 'Error: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * GET: /QuoteController/get_customer_quotes/{customer_id}
     * Get all quotes for a specific customer
     */
    public function get_customer_quotes($customer_id = null) {
        if (!$customer_id) {
            echo json_encode([
                'status' => false,
                'message' => 'Customer ID required'
            ]);
            return;
        }

        $quotes = $this->QuoteModel->get_customer_quotes($customer_id);
        
        echo json_encode([
            'status' => true,
            'data' => $quotes
        ]);
    }

    /**
     * GET: /QuoteController/get_quote_details/{quote_id}
     * Get complete quote details with items
     */
    public function get_quote_details($quote_id = null) {
        if (!$quote_id) {
            echo json_encode([
                'status' => false,
                'message' => 'Quote ID required'
            ]);
            return;
        }

        $quote_details = $this->QuoteModel->get_quote_with_items($quote_id);
        
        if ($quote_details) {
            echo json_encode([
                'status' => true,
                'data' => $quote_details
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'message' => 'Quote not found'
            ]);
        }
    }

    /**
     * POST: /QuoteController/check_customer_exists
     * Check if customer exists by email or phone
     */
    public function check_customer_exists() {
        $email = $this->input->post('customer_email');
        $phone = $this->input->post('customer_contact1');

        if (!$email && !$phone) {
            echo json_encode([
                'status' => false,
                'message' => 'Email or phone required'
            ]);
            return;
        }

        $customer = $this->QuoteModel->find_existing_customer($email, $phone);
        
        echo json_encode([
            'status' => true,
            'exists' => !empty($customer),
            'customer' => $customer
        ]);
    }

    /**
     * POST: /insert_customer_dubai
     * Insert or get existing customer
     */
    public function insert_customer_dubai() {
        header('Content-Type: application/json');
        
        try {
            $customer_name = $this->input->post('customer_name');
            $customer_email = $this->input->post('customer_email');
            $customer_contact1 = $this->input->post('customer_contact1');
            $pickup_address = $this->input->post('pickup_address');

            // Validation
            if (empty($customer_name) || empty($customer_email) || empty($customer_contact1)) {
                echo json_encode(['status' => false, 'message' => 'Required fields missing']);
                return;
            }

            // Use the model to insert or get customer
            $result = $this->QuoteModel->insert_or_get_customer([
                'customer_name' => $customer_name,
                'customer_email' => $customer_email,
                'customer_contact1' => $customer_contact1,
                'pickup_address' => $pickup_address
            ]);

            echo json_encode([
                'status' => $result['status'],
                'message' => $result['message'],
                'data' => ['customer_id' => $result['customer_id']]
            ]);

        } catch (Exception $e) {
            echo json_encode(['status' => false, 'message' => 'Error: ' . $e->getMessage()]);
        }
    }

    /**
     * POST: /insert_quotation_dubai
     * Insert quotation with both pricing options
     */
    public function insert_quotation_dubai() {
        header('Content-Type: application/json');
        
        try {
            $customer_id = $this->input->post('customer_id');
            $closed_storage_price = $this->input->post('closed_storage_price');
            $shared_storage_price = $this->input->post('shared_storage_price');
            $selected_storage_type = $this->input->post('selected_storage_type');
            $lift = $this->input->post('lift');
            $floor = $this->input->post('floor');
            $total_sqft = $this->input->post('total_sqft');
            $total_points = $this->input->post('total_points');
            $total_pallets = $this->input->post('total_pallets');

            // Validation
            if (empty($customer_id)) {
                echo json_encode(['status' => false, 'message' => 'Customer ID is required']);
                return;
            }

            // Check if customer exists
            $this->db->where('customer_id', $customer_id);
            $customer = $this->db->get('ss_customer_dubai')->row();
            
            if (!$customer) {
                echo json_encode(['status' => false, 'message' => 'Customer not found']);
                return;
            }

            // Insert quotation data with dual pricing
            // storage_price = closed storage price
            // shared_storage_price = shared storage price
            $quotation_data = [
                'customer_id' => $customer_id,
                'storage_price' => $closed_storage_price ?: '0.00', // Closed storage price
                'shared_storage_price' => $shared_storage_price ?: '0.00', // Shared storage price
                'lift' => $lift ?: 'no',
                'floor' => $floor ?: '0',
                'total_sqft' => $total_sqft ?: 0,
                'total_points' => $total_points ?: 0,
                'quotation_created_at' => date('Y-m-d H:i:s')
            ];

            $this->db->insert('ss_new_dubai_customer_quotation', $quotation_data);
            $quotation_id = $this->db->insert_id();

            if ($quotation_id) {
                echo json_encode([
                    'status' => true,
                    'message' => 'Quotation inserted successfully',
                    'data' => [
                        'quotation_id' => $quotation_id,
                        'customer_id' => $customer_id,
                        'storage_price' => $closed_storage_price, // Closed price
                        'shared_storage_price' => $shared_storage_price, // Shared price
                        'selected_storage_type' => $selected_storage_type,
                        'total_sqft' => $total_sqft,
                        'total_points' => $total_points
                    ]
                ]);
            } else {
                echo json_encode(['status' => false, 'message' => 'Failed to insert quotation']);
            }

        } catch (Exception $e) {
            echo json_encode(['status' => false, 'message' => 'Error: ' . $e->getMessage()]);
        }
        
        // Ensure no additional output
        exit();
    }

    /**
     * POST: /insert_quotation_items_dubai
     * Insert quotation items
     */
    public function insert_quotation_items_dubai() {
        header('Content-Type: application/json');
        
        try {
            $quotation_id = $this->input->post('quotation_id');
            $customer_id = $this->input->post('customer_id');
            $selected_items = $this->input->post('selected_items');

            // Validation
            if (empty($quotation_id) || empty($customer_id)) {
                echo json_encode(['status' => false, 'message' => 'Quotation ID and Customer ID are required']);
                return;
            }

            if (empty($selected_items)) {
                echo json_encode(['status' => false, 'message' => 'Selected items are required']);
                return;
            }

            // Parse selected items if it's JSON string
            if (is_string($selected_items)) {
                $selected_items = json_decode($selected_items, true);
            }

            if (!is_array($selected_items) || empty($selected_items)) {
                echo json_encode(['status' => false, 'message' => 'Invalid selected items format']);
                return;
            }

            // Insert items using the model
            $result = $this->QuoteModel->insert_quotation_items($quotation_id, $selected_items);

            if ($result['status']) {
                echo json_encode([
                    'status' => true,
                    'message' => 'Items inserted successfully',
                    'data' => ['items_inserted' => $result['items_inserted']]
                ]);
            } else {
                echo json_encode(['status' => false, 'message' => $result['message']]);
            }

        } catch (Exception $e) {
            echo json_encode(['status' => false, 'message' => 'Error: ' . $e->getMessage()]);
        }
        
        // Ensure no additional output
        exit();
    }

    /**
     * Clean exit for class
     */
    public function __destruct() {
        // Prevent any additional output
    }
}