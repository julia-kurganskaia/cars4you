//@ts-check

import { FILTER_BY_LOCATION } from "../actions";

const initialState = {
    location: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_LOCATION:
            let newState = {
                ...state,
                location: action.location,
            };

            console.log(newState)
            return newState;

    default:
        return state;
    };
};

export default reducer;
