import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form } from "../Form";
import { AUTHORS } from "../../utils/constants";
import { usePrev } from "../../utils/hooks";
import { Message } from "../Message";
import { ChatList } from "../ChatList";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, addMessageWithThunk } from "../../store/messages/actions";

// import './styles.css';

// const initialMessages = [
//   { author: AUTHORS.HUMAN, text: "Hello" },
//   { author: AUTHORS.BOT, text: "hi" },
// ];

const initialMessages = {
  chat1: [
    { author: AUTHORS.HUMAN, text: "Hello" },
    { author: AUTHORS.BOT, text: "hi" },
  ],
  chat2: [
    { author: AUTHORS.HUMAN, text: "this is chat 2" },
    { author: AUTHORS.HUMAN, text: "hello" },
  ],
  chat3: [],
};

const MessageField = () => {
  const messages = useSelector(state => state.messages.messagesList);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleAddMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithThunk(newMessage, chatId));
    },
    [chatId, dispatch]
  );

  // useEffect(() => {
  //   let timeout;
  //   if (!messages[chatId]?.length) {
  //     return;
  //   }

  //   const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];
  //   if (lastMessage.author === AUTHORS.HUMAN) {
  //     timeout = setTimeout(() => {
  //       handleAddMessage({ author: AUTHORS.BOT, text: "I AM BOT" });
  //     }, 1500);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [messages]);

  if (!chatId || !messages[chatId]) {
    return <Redirect to="/" />;
  }

  return (
    <div className="message-field">
      <ChatList />
      <div>
        {messages[chatId].map((message, i) => (
          <Message text={message.text} author={message.author} key={i} />
        ))}
        <Form onAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};

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

export default MessageField;
