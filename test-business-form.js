// Test script to verify business storage form submission
const testBusinessForm = async () => {
  const formData = new URLSearchParams();
  formData.append('customer_name', 'John Smith');
  formData.append('company_name', 'ABC Technologies Ltd');
  formData.append('customer_email', 'john@abctech.com');
  formData.append('customer_contact1', '+971501234567');
  formData.append('storage_type', 'business');
  formData.append('storage_size', '250');

  try {
    const response = await fetch('http://localhost:3000/api/insert-customer-details-dubai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const result = await response.text();
    console.log('Response status:', response.status);
    console.log('Response:', result);
    
    if (response.status === 200) {
      console.log('✅ Business form submission successful!');
    } else {
      console.log('❌ Business form submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

testBusinessForm();