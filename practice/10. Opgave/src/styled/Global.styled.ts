import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Open Sans;
  font-size: 1rem;
}

h1 {
  font-family: 'Oswald';
  font-size: 3rem;
  text-transform: uppercase;
}
h2 {
  font-family: open sans;
  font-weight: 600;
  font-size: 2rem;
}
h3 {
  font-family: open sans;
  font-weight: 500;
  font-size: 1.5rem;
}

`;
