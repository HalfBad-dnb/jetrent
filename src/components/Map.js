import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import L from 'leaflet';


// Remove default icon image path
delete L.Icon.Default.prototype._getIconUrl;

// Set custom icon for Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapSection = styled.section`
  padding: 7rem 2rem 5rem; /* Increased top padding to account for fixed navbar */
  position: relative;
  color: white;
  overflow: hidden;
  margin-top: 0;
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin: 0 auto 1.5rem;
  color: #FF9500;
  position: relative;
  display: block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 90%;
  font-weight: 700;
  letter-spacing: -0.5px;
  transform: none;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #0396FF, #0D47A1);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  height: 500px;
  width: 100%;
  background: rgba(3, 150, 255, 0.1);
  margin-top: 2rem; /* Add space between title and map */

  #map {
    height: 100%;
    width: 100%;
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const Map = () => {
  const { t } = useTranslation();
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);

  useEffect(() => {
    const container = mapContainer.current;
    if (!container) return;

    // Ensure container has proper dimensions
    container.style.width = '100%';
    container.style.height = '100%';

    const companyCoordinates = [55.7048, 21.1219];
    const zoomLevel = 13;

    // Clean up existing map if it exists
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    // Create new map instance
    try {
      map.current = L.map(container).setView(companyCoordinates, zoomLevel);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);

      // Add marker
      L.marker(companyCoordinates)
        .addTo(map.current)
        .bindPopup('Kuršių marios, Kuršmarės, seniau vadintos Prūsų jūra')
        .openPopup();

      // Trigger map resize when component mounts
      map.current.invalidateSize();
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <MapSection id="map">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          marginBottom: '2rem',
          paddingTop: '1rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        {t('map.title').toUpperCase()}
      </SectionTitle>
      
      <Container>
        <MapWrapper>
          <div ref={mapContainer} id="map"></div>
        </MapWrapper>
        
        <LocationInfo>
          <LocationIcon />
          <LocationText>
            {t('map.location')}
          </LocationText>
        </LocationInfo>
      </Container>
    </MapSection>
  );
};

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  color: white;
  font-size: 1.8rem;
  transition: transform 0.3s ease;
  
  ${LocationInfo}:hover & {
    color: #0396FF;
  }
`;

const LocationText = styled.p`
  color: white;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  
  ${LocationInfo}:hover & {
    color: #0396FF;
  }
`;

export default Map;
