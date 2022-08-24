import { useRef } from "react";
import RevealingCards from "components/RevealingCards";
import { IRevealingCard } from "components/RevealingCard/types";

function MediumCards(): JSX.Element {
  const mediumsRef = useRef<Array<IRevealingCard>>([
    {
      style: {
        color: "#007bb5"
      },
      href: "https://www.linkedin.com/in/dwitesh-shetty-66810b156/",
      iconClassName: "linkedin-in",
      name: "Linkedin",
      secondaryIconClassName: "linkedin",
      iconType: "fab"
    },
    {
      style: {
        color: "#24292e"
      },
      href: "https://github.com/dwshetty",
      iconClassName: "github",
      name: "GitHub",
      secondaryIconClassName: "github-square",
      iconType: "fab"
    },
    {
      style: {
        color: "#dd4b39"
      },
      disabled: true,
      href: "https://plus.google.com/112301450755289715096",
      iconClassName: "google-plus",
      name: "GooglePlus",
      secondaryIconClassName: "google-plus-square",
      iconType: "fab"
    },
    {
      style: {
        color: "#3B5998"
      },
      href: "https://www.facebook.com/dwitesh.shetty",
      iconClassName: "facebook-f",
      name: "Facebook",
      secondaryIconClassName: "facebook-square",
      iconType: "fab"
    },
    {
      style: {
        backgroundImage:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
      },
      href: "https://www.instagram.com/dwitesh_shetty/",
      iconClassName: "instagram",
      name: "Instagram",
      secondaryIconClassName: "instagram-square",
      iconType: "fab"
    },
    {
      style: {
        color: "#55ACEE"
      },
      href: "https://twitter.com/DwiteshS",
      iconClassName: "twitter",
      name: "Twitter",
      secondaryIconClassName: "twitter-square",
      iconType: "fab"
    },
    {
      style: {
        color: "#bb0000"
      },
      href: "https://www.youtube.com/channel/UCkuLQXIAY3X3H_i-U8_MVEA",
      iconClassName: "youtube",
      name: "Youtube",
      secondaryIconClassName: "youtube-square",
      iconType: "fab"
    }
  ]);

  return <RevealingCards data={mediumsRef.current} />;
}

export default MediumCards;
