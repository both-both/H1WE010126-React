import type { ContainerProps } from "../../types/types";

export const Container = ({
  children,
  color,
  width,
  padding,
}: ContainerProps) => {
  return (
    <div style={{ backgroundColor: color, width: width, padding: padding }}>
      {children}
    </div>
  );
};
