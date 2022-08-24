import { Link } from "react-router-dom";
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
        <Link to="/">
          <code>dwshetty</code>
        </Link>
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
      <div className="menu" role="menu" tabIndex={0}>
        <div aria-controls="menu" className="wrapper" role="group">
          <span aria-label="Menu" id="menu">
            Menu
          </span>
          <span aria-describedby="menu" />
        </div>
        <Suspense fallback={<></>}>
          <HoverMenu />
        </Suspense>
      </div>
      <div className="sidenav">
        <button aria-label="open sidenav" onClick={toggleSideNav} type="button">
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
