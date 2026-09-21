import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

type CatalogProduct = (CollectionItemFragment | ProductItemFragment) & {
  selectedOrFirstAvailableVariant?: {
    id: string;
    availableForSale: boolean;
    price: {amount: string; currencyCode: string};
    compareAtPrice?: {amount: string; currencyCode: string} | null;
    image?: {
      id?: string | null;
      url: string;
      altText?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
    product: {title: string; handle: string};
    selectedOptions: Array<{name: string; value: string}>;
    title?: string | null;
  } | null;
};

export function ProductItem({
  product,
  loading,
}: {
  product: CatalogProduct;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  const variant = product.selectedOrFirstAvailableVariant;
  const {open} = useAside();

  return (
    <article className="product-item">
      <Link
        className="product-item-link"
        prefetch="intent"
        to={variantUrl}
      >
        <div className="product-item-media">
          {image ? (
            <Image
              alt={image.altText || product.title}
              aspectRatio="1/1"
              data={image}
              loading={loading}
              sizes="(min-width: 45em) 400px, 100vw"
            />
          ) : (
            <div className="product-image-placeholder" />
          )}
        </div>
        <div className="product-item-info">
          <h3 className="product-item-title">{product.title}</h3>
          <p className="product-item-price">
            <Money data={product.priceRange.minVariantPrice} />
          </p>
        </div>
      </Link>
      {variant?.availableForSale ? (
        <AddToCartButton
          onClick={() => open('cart')}
          lines={[
            {
              merchandiseId: variant.id,
              quantity: 1,
              selectedVariant: variant,
            },
          ]}
        >
          Add to Cart
        </AddToCartButton>
      ) : (
        <Link className="add-to-cart-btn add-to-cart-btn--link" to={variantUrl}>
          View Product
        </Link>
      )}
    </article>
  );
}
