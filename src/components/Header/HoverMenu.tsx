import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks} role="menubar" aria-orientation="vertical">
      <li role="menuitem">
        <NavLink to="/about" exact activeClassName={styles.selected}>
          About
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink to="/work" exact activeClassName={styles.selected}>
          Work
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink to="/contact" exact activeClassName={styles.selected}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
