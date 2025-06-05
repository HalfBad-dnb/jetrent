import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWater, FaMap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const jetsky1 = '/jetsky1.1.png';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  margin: 0 auto 3rem;
  text-align: center;
  color: #FF9500;
  position: relative;
  width: 100%;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    border-radius: 15px;
  }
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #FF9500;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: #FF9500;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BookNowButton = styled.button`
  background: #FF9500;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: #FF7B00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const services = [
  {
    icon: <FaWater size={40} color="#FFA500" />,
    title: 'vandens_pramogos',
    description: 'vandens_pramogos_description'
  },
  {
    icon: (
      <svg width={60} height={60} viewBox="0 0 60 60" style={{ margin: '-10px' }}>
        <defs>
          <filter id="orangeFilter" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 1
                                               0 0 0 0 0.65
                                               0 0 0 0 0
                                               0 0 0 1 0"/>
          </filter>
        </defs>
        <image 
          href={jetsky1} 
          width="100%" 
          height="100%" 
          filter="url(#orangeFilter)"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    ),
    title: 'vandens_motociklu_nuoma',
    description: 'vandens_motociklu_nuoma_description'
  },
  {
    icon: <FaMap size={40} color="#FFA500" />,
    title: 'keliones_su_gidu',
    description: 'keliones_su_gidu_description'
  }
];

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookNow = (e, serviceTitle) => {
    e.preventDefault();
    // Map service titles to their respective routes
    const serviceRoutes = {
      'vandens_pramogos': '/activities',
      'vandens_motociklu_nuoma': '/rent',
      'keliones_su_gidu': '/travel'
    };
    
    const route = serviceRoutes[serviceTitle] || '/';
    navigate(route);
  };

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('services.title').toUpperCase()}
        </SectionTitle>
        
        <Grid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>
                {t(`services.${service.title}`)}
              </ServiceTitle>
              <ServiceDescription>
                {t(`services.${service.description}`)}
              </ServiceDescription>
              <BookNowButton onClick={(e) => handleBookNow(e, service.title)}>
                {t('services.book_now')}
              </BookNowButton>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
