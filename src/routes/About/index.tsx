import Meta from "components/Meta";
import styles from "./styles.module.scss";

function About(): JSX.Element {
  return (
    <>
      <Meta
        suffixTitle="About"
        pageDescription="This page furnishes details about Dwitesh Shetty"
      />
      <section className={styles.wrapper}>
        <h1>TLDR;</h1>
        <blockquote cite="https://www.linkedin.com/in/dwitesh-shetty-66810b156/">
          <em>
            Dwitesh Shetty presently possesses 4+ years of experience in
            debugging, developing and maintaining modern web applications that
            are responsive, cross-browser compatible and platform independent.
            He is obsessed with implementing best practices pertaining to code
            quality. His professional expertise lies in Web Development using
            technologies including but not limited to HTML5, CSS3, JavaScript,
            Typescript, ReactJS, NextJS at par with latest standards.
          </em>
        </blockquote>
        <br />
        <hr />
        <br />
        <h2>
          <u>Career Statement</u>
        </h2>
        <p>
          He aspires to become an invaluable member of an organisation in the
          form of a highly proficient full stack web developer empowered with
          managerial capabilities.
          <br />
          He is passionate about web technologies (MERN stack), problem solving,
          networking and travelling.
          <br />
          He is skilled in basic fire safety, communication, collaboration,
          multitasking, performance motivation, strategic thinking, systematic
          approach and time management.
        </p>
        <br />
        <hr />
        <br />
        <h2>
          <u>Professional skills</u>
        </h2>
        <article className={styles.professionalSkills}>
          <ul>
            <li>
              <strong>Web Development:</strong> CSS, ESLint, ExpressJS, Enzyme,
              Firebase, HTML, Java, Javascript, Jest, jQuery, JSP, MongoDB,
              NextJS, NodeJS, Prettier, ReactJS, Redux, Servlet, SonarLint, SQL,
              Typescript, Webpack
            </li>
            <li>
              <strong>Others:</strong> Adobe Experience Manager, Azure DevOps,
              C, Confluence, Eclipse, Git, Github, Gitlab, JIRA, LaTeX, Libre,
              Matlab, MS Office, Netbeans, NVDA, Postman, Slack, VS Code,
              Windows, Wordpress
            </li>
          </ul>
        </article>
        <br />
        <hr />
        <br />
        <h2>
          <u>Personal skills</u>
        </h2>
        <article className={styles.personalSkills}>
          <ul>
            <li>
              Proficient in formal communication with clients, colleagues and
              senior management when gathering requirements, scrutinizing
              product features and listing out possible strategies and
              solutions.
            </li>
            <li>
              Adaptable, discreet, helpful, loyal, optimistic, quick learner and
              sincere.
            </li>
            <li>Attentive to detail, critical thinker and problem solver</li>
            <li>
              Able to build relations seamlessly with colleagues in order to gel
              well and promote a collaborative work environment.
            </li>
            <li>
              Can work independently with minimal supervision and embraces
              collaboration with cross-functional teams.
            </li>
            <li>
              Capable of handling high pressure situations and can operate with
              composure.
            </li>
            <li>
              Can stretch work hours when necessary, but prefers to work
              smartly, with no compromise on final product quality.
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default About;
