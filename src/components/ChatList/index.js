import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";

const chatList = [
  {
    name: "Chat1",
    id: "chat1",
  },
  {
    name: "Chat2",
    id: "chat2",
  },
  {
    name: "Chat3",
    id: "chat3",
  },
];

export const ChatList = () => {
  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddChat = () => {
    if (value) {
      dispatch(addChat({ name: value, id: Date.now() }));
      setValue("");
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
      <TextField value={value} onChange={handleChange} />
      <Button onClick={handleAddChat}>Add Chat</Button>
    </>
  );
};
