import { StrictMode } from "react";
import { hydrate, render } from "react-dom";
// import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from './reportWebVitals';

const AppRoot = () => (
  <StrictMode>
    <App />
  </StrictMode>
);
const rootElement = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
if (rootElement!.hasChildNodes()) {
  hydrate(<AppRoot />, rootElement);
} else {
  render(<AppRoot />, rootElement);
}
// if (rootElement!.hasChildNodes()) {
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   hydrateRoot(rootElement!, <AppRoot />);
// } else {
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   const root = createRoot(rootElement!);
//   root.render(<AppRoot />);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
