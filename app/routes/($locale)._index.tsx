import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/($locale)._index';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  FeaturedProductsQuery,
  HomepageProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import {MockShopNotice} from '~/components/MockShopNotice';

export const meta: Route.MetaFunction = () => {
  return [{title: 'EVOL | Modern Lifestyle, Wellness & Everyday Essentials'}];
};

export async function loader(args: Route.LoaderArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: Route.LoaderArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    isShopLinked: Boolean(context.env.PUBLIC_STORE_DOMAIN),
    // Prefer the most recently updated collection that actually has an image,
    // so the hero always has a background to show.
    featuredCollection:
      collections.nodes.find(
        (collection: FeaturedCollectionFragment) => collection.image,
      ) ?? collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: Route.LoaderArgs) {
  const featuredProducts = context.storefront
    .query(FEATURED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      // Log query errors, but don't throw them so the page can still render
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
      <FeaturedCollection collection={data.featuredCollection} />
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
            alt={image.altText || 'Evol Suhana'}
          />
        ) : null}
        {/* Drop your own banner at public/hero.jpg and it will be used here */}
        <div className="hero-bg hero-bg-photo" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Modern Living</p>
          <h1 id="hero-heading">EVOL</h1>
          <p className="hero-tagline">
            Curated lifestyle, wellness & everyday essentials — 
            thoughtfully chosen for modern living.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/collections/all">
              Shop Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <section
      className="featured-section"
      aria-labelledby="featured-collection-heading"
    >
      <div className="featured-grid">
        {image && (
          <div className="featured-image-wrap">
            <Image
              data={image}
              sizes="(min-width: 45em) 50vw, 100vw"
              alt={image.altText || collection.title}
            />
          </div>
        )}
        <div className="featured-copy">
          <p className="eyebrow">Featured Collection</p>
          <h2 id="featured-collection-heading">{collection.title}</h2>
          <p>
            Discover our curated selection of clean beauty essentials —
            formulated with love and made for every skin.
          </p>
          <Link
            className="btn btn-dark"
            to={`/collections/${collection.handle}`}
          >
            Shop the Collection
          </Link>
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
                    <HomeProductCard key={product.id} product={product} />
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

function HomeProductCard({product}: {product: HomepageProductFragment}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  return (
    <div className="home-product-card">
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
    </div>
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
          <p>
            Every product is carefully selected to enhance your daily life.
          </p>
        </div>
        <div className="brand-story-item">
          <span className="brand-story-icon" aria-hidden="true">
            ✿
          </span>
          <h3>Conscious Living</h3>
          <p>Mindful choices for you and the planet. Wellness without compromise.</p>
        </div>
        <div className="brand-story-item">
          <span className="brand-story-icon" aria-hidden="true">
            ◌
          </span>
          <h3>Everyday Essentials</h3>
          <p>
            Quality products designed to fit seamlessly into your modern lifestyle.
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