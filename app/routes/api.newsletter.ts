import {data} from 'react-router';
import type {Route} from './+types/api.newsletter';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Resource route that receives newsletter signups from the footer form.
 * The form submits via useFetcher, so this action runs without navigating away.
 */
export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return data(
      {
        ok: false as const,
        error: 'Please enter a valid email address.',
      },
      {status: 400},
    );
  }

  // TODO: forward the subscription to your email/marketing platform
  // (e.g. Shopify customers, Klaviyo, Mailchimp) before going live.
  return {
    ok: true as const,
    message: 'Thanks for subscribing! Welcome to EVOL.',
  };
}
