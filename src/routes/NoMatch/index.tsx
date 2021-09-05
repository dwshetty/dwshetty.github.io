import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

function NoMatch(): JSX.Element {
  const location = useLocation();

  return (
    <>
      <h2 className={styles.h2}>Page not found</h2>
      <h3 className={styles.h3}>
        No match for <code>{location.pathname}</code>
      </h3>
    </>
  );
}

export default NoMatch;
