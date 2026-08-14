import styled from "styled-components";

type ContainerStyledProps = {
  color?: string;
  width?: string;
  padding?: number;
  margin?: string;
};

export const ContainerStyled = styled.div<ContainerStyledProps>`
  margin: 10%;
`;
