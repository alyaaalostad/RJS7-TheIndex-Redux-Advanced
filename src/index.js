import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowseRouter>
      <App />
    </BrowseRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
