// Test script for dual pricing functionality
const testDualPricing = async () => {
  console.log('🧪 Testing dual pricing flow...')
  
  // Test data
  const testData = {
    fullName: 'Test Dual Pricing User',
    email: 'dualprice@example.com',
    phone: '+971501234999',
    address: 'Test Address Dubai',
    selectedItems: [
      { name: 'Sofa', quantity: 1, price: 150, storagePoints: 12 },
      { name: 'Dining Table', quantity: 1, price: 100, storagePoints: 8 },
    ]
  }
  
  // Calculate pricing (simulating frontend calculations)
  const totalPoints = testData.selectedItems.reduce((acc, item) => acc + (item.storagePoints * item.quantity), 0)
  const totalPallets = Math.ceil(totalPoints / 13)
  const totalSqft = totalPallets * 16
  
  // Closed pricing: containers needed * 700 AED
  const containersNeeded = Math.ceil(totalSqft / 30)
  const closedPrice = containersNeeded * 700
  
  // Shared pricing: max(sqft, 30) * 20 AED  
  const chargeableSqft = Math.max(totalSqft, 30)
  const sharedPrice = chargeableSqft * 20
  
  console.log('📊 Calculated Pricing:')
  console.log('- Total Points:', totalPoints)
  console.log('- Total Pallets:', totalPallets)
  console.log('- Total Sqft:', totalSqft)
  console.log('- Closed Price:', closedPrice, 'AED')
  console.log('- Shared Price:', sharedPrice, 'AED')
  
  try {
    // Step 1: Insert Customer
    console.log('👤 Step 1: Creating customer...')
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
    console.log('✅ Customer Response:', customerResult)
    
    if (!customerResult.status) {
      throw new Error('Customer creation failed: ' + customerResult.message)
    }
    
    const customerId = customerResult.data.customer_id
    
    // Step 2: Insert Quotation with dual pricing
    console.log('💰 Step 2: Creating quotation with dual pricing...')
    const quotationResponse = await fetch("https://safestorage.in/back/app/insert_quotation_dubai", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        customer_id: customerId.toString(),
        closed_storage_price: closedPrice.toString(), // storage_price = closed price
        shared_storage_price: sharedPrice.toString(), // shared_storage_price = shared price
        selected_storage_type: '', // No selection yet
        lift: 'yes',
        floor: '2',
        total_sqft: totalSqft.toString(),
        total_points: totalPoints.toString(),
        total_pallets: totalPallets.toString(),
      }),
    })
    
    const quotationText = await quotationResponse.text()
    console.log('🔍 Raw Quotation Response:', quotationText)
    console.log('🔍 Response status:', quotationResponse.status)
    
    let quotationResult
    try {
      quotationResult = JSON.parse(quotationText)
      console.log('✅ Quotation Response:', quotationResult)
    } catch (parseError) {
      console.error('❌ JSON Parse Error:', parseError.message)
      console.error('❌ Raw response:', quotationText)
      throw new Error('Failed to parse quotation response: ' + quotationText.substring(0, 200))
    }
    
    if (!quotationResult.status) {
      throw new Error('Quotation creation failed: ' + quotationResult.message)
    }
    
    const quotationId = quotationResult.data.quotation_id
    
    // Step 3: Insert Items
    console.log('📦 Step 3: Adding items...')
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
    console.log('✅ Items Response:', itemsResult)
    
    if (!itemsResult.status) {
      throw new Error('Items insertion failed: ' + itemsResult.message)
    }
    
    // Step 4: Update with selected storage type (simulate user choosing shared)
    console.log('🏪 Step 4: Updating with selected storage type (shared)...')
    const updateResponse = await fetch("https://safestorage.in/back/app/insert_quotation_dubai", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        customer_id: customerId.toString(),
        storage_price: sharedPrice.toString(),
        closed_storage_price: closedPrice.toString(),
        shared_storage_price: sharedPrice.toString(),
        selected_storage_type: 'shared',
        lift: 'yes',
        floor: '2',
        total_sqft: totalSqft.toString(),
        total_points: totalPoints.toString(),
        total_pallets: totalPallets.toString(),
      }),
    })
    
    const updateResult = await updateResponse.json()
    console.log('✅ Update Response:', updateResult)
    
    console.log('🎉 DUAL PRICING TEST COMPLETED SUCCESSFULLY!')
    console.log('📋 Summary:')
    console.log(`- Customer ID: ${customerId}`)
    console.log(`- Quotation ID: ${quotationId}`)
    console.log(`- Closed Price: ${closedPrice} AED`)
    console.log(`- Shared Price: ${sharedPrice} AED`)
    console.log(`- Selected: Shared Storage (${sharedPrice} AED)`)
    console.log(`- Items Count: ${itemsResult.data.items_inserted}`)
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testDualPricing()