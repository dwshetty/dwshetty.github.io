import "./styles.scss";

function Footer(): JSX.Element {
  return (
    <footer>
      <span>Made in India</span>&nbsp;
      <i className="fas fa-heart" />
      &nbsp;
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
