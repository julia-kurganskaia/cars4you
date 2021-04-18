//@ts-check

import { USER_DATA } from "../actions";

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
        default:
            return state;
    }
};

export default reducer;
