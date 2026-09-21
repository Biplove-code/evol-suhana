import type {MetaFunction} from 'react-router';
import type {Route} from './+types/($locale).pages.returns';

export const meta: MetaFunction = () => {
  return [{title: 'Returns & Exchanges | evol'}];
};

export default function ReturnsPage() {
  return (
    <div className="page-returns">
      <div className="page-header">
        <h1>Returns & Exchanges</h1>
        <p>We want you to be completely satisfied with your purchase.</p>
      </div>

      <div className="returns-content">
        <div className="returns-policy">
          <div className="policy-card">
            <div className="policy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
            </div>
            <h2>14-Day Return Policy</h2>
            <p>You have 14 days from the date of delivery to return your item for a full refund or exchange.</p>
          </div>

          <div className="policy-card">
            <div className="policy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h2>Original Packaging</h2>
            <p>Items must be returned in their original, unopened packaging with all tags attached.</p>
          </div>

          <div className="policy-card">
            <div className="policy-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h2>Free Return Shipping</h2>
            <p>We provide a prepaid return label for all returns within the UAE.</p>
          </div>
        </div>

        <div className="returns-steps">
          <h2>How to Return an Item</h2>
          <div className="steps-list">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Contact Us</h3>
                <p>Email us at evolmedia.ceo@gmail.com with your order number and reason for return.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Receive Return Label</h3>
                <p>We&apos;ll send you a prepaid return shipping label via email.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Pack & Ship</h3>
                <p>Pack the item securely in its original packaging and attach the return label.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Get Refunded</h3>
                <p>Once we receive and inspect your return, we&apos;ll process your refund within 5-7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="returns-notes">
          <h2>Important Notes</h2>
          <ul>
            <li>Refunds are issued to the original payment method</li>
            <li>Original shipping costs are non-refundable</li>
            <li>Sale items can be returned within 7 days</li>
            <li>Personalized or custom items are final sale</li>
            <li>Exchanges are subject to product availability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}