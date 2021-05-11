import React, { useEffect, useState } from "react";
import { TextField } from '@material-ui/core';

import { Child } from "../Child";

// export class Parent extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("parent constructor");

//     this.state = {
//       count: 0,
//       showChild: true,
//     };
//   }

//   componentDidMount() {
//     console.log("parent did mount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("parent did update");
//   }

//   componentWillUnmount() {
//     console.log("parent will unmount");
//   }

//   toggleChild = () => {
//     this.setState(prevState => ({
//       showChild: !prevState.showChild,
//     }));
//   }

//   render() {
//     console.log("parent render");
//     const { showChild } = this.state;
//     // const showChild = this.state.showChild;
//     return (
//       <div>
//         <span>This is a parent component</span>
//         <button onClick={this.toggleChild}>Toggle child</button>
//         {showChild && <Child />}
//       </div>
//     );
//   }
// }

export const Parent = () => {
  const [forms, setForms] = useState({
    author: "",
    text: "",
  });

  const handleChange = (e) => {
    const name = e.target.getAttribute("name");
    switch (name) {
      case "author": {
        setForms({ ...forms, author: e.target.value });
        break;
      }

      case "text": {
        setForms({ ...forms, text: e.target.value });
        break;
      }

      default: return
    }
  };

  return (
    <div>
      <span>This is a parent component</span>
      <input name="author" value={forms.author} onChange={handleChange} />
      <TextField id="standard-basic" label="Standard" />
    </div>
  );
};
