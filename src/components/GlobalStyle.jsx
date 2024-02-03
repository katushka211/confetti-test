import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family:
    'Inter',
    'Anzeigen',
    sans-serif;
  font-weight: 500;
  line-height: normal;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul{
  margin-left: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
