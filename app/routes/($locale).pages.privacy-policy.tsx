import type {MetaFunction} from 'react-router';
import type {Route} from './+types/($locale).pages.privacy-policy';

export const meta: MetaFunction = () => {
  return [{title: 'Privacy Policy | evol'}];
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-legal">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 1, 2026</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information (processed securely through our payment providers)</li>
            <li>Order history and preferences</li>
            <li>Communications with our support team</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Prevent fraud and maintain security</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul>
            <li>Shipping carriers to deliver your orders</li>
            <li>Payment processors to complete transactions</li>
            <li>Service providers who assist our operations</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Remember your preferences and cart items</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Personalize your shopping experience</li>
            <li>Deliver relevant advertisements</li>
          </ul>
          <p>You can control cookie settings through your browser preferences.</p>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section className="legal-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, contact us at evolmedia.ceo@gmail.com.</p>
        </section>

        <section className="legal-section">
          <h2>7. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
        </section>

        <section className="legal-section">
          <h2>8. Children&apos;s Privacy</h2>
          <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.</p>
        </section>

        <section className="legal-section">
          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> evolmedia.ceo@gmail.com</p>
          <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
        </section>
      </div>
    </div>
  );
}