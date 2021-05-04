import React, { useEffect, useState } from "react";

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
  console.log('render Parent');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect like didMount');
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect - like didMount & didUpdate');
  // });

  // useEffect(() => {
  //   console.log('useEffect - first render OR count changed');
  // }, [count]);

  // useEffect(() => {
  //   console.log("useEffect - first render OR count2 changed");
  // }, [count2]);

  const updateCount = () => {
    debugger;
    setCount(Math.random());
  };

  // const updateCount2 = () => {
  //   setCount2(Math.random());
  // };

  return (
    <div>
      <span>This is a parent component</span>
      {/* <button onClick={updateCount}>Update count</button>
      <button onClick={updateCount2}>Update count2</button> */}
      {/* <button onClick={this.toggleChild}>Toggle child</button> */}
      <Child count={count} updateCount={updateCount} />
    </div>
  );
}
