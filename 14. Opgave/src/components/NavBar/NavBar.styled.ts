import styled from "styled-components";

type NavBarStyledProps = {
  color?: string;
};

export const NavBarStyled = styled.nav<NavBarStyledProps>`
  display: flex;
  color: ${({ color }) => color || "black"};

  ul {
    font-family: Oswald;
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
