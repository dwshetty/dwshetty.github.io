import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks} role="group">
      <li role="menuitem">
        <NavLink to="/about" activeClassName={styles.selected}>
          About
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink to="/work" activeClassName={styles.selected}>
          Work
        </NavLink>
      </li>
      <li role="menuitem">
        <NavLink to="/contact" activeClassName={styles.selected}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
