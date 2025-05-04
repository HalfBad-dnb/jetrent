import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IMAGES } from '../styles';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = styled.section`
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

const Wave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23001220' fill-opacity='0.5' d='M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,165.3C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  
  @media (max-width: 768px) {
    height: 100px;
  }
  
  @media (max-width: 480px) {
    height: 70px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin: 0 auto 1.5rem;
  color: #fff;
  position: relative;
  display: block;
  width: 100%;
  max-width: 90%;
  transform: none;
  left: auto;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #FF9500;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    padding: 0 10px;
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    box-sizing: border-box;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: rgba(255, 255, 255, 0.2);
  font-size: 3rem;
  position: absolute;
  top: 20px;
  right: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    top: 15px;
    right: 15px;
  }
`;

const TestimonialText = styled.p`
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
    line-height: 1.4;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CustomerImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  border: 3px solid #FF9500;
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    border: 2px solid #FF9500;
  }
`;

const CustomerDetails = styled.div`
  margin-left: 1rem;
`;

const CustomerName = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin: 0;
`;

const CustomerLocation = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const RatingStars = styled.div`
  display: flex;
  margin-top: 0.5rem;
  
  svg {
    color: #FF9500;
    margin-right: 3px;
  }
`;

const getTestimonials = (t) => [
  {
    id: 1,
    text: t('testimonials.testimonial1.text'),
    name: t('testimonials.testimonial1.name'),
    location: t('testimonials.testimonial1.location'),
    image: IMAGES.customer1,
    rating: 5
  },
  {
    id: 2,
    text: t('testimonials.testimonial2.text'),
    name: t('testimonials.testimonial2.name'),
    location: t('testimonials.testimonial2.location'),
    image: IMAGES.customer2,
    rating: 5
  },
  {
    id: 3,
    text: t('testimonials.testimonial3.text'),
    name: t('testimonials.testimonial3.name'),
    location: t('testimonials.testimonial3.location'),
    image: IMAGES.customer3,
    rating: 4
  }
];

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);
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
  
  return (
    <TestimonialsSection id="testimonials">
      <Wave />
      <Content>
        <SectionTitle
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t('testimonials.title')}
        </SectionTitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              <QuoteIcon />
              <TestimonialText>{testimonial.text}</TestimonialText>
              <CustomerInfo>
                <CustomerImage $image={testimonial.image} />
                <CustomerDetails>
                  <CustomerName>{testimonial.name}</CustomerName>
                  <CustomerLocation>{testimonial.location}</CustomerLocation>
                  <RatingStars>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </RatingStars>
                </CustomerDetails>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Content>
    </TestimonialsSection>
  );
};

export default Testimonials;
