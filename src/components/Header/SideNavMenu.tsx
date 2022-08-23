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
      <ul className="navlinks">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <button type="button" onClick={toggleSideNav}>
              Home
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <button type="button" onClick={toggleSideNav}>
              About
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <button type="button" onClick={toggleSideNav}>
              Work
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <button type="button" onClick={toggleSideNav}>
              Contact
            </button>
          </NavLink>
        </li>
      </ul>
      <i
        className="overlay"
        aria-label="close sidenav"
        onClick={toggleSideNav}
        onKeyPress={toggleSideNav}
        role="button"
        tabIndex={-1}
      />
    </div>
  );
}

export default SideNavMenu;
