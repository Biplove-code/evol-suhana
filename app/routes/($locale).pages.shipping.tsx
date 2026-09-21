import type {MetaFunction} from 'react-router';
import type {Route} from './+types/($locale).pages.shipping';

export const meta: MetaFunction = () => {
  return [{title: 'Shipping Information | evol'}];
};

export default function ShippingPage() {
  return (
    <div className="page-shipping">
      <div className="page-header">
        <h1>Shipping Information</h1>
        <p>Everything you need to know about delivery options and timelines.</p>
      </div>

      <div className="shipping-content">
        <div className="shipping-grid">
          <div className="shipping-card">
            <div className="shipping-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h2>Standard Shipping</h2>
            <p className="shipping-price">Free on orders over 200 AED</p>
            <p className="shipping-time">3-7 business days</p>
            <p className="shipping-note">10 AED for orders under 200 AED</p>
          </div>

          <div className="shipping-card">
            <div className="shipping-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h2>Delivery Areas</h2>
            <p className="shipping-price">UAE Wide</p>
            <p className="shipping-time">All 7 Emirates</p>
            <p className="shipping-note">No same-day delivery available</p>
          </div>

          <div className="shipping-card">
            <div className="shipping-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h2>Minimum Order</h2>
            <p className="shipping-price">100 AED</p>
            <p className="shipping-time">Minimum order value</p>
            <p className="shipping-note">Orders above 200 AED ship free</p>
          </div>
        </div>

        <div className="shipping-details">
          <section className="shipping-section">
            <h2>Delivery Areas</h2>
            <p>We currently deliver across all Emirates in the UAE:</p>
            <ul>
              <li>Dubai</li>
              <li>Abu Dhabi</li>
              <li>Sharjah</li>
              <li>Ajman</li>
              <li>Umm Al Quwain</li>
              <li>Ras Al Khaimah</li>
              <li>Fujairah</li>
            </ul>
          </section>

          <section className="shipping-section">
            <h2>Order Processing</h2>
            <p>Orders are processed within 1-2 business days. You will receive a confirmation email once your order has been dispatched, along with a tracking number.</p>
          </section>

          <section className="shipping-section">
            <h2>International Shipping</h2>
            <p>We are working on expanding our shipping options internationally. Sign up for our newsletter to be notified when we launch in your region.</p>
          </section>

          <section className="shipping-section">
            <h2>Delivery Issues</h2>
            <p>If you experience any issues with your delivery, please contact us at evolmedia.ceo@gmail.com and we will assist you promptly.</p>
          </section>
        </div>
      </div>
    </div>
  );
}