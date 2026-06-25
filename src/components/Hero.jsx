import { useEffect, useRef, useState } from 'react';
import { heroHeadline, videoSlides } from '../data/siteData';
import { renderAnimatedLetters, renderAnimatedSentence } from '../utils/animatedText.jsx';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);
  const currentSlide = videoSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % videoSlides.length);
      }
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const syncPlayback = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);

    return () => document.removeEventListener('visibilitychange', syncPlayback);
  }, [activeSlide]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + videoSlides.length) % videoSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % videoSlides.length);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-photo hero-video-slider">
        <video
          ref={videoRef}
          className="hero-video active"
          key={currentSlide.src}
          src={currentSlide.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hair-strand"></div>
        <div className="hero-slider-controls" aria-label="Landing video controls">
          <button type="button" onClick={showPreviousSlide} aria-label="Previous video">&larr;</button>
          <div className="hero-dots">
            {videoSlides.map((slide, index) => (
              <button
                className={index === activeSlide ? 'active' : ''}
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label} video`}
              />
            ))}
          </div>
          <button type="button" onClick={showNextSlide} aria-label="Next video">&rarr;</button>
        </div>
        <span className="hero-caption">{currentSlide.label} | Nungambakkam Chennai beauty salon</span>
      </div>
      <div
        className="hero-copy-block"
        style={{
          '--hero-theme-base': currentSlide.theme.base,
          '--hero-theme-accent': currentSlide.theme.accent,
          '--hero-theme-accent-strong': currentSlide.theme.accentStrong,
          '--hero-theme-glow': currentSlide.theme.glow
        }}
      >
        <div className="hero-text">
          <span className="hero-kicker" key={`kicker-${activeSlide}`}>
            {currentSlide.label}
          </span>
          <h1 aria-label={heroHeadline.join(' ')}>
            {renderAnimatedLetters(heroHeadline, activeSlide)}
          </h1>
          <div className="hero-service-copy" key={`service-copy-${activeSlide}`}>
            <p aria-label={currentSlide.theme.serviceLine} className="hero-service-line">
              {renderAnimatedSentence(currentSlide.theme.serviceLine, activeSlide)}
            </p>
          </div>
          <a href="#booking" className="btn-outline">Book Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;