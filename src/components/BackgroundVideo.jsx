import { useEffect, useRef, useState } from 'react';

function BackgroundVideo({ className, src }) {
  const videoRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !('IntersectionObserver' in window)) {
      setHasLoaded(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible = entry.isIntersecting;
        setIsVisible(nextVisible);

        if (nextVisible) {
          setHasLoaded(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '420px 0px', threshold: 0 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasLoaded) {
      return undefined;
    }

    const syncPlayback = () => {
      if (document.hidden || !isVisible) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);

    return () => document.removeEventListener('visibilitychange', syncPlayback);
  }, [hasLoaded, isVisible]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={hasLoaded ? src : undefined}
      muted
      loop
      playsInline
      preload={hasLoaded ? 'metadata' : 'none'}
      aria-hidden="true"
    />
  );
}

export default BackgroundVideo;