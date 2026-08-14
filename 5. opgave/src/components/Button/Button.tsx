import type { ButtonProps } from "../../types/types";

export const Button = (props: ButtonProps) => {
  return <button>{props.textValue}</button>;
};
