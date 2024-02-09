import styled from 'styled-components';

export const CardWrapper = styled.li`
  background-color: ${props => props.color};
  width: 100%;
  height: 253px;
  padding: 24px;
  border-radius: 24px;
  @media (min-width: ${p => p.theme.media.s}) {
    width: 400px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    width: 596px;
    height: auto;
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
    font-size: 40px;
    letter-spacing: -0.4px;
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
`;
