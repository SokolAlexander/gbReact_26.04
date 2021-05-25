import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import { Routes } from "./Routes";

export const App = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={openModal}>OPEN</button>
      <Dialog open={visible}>
        <Routes />
        <button onClick={closeModal}>CLOSE</button>
      </Dialog>
    </div>
  );
};
