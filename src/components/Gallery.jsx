import React, { useState, useEffect } from 'react';

const Gallery = ({ translations }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Villa photo URLs - real photos  
  const photoUrls = [
    "https://i.ibb.co/Cs6sDmWk/villa-01.jpg", // Real villa photo #1 (existing)
    "https://i.ibb.co/xtYmNLmY/villa-02.jpg", // Real villa photo #2
    "https://i.ibb.co/WNtkNBzR/DJI-0736.jpg", // Real villa photo #3 (drone)
    "https://i.ibb.co/vCcT1N7x/SET01459.jpg", // Real villa photo #4
    "https://i.ibb.co/DgwQYngG/SET01505.jpg", // Real villa photo #5
    "https://i.ibb.co/XrsC1bYZ/SET04499.jpg", // Real villa photo #6
    ...Array.from({ length: 13 }, (_, i) => 
      `https://via.placeholder.com/800x600?text=Villa+Photo+${i + 7}`
    )
  ];
  
  const bestPhotosIndices = [0, 1, 2, 3, 4, 5];
  const bestPhotos = bestPhotosIndices.map(index => photoUrls[index]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photoUrls.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photoUrls.length) % photoUrls.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {/* Best Photos Section */}
      <section id="photos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {translations.gallery.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bestPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-gray-200"
                onClick={() => openLightbox(bestPhotosIndices[index])}
              >
                <img
                  src={photo}
                  alt={`Villa view ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(index)}
                />
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => openLightbox(0)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
              aria-label={translations.gallery.view_all}
            >
              {translations.gallery.view_all} ({photoUrls.length})
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 z-10 p-2"
              aria-label={translations.gallery.close}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 p-2 z-10"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 p-2 z-10"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main image */}
            <img
              src={photoUrls[currentImage]}
              alt={`Villa view ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
              {currentImage + 1} / {photoUrls.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-4 right-4 overflow-x-auto">
            <div className="flex space-x-2 min-w-full justify-center">
              {photoUrls.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                    index === currentImage ? 'border-yellow-500' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;