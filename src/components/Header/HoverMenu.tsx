import { NavLink } from "react-router-dom";

import styles from "./HoverMenu.module.scss";
import { links } from "./constants";

function Menu(): JSX.Element {
  return (
    <ul className={styles.navLinks} role="group">
      {links.map(({ label, to }) => (
        <li role="menuitem" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? styles.selected : "")}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
