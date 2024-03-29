import styled from 'styled-components';
export const AboutUsSection = styled.section`
  margin: 50px 0 0;
  @media (min-width: ${p => p.theme.media.m}) {
    margin: 80px 0 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 390px;
  margin-bottom: 36px;

  @media (min-width: ${p => p.theme.media.m}) {
    max-width: 584px;
    margin-bottom: 0;
  }

  @media (min-width: ${p => p.theme.media.l}) {
    gap: 24px;
    max-width: 700px;
  }
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-family: 'Anzeigen', sans-serif;
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.36px;
  line-height: 0.8;
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
    padding: 0 50px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    font-size: 56px;
    letter-spacing: -0.56px;
  }
`;

export const AboutText = styled.p`
  color: ${p => p.theme.colors.extraText};
  text-align: center;
  font-family: Inter, sans-serif;
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

export const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin: 36px 0 0;
  @media (min-width: ${p => p.theme.media.m}) {
    margin: 48px 0 0;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    grid-template-columns: repeat(2, 1fr);
    margin: 64px 0 0;
  }
`;
