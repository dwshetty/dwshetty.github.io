import Meta from "components/Meta";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

function NoMatch(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <Meta
        prefixTitle="404 - Page Not Found"
        pageDescription="Page not found. You seem to have hit a dead end while browsing for Dwitesh Shetty"
      />
      <div className={styles.noMatch}>
        <h2 className={styles.h2}>Page not found</h2>
        <br />
        <h4 className={styles.h4}>
          Unfortunately, there is no match for <code>{location.pathname}</code>{" "}
          atm.
        </h4>
        <span>Please try another url</span>
      </div>
    </>
  );
}

export default NoMatch;
