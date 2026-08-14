import type React from "react";

export type HeaderProps = {
  children: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};
export type FooterProps = {
  children: React.ReactNode;
};

export type ContainerProps = {
  color?: string;
  width?: string;
  padding?: number;
  margin?: string;
  children: React.ReactNode;
};

export type ContentWrapperProps = {
  title: string;
  description: string;
  showTitle: boolean;
  children?: React.ReactNode;
};
