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
      <div>
        <HeaderText>
          Tworzymy unikalne i niepowtarzalne{' '}
          <HeaderTextSecondary>dekoracje balonowe </HeaderTextSecondary>
          na imprezy
        </HeaderText>
      </div>
    </HeroSection>
  );
};
