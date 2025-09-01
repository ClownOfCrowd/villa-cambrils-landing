import React, { useState, useEffect } from 'react';

const Hero = ({ translations, onScheduleVisit }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = (e) => {
    console.log('handleVideoLoad called, setting videoLoaded to true');
    setVideoLoaded(true);
    console.log('Video loaded successfully');
    const video = e.target;
    console.log('Video properties:', {
      duration: video.duration,
      videoWidth: video.videoWidth,
      videoHeight: video.videoHeight,
      readyState: video.readyState
    });
    
    // Принудительное воспроизведение
    video.play().then(() => {
      console.log('setVideoPlaying(true) called');
      setVideoPlaying(true);
      console.log('Video is playing');
    }).catch(err => {
      console.log('Autoplay blocked, user interaction needed:', err);
    });
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };

  const manualPlayVideo = () => {
    const video = document.querySelector('video');
    if (video) {
      video.play().then(() => {
        setVideoPlaying(true);
      });
    }
  };

  const handleVideoError = (e) => {
    setVideoError(true);
    console.error('Video failed to load:', e);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://i.ibb.co/Cs6sDmWk/villa-01.jpg"
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        onError={handleVideoError}
        onPlay={handleVideoPlay}
      >
        <source src="https://res.cloudinary.com/denhjv30b/video/upload/v1756554614/villa-video_yqhyrh.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback background image if video fails - temporarily disabled */}
      {false && videoError && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://i.ibb.co/Cs6sDmWk/villa-01.jpg)'
          }}
        />
      )}
      
      {/* Video loading indicator - only show if video not loaded */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-30">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <p>Cargando video...</p>
          </div>
        </div>
      )}

      {/* Debug info - remove for production */}
      {/* <div className="absolute top-4 left-4 z-50 text-white text-sm bg-black bg-opacity-75 p-3 rounded">
        <div>Video loaded: {videoLoaded ? 'Yes' : 'No'}</div>
        <div>Video playing: {videoPlaying ? 'Yes' : 'No'}</div>
      </div> */}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-5" />
      
      {/* Play button if autoplay blocked */}
      {videoLoaded && !videoPlaying && (
        <button
          onClick={manualPlayVideo}
          className="absolute top-4 right-4 z-20 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <span>Reproducir video</span>
        </button>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-yellow-100 max-w-4xl mx-auto mt-16">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-yellow-100 transition-all duration-1000 drop-shadow-lg ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {translations.title}
          </h1>
          
          <p 
            className={`text-xl md:text-2xl lg:text-3xl mb-2 text-yellow-50 transition-all duration-1000 delay-300 drop-shadow-md ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {translations.lead}
          </p>
          
          <div 
            className={`mt-4 mb-6 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-yellow-400 font-bold text-3xl md:text-4xl lg:text-5xl bg-black bg-opacity-30 px-4 py-2 rounded-lg border-2 border-yellow-400 drop-shadow-xl">
              1.499.990 €
            </span>
          </div>
          
          <p 
            className={`text-lg md:text-xl mb-10 text-yellow-50 transition-all duration-1000 delay-500 drop-shadow-md ${
              isLoaded ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {translations.hero_subtitle}
          </p>
          
          <button
            onClick={onScheduleVisit}
            className={`bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-1000 delay-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            aria-label={translations.cta_primary}
          >
            {translations.cta_primary}
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;