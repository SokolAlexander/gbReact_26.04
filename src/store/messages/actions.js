import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message: newMessage,
    chatId,
  },
});

let timeout;

export const addMessageWithThunk = (newMessage, chatId) => (
  dispatch,
  // getState
) => {
  dispatch(addMessage(newMessage, chatId));

  if (newMessage.author !== AUTHORS.BOT) {
    timeout = setTimeout(() => {
      dispatch(addMessage({ text: "I AM BOT", author: AUTHORS.BOT }, chatId));
    }, 1000);
  }
};
