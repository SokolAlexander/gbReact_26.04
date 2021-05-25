import React from 'react';
import { AUTHORS } from '../../utils/constants';

const getMessageClassName = (author) => {
  return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

export const Message = ({ text, author }) => (
  <div className={getMessageClassName(author)}>
    {author}: {text}
  </div>
);