"use server"

export async function submitQuoteForm(formData: FormData) {
  try {
    // Extract form data with the exact field names required by the API
    const customer_name = formData.get("customer_name")
    const company_name = formData.get("company_name")
    const customer_email = formData.get("customer_email")
    const customer_contact1 = formData.get("customer_contact1")
    const storage_type = formData.get("storage_type") || ""
    const storage_size = formData.get("storage_size") || ""

    // Log the data for debugging
    console.log("Form data received:", {
      customer_name,
      company_name,
      customer_email,
      customer_contact1,
      storage_type,
      storage_size,
    })

    // Validate required fields
    if (!customer_name || !customer_email || !customer_contact1) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Determine which API endpoint to use based on storage_type
    let apiUrl: string
    let urlEncodedData: string

    if (storage_type === 'business') {
      // Use business API endpoint
      apiUrl = 'https://safestorage.in/back/app/insert_business_customer_details_dubai'
      urlEncodedData = new URLSearchParams({
        customer_name: customer_name.toString(),
        company_name: company_name?.toString() || '',
        customer_contact1: customer_contact1.toString(),
        customer_email: customer_email.toString(),
        storage_size: storage_size.toString(),
      }).toString()
    } else {
      // Use household API endpoint (default)
      apiUrl = 'https://safestorage.in/back/app/insert_customer_details_dubai'
      urlEncodedData = new URLSearchParams({
        customer_name: customer_name.toString(),
        customer_contact1: customer_contact1.toString(),
        customer_email: customer_email.toString(),
        storage_size: storage_size.toString(),
      }).toString()
    }

    console.log("Submitting to API:", apiUrl)
    console.log("Form data:", urlEncodedData)

    // Send data directly to your backend API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
      cache: "no-store",
    })

    // Log the response for debugging
    console.log("Response status:", response.status)

    if (!response.ok) {
      console.error("API error:", response.status)
      return { success: false, message: `API error: ${response.status}` }
    }

    // Read response text
    const responseText = await response.text()
    console.log("Response text:", responseText)

    // Check if response indicates success
    if (responseText.toLowerCase().includes('success')) {
      // Return success with redirect flag
      return {
        success: true,
        shouldRedirect: true,
        redirectUrl: "/thank-you",
      }
    } else {
      return { success: false, message: "Submission failed" }
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, message: "An error occurred while submitting the form." }
  }
}
