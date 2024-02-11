import styled from 'styled-components';

export const ContactsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsText = styled.p`
  width: 320px;
  padding: 0 30px;
  color: ${p => p.theme.colors.main};
  font-family: 'Anzeigen';
  text-align: center;
  font-size: 28px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media (min-width: ${p => p.theme.media.m}) {
    width: 380px;
    padding: 0 60px;
  }
`;
export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ContactsLink = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${p => p.theme.colors.main};
  text-align: center;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  letter-spacing: -0.2px;
  svg {
    stroke: currentColor;
    fill: none;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }
`;

export const BackgroundLeft = styled.div`
  position: absolute;
  z-index: -1;
  width: 254px;
  height: 254px;
  background-image: url('/images/ballons1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: none;

  @media (min-width: ${p => p.theme.media.m}) {
    display: block;
    top: 300px;
    left: -84px;
    width: 540px;
    height: 540px;
    transform: rotate(-38.8deg);
  }
  @media (min-width: ${p => p.theme.media.l}) {
    /* top: 65px;
    left: 35px;
    width: 570px;
    height: 570px;
    overflow: visible; */
  }
`;

export const BackgroundRight = styled.div`
  position: absolute;
  z-index: -1;
  background-image: url('/images/balloons2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: none;

  @media (min-width: ${p => p.theme.media.m}) {
    display: block;
    top: 582px;
    right: -67px;
    width: 420px;
    height: 420px;
    transform: rotate(-9deg);
  }
  @media (min-width: ${p => p.theme.media.l}) {
    top: 240px;
    right: -60px;

    width: 570px;
    height: 570px;
    overflow: visible;
    overflow: hidden;
  }
`;
