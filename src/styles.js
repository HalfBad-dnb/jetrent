import { createGlobalStyle } from 'styled-components';

// These would be replaced with actual images in a production environment
export const IMAGES = {
  jetski1: '/assets/jet/Yamaha waverruner vx 1100 cruiser.webp',
  jetski2: '/assets/jet/Yamaha waverruner gp 1800 svho.webp',
  jetski3: '/assets/jet/Yamaha waverruner fz 1800 svho.webp',
  jetski4: '/assets/jet/Kawasaki 310R Ultra 1500.png',
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
