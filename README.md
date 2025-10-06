# SafeStorage Dubai - Environment Variables Setup

## Environment Variables

This project uses environment variables to manage contact information and other configuration settings.

### Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

\`\`\`env
# Contact Information
NEXT_PUBLIC_CONTACT_NUMBER=+971 0505773388
NEXT_PUBLIC_EMAIL=info@safestorage.ae
NEXT_PUBLIC_WHATSAPP_NUMBER=971505773388
\`\`\`

### Environment Variable Usage

The project includes a centralized environment configuration in `lib/env.ts` that:

- Provides fallback values if environment variables are not set
- Formats phone numbers for different use cases (tel links, WhatsApp links)
- Validates that required environment variables are present
- Provides convenient getter methods for formatted values

### How to Use

1. **Local Development**: Copy `.env.example` to `.env.local` and fill in your values
2. **Production**: Set environment variables in your deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Railway**: Project Settings → Variables
   - **Heroku**: Settings → Config Vars

### Components Using Environment Variables

- Header (phone number display)
- Footer (contact information)
- Contact Page (all contact methods)
- Floating Contact Buttons (phone & WhatsApp)
- Call Widget (phone number)

### Environment Variable Validation

The project includes validation to warn if required environment variables are missing. Check the browser console for any warnings about missing variables.
