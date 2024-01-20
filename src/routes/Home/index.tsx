import Meta from "components/Meta";
import styles from "./styles.module.scss";

function Home(): JSX.Element {
  const getGreeting = () => {
    const hours = new Date().getHours();
    switch (true) {
      case hours >= 5 && hours < 12:
        return "Morning";
      case hours >= 12 && hours < 17:
        return "Afternoon";
      default:
        return "Evening";
    }
  };
  const greeting = getGreeting();

  return (
    <>
      <Meta />
      <section className={styles.wrapper}>
        <h1>
          <span>Good {greeting}! </span>
          <br />
          <span>
            Dwitesh Shetty is glad to see you on his portfolio website
          </span>
          &nbsp;
          <i className="fas fa-smile-beam fa-lg" />
        </h1>
        <br />
        <h2>
          <span>By profession, he is a&nbsp;</span>
          <span className={styles.webDeveloperWrapper}>
            <span className={styles.webDeveloper}>
              Web Developer&nbsp;
              <i className="fas fa-laptop-code" />
            </span>
            <span className={styles.webDeveloperOverlay} data-nosnippet>
              <span className={styles.cursor}>|</span>
              <span className={styles.overlay}>
                <span>Web Developer&nbsp;</span>
                <i className="fas fa-laptop-code" />
              </span>
            </span>
          </span>
        </h2>
        <br />
        <p>
          For those of you unfamiliar with the above term, the following is what
          it means:
        </p>
        <br />
        <div className={styles.pointsWrapper}>
          <ul>
            <li>
              Arachnids such as &nbsp;
              <i className="fas fa-spider" />
              &nbsp; constitute his main students.
            </li>
            <li>
              His primary skill is teaching each student the art of developing
              its own web so that it may build itself a home.
            </li>
            <li>
              He also provides them advice on how to navigate life through the
              big bad world out there.
            </li>
          </ul>
          <br />
          <blockquote cite="https://www.linkedin.com/in/dwitesh-shetty-66810b156/">
            <em>
              Legend says that no student has ever left his abode empty-handed,
              just like you who has been handed absolute nonsense with the above
              points! &nbsp;
              <i className="fas fa-grin-tongue-wink fa-lg" />
            </em>
          </blockquote>
        </div>
        <br />
        <hr />
        <br />
        <div className={styles.meaning}>
          <span>
            On a serious note though - what it actually means is that{" "}
          </span>
          <span className={styles.bold}>
            he assists clients in creating as well as consolidating their online
            presence by means of an interactive website, which will be
            cross-browser compatible, performant, platform-independent and
            responsive.
          </span>
          <div className={styles.responsive}>
            <i className="fas fa-mobile-alt" title="Mobile" />
            <i className="fas fa-tablet-alt" title="Tablet" />
            <i className="fas fa-desktop" title="Desktop" />
            <i className="fas fa-laptop" title="Laptop" />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div>
          Being a tech savvy, he regularly goes on the hunt for technical blogs
          and hopes to contribute towards the same so as to enable fellow
          techies polish their own knowledge of web development.
        </div>
        <br />
        <br />
        <h3 className={styles.leisure}>
          In his leisure time, you will find him either cracking open a cold one
          with the boys or surfing social media for memes
          <br />
          <i className="far fa-grin-stars fa-lg" />
        </h3>
      </section>
    </>
  );
}

export default Home;
