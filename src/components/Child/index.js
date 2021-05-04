import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child did update");
  }

  componentWillUnmount() {
    console.log("child will unmount");
  }

  render() {
    console.log("child render");
    return (
      <>
        <div>This is a child component: {this.props.count}</div>
        <button onClick={this.props.updateCount}>UPDATE</button>
      </>
    );
  }
}
