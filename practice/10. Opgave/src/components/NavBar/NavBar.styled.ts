import styled from "styled-components";

type NavBarStyledProps = {
  color?: string;
};

export const NavBarStyled = styled.nav<NavBarStyledProps>`
border: solid 1px black;
color: $ {({color}) => color || "black"};

ul{
    list-style-type: none
}
    `;
