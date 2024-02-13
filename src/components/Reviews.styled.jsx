import styled from 'styled-components';

export const ReviewSection = styled.section`
  margin-top: 124px;
  @media (min-width: ${p => p.theme.media.m}) {
    margin-top: 80px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    margin-top: 100px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 36px;
  color: ${p => p.theme.colors.accent};

  text-align: center;
  font-family: 'Anzeigen', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.36px;
  text-transform: uppercase;

  @media (min-width: ${p => p.theme.media.m}) {
    margin-bottom: 48px;
    font-size: 48px;
    letter-spacing: -0.48px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    margin-top: 100px;
    margin-bottom: 64px;
    font-size: 100px;
    letter-spacing: -1px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  @media (min-width: ${p => p.theme.media.s}) {
    width: 480px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    width: 1280px;
  }
`;

export const ReviewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;
