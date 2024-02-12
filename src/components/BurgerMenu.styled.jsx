import styled from 'styled-components';

export const BurgerWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 75;
  /* background-color: #fff; */
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
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ButtonClose = styled.button`
  svg {
    stroke: #222222;
    fill: none;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
