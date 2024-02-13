import {
  AboutText,
  AboutTitle,
  AboutUsSection,
  AboutWrapper,
  CardsList,
  Container,
} from './AboutUs.styled';
import { Card } from './Card';
import cardsData from '../utils/cardsData.json';
import { useEffect, useState } from 'react';
import { AboutSlider } from './AboutSlider';

// import { AboutSlider } from './AboutSlider';

export const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <AboutUsSection>
      <Container>
        <AboutWrapper>
          <AboutTitle>Kreatywny zespół dekoratorów</AboutTitle>
          <AboutText>
            Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
            dekoracji na imprezy i wydarzenia
          </AboutText>
        </AboutWrapper>
        {isMobile ? (
          <AboutSlider />
        ) : (
          <CardsList>
            {cardsData.map((card, index) => (
              <Card
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                paddingRight={card.paddingRight}
                key={index}
              />
            ))}
          </CardsList>
        )}
      </Container>
      {/* <AboutSlider /> */}
    </AboutUsSection>
  );
};
