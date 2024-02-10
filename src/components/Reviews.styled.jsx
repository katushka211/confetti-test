import styled from 'styled-components';

// export const Сontainer = styled.div`
//   margin: 0 auto;
//   padding: 0 20px;
// `;

export const ReviewTitle = styled.h2`
  margin-top: 80px;
  margin-bottom: 36px;
  color: ${p => p.theme.colors.accent};

  text-align: center;
  font-family: 'Anzeigen';
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
