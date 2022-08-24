import { NavLink } from "react-router-dom";

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
        <li role="menuitem">
          <NavLink activeClassName="selected" onClick={toggleSideNav} to="/">
            Home
          </NavLink>
        </li>
        <li role="menuitem">
          <NavLink
            activeClassName="selected"
            onClick={toggleSideNav}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li role="menuitem">
          <NavLink
            activeClassName="selected"
            onClick={toggleSideNav}
            to="/work"
          >
            Work
          </NavLink>
        </li>
        <li role="menuitem">
          <NavLink
            activeClassName="selected"
            onClick={toggleSideNav}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
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
