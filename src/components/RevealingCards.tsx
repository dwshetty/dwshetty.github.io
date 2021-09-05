import RevealingCard from "./RevealingCard";
import { IRevealingCard } from "./RevealingCard/types";

interface IRevealingCards {
  data: Array<IRevealingCard>;
}

function RevealingCards({ data }: IRevealingCards): JSX.Element {
  return (
    <>
      {data.map(
        ({
          style,
          disabled,
          href,
          iconClassName,
          name,
          secondaryIconClassName,
          iconType
        }) => (
          <RevealingCard
            key={name}
            name={name}
            href={href}
            disabled={disabled}
            style={style}
            secondaryIconClassName={secondaryIconClassName}
            iconClassName={iconClassName}
            iconType={iconType}
          />
        )
      )}
    </>
  );
}

export default RevealingCards;
