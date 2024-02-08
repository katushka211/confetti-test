import { Container } from './Hero.styled';
import {
  HeroSection,
  BackgroundLeft,
  BackgroundRight,
  HeaderText,
  HeaderTextSecondary,
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
      <BackgroundLeft />
      <BackgroundRight />
    </HeroSection>
  );
};
