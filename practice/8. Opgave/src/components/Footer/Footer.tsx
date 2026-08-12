import type { FooterProps } from "../../types/types";
import footerBg from "../../assets/images/Footer Background.png";

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover" }}
    >
      {children}
    </footer>
  );
};
