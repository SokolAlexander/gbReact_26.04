import React, { useState, useCallback } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList";
import MessageField from "./components/MessageField";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { AUTHORS } from "./utils/constants";
import { Articles } from "../../freshreact/src/components/Articles";

const initialChats = [
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

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <ChatList />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/articles">
          <Articles />
        </Route>

        <Route path="/chats/:chatId?">
          <MessageField />
        </Route>

        <Route path="*">
          <div>This is my 404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
