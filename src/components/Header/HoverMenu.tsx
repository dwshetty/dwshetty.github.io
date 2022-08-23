import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks} role="menubar" aria-orientation="vertical">
      <li role="menuitem">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.selected : "")}
        >
          About
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? styles.selected : "")}
        >
          Work
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.selected : "")}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
