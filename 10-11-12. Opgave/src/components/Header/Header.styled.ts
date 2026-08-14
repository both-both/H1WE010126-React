import styled from "styled-components";

// de dynamiske properties
type HeaderStyledProps = {};

export const HeaderStyled = styled.header<HeaderStyledProps>`
  margin: 2% 10%;
  display: flex;
  justify-content: space-between;

  img {
    width: 20%;
  }
`;
