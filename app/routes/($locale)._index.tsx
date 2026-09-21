import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/($locale)._index';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  FeaturedProductsQuery,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import {MockShopNotice} from '~/components/MockShopNotice';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

type HomepageProduct = FeaturedProductsQuery['products']['nodes'][number] & {
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

export const meta: Route.MetaFunction = () => {
  return [{title: 'EVOL | Modern Lifestyle, Wellness & Everyday Essentials'}];
};

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: Route.LoaderArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);

  return {
    isShopLinked: Boolean(context.env.PUBLIC_STORE_DOMAIN),
    featuredCollection:
      collections.nodes.find(
        (collection: FeaturedCollectionFragment) => collection.image,
      ) ?? collections.nodes[0],
  };
}

function loadDeferredData({context}: Route.LoaderArgs) {
  const featuredProducts = context.storefront
    .query(FEATURED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });

  return {
    featuredProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      {data.isShopLinked ? null : <MockShopNotice />}
      <Hero collection={data.featuredCollection} />
      <ProductGrid products={data.featuredProducts} />
      <BrandStory />
    </div>
  );
}

function Hero({collection}: {collection: FeaturedCollectionFragment}) {
  const image = collection?.image;
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        {image ? (
          <Image
            className="hero-bg"
            data={image}
            sizes="100vw"
            alt={image.altText || 'EVOL'}
          />
        ) : null}
        <div className="hero-bg hero-bg-photo" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">EVOL</p>
          <h1 id="hero-heading">Lifestyle that evolves with you</h1>
          <p className="hero-tagline">
            Curated wellness & everyday essentials — thoughtfully chosen for
            modern living.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/collections/all">
              Shop Bestsellers
            </Link>
            <Link className="btn btn-outline" to="/collections">
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid({
  products,
}: {
  products: Promise<FeaturedProductsQuery | null>;
}) {
  return (
    <section className="home-products" aria-labelledby="home-products-heading">
      <div className="section-heading">
        <p className="eyebrow">Shop The Edit</p>
        <h2 id="home-products-heading">Bestsellers</h2>
      </div>
      <Suspense
        fallback={
          <div className="grid-loading" role="status">
            <span className="sr-only">Loading products...</span>
          </div>
        }
      >
        <Await resolve={products}>
          {(response) => (
            <div className="home-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <HomeProductCard
                      key={product.id}
                      product={product as HomepageProduct}
                    />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <div className="home-products-cta">
        <Link className="btn btn-dark" to="/collections/all">
          View All Products
        </Link>
      </div>
    </section>
  );
}

function HomeProductCard({product}: {product: HomepageProduct}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  const variant = product.selectedOrFirstAvailableVariant;
  const {open} = useAside();

  return (
    <article className="home-product-card">
      <Link className="home-product-link" prefetch="intent" to={variantUrl}>
        <div className="home-product-image">
          {image ? (
            <Image
              alt={image.altText || product.title}
              aspectRatio="1/1"
              data={image}
              loading="lazy"
              sizes="(min-width: 45em) 400px, 100vw"
            />
          ) : (
            <div className="product-image-placeholder" />
          )}
        </div>
        {product.vendor ? (
          <p className="home-product-vendor">{product.vendor}</p>
        ) : null}
        <h3 className="home-product-title">{product.title}</h3>
        <p className="home-product-price">
          <Money data={product.priceRange.minVariantPrice} />
        </p>
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

function BrandStory() {
  return (
    <section className="brand-story" aria-labelledby="brand-story-heading">
      <div className="section-heading">
        <p className="eyebrow">Our Philosophy</p>
        <h2 id="brand-story-heading">Lifestyle That Evolves With You</h2>
      </div>
      <div className="brand-story-grid">
        <div className="brand-story-item">
          <span className="brand-story-icon" aria-hidden="true">
            ✦
          </span>
          <h3>Thoughtfully Curated</h3>
          <p>Every product is carefully selected to enhance your daily life.</p>
        </div>
        <div className="brand-story-item">
          <span className="brand-story-icon" aria-hidden="true">
            ✿
          </span>
          <h3>Conscious Living</h3>
          <p>
            Mindful choices for you and the planet. Wellness without compromise.
          </p>
        </div>
        <div className="brand-story-item">
          <span className="brand-story-icon" aria-hidden="true">
            ◌
          </span>
          <h3>Everyday Essentials</h3>
          <p>
            Quality products designed to fit seamlessly into your modern
            lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    description
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 10, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const FEATURED_PRODUCTS_QUERY = `#graphql
  fragment HomepageProduct on Product {
    id
    title
    handle
    vendor
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
    selectedOrFirstAvailableVariant {
      id
      availableForSale
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      image {
        id
        url
        altText
        width
        height
      }
      product {
        title
        handle
      }
      selectedOptions {
        name
        value
      }
      title
    }
  }
  query FeaturedProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: BEST_SELLING) {
      nodes {
        ...HomepageProduct
      }
    }
  }
` as const;
