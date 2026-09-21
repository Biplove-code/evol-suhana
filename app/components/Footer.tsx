import {Suspense} from 'react';
import {Await, NavLink, useFetcher} from 'react-router';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import {LogoMinimal} from '~/components/Logo';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({footer: footerPromise}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {() => (
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-columns">
                <div className="footer-brand">
                  <NavLink to="/" className="footer-logo" prefetch="intent">
                    <LogoMinimal />
                  </NavLink>
                  <p className="footer-tagline">
                    Modern lifestyle, wellness & everyday essentials
                  </p>
                  <div className="footer-social">
                    <a
                      href="https://instagram.com/evol"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/evol"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/evol"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    <a
                      href="https://pinterest.com/evol"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Pinterest"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 12a4 4 0 1 1 8 0c0 2.22-1.5 4-3 6M12 16v5" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="footer-links-section">
                  <h4>Shop</h4>
                  <ul>
                    <li>
                      <NavLink to="/collections/all" prefetch="intent">
                        All Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/account" prefetch="intent">
                        My Account
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="footer-links-section">
                  <h4>Help</h4>
                  <ul>
                    <li>
                      <NavLink to="/pages/faq" prefetch="intent">
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pages/contact" prefetch="intent">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="footer-contact">
                  <h4>Contact</h4>
                  <ul>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <a href="mailto:evolmedia.ceo@gmail.com">
                        evolmedia.ceo@gmail.com
                      </a>
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <a href="tel:+971566283506">+971 566 283 506</a>
                    </li>
                    <li>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Dubai, UAE</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-newsletter">
                <div className="newsletter-content">
                  <h4>Stay Connected</h4>
                  <p>
                    Subscribe for exclusive offers, new arrivals & wellness tips.
                  </p>
                </div>
                <NewsletterSignup />
              </div>

              <div className="footer-bottom">
                <p className="footer-copyright">
                  &copy; {new Date().getFullYear()} EVOL. All rights reserved.
                </p>
                <div className="footer-legal">
                  <NavLink to="/pages/privacy-policy" prefetch="intent">
                    Privacy
                  </NavLink>
                  <span className="separator" aria-hidden="true">
                    ·
                  </span>
                  <NavLink to="/pages/terms-of-service" prefetch="intent">
                    Terms
                  </NavLink>
                  <span className="separator" aria-hidden="true">
                    ·
                  </span>
                  <NavLink to="/pages/shipping" prefetch="intent">
                    Shipping
                  </NavLink>
                </div>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

type NewsletterFetcherData = {
  ok: boolean;
  error?: string;
  message?: string;
};

function NewsletterSignup() {
  const fetcher = useFetcher<NewsletterFetcherData>();
  const busy = fetcher.state !== 'idle';
  const success = fetcher.data?.ok === true ? fetcher.data.message : null;
  const error = fetcher.data?.ok === false ? fetcher.data.error : null;

  return (
    <div className="newsletter-signup">
      <fetcher.Form
        className="newsletter-form"
        method="post"
        action="/api/newsletter"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          aria-label="Email address"
          disabled={busy}
        />
        <button type="submit" className="btn-subscribe" disabled={busy}>
          {busy ? 'Subscribing...' : 'Subscribe'}
        </button>
      </fetcher.Form>
      {success ? (
        <p className="newsletter-status" role="status">
          {success}
        </p>
      ) : null}
      {error ? (
        <p className="newsletter-status newsletter-status-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
