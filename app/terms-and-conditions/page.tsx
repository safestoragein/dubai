import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read SafeStorage Dubai terms and conditions for storage services in UAE. Understand our policies, liability, payment terms and customer responsibilities.',
  openGraph: {
    title: 'Terms and Conditions | SafeStorage Dubai',
    description: 'SafeStorage Dubai storage service terms and conditions',
    url: 'https://safestorage.ae/terms-and-conditions',
  },
  alternates: {
    canonical: 'https://safestorage.ae/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', lineHeight: '1.8', color: '#1a1a1a' }}>
      <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#1a1a1a', textAlign: 'center' }}>
        Terms and Conditions
      </h1>

      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a' }}>
          About SafeStorage Dubai
        </h2>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          <strong>SafeStorage.ae</strong> is a unit of SafeStorage, a globally trusted storage facility founded in 2015. SafeStorage Dubai operates under the laws of the United Arab Emirates, serving Dubai and surrounding areas.
        </p>
        <p style={{ marginBottom: '15px', fontSize: '16px' }}>
          The SafeStorage brand, logo and mascot are the properties of SafeStorage Dubai and are subject to trademark protection.
        </p>
        <p style={{ fontWeight: '600', fontSize: '18px', color: '#dc2626', marginTop: '25px' }}>
          PLEASE READ THE FOLLOWING TERMS CAREFULLY BEFORE USING OUR SERVICES
        </p>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          1. General Terms
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>Customer accepts that it is their responsibility to ensure that information such as Emirates ID, Passport, Address Proof or any other demographics shared with SafeStorage are accurate. Customer agrees to update SafeStorage in case of any changes.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>SafeStorage reserves the right to undertake all necessary steps to ensure the security, safety and integrity of Customer goods.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>SafeStorage may take various steps to verify and confirm the authenticity and enforce the validity of the orders placed by the customer.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The term of storage begins on the first day on which the Company receives the goods or material.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>These Terms of Service shall be binding upon the Customer until the goods or material remains in storage at SafeStorage facility.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer has the right to request return of goods by placing such a request under these Terms of Service.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>Minimum of one-month charges would be levied if the goods are retrieved within a month. After first month, charges would be calculated on pro-rata basis to the retrieval date.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The stored Material shall be delivered only to the Customer or to a person authorized by the Customer. Customer must inform the Company through registered email ID along with supporting documents like Emirates ID/Passport copy of the person in case of retrieval by third party.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The request for removal of stored Material is not confirmed until it is acknowledged by SafeStorage.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>Customer must notify 7 days (or more) prior in case of goods retrieval/delivery request.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Company assures the Customer that it will try to fulfill the request for delivery of Material on the date requested by the Customer (depending on the availability of the slot).</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Company reserves the right to change the date of delivery after consulting with the Customer.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Company assures the Customer that any such change of date shall not exceed 3 business days unless requested and agreed upon by the Customer.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#fef2f2', padding: '30px', borderRadius: '12px', border: '1px solid #fecaca' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#dc2626', borderBottom: '3px solid #dc2626', paddingBottom: '10px' }}>
          2. Restrictions on Stored Material
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Prohibited Items - Customer shall NOT store:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Food, grocery, and perishable goods</li>
              <li>Masala or spice items</li>
              <li>Liquids, detergents, and gases</li>
              <li>Cosmetics</li>
              <li>Medicines</li>
              <li>Ornaments and jewellery</li>
              <li>Narcotics, arms, ammunition</li>
              <li>Living or dead plants or animals</li>
              <li>Waste materials</li>
              <li>Flammable, explosive, or toxic materials</li>
              <li>Polluted, contaminated, or radioactive materials</li>
              <li>Organic material that might attract vermin or insects</li>
              <li>Any materials that are illegal, dangerous or unsafe</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>In case the Customer stores any prohibited material without SafeStorage knowledge, the Company is not responsible for any damage or consequences.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>High-Value Items Restrictions:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Negotiable instruments</li>
              <li>Cash</li>
              <li>Precious metals and bullion</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Company has the right to open and inspect any materials tendered by the Customer for storage and to refuse acceptance of any material.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>These Terms of Service only provide the Customer with the right to store Material approved and accepted by the Company and does not give rights to access or tenancy in any particular portion of the Company's offices and storage facilities at any location.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer shall store only empty gas cylinders. The company has right to empty the cylinder in case if there is any gas in the cylinder.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          3. Limitation of Liability
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Company shall exercise such care in regards to the Material as a reasonably careful person would exercise in like circumstances. The Company shall not be liable for any loss or damage to stored Material, however caused, unless such loss or damage resulted from a failure of Company to exercise such degree of care. Company's liability, if any, for loss, damage, or destruction, however caused, to part or all of the Material stored hereunder shall be limited to one month rental charges or the declared value (whichever is lower).</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>If the Company is unable to provide any service herein contemplated because of acts of God or public enemy, seizure or legal process, strikes, lockouts, riots and civil commotions, or other reason beyond the Company's control, or because of loss or destruction of goods for which the Company is not liable, or because of any other reason provided by law, the Company shall not be liable for failure to carry out such instructions or services.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Company is NOT Responsible for:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Gradual deterioration and wear and tear</li>
              <li>Pre-existing damage</li>
              <li>Scratches due to transportation</li>
              <li>Corrosion/rust due to wetness/water in items</li>
              <li>Damage from atmospheric or climatic conditions</li>
              <li>Electrical and mechanical breakdown due to storage</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Electronic and Electrical Items:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Working condition is NOT checked before storage</li>
              <li>Items include: TV, Music System, Computers, Laptops, Refrigerator, Washing Machine, Dishwasher, Oven, Mixer, etc.</li>
              <li>Company cannot assure working condition after delivery</li>
              <li>SafeStorage is only liable for physical damage as per terms stated above</li>
            </ol>
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#eff6ff', padding: '30px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The company shall not be responsible if customer does not provide accurate value of goods while preparing the inventory during pickup.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          5. Payment, Cancellation and Refunds
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees to pay the Company according to the rates agreed as per quotation.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees to pay for storage and service in one-month advance.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer also agrees to pay additional storage and packing charges for items that are not mentioned in the quotation, calculated according to the space the items occupy.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Additional Item Charges:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Storage charges start from 12.60 AED / sqft (VAT-inclusive). You pay only for the space your items actually occupy.</li>
              <li>Applicable packing and transport charges are confirmed in your quotation based on the items being collected.</li>
              <li>Extra-large or unusual items to be discussed with the SafeStorage team for an accurate quote.</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer also agrees to pay all applicable VAT and government charges, which are subject to change as per UAE regulations.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Payment Methods Accepted:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Bank transfer</li>
              <li>Online payment via website</li>
              <li>Credit/Debit card</li>
              <li>Cheque in favor of SafeStorage Dubai</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Invoicing and Communication:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Company will raise monthly invoices</li>
              <li>Invoices and notifications sent via: Email, SMS, WhatsApp</li>
              <li>Other acceptable modes of communication may be used</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>In case of any refund to customer, it will take 10-15 business days for SafeStorage to process the refund based on the payment method chosen.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>For VAT registered businesses, it is the Customer's responsibility to provide the TRN (Tax Registration Number) to SafeStorage before invoice generation.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The storage charges will remain in effect until the last date on which goods remain in storage or 12 months from pickup date, whichever is earlier.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees that the Company is not bound by the rates after expiry of 12 months from date of pickup and rates may be revised.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>If the Customer fails to make any payment within FIFTEEN (15) days of billing, late charges will apply at the rate of 2% per month on the unpaid amount.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            If storage charges remain unpaid for ninety (90) days, Company shall have the full right to:
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Withhold services</li>
              <li>Terminate this Agreement</li>
              <li>Sell/auction/dispose of the stored material as per UAE laws</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Cancellation Policy:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Cancellation charges: AED 500 + VAT if cancelled within 48 hours of scheduled date</li>
              <li>No cancellation charges if rescheduled more than 48 hours before scheduled date</li>
              <li>No cancellation charges for postponing or preponing pickup date (with 48+ hours notice)</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees to clear all outstanding payments including past due charges before termination of booking.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#fef3c7', padding: '30px', borderRadius: '12px', border: '1px solid #fcd34d' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#92400e', borderBottom: '3px solid #f59e0b', paddingBottom: '10px' }}>
          6. Force Majeure
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          SafeStorage shall not be liable for its failure to perform under this agreement as a result of any Force Majeure events including but not limited to:
        </p>
        <ol style={{ paddingLeft: '20px', fontSize: '16px', listStyleType: 'decimal' }}>
          <li style={{ marginBottom: '10px' }}>Acts of God</li>
          <li style={{ marginBottom: '10px' }}>Fire, flood, earthquake</li>
          <li style={{ marginBottom: '10px' }}>War, terrorism, sabotage</li>
          <li style={{ marginBottom: '10px' }}>Civil unrest or labor unrest</li>
          <li style={{ marginBottom: '10px' }}>Pandemics or epidemics</li>
          <li style={{ marginBottom: '10px' }}>Action of government authorities</li>
          <li style={{ marginBottom: '10px' }}>Change in laws, rules or regulations</li>
          <li style={{ marginBottom: '10px' }}>Any other events beyond the reasonable control of SafeStorage</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          7. Language, Disputes, Governing Law and Jurisdiction
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>These Terms of Service have been written in English. To the extent any translated version conflicts with the English version, the English version controls.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The laws of the United Arab Emirates and the Emirate of Dubai shall govern these Terms of Service.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The parties agree to submit to the exclusive jurisdiction of the courts of Dubai, UAE for the purpose of litigating all claims or disputes arising from these terms.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '12px', border: '1px solid #86efac' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#166534', borderBottom: '3px solid #22c55e', paddingBottom: '10px' }}>
          8. Customer Declaration
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '20px', fontWeight: '600' }}>
          By using SafeStorage services, the Customer declares and agrees that:
        </p>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I am the rightful owner of the goods and the goods have not been stolen or illegally obtained from anyone else.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I authorize SafeStorage Dubai to store all goods on my behalf.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>SafeStorage has authority to relocate the goods from one warehouse to another warehouse if necessary for operational reasons.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>No material which is considered illegal/immoral as per UAE laws, and/or otherwise for which storage license is required, will be stored.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>All goods will be inspected by SafeStorage before acceptance into storage.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>In the event that the Company is made party to any litigation by reason of having possession of stored material, I will indemnify, hold harmless and defend the Company from and against any costs, losses, damages or liabilities, including legal fees resulting therefrom.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Electrical Appliances Preparation:</strong>
            <ol style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'decimal' }}>
              <li>Switch off all electrical appliances 24 hours before pickup</li>
              <li>Appliances include: Refrigerator, Washing Machine, Water Purifier, etc.</li>
              <li>Ensure all appliances are moisture-free and completely dry</li>
              <li>SafeStorage does not take responsibility for fungus or damage if appliances are not properly prepared</li>
            </ol>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I authorize SafeStorage Dubai to send me information/alerts/SMS/WhatsApp messages/calls regarding my storage, promotional offers, and service updates.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I understand I can opt-out of communications by emailing <a href="mailto:support@safestorage.ae" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@safestorage.ae</a> or calling <a href="tel:+971505773388" style={{ color: '#2563eb', textDecoration: 'underline' }}>+971 50 577 3388</a>.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          9. Liability Disclaimer
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          SafeStorage and its affiliates have no liability and will make no refund in the event of:
        </p>
        <ol style={{ paddingLeft: '20px', fontSize: '16px', marginBottom: '15px', listStyleType: 'decimal' }}>
          <li style={{ marginBottom: '10px' }}>Any delay or cancellation</li>
          <li style={{ marginBottom: '10px' }}>Strike or labor disputes</li>
          <li style={{ marginBottom: '10px' }}>Force majeure events</li>
          <li style={{ marginBottom: '10px' }}>Other causes beyond direct control</li>
          <li style={{ marginBottom: '10px' }}>Acts of any government or authority</li>
        </ol>
        <p style={{ fontSize: '16px' }}>
          SafeStorage has no responsibility for any additional expense, omissions, or delays arising from the above events.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          10. Changes to Terms
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          SafeStorage reserves the right to modify these Terms and Conditions at any time:
        </p>
        <ol style={{ paddingLeft: '20px', fontSize: '16px', listStyleType: 'decimal' }}>
          <li style={{ marginBottom: '10px' }}>Changes will be effective immediately upon posting on our website</li>
          <li style={{ marginBottom: '10px' }}>Continued use of our services after changes constitutes acceptance of modified terms</li>
          <li style={{ marginBottom: '10px' }}>Customers are encouraged to review these terms periodically</li>
        </ol>
      </section>

      <div style={{ backgroundColor: '#1e40af', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', marginTop: '50px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
          Contact Information
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          For any questions, clarifications or support related to your storage:
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          📞 Call: <a href="tel:+971505773388" style={{ color: 'white', textDecoration: 'underline' }}>+971 50 577 3388</a>
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          📧 Email: <a href="mailto:support@safestorage.ae" style={{ color: 'white', textDecoration: 'underline' }}>support@safestorage.ae</a>
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          🌐 Website: <a href="https://safestorage.ae" style={{ color: 'white', textDecoration: 'underline' }}>safestorage.ae</a>
        </p>
        <p style={{ fontSize: '18px', marginTop: '25px', opacity: '0.9' }}>
          📍 Address: Building 23, Warehouse 5, DIP-1, Dubai, UAE
        </p>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', textAlign: 'center', border: '1px solid #e5e7eb' }}>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Last Updated: February 2026 | © 2026 SafeStorage Dubai. All rights reserved.
        </p>
      </div>

      {/* Key Terms Summary — plain-language section */}
      <div style={{ marginTop: '60px', padding: '40px', backgroundColor: '#f8faff', borderRadius: '12px', border: '1px solid #e0e7ff' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0A2463', marginBottom: '20px' }}>Key Terms Summary — Plain Language Guide</h2>

        <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>What these terms mean in plain English:</strong> When you use SafeStorage Dubai to store your belongings, you are entering into a month-to-month storage agreement. You pay one month in advance, and the relationship continues month by month until either you or SafeStorage ends it. There is no minimum contract period beyond the first month, and no penalty for cancelling &mdash; simply give 7 days&apos; notice and arrange for your items to be returned. SafeStorage will store your belongings safely and return them to you in the same condition they were received, provided you have stored only permitted items and followed the preparation guidelines for appliances and electronics.
        </p>

        <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>Your responsibilities as a customer:</strong> You must provide accurate personal information (Emirates ID or passport) when booking. You are responsible for ensuring that everything you store with SafeStorage is legally owned by you and is not prohibited under UAE law. You must not store food or grocery items, masala or spice items, liquids, detergents, cosmetics, medicines, ornaments or jewellery, narcotics, weapons, flammable materials, live or dead animals, or items that are illegal or hazardous. You are responsible for preparing appliances correctly before pickup &mdash; switching off refrigerators and washing machines at least 24 hours before collection and ensuring they are completely dry. Failure to prepare appliances properly is the customer&apos;s responsibility, not SafeStorage&apos;s.
        </p>


        <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>Payment and billing in plain terms:</strong> You pay one month in advance when you start storage. Each subsequent month is billed in advance on your billing anniversary date. Late payment (beyond 15 days of the invoice date) incurs a 2% per month charge on the overdue amount. If storage charges remain unpaid for 90 days, SafeStorage has the legal right to withhold your items, terminate the agreement, and ultimately sell or dispose of stored goods in accordance with UAE law to recover unpaid charges. All prices are subject to UAE VAT at 5%. Rates are guaranteed for 12 months from your pickup date, after which SafeStorage may revise rates with notice.
        </p>

        <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.8', marginBottom: '0' }}>
          <strong>Cancellation and retrieval in plain terms:</strong> To retrieve your items, give SafeStorage a minimum of 7 days&apos; notice. The return delivery will be scheduled within this period. If you cancel a booked pickup within 48 hours of the scheduled time, a cancellation fee of AED 500 plus VAT applies. Cancellations and reschedules made more than 48 hours in advance incur no charge. The minimum charge for any storage period is one full month &mdash; if you retrieve items within the first 30 days, you pay for the full month. After the first month, charges are calculated on a pro-rata basis to the actual retrieval date. Any disputes arising from these terms are governed by UAE law and subject to the jurisdiction of Dubai courts.
        </p>
      </div>

      {/* Terms FAQ section */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#0A2463', marginBottom: '24px' }}>Terms &amp; Conditions — Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: "What is the cancellation policy at SafeStorage Dubai?", a: "You can cancel or reschedule a booked pickup at any time without charge, provided you give more than 48 hours' notice before the scheduled pickup time. If you cancel or significantly modify your booking within 48 hours of the scheduled pickup, a cancellation fee of AED 500 plus VAT applies. To end an active storage arrangement, give 7 days' written notice via email and we will arrange return delivery of your items. There are no penalties or administrative fees for ending storage — you simply give notice, receive your items back, and billing stops. Any prepaid full months remaining after your final item is returned are refunded." },
            { q: "What happens if I miss a payment?", a: "If payment is not received within 15 days of the invoice date, late payment charges of 2% per month are applied to the outstanding balance. SafeStorage will contact you by email, SMS, and WhatsApp to notify you of the overdue payment and request settlement. If storage charges remain unpaid for 90 days, SafeStorage is entitled under these terms to: withhold delivery of your stored items, terminate the storage agreement, and ultimately sell, auction, or dispose of stored goods in accordance with UAE law to recover the outstanding amount. We strongly recommend setting up auto-pay to avoid accidental missed payments." },
            { q: "What happens if my stored items are damaged?", a: "If your items are damaged while in SafeStorage's care due to a failure of reasonable care on SafeStorage's part, their liability is limited to the lower of: one month's storage charges for the damaged items, or the declared value of the damaged items at the time of pickup. Claims must be made in writing promptly upon discovery of damage. SafeStorage is not liable for gradual deterioration, pre-existing damage, scratches during transport, rust or corrosion caused by moisture within the items themselves, or damage from extreme weather events beyond their control. The photographic inventory taken at pickup provides the baseline for any damage assessment." },
            { q: "How are disputes with SafeStorage resolved?", a: "Any disputes arising from the SafeStorage Dubai storage agreement are subject to the laws of the United Arab Emirates and the Emirate of Dubai. The parties agree that the courts of Dubai, UAE have exclusive jurisdiction for resolving any legal disputes arising from these terms. SafeStorage encourages customers to first contact the customer service team at support@safestorage.ae or +971505773388 to resolve any issue informally before pursuing formal legal action. In most cases, concerns about billing, service quality, or item condition can be resolved quickly through direct communication with our customer experience team." },
            { q: "What law governs the storage agreement?", a: "The SafeStorage Dubai storage agreement is governed exclusively by the laws of the United Arab Emirates and, specifically, the laws of the Emirate of Dubai. Any translation of these terms into Arabic or other languages is for customer convenience only — in the event of any conflict between the English version and a translated version, the English version takes precedence. By using SafeStorage Dubai's services, you confirm that you accept and agree to these terms and to the exclusive jurisdiction of Dubai courts for any legal matters arising from the storage agreement." },
          ].map((faq, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
              <h3 style={{ color: '#0A2463', fontWeight: '700', marginBottom: '12px', fontSize: '16px' }}>Q: {faq.q}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '15px', margin: '0' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
