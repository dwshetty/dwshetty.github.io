import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/about" exact activeClassName={styles.selected}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact activeClassName={styles.selected}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" exact activeClassName={styles.selected}>
          Work
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
