import { CHANGE_CHECKBOX, CHANGE_NAME } from "./actions";

const initialState = {
  checked: false,
  name: "Default",
};

export const profileReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case CHANGE_CHECKBOX: {
      return {
        ...state,
        checked: !state.checked,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};
