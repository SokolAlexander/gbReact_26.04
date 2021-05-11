import React from 'react';
import { Link } from 'react-router-dom';

const chats = [
  {
    name: 'Chat 1',
    id: 'chat1'
  },
  {
    name: 'Chat 2',
    id: 'chat2'
  },
  {
    name: 'Chat 3',
    id: 'chat3'
  }
]

export const ChatList = () => {
  return (
    <div>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}