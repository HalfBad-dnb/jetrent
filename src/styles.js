import { createGlobalStyle } from 'styled-components';

// Base64 encoded 1x1 transparent GIF as placeholder for images
export const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

// These would be replaced with actual images in a production environment
export const IMAGES = {
  jetski1: 'https://images.unsplash.com/photo-1564414872027-44868ebc3be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  jetski2: 'https://images.unsplash.com/photo-1566846128021-b940b0eec910?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  jetski3: 'https://images.unsplash.com/photo-1610173827043-9db5c7aa5272?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    background-color: #001220;
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
