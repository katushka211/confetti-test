import styled from 'styled-components';
export const AboutUsSection = styled.section`
  padding: 0 20px;
  text-align: center;

  @media (min-width: ${p => p.theme.media.m}) {
    padding: 0 30px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    padding: 0 112px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 320px;
  height: auto;
  @media (min-width: ${p => p.theme.media.m}) {
    width: 584px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    width: 700px;
    gap: 24px;
  }
`;

export const AboutTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: 'Anzeigen';
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
  word-wrap: break-word;
  color: ${p => p.theme.colors.main};
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 64px;
    letter-spacing: -0.64px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 48px;
    letter-spacing: -0.48px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    font-size: 56px;
    letter-spacing: -0.56px;
  }
`;

export const AboutText = styled.p`
  color: ${p => p.theme.colors.extraText};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.2px;
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 24px;
    letter-spacing: -0.24px;
  }
`;
