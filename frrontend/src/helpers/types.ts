import { ReactElement } from "react";

export type CardProps = {
  type: string;
  value: number;
  icon: ReactElement;
  onClick?: () => void;
};

export type ArrowIconsProps = {
  size: string;
};
