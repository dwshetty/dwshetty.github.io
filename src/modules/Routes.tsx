import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "components/Loading";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "routes/Home"));
const About = lazy(
  () => import(/* webpackChunkName: "About" */ "routes/About")
);
const Work = lazy(() => import(/* webpackChunkName: "Work" */ "routes/Work"));
const Contact = lazy(
  () => import(/* webpackChunkName: "Contact" */ "routes/Contact")
);
const NoMatch = lazy(
  () => import(/* webpackChunkName: "NoMatch" */ "routes/NoMatch")
);

function Routes(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
