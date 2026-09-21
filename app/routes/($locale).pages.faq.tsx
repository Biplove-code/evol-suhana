import type {MetaFunction} from 'react-router';
import {Link} from 'react-router';
import type {Route} from './+types/($locale).pages.faq';

export const meta: MetaFunction = () => {
  return [{title: 'FAQ | evol'}];
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Orders & Shipping',
      questions: [
        {
          q: 'Where do you ship to?',
          a: 'We currently ship across the United Arab Emirates. International shipping options are coming soon.',
        },
        {
          q: 'How long does delivery take?',
          a: 'Standard delivery takes 3-7 business days within the UAE. We do not offer same-day delivery.',
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account under "Orders".',
        },
        {
          q: 'Do you offer free shipping?',
          a: 'Yes! We offer free standard shipping on all orders over 200 AED. Shipping costs 10 AED for orders under 200 AED.',
        },
        {
          q: 'Is there a minimum order value?',
          a: 'Yes, the minimum order value is 100 AED.',
        },
      ],
    },
    {
      title: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 14-day return policy for unused items in their original packaging. Please visit our Returns page for more details.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact us at evolmedia.ceo@gmail.com with your order number and reason for return. We\'ll provide you with a return label and instructions.',
        },
        {
          q: 'How long do refunds take?',
          a: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.',
        },
        {
          q: 'Can I exchange an item?',
          a: 'Yes, exchanges are possible. Please contact our team and we\'ll help you with the process.',
        },
      ],
    },
    {
      title: 'Products & Care',
      questions: [
        {
          q: 'Are your products cruelty-free?',
          a: 'Yes, all our products are cruelty-free and never tested on animals.',
        },
        {
          q: 'How should I care for my items?',
          a: 'Care instructions are included with each product and can also be found on the product page. We recommend following these guidelines to ensure longevity.',
        },
        {
          q: 'Do you offer product samples?',
          a: 'Samples are occasionally available with orders and during promotions. Sign up for our newsletter to stay updated.',
        },
      ],
    },
    {
      title: 'Account & Payment',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click "Sign in" in the top right corner, then select "Create account". You can also sign up using your Google account.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and bank transfers.',
        },
        {
          q: 'Is my payment information secure?',
          a: 'Absolutely. We use industry-standard encryption and never store your full payment details on our servers.',
        },
      ],
    },
  ];

  return (
    <div className="page-faq">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products, shipping, and more.</p>
      </div>

      <div className="faq-content">
        {faqCategories.map((category) => (
          <div key={category.title} className="faq-category">
            <h2>{category.title}</h2>
            <div className="faq-list">
              {category.questions.map((item) => (
                <div key={item.q} className="faq-item">
                  <details className="faq-details">
                    <summary className="faq-question">{item.q}</summary>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <h2>Still have questions?</h2>
        <p>Can&apos;t find what you&apos;re looking for? We&apos;re here to help.</p>
        <Link to="/pages/contact" className="btn btn-dark">
          Contact Us
        </Link>
      </div>
    </div>
  );
}