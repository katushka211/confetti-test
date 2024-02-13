import styled from 'styled-components';

export const BurgerWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 75;
  background-color: #fff;
`;

export const BurgerContainer = styled.div`
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
    padding: 0 112px;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  margin-bottom: 62px;
  @media (min-width: ${p => p.theme.media.m}) {
    margin-bottom: 78px;
    padding-top: 32px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    margin-bottom: 100px;
    padding-top: 37px;
  }
`;

export const ButtonClose = styled.button`
  svg {
    stroke: #222222;
    fill: none;
    &:hover,
    &:focus {
      stroke: ${p => p.theme.colors.accent};
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: ${p => p.theme.media.m}) {
    gap: 36px;
  }
  @media (min-width: ${p => p.theme.media.m}) {
    gap: 48px;
  }
`;

export const LinkItem = styled.li`
  color: ${p => p.theme.colors.main};
  text-align: center;
  font-family: 'Anzeigen';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
  @media (min-width: ${p => p.theme.media.m}) {
    font-size: 40px;
    letter-spacing: -0.4px;
  }
  @media (min-width: ${p => p.theme.media.l}) {
    font-size: 64px;
    letter-spacing: -0.64px;
  }
`;
