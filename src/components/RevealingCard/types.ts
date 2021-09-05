type Css = {
  color: string;
  background?: string;
  WebkitBackgroundClip?: string;
  WebkitTextFillColor?: string;
};

export interface IRevealingCard {
  name: string;
  href: string;
  disabled?: boolean;
  style: Css;
  secondaryIconClassName: string;
  iconClassName: string;
  iconType?: string;
}
