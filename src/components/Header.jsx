import sprite from '../images/svg/symbol-defs.svg';
import { HeaderWrap } from './Header.styled';
export const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <svg width={104} height={28}>
          <use href={sprite + `#logo`} />
        </svg>
      </div>

      <div>
        <span>Menu</span>
        <svg width={28} height={28}>
          <use href={sprite + `#menu`} />
        </svg>
      </div>
    </HeaderWrap>
  );
};
