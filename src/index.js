import React, { useState } from "react";
import ReactDOM from "react-dom";

import MyApp from './App';
import { Parent } from "./components/Parent";

const exArr = [1, 1, 1, 1, 12, 3, 4, 3, 2, 4, 5, 3, 23, 4, 5, 5];

ReactDOM.render(<MyApp data={exArr} />, document.getElementById("root"));
