import React from 'react';
import './i18n';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import Services from './components/Services';

import GlobalStyle from './styles';


const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Hero />
        <Services />
        <Fleet />
        <Testimonials />
        <Map />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
