import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background-color: #000;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const FallbackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/assets/VideoBackround/background.jpg') center/cover no-repeat;
`;

const BackgroundVideo = ({ children }) => {
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  
  // Check if mobile device
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /android/i.test(userAgent);
    const isMobileDevice = isIOS || isAndroid;
    setIsMobile(isMobileDevice);
    
    // Try to play video on desktop
    if (!isMobileDevice && videoRef.current) {
      const playPromise = videoRef.current.play();
      
      // Handle autoplay promise
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Video play failed:', error);
          setVideoError(true);
        });
      }
    }
  }, []);
  
  // On mobile, don't load video at all
  if (isMobile) {
    return (
      <>
        <FallbackWrapper />
        {children}
      </>
    );
  }

  return (
    <>
      <VideoWrapper>
        {!videoError ? (
          <VideoBackground
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={(e) => {
              console.error('Video error:', e);
              setVideoError(true);
            }}
            onCanPlayThrough={() => {
              // Try to play the video when it's ready
              if (videoRef.current) {
                videoRef.current.play().catch(error => {
                  console.error('Video play failed:', error);
                  setVideoError(true);
                });
              }
            }}
          >
            <source src="/assets/VideoBackround/background_video.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
            <source src="/assets/VideoBackround/background_video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </VideoBackground>
        ) : (
          <FallbackWrapper />
        )}
      </VideoWrapper>
      {children}
    </>
  );
};

export default BackgroundVideo;
