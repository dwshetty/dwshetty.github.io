import { CSSProperties } from "react";

export interface IRevealingCard {
  name: string;
  href: string;
  disabled?: boolean;
  style: CSSProperties;
  secondaryIconClassName: string;
  iconClassName: string;
  iconType?: string;
}
