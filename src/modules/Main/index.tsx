import { PropsWithChildren, ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import "./styles.scss";

function Main({ children }: PropsWithChildren<ReactNode>): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Main;
