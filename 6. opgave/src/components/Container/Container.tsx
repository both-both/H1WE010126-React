import type { ContainerProps } from "../../types/types";

export const Container = ({ color, width, padding }: ContainerProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        padding: padding,
      }}
    >
      container
    </div>
  );
};
