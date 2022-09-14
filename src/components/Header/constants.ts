import { NavLinkProps } from "react-router-dom";

export interface ILink {
  label: string;
  to: NavLinkProps["to"];
}
export const links: ILink[] = [
  {
    label: "About",
    to: "/about/"
  },
  {
    label: "Work",
    to: "/work/"
  },
  {
    label: "Contact",
    to: "/contact/"
  }
];
export const sideNavMenuLinks = [
  {
    label: "Home",
    to: "/"
  },
  ...links
];
