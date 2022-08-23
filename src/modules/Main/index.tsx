import { PropsWithChildren } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import "./styles.scss";

function Main({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
