import { IRevealingCard } from "./types";
import styles from "./styles.module.scss";

function RevealingCard({
  name,
  href,
  disabled,
  style,
  secondaryIconClassName,
  iconClassName,
  iconType = "fa"
}: IRevealingCard): JSX.Element {
  return (
    <a
      href={href}
      className={styles.medium}
      rel="noopener noreferrer nofollow"
      target="_blank"
      title={disabled ? "This service is no longer functional" : undefined}
    >
      <span
        style={{
          background: style.background || style.color,
          color: "#fff"
        }}
      >
        <i className={`${iconType} fa-2x fa-${secondaryIconClassName}`} />
      </span>
      <div>
        <i className={`${iconType} fa-2x fa-${iconClassName}`} style={style} />
        <div style={style}>{name}</div>
      </div>
    </a>
  );
}

RevealingCard.defaultProps = {
  disabled: false
};

export default RevealingCard;
