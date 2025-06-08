import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundVideo from '../../BackgroundVideo';

const TravelContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  min-height: 100vh;
  padding-top: 80px; // To account for fixed navbar
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
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

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TourCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const TourImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const TourContent = styled.div`
  padding: 1.5rem;
`;

const TourTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #FF9500;
`;

const TourDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;



const TourFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const BookButton = styled(motion.button)`
  background: #FF9500;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e68a00;
  }
`;



const Travel = () => {
  const { t } = useTranslation();

  const tourPackages = [
    {
      id: 1,
      title: t('travel.coastal_tour.title'),
      description: t('travel.coastal_tour.description'),

      image: '/assets/travel/coastal-tour.jpg'
    },
    {
      id: 2,
      title: t('travel.sunset_tour.title'),
      description: t('travel.sunset_tour.description'),

      image: '/assets/travel/sunset-tour.jpg'
    },
    {
      id: 3,
      title: t('travel.private_tour.title'),
      description: t('travel.private_tour.description'),

      image: '/assets/travel/private-tour.jpg'
    }
  ];

  const handleBookNow = (tourTitle) => {
    // Here you would typically open a booking modal or redirect to a booking page
    console.log(`Booking ${tourTitle} tour`);
    // Example: navigate(`/book-now?tour=${encodeURIComponent(tourTitle)}`);
  };

  return (
    <>
      <BackgroundVideo />
      <TravelContainer>
      <Title>{t('travel.title')}</Title>
      <Subtitle>{t('travel.subtitle')}</Subtitle>
      
      <ToursGrid>
        {tourPackages.map((tour) => (
          <TourCard
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: tour.id * 0.1 }}
          >
            <TourImage image={tour.image} />
            <TourContent>
              <TourTitle>{tour.title}</TourTitle>
              <TourDescription>{tour.description}</TourDescription>
              <TourFooter>
                <BookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBookNow(tour.title)}
                >
                  {t('travel.book_now')}
                </BookButton>
              </TourFooter>
            </TourContent>
          </TourCard>
        ))}
      </ToursGrid>
      </TravelContainer>
    </>
  );
};

export default Travel;