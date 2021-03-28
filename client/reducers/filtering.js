//@ts-check

import { FILTER_BY_LOCATION } from "../actions";
import { FILTER_BY_COLOUR } from "../actions";

const initialState = {
    location: "",
    colour: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_LOCATION:
            let newState = {
                ...state,
                location: action.location,
            };

            return newState;

        case FILTER_BY_COLOUR:
            newState = {
                ...state,
                colour: action.colour,
            };
console.log(newState)
            return newState;

    default:
        return state;
    };
};

export default reducer;
