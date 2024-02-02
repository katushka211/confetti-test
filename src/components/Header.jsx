import sprite from "../images/svg/symbol-defs.svg";
export const Header = () => {
  return (
    <header>
      <span>
        <svg
          width={104}
          height={28}
        >
          <use href={sprite + `#logo`} />
        </svg>
      </span>
      <button type="button">
        Menu
        <svg
          width={28}
          height={28}
        >
          <use href={sprite + `#menu`} />
        </svg>
      </button>
    </header>
  );
};
