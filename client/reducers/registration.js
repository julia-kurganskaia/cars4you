//@ts-check

import { SIGNUP_USER } from "../actions";

const initialState = {
    name: "",
    email: "",
    password: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER: {
            let newState = {
                ...state,
                name: action.user.name,
                email: action.user.email,
                password: action.user.password,
            };
            return newState;
        }

        default:
            return state;
    }
};

export default reducer;
