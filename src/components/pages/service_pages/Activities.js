import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWater, FaSwimmingPool, FaFish, FaUmbrellaBeach } from 'react-icons/fa';
import BackgroundVideo from '../../BackgroundVideo';

const ActivitiesContainer = styled.div`
  padding: 4rem 2rem;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
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

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ActivityCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityImage = styled.div`
  height: 200px;
  background: ${props => props.bgColor || '#3498db'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
`;

const ActivityContent = styled.div`
  padding: 1.5rem;
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: #FF9500;
  margin-bottom: 1rem;
`;

const ActivityDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ActivityFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  
  &::before {
    content: '✓';
    color: #2ecc71;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const activities = [
  {
    id: 1,
    title: 'jet_ski_rental',
    description: 'jet_ski_rental_desc',
    icon: <FaWater />,
    bgColor: '#3498db',
    features: ['feature_high_speed', 'feature_guided_tours', 'feature_safety_gear']
  },
  {
    id: 2,
    title: 'banana_boat',
    description: 'banana_boat_desc',
    icon: <FaSwimmingPool />,
    bgColor: '#e74c3c',
    features: ['feature_group_fun', 'feature_family_friendly', 'feature_life_jackets']
  },
  {
    id: 3,
    title: 'fishing_trips',
    description: 'fishing_trips_desc',
    icon: <FaFish />,
    bgColor: '#2ecc71',
    features: ['feature_equipment_included', 'feature_experienced_guides', 'feature_catch_release']
  },
  {
    id: 4,
    title: 'beach_relaxation',
    description: 'beach_relaxation_desc',
    icon: <FaUmbrellaBeach />,
    bgColor: '#f39c12',
    features: ['feature_private_beach', 'feature_comfort_zones', 'feature_services']
  }
];

const Activities = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundVideo />
      <ActivitiesContainer>
        <Container>
        <SectionTitle>{t('activities.title')}</SectionTitle>
        <ActivitiesGrid>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
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
                <ActivityFeatures>
                  {activity.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      {t(`activities.${feature}`)}
                    </FeatureItem>
                  ))}
                </ActivityFeatures>
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