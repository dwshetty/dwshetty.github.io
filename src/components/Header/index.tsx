import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState, useCallback } from "react";

import "./styles.scss";

const HoverMenu = lazy(
  () => import(/* webpackChunkName: "HoverMenu" */ "./HoverMenu")
);
const SideNavMenu = lazy(
  () => import(/* webpackChunkName: "SideNavMenu" */ "./SideNavMenu")
);

function Header(): JSX.Element {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleSideNav = useCallback(() => {
    setShowSidenav((prevShowSidenav) => !prevShowSidenav);
  }, []);

  return (
    <header>
      <nav>
        <NavLink to="/" exact>
          <code>dwshetty</code>
        </NavLink>
      </nav>
      <div className="flag">
        <div className="first" />
        <div className="second">
          <div className="chakra">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="third" />
      </div>
      <div className="menu" role="button" tabIndex={0}>
        <div className="wrapper">
          <span id="menu">Menu</span>
          <span role="button" aria-labelledby="menu" />
        </div>
        <Suspense fallback={<></>}>
          <HoverMenu />
        </Suspense>
      </div>
      <div className="sidenav">
        <button type="button" onClick={toggleSideNav}>
          &#9776;
        </button>
        <Suspense fallback={<></>}>
          <SideNavMenu
            showSidenav={showSidenav}
            toggleSideNav={toggleSideNav}
          />
        </Suspense>
      </div>
    </header>
  );
}

export default Header;
