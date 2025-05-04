import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const Video = ({ 
  videoSrc, 
  webmSrc,
  muted = true,
  loop = true,
  autoPlay = true,
  enableOnMobile = true,
  onLoadStart,
  onError
}) => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
// Removed unused state variables
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Set video attributes
      video.muted = muted;
      video.loop = loop;
      video.playsInline = true;

      // Handle loading state
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
        if (onLoadStart) {
          onLoadStart();
        }
      });

      video.addEventListener('error', (error) => {
        setIsLoading(false);
        setHasError(true);
        if (onError) {
          onError(error);
        }
      });
      
      if (autoPlay) {
        // Try to play the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .catch(error => {
              console.log('Autoplay prevented:', error);
              // For iOS, try to play on first user interaction
              if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                const playVideoOnce = () => {
                  video.play()
                    .catch(e => console.log('iOS play error:', e));
                  
                  document.removeEventListener('touchstart', playVideoOnce);
                };
                
                document.addEventListener('touchstart', playVideoOnce, { once: true });
              }
            });
        }
      }
      
      // Add visibility observer for performance
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                if (video.paused) {
                  video.play().catch(() => {});
                }
              } else {
                if (!video.paused) {
                  video.pause();
                }
              }
            });
          },
          { threshold: 0.1 }
        );
        
        observer.observe(video);
        
        return () => {
          observer.disconnect();
        };
      }
    }
  }, [videoSrc, muted, loop, autoPlay, isMobile, enableOnMobile, onLoadStart, onError]);

  return (
    <VideoContainer>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          color: 'white'
        }}>
          Loading video...
        </div>
      )}
      {hasError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          color: 'white'
        }}>
          Error loading video
        </div>
      )}
      <BackgroundVideo
        ref={videoRef}
        preload="auto"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={videoSrc} type="video/mp4" />
      </BackgroundVideo>
    </VideoContainer>
  );
};

export default Video;