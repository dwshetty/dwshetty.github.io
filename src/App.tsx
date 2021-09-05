import { lazy, Suspense } from "react";
import { HashRouter } from "react-router-dom";

import Main from "modules/Main";
import Routes from "modules/Routes";

import "./App.css";

const ScrollToTop = lazy(
  () => import(/* webpackChunkName: "ScrollToTop" */ "shared/ScrollToTop")
);

function App(): JSX.Element {
  return (
    <HashRouter>
      <Suspense fallback={<></>}>
        <ScrollToTop />
      </Suspense>
      <Main>
        <Routes />
      </Main>
    </HashRouter>
  );
}

export default App;
