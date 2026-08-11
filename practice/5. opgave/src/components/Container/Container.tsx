import type { containerProps } from "../../types/types";

export const Container = ({ color, width, padding }: containerProps) => {
  return (
    <div style={{ backgroundColor: color, width: width, padding: padding }}>
      container
    </div>
  );
};
