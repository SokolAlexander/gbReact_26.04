import { REQUEST_STATUS } from "../../utils/constants";
import { ARTICLES_REQUEST, ARTICLES_FAILURE, ARTICLES_SUCCESS } from "./action";

const initialState = {
  articlesList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_REQUEST: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.PENDING,
          error: "",
        },
      };
    }
    case ARTICLES_FAILURE: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.FAILURE,
          error: action.error,
        },
      };
    }
    case ARTICLES_SUCCESS: {
      return {
        ...state,
        articlesList: action.articles,
        request: {
          status: REQUEST_STATUS.SUCCESS,
          error: "",
        },
      };
    }
    default:
      return state;
  }
};
