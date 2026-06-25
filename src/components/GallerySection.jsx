import { useState } from 'react';
import { galleryImages, galleryPageSize } from '../data/siteData';

function GallerySection() {
  const [galleryPage, setGalleryPage] = useState(0);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const galleryPageCount = Math.ceil(galleryImages.length / galleryPageSize);
  const visibleGalleryImages = galleryImages.slice(
    galleryPage * galleryPageSize,
    galleryPage * galleryPageSize + galleryPageSize
  );
  const selectedGalleryImage = selectedGalleryIndex === null ? null : galleryImages[selectedGalleryIndex];

  const showPreviousGalleryPage = () => {
    setGalleryPage((current) => (current - 1 + galleryPageCount) % galleryPageCount);
  };

  const showNextGalleryPage = () => {
    setGalleryPage((current) => (current + 1) % galleryPageCount);
  };

  const showPreviousGalleryImage = () => {
    setSelectedGalleryIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextGalleryImage = () => {
    setSelectedGalleryIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <>
      <section className="gallery" id="shop">
        <span className="eyebrow">Salon Gallery</span>
        <h2>Polished Looks, Styled Moments</h2>
        <div className="gallery-shell">
          <button className="gallery-page-btn" type="button" onClick={showPreviousGalleryPage} aria-label="Previous gallery page">
            &larr;
          </button>
          <div className="gallery-grid">
            {visibleGalleryImages.map(([image, label], index) => {
              const galleryIndex = galleryPage * galleryPageSize + index;

              return (
                <button className="g gallery-card" key={image} type="button" onClick={() => setSelectedGalleryIndex(galleryIndex)}>
                  <img src={`/images/${image}`} alt={label} loading="lazy" decoding="async" />
                  <span className="label">{label}</span>
                </button>
              );
            })}
          </div>
          <button className="gallery-page-btn" type="button" onClick={showNextGalleryPage} aria-label="Next gallery page">
            &rarr;
          </button>
        </div>
        <div className="gallery-page-count">
          {galleryPage + 1} / {galleryPageCount}
        </div>
      </section>

      {selectedGalleryImage && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={selectedGalleryImage[1]}>
          <button className="gallery-modal-close" type="button" onClick={() => setSelectedGalleryIndex(null)} aria-label="Close gallery preview">
            &times;
          </button>
          <button className="gallery-modal-nav previous" type="button" onClick={showPreviousGalleryImage} aria-label="Previous picture">
            &larr;
          </button>
          <figure className="gallery-modal-card">
            <img src={`/images/${selectedGalleryImage[0]}`} alt={selectedGalleryImage[1]} decoding="async" />
            <figcaption>{selectedGalleryImage[1]}</figcaption>
          </figure>
          <button className="gallery-modal-nav next" type="button" onClick={showNextGalleryImage} aria-label="Next picture">
            &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default GallerySection;