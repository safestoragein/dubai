// Test script to simulate form submission
const testFormSubmission = async () => {
  console.log('🧪 Starting frontend form submission test...')
  
  // Test data
  const testData = {
    fullName: 'Test User Frontend',
    email: 'testfrontend@example.com', 
    phone: '+971501234567',
    address: 'Test Address Dubai',
    selectedItems: [
      { name: 'Sofa', quantity: 1, price: 150, storagePoints: 12 },
      { name: 'Dining Table', quantity: 1, price: 100, storagePoints: 8 },
      { name: 'Bed', quantity: 1, price: 120, storagePoints: 10 }
    ]
  }
  
  try {
    // Step 1: Test Customer API directly
    console.log('Step 1: Testing customer API...')
    const customerResponse = await fetch("https://safestorage.in/back/app/insert_customer_dubai", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        customer_name: testData.fullName,
        customer_email: testData.email,
        customer_contact1: testData.phone,
        pickup_address: testData.address,
      }),
    })
    
    const customerResult = await customerResponse.json()
    console.log('✅ Customer API Response:', customerResult)
    
    if (!customerResult.status) {
      throw new Error('Customer API failed: ' + customerResult.message)
    }
    
    const customerId = customerResult.data.customer_id
    console.log('Customer ID:', customerId)
    
    // Step 2: Test Quotation API  
    console.log('Step 2: Testing quotation API...')
    const quotationResponse = await fetch("https://safestorage.in/back/app/insert_quotation_dubai", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        customer_id: customerId.toString(),
        storage_price: '2500',
        lift: 'Yes',
        floor: '3',
        total_sqft: '350',
        total_points: '30',
      }),
    })
    
    const quotationResult = await quotationResponse.json()
    console.log('✅ Quotation API Response:', quotationResult)
    
    if (!quotationResult.status) {
      throw new Error('Quotation API failed: ' + quotationResult.message)
    }
    
    const quotationId = quotationResult.data.quotation_id
    console.log('Quotation ID:', quotationId)
    
    // Step 3: Test Items API
    console.log('Step 3: Testing items API...')
    const itemsResponse = await fetch("https://safestorage.in/back/app/insert_quotation_items_dubai", {
      method: "POST", 
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        quotation_id: quotationId.toString(),
        customer_id: customerId.toString(),
        selected_items: JSON.stringify(testData.selectedItems),
      }),
    })
    
    const itemsResult = await itemsResponse.json()
    console.log('✅ Items API Response:', itemsResult)
    
    if (!itemsResult.status) {
      throw new Error('Items API failed: ' + itemsResult.message)
    }
    
    console.log('🎉 ALL TESTS PASSED! Data stored successfully.')
    console.log('Customer ID:', customerId)
    console.log('Quotation ID:', quotationId) 
    console.log('Items inserted:', itemsResult.data.items_inserted)
    
    return {
      success: true,
      customerId,
      quotationId,
      itemsInserted: itemsResult.data.items_inserted
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    return { success: false, error: error.message }
  }
}

// Run the test
testFormSubmission()