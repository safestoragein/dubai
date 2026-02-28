import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SafeStorage Dubai - Data Protection',
  description: 'Read SafeStorage Dubai privacy policy. Learn how we collect, use, protect and manage your personal information in accordance with UAE data protection laws.',
  openGraph: {
    title: 'Privacy Policy | SafeStorage Dubai',
    description: 'SafeStorage Dubai privacy policy and data protection',
    url: 'https://safestorage.ae/privacy-policy',
  },
  alternates: {
    canonical: 'https://safestorage.ae/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8', color: '#1a1a1a' }}>
      <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#1a1a1a', textAlign: 'center' }}>
        Privacy Policy
      </h1>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #e5e7eb' }}>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          <strong>Last Updated:</strong> February 2026
        </p>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          SafeStorage Dubai is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our storage services.
        </p>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          1. Information We Collect
        </h2>
        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>
          1.1 Personal Information
        </h3>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We collect personal information that you provide to us when using our services:
        </p>
        <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Full name and contact details (phone number, email address)</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Emirates ID or Passport information</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Residential or business address</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Payment information (credit card details, billing address)</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Inventory details of items stored with us</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Communication preferences</li>
        </ol>

        <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#1a1a1a' }}>
          1.2 Automatically Collected Information
        </h3>
        <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>IP address and browser type</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Device information</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Access times and referring website addresses</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Pages viewed and links clicked</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Cookies and similar tracking technologies</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#eff6ff', padding: '30px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1e40af', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          2. How We Use Your Information
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We use the collected information for the following purposes:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To provide and manage storage services</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To process payments and prevent fraud</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To schedule pickup and delivery services</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To communicate with you about your storage account</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To send invoices and payment reminders</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To improve our services and customer experience</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To send marketing communications (with your consent)</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To comply with legal obligations and regulatory requirements</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To verify your identity and prevent unauthorized access</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>To analyze usage patterns and optimize our website</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          3. Information Sharing and Disclosure
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (payment processors, delivery partners, IT support)
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Legal Requirements:</strong> When required by law, court order, or government regulations
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our customers or others
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>With Your Consent:</strong> When you have given explicit consent to share your information
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '12px', border: '1px solid #86efac' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#166534', borderBottom: '3px solid #22c55e', paddingBottom: '10px' }}>
          4. Data Security
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We implement appropriate technical and organizational measures to protect your personal information:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Encryption of sensitive data during transmission and storage</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Secure servers with firewall protection</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Regular security audits and updates</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Limited access to personal information (only authorized personnel)</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>24/7 CCTV surveillance at storage facilities</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Biometric access control systems</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Regular backup of data to prevent loss</li>
        </ol>
        <p style={{ marginTop: '15px', fontSize: '16px', fontStyle: 'italic' }}>
          However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          5. Your Rights and Choices
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          You have the following rights regarding your personal information:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Access:</strong> You can request a copy of the personal information we hold about you
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Correction:</strong> You can request correction of inaccurate or incomplete information
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Deletion:</strong> You can request deletion of your personal information (subject to legal retention requirements)
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Opt-Out:</strong> You can opt-out of marketing communications at any time by clicking "unsubscribe" in emails or contacting us
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Data Portability:</strong> You can request your data in a structured, commonly used format
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Object to Processing:</strong> You can object to certain types of data processing
          </li>
        </ol>
        <p style={{ marginTop: '15px', fontSize: '16px' }}>
          To exercise any of these rights, please contact us at <a href="mailto:safestoragedubai@gmail.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>safestoragedubai@gmail.com</a> or call <a href="tel:+971505773388" style={{ color: '#2563eb', textDecoration: 'underline' }}>+971 50 577 3388</a>.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          6. Cookies and Tracking Technologies
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We use cookies and similar tracking technologies to enhance your experience:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Essential Cookies:</strong> Required for the website to function properly
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Preference Cookies:</strong> Remember your settings and preferences
          </li>
        </ol>
        <p style={{ marginTop: '15px', fontSize: '16px' }}>
          You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
        </p>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#fef3c7', padding: '30px', borderRadius: '12px', border: '1px solid #fcd34d' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#92400e', borderBottom: '3px solid #f59e0b', paddingBottom: '10px' }}>
          7. Data Retention
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          We retain your personal information for as long as necessary to:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Provide our storage services to you</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Comply with legal, tax, and accounting obligations</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Resolve disputes and enforce our agreements</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Maintain business records as required by UAE law</li>
        </ol>
        <p style={{ marginTop: '15px', fontSize: '16px' }}>
          When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policy and UAE regulations.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          8. Third-Party Links
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          9. Children's Privacy
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          10. International Data Transfers
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          Your information is primarily stored and processed in the United Arab Emirates. If we transfer data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
        </p>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#fef2f2', padding: '30px', borderRadius: '12px', border: '1px solid #fecaca' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#dc2626', borderBottom: '3px solid #dc2626', paddingBottom: '10px' }}>
          11. Changes to This Privacy Policy
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Posting the updated policy on our website</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Updating the "Last Updated" date at the top of this policy</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Sending you an email notification (for significant changes)</li>
        </ol>
        <p style={{ marginTop: '15px', fontSize: '16px' }}>
          Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          12. Compliance with UAE Laws
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          SafeStorage Dubai operates in compliance with UAE data protection laws and regulations, including:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Dubai Data Law (Law No. 26 of 2015)</li>
          <li style={{ marginBottom: '10px', fontSize: '16px' }}>Other applicable UAE federal and emirate-level regulations</li>
        </ol>
      </section>

      <div style={{ backgroundColor: '#1e40af', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
          Contact Us About Privacy
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          📧 Email: <a href="mailto:safestoragedubai@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>safestoragedubai@gmail.com</a>
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          📞 Call: <a href="tel:+971505773388" style={{ color: 'white', textDecoration: 'underline' }}>+971 50 577 3388</a>
        </p>
        <p style={{ fontSize: '18px', marginTop: '25px', opacity: '0.9' }}>
          📍 Address: 402- B Wing, Emarat Atrium Bldg, Dubai Investment Park, Dubai, UAE
        </p>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Last Updated: February 2026 | © 2026 SafeStorage Dubai. All rights reserved.
        </p>
      </div>
    </div>
  );
}
