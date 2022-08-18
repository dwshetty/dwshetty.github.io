import Meta from "components/Meta";
import GetInTouchCards from "modules/GetInTouchCards";
import MediumCards from "modules/MediumCards";

import styles from "./styles.module.scss";

function Contact(): JSX.Element {
  return (
    <>
      <Meta
        suffixTitle="Contact"
        pageDescription="Here is where you can find contact details of Dwitesh Shetty"
      />
      <section className={styles.wrapper}>
        <h1>
          <u>Get in touch</u>
        </h1>
        <section>
          <GetInTouchCards />
        </section>
        <br />
        <hr />
        <br />
        <h2>You can also find me on any of the following spaces:</h2>
        <section>
          <MediumCards />
        </section>
      </section>
    </>
  );
}

export default Contact;
