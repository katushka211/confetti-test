import { useEffect, useState } from 'react';
import sprite from '../images/svg/symbol-defs.svg';

import {
  ButtonMenu,
  Container,
  HeaderWrap,
  Logo,
  MenuText,
} from './Header.styled';
import { BurgerMenu } from './BurgerMenu';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   if (isOpened) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'visible';
  //   }
  // }, [isOpened]);

  const openBurgerMenu = () => {
    setIsOpened(true);
    document.body.style.overflow = 'hidden';
  };
  const closeBurgerMenu = () => {
    setIsOpened(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <HeaderWrap scrolled={isScrolled.toString()}>
      {isOpened && (
        <BurgerMenu
          setIsOpened={setIsOpened}
          closeBurgerMenu={closeBurgerMenu}
        />
      )}
      <Container>
        <Logo href="/" scrolled={isScrolled.toString()}>
          <svg width={104} height={28}>
            <use href={sprite + `#logo`} />
          </svg>
        </Logo>
        <ButtonMenu
          type="button"
          aria-label="Toggle Menu"
          onClick={openBurgerMenu}
        >
          <MenuText scrolled={isScrolled.toString()}>Menu</MenuText>
          <svg width={24} height={24}>
            <use href={sprite + `#menu`} />
          </svg>
        </ButtonMenu>
      </Container>
    </HeaderWrap>
  );
};
