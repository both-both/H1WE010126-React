import { NavBar } from "../NavBar/NavBar";
import { HeaderStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      {" "}
      <img src="src/assets/images/Logo.png" alt="FN Verdensmål logo" />
      <NavBar />
    </HeaderStyled>
  );
};
