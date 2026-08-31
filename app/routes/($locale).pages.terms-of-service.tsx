import type {MetaFunction} from 'react-router';
import type {Route} from './+types/($locale).pages.terms-of-service';

export const meta: MetaFunction = () => {
  return [{title: 'Terms of Service | evol'}];
};

export default function TermsOfServicePage() {
  return (
    <div className="page-legal">
      <div className="page-header">
        <h1>Terms of Service</h1>
        <p>Last updated: January 1, 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing and using the evol website (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of these Terms, you are prohibited from using this Site.</p>
        </section>

        <section className="legal-section">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on evol&apos;s Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by evol at any time.</p>
        </section>

        <section className="legal-section">
          <h2>3. Products and Pricing</h2>
          <p>All products displayed on the Site are subject to availability. We reserve the right to discontinue any product at any time. Prices are subject to change without notice. We make every effort to display accurate pricing and product information, but errors may occur.</p>
        </section>

        <section className="legal-section">
          <h2>4. Orders and Payment</h2>
          <p>By placing an order, you represent that you are legally capable of entering into binding contracts. We reserve the right to refuse or cancel any order for any reason. Payment must be received prior to shipment of goods.</p>
        </section>

        <section className="legal-section">
          <h2>5. Shipping and Delivery</h2>
          <p>Shipping times are estimates only and not guaranteed. evol is not responsible for delays caused by shipping carriers or customs. Risk of loss and title for items pass to you upon delivery.</p>
        </section>

        <section className="legal-section">
          <h2>6. Returns and Refunds</h2>
          <p>Please review our Returns Policy for information on returns and refunds. We offer a 14-day return window for unused items in original packaging.</p>
        </section>

        <section className="legal-section">
          <h2>7. Intellectual Property</h2>
          <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of evol and its licensors.</p>
        </section>

        <section className="legal-section">
          <h2>8. User Accounts</h2>
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </section>

        <section className="legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>In no event shall evol, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
        </section>

        <section className="legal-section">
          <h2>10. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.</p>
        </section>

        <section className="legal-section">
          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.</p>
        </section>

        <section className="legal-section">
          <h2>12. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p><strong>Email:</strong> hello@evol.com</p>
          <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
        </section>
      </div>
    </div>
  );
}