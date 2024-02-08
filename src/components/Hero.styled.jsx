import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  padding-top: 212px;
  padding-bottom: 154px;
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: inherit;
  background-repeat: no-repeat;
  text-align: center;
  @media (min-width: ${p => p.theme.media.m}) {
    background-image: url('/images/bgtablet.png');
    padding-top: 247px;
    padding-bottom: 187px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    background-image: url('/images/bgdesc.png');
    padding-top: 242px;
    padding-bottom: 264px;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 254px;
  height: 254px;
  border: 1px solid red;
  top: 44px;
  left: -102px;
  background-image: url('/images/ballons1.png');
  background-size: cover;
  background-position: inherit;
  background-repeat: no-repeat;
  text-align: center;

  @media (min-width: ${p => p.theme.media.m}) {
    width: 420px;
    height: 420px;
    top: 97px;
    left: -148px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 37px 112px 0;
    top: 0;
    left: 0;
    overflow: visible;
  }
`;
// export const BalloonImage = styled.img`
//   position: absolute;
//   width: 100%;
//   height: auto;
// `;

export const HeaderText = styled.h1`
  height: auto;
  font-family: 'Anzeigen';
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.4px;
  line-height: 80%;
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};
  @media (min-width: ${p => p.theme.media.m}) {
    /* width: 484px; */
    font-size: 64px;
    letter-spacing: -0.64px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    /* width: 771px; */
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

  /* @media (min-width: ${p => p.theme.media.s}) {
    width: 319px;
  } */

  @media (min-width: ${p => p.theme.media.m}) {
    width: 484px;
  }

  @media (min-width: ${p => p.theme.media.l}) {
    width: 771px;
  }
`;
