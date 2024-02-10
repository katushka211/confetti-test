import styled from 'styled-components';

export const ContactsSection = styled.section`
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
