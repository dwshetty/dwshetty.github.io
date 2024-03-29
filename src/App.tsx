import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "modules/Main";
import Routes from "modules/Routes";

import "./App.css";

const ScrollToTop = lazy(
  () => import(/* webpackChunkName: "ScrollToTop" */ "shared/ScrollToTop")
);

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <ScrollToTop />
      </Suspense>
      <Main>
        <Routes />
      </Main>
    </BrowserRouter>
  );
}

export default App;
