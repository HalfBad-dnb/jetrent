import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./i18n";
import styled, { keyframes } from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Activities from "./components/pages/service_pages/Activities";
import Rent from "./components/pages/service_pages/Rent";
import Travel from "./components/pages/service_pages/Travel";

import GlobalStyle from "./styles";

// Animation for loading spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background-color: #000; /* Fallback background */
`;

const VideoBackground = styled.video.attrs(({ $isLoaded }) => ({
  style: {
    opacity: $isLoaded ? 1 : 0,
  },
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
  will-change: transform;
  backface-visibility: hidden;
  transition: opacity 0.5s ease-in-out;
`;

const FallbackWrapper = styled.div.attrs(({ $bgImage, $isVisible }) => ({
  style: {
    backgroundImage: $bgImage ? `url(${$bgImage})` : 'none',
    opacity: $isVisible ? 1 : 0,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  animation: ${spin} 1s linear infinite;
  z-index: 10;
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  z-index: 2;
`;

const VideoBackgroundComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef(null);
  const fallbackRef = useRef(null);
  const videoPathWebM = "/assets/VideoBackround/background_video.webm";
  const videoPathMP4 = "/assets/VideoBackround/background_video.mp4";
  const fallbackImage = "/assets/VideoBackround/background.jpg";
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Lazy load video when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video loading
  useEffect(() => {
    if (!isVisible || isMobile) {
      setShowFallback(true);
      return;
    }

    const video = document.createElement('video');
    video.src = videoPathWebM;
    
    let loadTimeout;
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      // Clear any pending error timeout since video loaded successfully
      if (loadTimeout) {
        clearTimeout(loadTimeout);
      }
    };
    
    const handleError = () => {
      setVideoError(true);
      if (loadTimeout) {
        clearTimeout(loadTimeout);
      }
    };
    
    video.oncanplay = handleCanPlay;
    video.onerror = handleError;
    
    // Set a timeout to show error if video doesn't load in time
    loadTimeout = setTimeout(() => {
      if (!isVideoLoaded) {
        setVideoError(true);
      }
    }, 5000);

    // Cleanup
    return () => {
      video.oncanplay = null;
      video.onerror = null;
      video.src = '';
      if (loadTimeout) {
        clearTimeout(loadTimeout);
      }
    };
  }, [isVisible, isMobile, isVideoLoaded]);

  // Handle fallback image loading
  useEffect(() => {
    if (videoError || isMobile) {
      const img = new Image();
      img.src = fallbackImage;
      
      img.onload = () => {
        setShowFallback(true);
      };
      
      img.onerror = () => {
        // If fallback image fails, show a solid color
        const fallbackEl = fallbackRef.current;
        if (fallbackEl) {
          fallbackEl.style.background = '#1a1a1a';
          fallbackEl.style.opacity = 1;
        }
      };
    }
  }, [videoError, isMobile]);

  // On mobile, only show the fallback image
  if (isMobile) {
    return (
      <VideoWrapper>
        <FallbackWrapper 
          ref={fallbackRef} 
          $bgImage={fallbackImage} 
          $isVisible={showFallback} 
        />
      </VideoWrapper>
    );
  }

  return (
    <VideoWrapper ref={videoRef}>
      {!videoError && isVisible && (
        <>
          <VideoBackground
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            $isLoaded={isVideoLoaded}
            onError={() => setVideoError(true)}
          >
            <source src={videoPathWebM} type="video/webm" />
            <source src={videoPathMP4} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoBackground>
          {!isVideoLoaded && <LoadingSpinner />}
        </>
      )}
      {(videoError || !isVisible) && (
        <FallbackWrapper 
          ref={fallbackRef} 
          $bgImage={fallbackImage} 
          $isVisible={showFallback} 
        />
      )}
    </VideoWrapper>
  );
};

const MainContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll to section when location state contains scrollTo
  useLayoutEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout to ensure the component is rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Clear the state to prevent scrolling on re-renders
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location, navigate]);
  
  return (
    <>
      <VideoBackgroundComponent />
      <AppContainer>
        <Navbar />
        <Hero />
        <Services />
        <Fleet />
        <Map />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
};

const ActivitiesPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Activities />
        <Footer />
      </AppContainer>
    </>
  );
};

const RentPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Rent />
        <Footer />
      </AppContainer>
    </>
  );
};

const TravelPage = () => {
  return (
    <>
      <VideoWrapper>
        <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
      </VideoWrapper>
      <AppContainer>
        <Navbar />
        <Travel />
        <Footer />
      </AppContainer>
    </>
  );
};

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <>
            <ScrollToTop />
            <MainContent />
          </>
        } />
        <Route path="/activities" element={
          <>
            <ScrollToTop />
            <ActivitiesPage />
          </>
        } />
        <Route path="/rent" element={
          <>
            <ScrollToTop />
            <RentPage />
          </>
        } />
        <Route path="/travel" element={
          <>
            <ScrollToTop />
            <TravelPage />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
