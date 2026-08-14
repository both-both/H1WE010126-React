import type { ContainerProps } from "../../types/types";
import { ContainerStyled } from "./Container.styled";

export const Container = ({
  children,
  color,
  width,
  padding,
}: ContainerProps) => {
  return (
    <ContainerStyled
      style={{ backgroundColor: color, width: width, padding: padding }}
    >
      {children}
    </ContainerStyled>
  );
};
