import styled from 'styled-components';

export const FooterSection = styled.footer`
  margin-top: 80px;
  padding: 0 20px;
  @media (min-width: ${p => p.theme.media.m}) {
    padding: 0 30px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    margin-top: 100px;
    padding: 0 112px;
  }
`;

export const FooterWrap = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${p => p.theme.colors.accent};
`;
