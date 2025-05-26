import React, { useEffect, useState } from "react";
import "./i18n";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Services from "./components/Services";

import GlobalStyle from "./styles";

// Styled Components
const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const FallbackWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
  height: 100%;
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  z-index: 2;
`;

function App() {
  const [videoError, setVideoError] = useState(false);
  const videoPath = "/assets/VideoBackround/background_video.webm";
  const fallbackImagePath = "/assets/VideoBackround/fallback.jpg";
  // Mobile detection state removed as it's not currently used

  useEffect(() => {
    // Preload the video
    const videoElement = document.createElement('video');
    videoElement.src = videoPath;
    videoElement.preload = 'auto';
    videoElement.muted = true;
    videoElement.playsInline = true;
    
    const handleLoad = () => {
      console.log("Video loaded successfully");
      setVideoError(false);
    };
    
    const handleError = () => {
      console.error("Video failed to load");
      setVideoError(true);
    };
    
    videoElement.addEventListener('loadeddata', handleLoad);
    videoElement.addEventListener('error', handleError);
    
    // Try to play the video (required for autoplay on some browsers)
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented:", error);
        videoElement.muted = true;
        videoElement.play().catch(e => console.log("Muted play failed:", e));
      });
    }
    
    return () => {
      videoElement.removeEventListener('loadeddata', handleLoad);
      videoElement.removeEventListener('error', handleError);
      videoElement.pause();
      videoElement.src = '';
      videoElement.load();
    };
  }, []);

  return (
    <>
      <GlobalStyle />

      {!videoError && (
        <VideoWrapper>
          <VideoBackground
            playsInline
            autoPlay
            muted
            loop
            disablePictureInPicture
            disableRemotePlayback
            onError={(e) => {
              console.error("Video error:", e);
              setVideoError(true);
            }}
          >
            <source src={videoPath} type="video/mp4" />
            <track kind="captions" srcLang="en" src="captions.vtt" default />
            Your browser does not support the video tag.
          </VideoBackground>
        </VideoWrapper>
      )}

      <VideoOverlay />

      <AppContainer>
        {videoError ? (
          <FallbackWrapper bgImage={fallbackImagePath}>
            <Navbar />
            <Hero />
            <Services />
            <Fleet />
            <Testimonials />
            <Map />
            <Contact />
            <Footer />
          </FallbackWrapper>
        ) : (
          <>
            <Navbar />
            <Hero />
            <Services />
            <Fleet />
            <Testimonials />
            <Map />
            <Contact />
            <Footer />
          </>
        )}
      </AppContainer>
    </>
  );
}

export default App;
