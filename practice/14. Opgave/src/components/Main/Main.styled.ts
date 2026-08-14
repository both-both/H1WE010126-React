import styled from "styled-components";

// de dynamiske properties
type MainStyledProps = {};

export const MainStyled = styled.main<MainStyledProps>`
  background-color: #ededed;

  .Container {
    margin: 10%;
  }

  h1,
  h2,
  h3,
  p {
    padding-top: 2%;
  }
`;
