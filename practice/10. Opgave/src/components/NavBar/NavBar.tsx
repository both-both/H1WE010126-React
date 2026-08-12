import { NavBarStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarStyled color="red">
      <ul>
        <li>Verdensmålene</li>
        <li>Undervisning</li>
        <li>Byg dit eget mål</li>
        <li>FAQ</li>
        <li>Kontakt os</li>
        <li>Links</li>
      </ul>
    </NavBarStyled>
  );
};
