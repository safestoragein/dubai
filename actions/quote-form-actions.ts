"use server"

export async function submitQuoteForm(formData: FormData) {
  try {
    // Extract form data with the exact field names required by the API
    const customer_name = formData.get("customer_name")
    const customer_email = formData.get("customer_email")
    const customer_contact1 = formData.get("customer_contact1")
    const storage_type = formData.get("storage_type") || ""
    const storage_size = formData.get("storage_size") || ""

    // Log the data for debugging
    console.log("Form data received:", {
      customer_name,
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

    // Try with URL encoded form data instead of JSON
    const urlEncodedData = new URLSearchParams({
      customer_name: customer_name.toString(),
      customer_email: customer_email.toString(),
      customer_contact1: customer_contact1.toString(),
      storage_type: storage_type.toString(),
      storage_size: storage_size.toString(),
    }).toString()

    // Send data to local API using form-urlencoded format
    const response = await fetch("http://localhost:3000/api/insert-customer-details-dubai", {
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
