import { Container } from './Hero.styled';
import {
  Background,
  BalloonImage,
  HeaderText,
  HeaderTextSecondary,
  HeroSection,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Background>
        <BalloonImage src="/images/ballons1.png" />
      </Background>
      <Container>
        <HeaderText>
          Tworzymy unikalne <br></br>i niepowtarzalne{' '}
          <HeaderTextSecondary>dekoracje balonowe </HeaderTextSecondary>
          na imprezy
        </HeaderText>
      </Container>
    </HeroSection>
  );
};
