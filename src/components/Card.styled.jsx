import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  align-content: space-between;
  background-color: ${props => props.color};
  width: 100%;
  height: 253px;
  padding: 24px;
  border-radius: 24px;
  @media (min-width: ${p => p.theme.media.s}) {
    width: 100%;
    max-width: 400px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    width: 596px;
    height: auto;
    gap: 40px;
    padding: 48px;
  }
`;

export const CardTitle = styled.h3`
  color: ${p => p.theme.colors.white};
  font-family: 'Anzeigen';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  @media (min-width: ${p => p.theme.media.m}) {
    padding-right: 132px;
    font-size: 40px;
    letter-spacing: -0.4px;
    line-height: 0.8;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    line-height: 0.95;
  }
`;

export const CardText = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.16px;
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    line-height: 1.35;
  }
`;
