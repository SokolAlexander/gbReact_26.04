import React, { useState, useRef, useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";

import { AUTHORS } from "../../utils/constants";
import { ThemeContext } from "../../utils/themeContext";

export const Form = ({ onAddMessage }) => {
  const context = useContext(ThemeContext);
  console.log("------", context);
  const [text, setText] = useState("");
  const input = useRef();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddMessage({ author: AUTHORS.HUMAN, text });
    setText("");
  };

  useEffect(() => {
    console.log(input);
    input.current.focus();
  }, []);

  useEffect(() => {
    return () => {
      console.log("unmounting");
    };
  }, []);

  const changeTheme = () => {
    context.setTheme(context.theme === "light" ? "semidark" : "light");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" ref={input} /> */}
      <TextField
        id="standard-basic"
        value={text}
        onChange={handleChange}
        label="Standard"
        inputRef={input}
      />
      <input type="submit" />
      <button onClick={changeTheme}>CHANGE THEME</button>
    </form>
  );
};
