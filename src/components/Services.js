import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWater, FaMap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
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
  font-size: 3.5rem;
  text-align: center;
  margin: 0 auto 3rem;
  color: #ffffff;
  position: relative;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 90%;
  display: block;
  left: auto;
  transform: none;
  font-weight: 700;
  letter-spacing: -0.5px;
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
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #FF9500;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
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

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('services.title')}
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
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
