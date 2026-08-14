import type { ContainerProps } from "../../types/types";

export const Container = ({
  color,
  width,
  padding,
  margin,
  children,
}: ContainerProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
};
