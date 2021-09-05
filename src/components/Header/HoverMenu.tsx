import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/about" exact activeClassName="selected">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" exact activeClassName="selected">
          Work
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact activeClassName="selected">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
