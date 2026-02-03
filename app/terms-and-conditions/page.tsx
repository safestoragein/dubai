import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | SafeStorage Dubai - Storage Terms',
  description: 'Read SafeStorage Dubai terms and conditions for storage services in UAE. Understand our policies, liability, payment terms and customer responsibilities.',
  openGraph: {
    title: 'Terms and Conditions | SafeStorage Dubai',
    description: 'SafeStorage Dubai storage service terms and conditions',
    url: 'https://safestorage.ae/terms-and-conditions',
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
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Narcotics, arms, ammunition</li>
              <li>Food and perishable goods</li>
              <li>Liquids and gases</li>
              <li>Living or dead plants or animals</li>
              <li>Waste materials</li>
              <li>Flammable, explosive, or toxic materials</li>
              <li>Polluted, contaminated, or radioactive materials</li>
              <li>Organic material that might attract vermin or insects</li>
              <li>Any materials that are illegal, dangerous or unsafe</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>In case the Customer stores any prohibited material without SafeStorage knowledge, the Company is not responsible for any damage or consequences.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>High-Value Items Restrictions:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Negotiable instruments</li>
              <li>Cash</li>
              <li>Jewelry and precious metals</li>
              <li>Antiques or items with high intrinsic market value (beyond insured amount)</li>
            </ul>
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
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Gradual deterioration and wear and tear</li>
              <li>Pre-existing damage</li>
              <li>Scratches due to transportation</li>
              <li>Corrosion/rust due to wetness/water in items</li>
              <li>Damage from atmospheric or climatic conditions</li>
              <li>Electrical and mechanical breakdown due to storage</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Electronic and Electrical Items:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Working condition is NOT checked before storage</li>
              <li>Items include: TV, Music System, Computers, Laptops, Refrigerator, Washing Machine, Dishwasher, Oven, Mixer, etc.</li>
              <li>Company cannot assure working condition after delivery</li>
              <li>SafeStorage is only liable for physical damage as per terms stated above</li>
            </ul>
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px', backgroundColor: '#eff6ff', padding: '30px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1e40af', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          4. Insurance Terms
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>General Insurance Coverage Included:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Natural calamities</li>
              <li>Fire damage</li>
              <li>Theft</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The company shall not be responsible if customer does not provide accurate value of goods while preparing the inventory during pickup.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>General Insurance Does NOT Cover:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Loss or damage during transportation</li>
              <li>Damage during handling in warehouse</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>Additional comprehensive insurance is available for high-value items at additional cost.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          5. Payment, Cancellation and Refunds
        </h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees to pay the Company according to the rates agreed as per quotation.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees to pay for storage and service in one-month advance.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer also agrees to pay additional storage and packing charges for items that are not mentioned in the quotation. Charges for additional items would be minimum AED 50 or more according to the dimension of the items.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Additional Item Charges:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Small Item/Box: Packing and transport charges AED 50 + VAT. Storage charges AED 25 + VAT per month.</li>
              <li>Medium Item/Box: Packing and transport charges AED 100 + VAT. Storage charges AED 50 + VAT per month.</li>
              <li>Large Item/Box: Packing and transport charges AED 150 + VAT. Storage charges AED 75 + VAT per month.</li>
              <li>Extra-large items to be discussed with SafeStorage team for custom pricing.</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer also agrees to pay all applicable VAT and government charges, which are subject to change as per UAE regulations.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Payment Methods Accepted:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Bank transfer</li>
              <li>Online payment via website</li>
              <li>Credit/Debit card</li>
              <li>Cheque in favor of SafeStorage Dubai</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Invoicing and Communication:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Company will raise monthly invoices</li>
              <li>Invoices and notifications sent via: Email, SMS, WhatsApp</li>
              <li>Other acceptable modes of communication may be used</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>In case of any refund to customer, it will take 10-15 business days for SafeStorage to process the refund based on the payment method chosen.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>For VAT registered businesses, it is the Customer's responsibility to provide the TRN (Tax Registration Number) to SafeStorage before invoice generation.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The storage charges will remain in effect until the last date on which goods remain in storage or 12 months from pickup date, whichever is earlier.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>The Customer agrees that the Company is not bound by the rates after expiry of 12 months from date of pickup and rates may be revised.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>If the Customer fails to make any payment within FIFTEEN (15) days of billing, late charges will apply at the rate of 2% per month on the unpaid amount.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            If storage charges remain unpaid for ninety (90) days, Company shall have the full right to:
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Withhold services</li>
              <li>Terminate this Agreement</li>
              <li>Sell/auction/dispose of the stored material as per UAE laws</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>
            <strong>Cancellation Policy:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Cancellation charges: AED 500 + VAT if cancelled within 48 hours of scheduled date</li>
              <li>No cancellation charges if rescheduled more than 48 hours before scheduled date</li>
              <li>No cancellation charges for postponing or preponing pickup date (with 48+ hours notice)</li>
            </ul>
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
        <ul style={{ paddingLeft: '20px', fontSize: '16px' }}>
          <li style={{ marginBottom: '10px' }}>Acts of God</li>
          <li style={{ marginBottom: '10px' }}>Fire, flood, earthquake</li>
          <li style={{ marginBottom: '10px' }}>War, terrorism, sabotage</li>
          <li style={{ marginBottom: '10px' }}>Civil unrest or labor unrest</li>
          <li style={{ marginBottom: '10px' }}>Pandemics or epidemics</li>
          <li style={{ marginBottom: '10px' }}>Action of government authorities</li>
          <li style={{ marginBottom: '10px' }}>Change in laws, rules or regulations</li>
          <li style={{ marginBottom: '10px' }}>Any other events beyond the reasonable control of SafeStorage</li>
        </ul>
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
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Switch off all electrical appliances 24 hours before pickup</li>
              <li>Appliances include: Refrigerator, Washing Machine, Water Purifier, etc.</li>
              <li>Ensure all appliances are moisture-free and completely dry</li>
              <li>SafeStorage does not take responsibility for fungus or damage if appliances are not properly prepared</li>
            </ul>
          </li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I authorize SafeStorage Dubai to send me information/alerts/SMS/WhatsApp messages/calls regarding my storage, promotional offers, and service updates.</li>
          <li style={{ marginBottom: '15px', fontSize: '16px' }}>I understand I can opt-out of communications by emailing <a href="mailto:safestoragedubai@gmail.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>safestoragedubai@gmail.com</a> or calling <a href="tel:+971505773388" style={{ color: '#2563eb', textDecoration: 'underline' }}>+971 50 577 3388</a>.</li>
        </ol>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', borderBottom: '3px solid #2563eb', paddingBottom: '10px' }}>
          9. Liability Disclaimer
        </h2>
        <p style={{ fontSize: '16px', marginBottom: '15px' }}>
          SafeStorage and its affiliates have no liability and will make no refund in the event of:
        </p>
        <ul style={{ paddingLeft: '20px', fontSize: '16px', marginBottom: '15px' }}>
          <li style={{ marginBottom: '10px' }}>Any delay or cancellation</li>
          <li style={{ marginBottom: '10px' }}>Strike or labor disputes</li>
          <li style={{ marginBottom: '10px' }}>Force majeure events</li>
          <li style={{ marginBottom: '10px' }}>Other causes beyond direct control</li>
          <li style={{ marginBottom: '10px' }}>Acts of any government or authority</li>
        </ul>
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
        <ul style={{ paddingLeft: '20px', fontSize: '16px' }}>
          <li style={{ marginBottom: '10px' }}>Changes will be effective immediately upon posting on our website</li>
          <li style={{ marginBottom: '10px' }}>Continued use of our services after changes constitutes acceptance of modified terms</li>
          <li style={{ marginBottom: '10px' }}>Customers are encouraged to review these terms periodically</li>
        </ul>
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
          📧 Email: <a href="mailto:safestoragedubai@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>safestoragedubai@gmail.com</a>
        </p>
        <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
          🌐 Website: <a href="https://safestorage.ae" style={{ color: 'white', textDecoration: 'underline' }}>safestorage.ae</a>
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
