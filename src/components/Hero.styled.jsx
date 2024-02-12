import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  padding-top: 212px;
  padding-bottom: 154px;
  background-image: url('/images/bgmob.png');
  background-size: cover;
  background-position: inherit;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (min-width: ${p => p.theme.media.m}) {
    background-image: url('/images/bgtablet.png');
    padding-top: 247px;
    padding-bottom: 247px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    background-image: url('/images/bgdesk.png');
    padding-top: 242px;
    padding-bottom: 264px;
  }
`;

const moveBallon = keyframes`
  /* 0% { transform: translateX(0px) translateY(0px); }
  50% { transform: translateX(20px) translateY(-20px); }
  100% { transform: translateX(0px) translateY(0px); } */
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.8;
  }
`;

export const BackgroundLeft = styled.div`
  position: absolute;
  z-index: -1;
  top: 44px;
  left: -102px;
  width: 254px;
  height: 254px;
  background-image: url('/images/ballons1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  animation: ${moveBallon} 3s ease infinite;
  @media (min-width: ${p => p.theme.media.m}) {
    top: 97px;
    left: -148px;
    width: 420px;
    height: 420px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    top: 65px;
    left: 35px;
    width: 570px;
    height: 570px;
    overflow: visible;
    transform: rotate(-30.8deg);
  }
`;

export const BackgroundRight = styled.div`
  position: absolute;
  z-index: -1;
  top: 270px;
  /* border: 1px solid red; */
  right: -65px;
  width: 239px;
  height: 239px;
  background-image: url('/images/balloons2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  animation: ${moveBallon} 3s ease infinite;

  @media (min-width: ${p => p.theme.media.m}) {
    top: 339px;
    right: -82px;
    width: 405px;
    height: 405px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    top: 240px;
    right: -60px;

    width: 570px;
    height: 570px;
    overflow: visible;
    overflow: hidden;
    transform: rotate(-9deg);
  }
`;

export const HeaderText = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: 'Anzeigen';
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.4px;
  line-height: 80%;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 64px;
    letter-spacing: -0.64px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    font-size: 88px;
    letter-spacing: -0.88px;
    line-height: 90%;
  }
`;

export const HeaderTextSecondary = styled.span`
  color: ${p => p.theme.colors.main};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 319px;

  @media (min-width: ${p => p.theme.media.m}) {
    width: 484px;
  }

  @media (min-width: ${p => p.theme.media.l}) {
    width: 771px;
  }
`;
