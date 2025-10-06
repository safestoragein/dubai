"use server"

export async function submitQuoteFormAlt(formData: FormData) {
  try {
    // Extract form data
    const customer_name = formData.get("customer_name")?.toString() || ""
    const customer_email = formData.get("customer_email")?.toString() || ""
    const customer_contact1 = formData.get("customer_contact1")?.toString() || ""
    const storage_type = formData.get("storage_type")?.toString() || ""
    const storage_size = formData.get("storage_size")?.toString() || ""

    // Log the data for debugging
    console.log("Form data received:", {
      customer_name,
      customer_email,
      customer_contact1,
      storage_type,
      storage_size,
    })

    // Create a simple object for the request body
    const requestBody = {
      customer_name,
      customer_email,
      customer_contact1,
      storage_type,
      storage_size,
    }

    // Try a direct fetch to local API with minimal options
    const response = await fetch("http://localhost:3000/api/insert-customer-details-dubai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
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
