import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.dark};
};

h1 {
  font-family: 'Oswald';
  font-size: 1.8rem;
  text-transform: uppercase;
}
h2 { 
  font-family: open sans;
  font-weight: 600;
  font-size: 1.5rem;
}
h3 {
  font-family: open sans;
  font-weight: 500;
  font-size: 1.25rem;
}

`;
