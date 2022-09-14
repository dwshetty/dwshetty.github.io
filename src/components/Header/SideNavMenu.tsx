import { NavLink } from "react-router-dom";
import { sideNavMenuLinks } from "./constants";

interface ISideNavMenu {
  showSidenav: boolean;
  toggleSideNav: () => void;
}

function SideNavMenu({
  showSidenav,
  toggleSideNav
}: ISideNavMenu): JSX.Element {
  return (
    <div className={`sidenav__menu ${showSidenav ? "show" : ""}`}>
      <ul className="navlinks" role="menu">
        {sideNavMenuLinks.map(({ label, to }) => (
          <li role="menuitem" key={label}>
            <NavLink
              className={({ isActive }) => (isActive ? "selected" : "")}
              onClick={toggleSideNav}
              to={to}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <i
        aria-label="close sidenav"
        className="overlay"
        onClick={toggleSideNav}
        onKeyPress={toggleSideNav}
        role="button"
        tabIndex={-1}
      />
    </div>
  );
}

export default SideNavMenu;
