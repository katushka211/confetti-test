import { useEffect, useState } from 'react';
import sprite from '../images/svg/symbol-defs.svg';
import {
  Container,
  HeaderWrap,
  Logo,
  MenuText,
  MenuWrap,
} from './Header.styled';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <HeaderWrap scrolled={isScrolled.toString()}>
      <Container>
        <Logo href="/" scrolled={isScrolled.toString()}>
          <svg width={104} height={28}>
            <use href={sprite + `#logo`} />
          </svg>
        </Logo>
        <MenuWrap>
          <MenuText scrolled={isScrolled.toString()}>Menu</MenuText>
          <svg width={24} height={24}>
            <use href={sprite + `#menu`} />
          </svg>
        </MenuWrap>
      </Container>
    </HeaderWrap>
  );
};
