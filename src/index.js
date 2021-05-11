import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Routes } from './Routes';
import { Parent } from "./components/Parent";

console.warn('working with router');

ReactDOM.render(<Routes />, document.getElementById("root"));
