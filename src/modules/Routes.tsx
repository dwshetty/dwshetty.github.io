import { lazy, ReactElement, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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

function AppRoutes(): ReactElement {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
