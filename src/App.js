import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./i18n";
import styled from "styled-components";
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

const FallbackWrapper = styled.div`
  background: url(${props => props.bgImage}) center/cover no-repeat;
  height: 100%;
  width: 100%;
`;

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  z-index: 2;
`;

const MainContent = () => {
  const [videoError, setVideoError] = useState(false);
  const videoPath = "/assets/VideoBackround/background_video.webm";
  
  return (
    <>
      <VideoWrapper>
        {!videoError ? (
          <VideoBackground
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src={videoPath} type="video/webm" />
          </VideoBackground>
        ) : (
          <FallbackWrapper bgImage="/assets/VideoBackround/background.jpg" />
        )}
      </VideoWrapper>
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/travel" element={<TravelPage />} />
      </Routes>
    </>
  );
}

export default App;
