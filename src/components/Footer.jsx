import sprite from '../images/svg/symbol-defs.svg';
import { FooterSection, FooterWrap } from './Footer.styled';
export const Footer = () => {
  return (
    <FooterSection>
      <FooterWrap>
        <a href="/">
          <svg width={104} height={28}>
            <use href={sprite + `#logo`} />
          </svg>
        </a>
        <p>confetti © 2023</p>
      </FooterWrap>
    </FooterSection>
  );
};
