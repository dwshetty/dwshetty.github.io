import RevealingCards from "components/RevealingCards";
import { IRevealingCard } from "components/RevealingCard/types";
import { useRef } from "react";

function GetInTouchCards(): JSX.Element {
  const getInTouchRef = useRef<IRevealingCard[]>([
    {
      style: {
        color: "#DD4B3E"
      },
      href: "https://www.google.co.in/maps/place/Goa/@15.3478379,73.4517934,9z/data=!3m1!4b1!4m5!3m4!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996?hl=en&authuser=0",
      iconClassName: "map-marker-alt",
      name: "Location",
      secondaryIconClassName: "map-marker-alt"
    },
    {
      style: {
        color: "#495057"
      },
      href: "mailto:dwitesh21_syningo@yahoo.co.in?subject=Get%20in%20touch",
      iconClassName: "envelope",
      name: "Email",
      secondaryIconClassName: "envelope"
    }
  ]);

  return <RevealingCards data={getInTouchRef.current} />;
}

export default GetInTouchCards;
