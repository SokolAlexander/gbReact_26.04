import { ADD_CHAT } from "./actions";

const initialState = {
  chatList: [
    {
      name: "Chat 1",
      id: "chat1",
    },
    {
      name: "Chat 2",
      id: "chat2",
    },
    {
      name: "Chat 3",
      id: "chat3",
    },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, action.newChat],
      };
    }
    default: return state;
  };
};
