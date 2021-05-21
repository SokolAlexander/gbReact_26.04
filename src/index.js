import "regenerator-runtime/runtime";
// to enable async await

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


import { Routes } from "./Routes";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
