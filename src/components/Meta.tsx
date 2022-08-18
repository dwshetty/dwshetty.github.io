import { Helmet } from "react-helmet";

interface IMeta {
  pageDescription?: string;
  pageTitle?: string;
  suffixDescription?: string;
  suffixTitle?: string;
}
const Meta = ({
  pageTitle,
  pageDescription,
  suffixTitle,
  suffixDescription
}: IMeta): JSX.Element => {
  const title =
    pageTitle ||
    (suffixTitle
      ? `${process.env.REACT_APP_WEBSITE_TITLE} | ${suffixTitle}`
      : "");
  const description =
    pageDescription ||
    (suffixDescription
      ? `${process.env.REACT_APP_WEBSITE_DESCRIPTION} | ${suffixDescription}`
      : "");
  const canonicalUrl = process.env.PUBLIC_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

Meta.defaultProps = {
  pageTitle: "",
  pageDescription: "",
  suffixTitle: "",
  suffixDescription: ""
};

export default Meta;
