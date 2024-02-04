import sprite from '../images/svg/symbol-defs.svg';
import { Container, HeaderWrap, MenuText, MenuWrap } from './Header.styled';
export const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <svg width={104} height={28}>
          <use href={sprite + `#logo`} />
        </svg>

        <MenuWrap>
          <MenuText>Menu</MenuText>
          <svg width={24} height={24}>
            <use href={sprite + `#menu`} />
          </svg>
        </MenuWrap>
      </Container>
    </HeaderWrap>
  );
};
