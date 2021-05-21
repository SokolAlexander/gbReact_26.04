import React, { useState, useRef, useEffect } from "react";
import { TextField, makeStyles } from "@material-ui/core";

import { AUTHORS } from "../../utils/constants";

const useStyles = makeStyles(() => ({
  textField: {
    backgroundColor: 'red'
  }
}));


export const Form = ({ onAddMessage }) => {
  const classes = useStyles();
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

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" ref={input} /> */}
      <TextField
        id="standard-basic"
        value={text}
        onChange={handleChange}
        label="Standard"
        inputRef={input}
        className={classes.textField}
      />
      <input type="submit" />
    </form>
  );
};
