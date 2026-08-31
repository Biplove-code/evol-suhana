import type {MetaFunction} from 'react-router';
import {useFetcher} from 'react-router';
import type {Route} from './+types/($locale).pages.contact';

export const meta: MetaFunction = () => {
  return [{title: 'Contact Us | evol'}];
};

export default function ContactPage() {
  return (
    <div className="page-contact">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you. Reach out with any questions, feedback, or just to say hello.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-section">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:hello@evol.com">hello@evol.com</a></p>
                  <p className="contact-note">We respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+971566283506">+971 566 283 506</a></p>
                  <p className="contact-note">Sun - Thu, 9am - 6pm GST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="contact-note">Operating across the UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="https://instagram.com/evol" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <a href="https://facebook.com/evol" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </a>
              <a href="https://twitter.com/evol" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </a>
              <a href="https://pinterest.com/evol" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0c0 2.22-1.5 4-3 6M12 16v5"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactField = 'name' | 'email' | 'subject' | 'message';

type ContactFetcherData = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
};

function ContactForm() {
  const fetcher = useFetcher<ContactFetcherData>();
  const busy = fetcher.state !== 'idle';
  const errors =
    fetcher.data?.ok === false ? (fetcher.data.errors ?? {}) : {};
  const success = fetcher.data?.ok === true ? fetcher.data.message : null;

  return (
    <fetcher.Form className="contact-form" method="post" action="/api/contact">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          aria-invalid={Boolean(errors.name) || undefined}
          disabled={busy}
        />
        {errors.name ? <p className="form-error">{errors.name}</p> : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          aria-invalid={Boolean(errors.email) || undefined}
          disabled={busy}
        />
        {errors.email ? <p className="form-error">{errors.email}</p> : null}
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" required disabled={busy}>
          <option value="">Select a topic</option>
          <option value="order">Order Inquiry</option>
          <option value="product">Product Question</option>
          <option value="return">Returns & Exchanges</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Other</option>
        </select>
        {errors.subject ? (
          <p className="form-error">{errors.subject}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          aria-invalid={Boolean(errors.message) || undefined}
          disabled={busy}
        ></textarea>
        {errors.message ? (
          <p className="form-error">{errors.message}</p>
        ) : null}
      </div>
      <button type="submit" className="btn btn-dark btn-full" disabled={busy}>
        {busy ? 'Sending...' : 'Send Message'}
      </button>
      {success ? (
        <p className="form-success" role="status">
          {success}
        </p>
      ) : null}
    </fetcher.Form>
  );
}
