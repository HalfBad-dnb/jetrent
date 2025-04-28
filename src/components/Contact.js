import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
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

const ContactInfo = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #0396FF 0%, #0D47A1 100%);
  border-radius: 15px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(13, 71, 161, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/wave-pattern.png');
    opacity: 0.05;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
`;

const ContactInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;
`;

const ContactDetails = styled.div`
  position: relative;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #FF9500;
  }
`;

const ContactItemText = styled.span`
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #FF9500;
  }
`;

const FormContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #0396FF;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #0396FF;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #0396FF, #0D47A1);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const FormSuccess = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(25, 135, 84, 0.1);
  border: 1px solid #198754;
  border-radius: 8px;
  color: #198754;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      } 
    }
  };
  
  return (
    <ContactSection id="contact">
      <SectionTitle
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        Contact Us
      </SectionTitle>
      
      <Container>
        <ContactInfo
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContactInfoTitle
            as={motion.h3}
            variants={itemVariants}
          >
            Let's Get In Touch
          </ContactInfoTitle>
          <ContactInfoText
            as={motion.p}
            variants={itemVariants}
          >
            Ready for an unforgettable experience on the water? Contact us to book your jet ski adventure or learn more about our services.
          </ContactInfoText>
          
          <ContactDetails
            as={motion.div}
            variants={containerVariants}
          >
            <ContactItem
              as={motion.div}
              variants={itemVariants}
            >
              <FaPhone />
              <ContactItemText>(555) 123-4567</ContactItemText>
            </ContactItem>
            
            <ContactItem
              as={motion.div}
              variants={itemVariants}
            >
              <FaEnvelope />
              <ContactItemText>info@jetadventures.com</ContactItemText>
            </ContactItem>
            
            <ContactItem
              as={motion.div}
              variants={itemVariants}
            >
              <FaMapMarkerAlt />
              <ContactItemText>123 Beach Front, Coastal City, CA 94111</ContactItemText>
            </ContactItem>
          </ContactDetails>
          
          <SocialLinks
            as={motion.div}
            variants={containerVariants}
          >
            <SocialLink 
              href="#" 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink 
              href="#" 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink 
              href="#" 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink 
              href="#" 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-youtube"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <FormContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Form onSubmit={handleSubmit}>
            <InputGroup
              as={motion.div}
              variants={itemVariants}
            >
              <Label htmlFor="name">Your Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </InputGroup>
            
            <InputGroup
              as={motion.div}
              variants={itemVariants}
            >
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </InputGroup>
            
            <InputGroup
              as={motion.div}
              variants={itemVariants}
            >
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </InputGroup>
            
            <InputGroup
              as={motion.div}
              variants={itemVariants}
            >
              <Label htmlFor="message">Message</Label>
              <TextArea 
                id="message" 
                name="message" 
                required 
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
              />
            </InputGroup>
            
            <SubmitButton
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Send Message
            </SubmitButton>
            
            {formSubmitted && (
              <FormSuccess
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thank you! Your message has been sent successfully.
              </FormSuccess>
            )}
          </Form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
