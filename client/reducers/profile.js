//@ts-check

import { SET_PROFILE } from "../actions";

const initialState = {
    user_name: "",
    email: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            let newState = {
                ...state,
                user_name: action.user.user_name,
                email: action.user.email,
            };
            return newState;
        }

        default:
            return state;
    }
};

export default reducer;
