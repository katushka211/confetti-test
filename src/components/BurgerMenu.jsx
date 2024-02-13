import sprite from '../images/svg/symbol-defs.svg';
import {
  BurgerContainer,
  BurgerWrap,
  ButtonClose,
  LinkItem,
  LinkList,
  LogoWrap,
} from './BurgerMenu.styled';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';
export const BurgerMenu = ({ closeBurgerMenu }) => {
  return (
    <BurgerWrap>
      <BurgerContainer>
        <LogoWrap>
          <a href="/">
            <svg width={104} height={28}>
              <use href={sprite + `#logo2`} />
            </svg>
          </a>
          <ButtonClose type="button" onClick={closeBurgerMenu}>
            <svg width={24} height={24}>
              <use href={sprite + `#close`} />
            </svg>
          </ButtonClose>
        </LogoWrap>
        <LinkList>
          <LinkItem>
            <Link
              to="main"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeBurgerMenu}
            >
              Główna
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeBurgerMenu}
            >
              O nas
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeBurgerMenu}
            >
              Recenzje
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeBurgerMenu}
            >
              Kontakty
            </Link>
          </LinkItem>
        </LinkList>
      </BurgerContainer>
    </BurgerWrap>
  );
};

BurgerMenu.propTypes = {
  closeBurgerMenu: PropTypes.func,
};
