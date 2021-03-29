//@ts-check

import { FILTER_BY_LOCATION, FILTER_BY_COLOUR, FILTER_BY_MAKE } from "../actions";

const initialState = {
    location: "",
    colour: "",
    make: "",
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

            return newState;

        case FILTER_BY_MAKE:
            newState = {
                ...state,
                make: action.make,
            };

            return newState;

    default:
        return state;
    };
};

export default reducer;
