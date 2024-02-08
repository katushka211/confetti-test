import { Container } from './Hero.styled';
import {
  Background,
  // BalloonImage,
  HeaderText,
  HeaderTextSecondary,
  HeroSection,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeaderText>
          Tworzymy unikalne <br></br>i niepowtarzalne{' '}
          <HeaderTextSecondary>dekoracje balonowe </HeaderTextSecondary>
          na imprezy
        </HeaderText>
      </Container>
      <Background>
        {/* <BalloonImage src="/images/ballons1.png" /> */}
      </Background>
    </HeroSection>
  );
};
