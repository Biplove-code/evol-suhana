import {useId} from 'react';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {Money, type OptimisticCart} from '@shopify/hydrogen';

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
};

export function CartSummary({cart, layout}: CartSummaryProps) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';
  const summaryId = useId();

  return (
    <div aria-labelledby={summaryId} className={className}>
      <h4 id={summaryId}>Order Summary</h4>
      <dl role="group" className="cart-subtotal">
        <dt>Subtotal</dt>
        <dd>
          {cart?.cost?.subtotalAmount?.amount ? (
            <Money data={cart?.cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      <p className="cart-summary-note">
        Shipping and taxes are calculated at checkout.
      </p>
      <CartCheckoutActions checkoutUrl={cart?.checkoutUrl} />
      {layout === 'page' ? (
        <Link
          className="cart-continue-link"
          to="/collections/all"
          prefetch="intent"
        >
          Continue shopping
        </Link>
      ) : null}
    </div>
  );
}

function CartCheckoutActions({checkoutUrl}: {checkoutUrl?: string}) {
  if (!checkoutUrl) return null;

  return (
    <a className="btn btn-dark cart-checkout-btn" href={checkoutUrl} target="_self">
      Continue to Checkout &rarr;
    </a>
  );
}
