import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWater } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi'; // For wakeboard icon

const ActivitiesContainer = styled.div`
  padding: 6rem 2rem 4rem; /* Increased top padding to account for fixed navbar */
  min-height: 100vh;
  position: relative;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0; /* Ensure no negative margins are affecting the position */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  
  const activities = [
    {
      id: 'jetSki',
      title: 'jet_ski_rental',
      description: 'jet_ski_rental_desc',
      icon: <FaWater size={60} />,
      bgColor: '#3498db',
      video: '/assets/VideoBackround/WaterActivitiesVideoBackground.mp4'
    },
    {
      id: 'wakeboard',
      title: 'wakeboard',
      description: 'wakeboard_desc',
      icon: <GiSailboat size={60} />,
      bgColor: '#2ecc71',
      video: '/assets/VideoBackround/WaterActivitiesVideoBackground.mp4'
    }
  ];

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
        <source src={activities[0].video} type="video/mp4" />
      </video>
      <ActivitiesContainer>
        <Container>
          <SectionTitle>{t('activities.title')}</SectionTitle>
          <ActivitiesGrid>
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: activity.id === 'wakeboard' ? 0.1 : 0 }}
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
            ))}
          </ActivitiesGrid>
        </Container>
      </ActivitiesContainer>
    </>
  );
};

export default Activities;