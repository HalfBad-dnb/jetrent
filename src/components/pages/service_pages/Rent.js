import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundVideo from '../../BackgroundVideo';

const RentContainer = styled.div`
  padding: 6rem 2rem 4rem; /* Increased top padding to account for fixed navbar */
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  margin-top: 0; /* Ensure no negative margins are affecting the position */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #FF9500;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const RentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const RentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const RentImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

const RentTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #FF9500;
`;

const RentDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const RentFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    
    &::before {
      content: '✓';
      color: #4CAF50;
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`;

const BookButton = styled.button`
  background: #FF9500;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #e68a00;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const Rent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const rentalOptions = [
    {
      id: 1,
      title: t('rental.standard.title'),
      description: t('rental.standard.description'),

      features: [
        t('rental.features.standard1'),
        t('rental.features.standard2'),
        t('rental.features.standard3'),
      ],
      image: '/assets/rentals/standard.jpg'
    },
    {
      id: 2,
      title: t('rental.premium.title'),
      description: t('rental.premium.description'),

      features: [
        t('rental.features.premium1'),
        t('rental.features.premium2'),
        t('rental.features.premium3'),
      ],
      image: '/assets/rentals/premium.jpg'
    },
    {
      id: 3,
      title: t('rental.group.title'),
      description: t('rental.group.description'),

      features: [
        t('rental.features.group1'),
        t('rental.features.group2'),
        t('rental.features.group3'),
      ],
      image: '/assets/rentals/group.jpg'
    }
  ];

  const handleBookNow = (rentalType) => {
    // Navigate to home page and scroll to contact section
    navigate('/', { 
      state: { scrollTo: 'contact', interest: rentalType },
      replace: true
    });
  };

  return (
    <>
      <BackgroundVideo />
      <RentContainer>
      <Title>{t('rental.title')}</Title>
      <Subtitle>{t('rental.subtitle')}</Subtitle>
      
      <RentGrid>
        {rentalOptions.map((rental) => (
          <RentCard
            key={rental.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RentImage image={rental.image} />
            <RentTitle>{rental.title}</RentTitle>
            <RentDescription>{rental.description}</RentDescription>
            <RentFeatures>
              {rental.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </RentFeatures>
            <BookButton onClick={() => handleBookNow(rental.title)}>
              {t('rental.book_now')}
            </BookButton>
          </RentCard>
        ))}
      </RentGrid>
      </RentContainer>
    </>
  );
};

export default Rent;