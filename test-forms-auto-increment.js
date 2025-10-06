// Test script to verify auto-increment works for both forms

const testHouseholdForm = async () => {
  const formData = new URLSearchParams();
  formData.append('customer_name', 'Jane Doe');
  formData.append('customer_email', 'jane@example.com');
  formData.append('customer_contact1', '+971502345678');
  formData.append('storage_type', 'household');
  formData.append('storage_size', '2BHK');

  try {
    const response = await fetch('http://localhost:3000/api/insert-customer-details-dubai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const result = await response.text();
    console.log('Household Form - Response status:', response.status);
    console.log('Household Form - Response:', result);
    
    if (response.status === 200) {
      console.log('✅ Household form submission successful!');
    } else {
      console.log('❌ Household form submission failed');
    }
  } catch (error) {
    console.error('Household Form Error:', error);
  }
};

const testBusinessForm = async () => {
  const formData = new URLSearchParams();
  formData.append('customer_name', 'Bob Manager');
  formData.append('company_name', 'XYZ Corporation');
  formData.append('customer_email', 'bob@xyzcorp.com');
  formData.append('customer_contact1', '+971503456789');
  formData.append('storage_type', 'business');
  formData.append('storage_size', '500');

  try {
    const response = await fetch('http://localhost:3000/api/insert-customer-details-dubai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const result = await response.text();
    console.log('Business Form - Response status:', response.status);
    console.log('Business Form - Response:', result);
    
    if (response.status === 200) {
      console.log('✅ Business form submission successful!');
    } else {
      console.log('❌ Business form submission failed');
    }
  } catch (error) {
    console.error('Business Form Error:', error);
  }
};

// Test both forms
(async () => {
  console.log('Testing Household Form...');
  await testHouseholdForm();
  
  console.log('\nTesting Business Form...');
  await testBusinessForm();
  
  console.log('\n✅ All tests completed!');
})();