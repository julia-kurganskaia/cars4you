//@ts-check

import { USER_DATA, USER_LOGOUT, SIGNUP_USER } from "../actions";

const initialState = {
    userName: sessionStorage.getItem("userName"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA: {
      let newState = {
        ...state,
        userName: action.userData.user_name,
      };

      return newState;
    }

    case USER_LOGOUT: {
      let newState = {
        ...state,
          userName: null,
      };

      return newState;
    }

    case SIGNUP_USER: {
      let newState = {
        ...state,
        userName: action.user.user_name,
      };

      return newState;
    }

    default:
    return state;
  }
};

export default reducer;
