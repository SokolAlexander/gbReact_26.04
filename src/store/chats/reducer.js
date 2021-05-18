import { ADD_CHAT } from "./actions";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  console.log(typeof action);
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    }
    default:
      return state;
  }
};
