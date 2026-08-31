import {useEffect, useState} from 'react';
import {Image} from '@shopify/hydrogen';

type GalleryImage = {
  id?: string | null;
  url: string;
  altText?: string | null;
  width?: number | null;
  height?: number | null;
};

/**
 * Product image gallery: shows a large main image with a thumbnail strip
 * so shoppers can browse every product photo (not just the featured one).
 * Keeps the selected variant's image in sync when the variant changes.
 */
export function ProductGallery({
  images,
  selectedVariantImage,
}: {
  images: GalleryImage[];
  selectedVariantImage?: GalleryImage | null;
}) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = images.findIndex(
      (image) => image.url === selectedVariantImage?.url,
    );
    return index >= 0 ? index : 0;
  });

  // When the shopper picks a different variant, jump to its image.
  useEffect(() => {
    if (!selectedVariantImage?.url) return;
    const index = images.findIndex(
      (image) => image.url === selectedVariantImage.url,
    );
    if (index >= 0) {
      setActiveIndex(index);
    }
  }, [selectedVariantImage?.url, images]);

  const activeImage = images[activeIndex] ?? images[0];
  if (!activeImage) {
    return <div className="product-gallery" />;
  }

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <Image
          key={activeImage.url}
          alt={activeImage.altText || 'Product image'}
          data={activeImage}
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
          sizes="(min-width: 45em) 50vw, 100vw"
        />
      </div>
      {images.length > 1 ? (
        <div
          className="product-gallery-thumbs"
          role="group"
          aria-label="Product images"
        >
          {images.map((image, index) => (
            <button
              key={image.id ?? image.url}
              type="button"
              className={`product-gallery-thumb${
                index === activeIndex ? ' is-active' : ''
              }`}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                alt=""
                data={image}
                height={96}
                loading="lazy"
                width={96}
              />
          </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
