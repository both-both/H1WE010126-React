import type { NavBarProps } from "../../types/types";
import { Link } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";

export const NavBar = ({ children }: NavBarProps) => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <Link to="/">Verdensmålene</Link>
        </li>
        <li>
          <Link to="/education-page">Undervisning</Link>
        </li>
        <li>
          <Link to="/custom-goal"> Byg dit eget mål</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt os</Link>
        </li>
      </ul>
      {children}
    </NavBarStyled>
  );
};
