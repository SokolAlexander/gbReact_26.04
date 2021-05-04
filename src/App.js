import React, { useState } from "react";

const initialMessages = ["Hello", "hi"];

// const App = () => {
//   const messagesState = useState(initialMessages);

//   // const [messages, setMessages] = useState(initialMessages);
//   const messages = messagesState[0];
//   const setMessages = messagesState[1];

//   const handleAddMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message"]);
//     const newObj = {
//       x: 1,
//     };
//     console.log({
//       ...newObj,
//     });
//   };

//   return (
//     <div>
//       <h1>React, babel and webpack with hot reload are working!</h1>
//       {messages.map((message) => (
//         <div>{message}</div>
//       ))}
//       <button onClick={handleAddMessage}>Add message</button>
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    messages: initialMessages,
    count: 0,
  };

  handleAddMessage = () => {
    console.log(this.state.messages.length);
    this.setState(
      (prevState) => ({
        messages: [...prevState.messages, "new message"],
        count: null,
      }),
      () => console.log("state updated")
    );
    console.log("------====", this.state.count);
  };

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h1>React, babel and webpack with hot reload are working!</h1>
        {messages.map((message) => (
          <div>{message}</div>
        ))}
        <button onClick={this.handleAddMessage}>Add message</button>
      </div>
    );
  }
}

export default App;
