import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import GlobalStyle from './styles';
import './App.css';

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatedBackground />
      <AppContainer>
        <Navbar />
        <Hero />
        <Fleet />
        <Testimonials />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
