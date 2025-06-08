import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWater } from 'react-icons/fa';

const ActivitiesContainer = styled.div`
  padding: 4rem 2rem;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  color: white;

  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #FF9500;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #FF9500;
    border-radius: 2px;
  }
`;



const ActivityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin: 0 auto;
`;

const ActivityImage = styled.div`
  height: 400px;
  background: ${props => props.bgColor || '#3498db'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
`;

const ActivityContent = styled.div`
  padding: 2.5rem;
  color: #333;
`;

const ActivityTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  color: #555;
  margin-bottom: 1.5rem;
`;



const Activities = () => {
  const { t } = useTranslation();
  
  const activity = {
    id: 1,
    title: 'jet_ski_rental',
    description: 'jet_ski_rental_desc',
    icon: <FaWater />,
  };

  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          top: 0,
          left: 0
        }}
      >
        <source src="/assets/VideoBackround/WaterActivitiesVideoBackground.mp4" type="video/mp4" />
      </video>
      <ActivitiesContainer>
        <Container>
          <SectionTitle>{t('activities.title')}</SectionTitle>
          <ActivityCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ActivityImage bgColor={activity.bgColor}>
              {activity.icon}
            </ActivityImage>
            <ActivityContent>
              <ActivityTitle>{t(`activities.${activity.title}`)}</ActivityTitle>
              <ActivityDescription>
                {t(`activities.${activity.description}`)}
              </ActivityDescription>
            </ActivityContent>
          </ActivityCard>
        </Container>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;