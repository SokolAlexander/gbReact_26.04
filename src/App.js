import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form } from "./components/Form";
import { AUTHORS } from "./utils/constants";
import { usePrev } from "./utils/hooks";
import {
  useHistory,
  useRouteMatch,
  useLocation,
  useParams,
  Redirect,
} from "react-router-dom";

// const initialMessages = [
//   { author: AUTHORS.HUMAN, text: "Hello" },
//   { author: AUTHORS.BOT, text: "hi" },
// ];

const initialMessages = {
  chat1: [{ author: AUTHORS.HUMAN, text: "Hello" }],
  chat2: [
    { author: AUTHORS.BOT, text: "hi" },
    { author: AUTHORS.BOT, text: "hi again" },
  ],
};

const getMessageClassName = (author) => {
  return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [showForm, setShowForm] = useState(true);

  const params = useParams();
  const { chatId } = params;
  console.log(params);

  const handleAddMessage = useCallback(
    (newMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
  );

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    let timeout;
    if (!messages[chatId]?.length) {
      return;
    }

    const lastMessage = messages[chatId][messages[chatId].length - 1];
    if (lastMessage.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  if (!chatId || !messages[chatId]) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      {messages[chatId].map((message, i) => (
        <div key={i} className={getMessageClassName(message.author)}>
          {message.author}: {message.text}
        </div>
      ))}
      <button onClick={toggleForm}>HIDE/SHOW</button>
      {showForm && <Form onAddMessage={handleAddMessage} />}
    </div>
  );
};

const a = 'key';

const obj = {
  a: 2
}

// { a: 2 }
const obj2 = {
  [a]: 2
}

// { key: 2 }


// class App extends React.Component {
//   state = {
//     messages: initialMessages,
//     count: 0,
//   };

//   handleAddMessage = () => {
//     console.log(this.state.messages.length);
//     this.setState(
//       (prevState) => ({
//         messages: [...prevState.messages, "new message"],
//         count: null,
//       }),
//       () => console.log("state updated")
//     );
//     console.log("------====", this.state.count);
//   };

//   render() {
//     const { messages } = this.state;
//     return (
//       <div>
//         <h1>React, babel and webpack with hot reload are working!</h1>
//         {messages.map((message) => (
//           <div>{message}</div>
//         ))}
//         <button onClick={this.handleAddMessage}>Add message</button>
//       </div>
//     );
//   }
// }

export default App;
