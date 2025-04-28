import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IMAGES } from '../styles';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const FleetSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  color: white;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  
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
    font-size: 2.5rem;
  }
`;

const FleetDescription = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.6;
`;

const JetSkiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const JetSkiCard = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
`;

const JetSkiImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }
`;

const JetSkiInfo = styled.div`
  padding: 1.5rem;
`;

const JetSkiName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0D47A1;
`;

const JetSkiSpecs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #555;
  font-size: 0.9rem;
`;

const JetSkiSpec = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 5px;
  }
`;

const JetSkiDescription = styled.p`
  color: #666;
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
  color: #FF9500;
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

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
`;

const NavButton = styled(motion.button)`
  background-color: ${props => props.active ? '#0396FF' : '#ddd'};
  color: ${props => props.active ? 'white' : '#555'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? '#0D47A1' : '#ccc'};
  }
`;

const jetSkis = [
  {
    id: 1,
    name: 'Wave Runner X1',
    image: IMAGES.jetski1,
    horsepower: '160 HP',
    capacity: '2 Person',
    speed: '65 mph',
    description: 'Perfect for beginners, the Wave Runner X1 offers a stable and fun riding experience with enough power to satisfy thrill-seekers.',
    price: '$90/hr'
  },
  {
    id: 2,
    name: 'Sea-Doo Spark',
    image: IMAGES.jetski2,
    horsepower: '130 HP',
    capacity: '3 Person',
    speed: '55 mph',
    description: 'A family-friendly option with extra seating capacity and good balance of performance and stability for all skill levels.',
    price: '$110/hr'
  },
  {
    id: 3,
    name: 'Yamaha FX Cruiser',
    image: IMAGES.jetski3,
    horsepower: '250 HP',
    capacity: '3 Person',
    speed: '70 mph',
    description: 'Our premium model with superior power and luxury features for those seeking the ultimate jet ski experience.',
    price: '$150/hr'
  }
];

const Fleet = () => {
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
        Our Fleet
      </SectionTitle>
      
      <FleetDescription
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        Choose from our selection of high-performance jet skis, each offering a unique experience on the water.
        All our equipment is regularly maintained and includes the latest safety features.
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
            <JetSkiImage image={jetSki.image} />
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
                  Book Now
                </BookButton>
              </JetSkiPrice>
            </JetSkiInfo>
          </JetSkiCard>
        ))}
      </JetSkiGrid>
      
      <NavButtons>
        <NavButton
          active={true}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          1
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          2
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </NavButton>
      </NavButtons>
    </FleetSection>
  );
};

export default Fleet;
