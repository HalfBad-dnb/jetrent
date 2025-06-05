import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IMAGES } from '../styles';
// Removed unused imports

const FleetSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  color: white;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
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

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #0396FF, #0D47A1);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    padding: 0 10px;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-sizing: border-box;
  }
`;

const FleetDescription = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.6;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto 2.5rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 0 auto 2rem;
    line-height: 1.5;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const JetSkiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const JetSkiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const JetSkiImage = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    margin: auto;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
  
  @media (max-width: 1024px) {
    height: 220px;
  }
  
  @media (max-width: 768px) {
    height: 240px;
  }
  
  @media (max-width: 480px) {
    height: 260px;
  }
`;

const JetSkiInfo = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const JetSkiName = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
  color: #FF9500;
`;

const JetSkiSpecs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: white;
  font-size: 0.9rem;
`;

const JetSkiSpec = styled.span`
  display: flex;
  align-items: center;
  color: white;
  
  svg {
    margin-right: 5px;
  }
`;

const JetSkiDescription = styled.p`
  color: white;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const JetSkiPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
`;

const BookButton = styled(motion.button)`
  background-color: #0396FF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0D47A1;
  }
`;

const getJetSkis = (t) => [
  {
    id: 1,
    name: 'Yamaha waverruner vx 1100 cruiser',
    image: IMAGES.jetski1,
    horsepower: '160 HP',
    capacity: '2 Person',
    speed: '65 mph',
    description: t('jetskis.jetski1.description', 'Perfect for beginners, the Wave Runner X1 offers a stable and fun riding experience with enough power to satisfy thrill-seekers.'),
    price: '$90/hr'
  },
  {
    id: 2,
    name: 'Yamaha waverruner gp 1800 svho',
    image: IMAGES.jetski2,
    horsepower: '130 HP',
    capacity: '3 Person',
    speed: '55 mph',
    description: t('jetskis.jetski2.description', 'A family-friendly option with extra seating capacity and good balance of performance and stability for all skill levels.'),
    price: '$110/hr'
  },
  {
    id: 3,
    name: 'Yamaha waverruner fz 1800 svho',
    image: IMAGES.jetski3,
    horsepower: '250 HP',
    capacity: '3 Person',
    speed: '70 mph',
    description: t('jetskis.jetski3.description', 'Our premium model with superior power and luxury features for those seeking the ultimate jet ski experience.'),
    price: '$150/hr'
  },
  {
    id: 4,
    name: 'Kawasaki 310R Ultra 1500',
    image: IMAGES.jetski4,
    horsepower: '250 HP',
    capacity: '3 Person',
    speed: '70 mph',
    description: t('jetskis.jetski3.description', 'Our premium model with superior power and luxury features for those seeking the ultimate jet ski experience.'),
    price: '$150/hr'
  }
];

const Fleet = () => {
  const { t } = useTranslation();
  const jetSkis = getJetSkis(t);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: custom => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      } 
    })
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
      } 
    }
  };
  
  return (
    <FleetSection id="fleet">
      <SectionTitle
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {t('fleet.title').toUpperCase()}
      </SectionTitle>
      
      <FleetDescription
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {t('fleet.subtitle')}
      </FleetDescription>
      
      <JetSkiGrid>
        {jetSkis.map((jetSki, index) => (
          <JetSkiCard
            key={jetSki.id}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          >
            <JetSkiImage>
              <img src={jetSki.image} alt={jetSki.name} />
            </JetSkiImage>
            <JetSkiInfo>
              <JetSkiName>{jetSki.name}</JetSkiName>
              <JetSkiSpecs>
                <JetSkiSpec>{jetSki.horsepower}</JetSkiSpec>
                <JetSkiSpec>{jetSki.capacity}</JetSkiSpec>
                <JetSkiSpec>{jetSki.speed}</JetSkiSpec>
              </JetSkiSpecs>
              <JetSkiDescription>{jetSki.description}</JetSkiDescription>
              <JetSkiPrice>
                <Price>{jetSki.price}</Price>
                <BookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.button')}
                </BookButton>
              </JetSkiPrice>
            </JetSkiInfo>
          </JetSkiCard>
        ))}
      </JetSkiGrid>
      

    </FleetSection>
  );
};

export default Fleet;
