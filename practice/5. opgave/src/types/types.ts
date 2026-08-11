import type React from "react";

export type ButtonProps = {
  textValue: string;
};

export type ContainerProps = {
  color: string;
  width: string;
  padding: number;
  margin: string;
  children?: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};
