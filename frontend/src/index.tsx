import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store";
import { render } from "react-dom";
import App from "./App";
import "./styles/global.scss";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
