"use server"

export async function submitQuoteFormAlt(formData: FormData) {
  try {
    // Extract form data
    const customer_name = formData.get("customer_name")?.toString() || ""
    const company_name = formData.get("company_name")?.toString() || ""
    const customer_email = formData.get("customer_email")?.toString() || ""
    const customer_contact1 = formData.get("customer_contact1")?.toString() || ""
    const storage_type = formData.get("storage_type")?.toString() || ""
    const storage_size = formData.get("storage_size")?.toString() || ""

    // Log the data for debugging
    console.log("Form data received:", {
      customer_name,
      company_name,
      customer_email,
      customer_contact1,
      storage_type,
      storage_size,
    })

    // Determine which API endpoint to use based on storage_type
    let apiUrl: string
    let urlEncodedData: string

    if (storage_type === 'business') {
      // Use business API endpoint
      apiUrl = 'https://safestorage.in/back/app/insert_business_customer_details_dubai'
      urlEncodedData = new URLSearchParams({
        customer_name: customer_name,
        company_name: company_name,
        customer_contact1: customer_contact1,
        customer_email: customer_email,
        storage_size: storage_size,
      }).toString()
    } else {
      // Use household API endpoint (default)
      apiUrl = 'https://safestorage.in/back/app/insert_customer_details_dubai'
      urlEncodedData = new URLSearchParams({
        customer_name: customer_name,
        customer_contact1: customer_contact1,
        customer_email: customer_email,
        storage_size: storage_size,
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
    })

    // For debugging
    console.log("Response status:", response.status)

    if (!response.ok) {
      return {
        success: false,
        message: `Error: ${response.status}`,
      }
    }

    // Try to read response
    let responseText = ""
    try {
      // Try to read as text (our API returns "success" as text)
      responseText = await response.text()
      console.log("Response text:", responseText)
    } catch (e) {
      console.log("Could not read response body")
    }

    // Check if response indicates success
    if (response.ok || responseText.toLowerCase().includes('success')) {
      return {
        success: true,
        shouldRedirect: true,
        redirectUrl: "/thank-you",
      }
    }

    // Return error if the request failed
    return {
      success: false,
      message: "Submission failed",
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "An error occurred while submitting the form.",
    }
  }
}
