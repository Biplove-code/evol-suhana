import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product: CollectionItemFragment | ProductItemFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  return (
    <Link className="product-item" prefetch="intent" to={variantUrl}>
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
  );
}
