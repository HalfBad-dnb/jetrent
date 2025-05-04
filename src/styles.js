import { createGlobalStyle } from 'styled-components';

// These would be replaced with actual images in a production environment
export const IMAGES = {
  jetski1: '/assets/jet/vx.webp',
  jetski2: '/assets/jet/gp-svho-a-sp.webp',
  jetski3: '/assets/jet/property-1gp-ho-torch-red_profile-no-speaker.webp',
  jetski4: '/assets/jet/2014-ultra-r-model-view-q4gz5n1bs2uf58i7nhs7s5ng9ieao8rkdsqdrxk3bk.png',
  customer1: 'https://randomuser.me/api/portraits/women/44.jpg',
  customer2: 'https://randomuser.me/api/portraits/men/32.jpg',
  customer3: 'https://randomuser.me/api/portraits/women/68.jpg',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    color: #ffffff;
    overflow-x: hidden;
    background-color: #001220;
  }
  
  section {
    position: relative;
    z-index: 1;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
