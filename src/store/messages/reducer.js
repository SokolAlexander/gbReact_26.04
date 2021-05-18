import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chats/actions";

const initialState = {
  messagesList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.payload.chatId]: [
            ...state.messagesList[action.payload.chatId],
            action.payload.message,
          ],
        },
      };
    }
    case ADD_CHAT: {
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.payload.id]: [],
        }
      };
    }
    default:
      return state;
  }
};
