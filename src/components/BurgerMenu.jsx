import sprite from '../images/svg/symbol-defs.svg';
import {
  BurgerContainer,
  BurgerWrap,
  ButtonClose,
  LinkList,
  LogoWrap,
} from './BurgerMenu.styled';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';
export const BurgerMenu = () => {
  return (
    <BurgerWrap>
      <BurgerContainer>
        <LogoWrap>
          <a href="/">
            <svg width={104} height={28}>
              <use href={sprite + `#logo2`} />
            </svg>
          </a>
          <ButtonClose type="button">
            <svg width={24} height={24}>
              <use href={sprite + `#close`} />
            </svg>
          </ButtonClose>
        </LogoWrap>
        <LinkList>
          <li>
            <Link to="main" spy={true} smooth={true} duration={500}>
              Główna
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Recenzje
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Kontakty
            </Link>
          </li>
        </LinkList>
      </BurgerContainer>
    </BurgerWrap>
  );
};
