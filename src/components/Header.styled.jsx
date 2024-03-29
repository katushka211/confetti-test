import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 5;
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 0;

  @media (min-width: ${p => p.theme.media.m}) {
    width: 708px;
    padding-top: 31px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    width: 1170px;
    padding: 37px 112px 0;
  }
`;

export const MenuText = styled.span`
  color: ${p => p.theme.colors.main};

  text-align: center;
  font-family: 'Anzeigen', sans-serif;
  font-size: 24px;
  font-style: normal;
  line-height: 0.9;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  justify-content: center;
  visibility: ${p => (p.scrolled === 'true' ? 'hidden' : 'visible')};
`;

export const Logo = styled.a`
  visibility: ${p => (p.scrolled === 'true' ? 'hidden' : 'visible')};
`;

export const ButtonMenu = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.accent};
    span {
      color: ${p => p.theme.colors.accent};
    }
  }
`;
