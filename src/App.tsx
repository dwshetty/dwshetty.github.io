import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "modules/Main";
import Routes from "modules/Routes";

import "./App.css";

const ScrollToTop = lazy(
  () => import(/* webpackChunkName: "ScrollToTop" */ "shared/ScrollToTop")
);

function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <ScrollToTop />
      </Suspense>
      <Main>
        <Routes />
      </Main>
    </Router>
  );
}

export default App;
