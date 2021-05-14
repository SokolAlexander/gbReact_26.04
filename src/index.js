import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Routes } from "./Routes";
import { Parent } from "./components/Parent";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
