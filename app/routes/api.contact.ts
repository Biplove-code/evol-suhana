import {data} from 'react-router';
import type {Route} from './+types/api.contact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<'name' | 'email' | 'subject' | 'message', string>
>;

/**
 * Resource route that receives the contact form submission.
 * The form submits via useFetcher, so this action runs without navigating away.
 */
export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const errors: NonNullable<
    {ok: false; errors: FieldErrors}['errors']
  > = {};

  if (!name) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!subject) {
    errors.subject = 'Please select a topic.';
  }
  if (message.length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return data({ok: false as const, errors}, {status: 400});
  }

  // TODO: forward the message to your email/helpdesk service
  // (e.g. Resend, SendGrid, Zendesk) before going live.
  return {
    ok: true as const,
    message: "Message sent! We'll get back to you within 24 hours.",
  };
}
