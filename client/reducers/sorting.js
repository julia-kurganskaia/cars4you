//@ts-check

import { TOGGLE_PRICE } from "../actions";

const initialState = {
    pricelowestFirst: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRICE:
            const newState = {...state};
            if (newState.pricelowestFirst === false) {
                newState.pricelowestFirst = true;
            } else {
                newState.pricelowestFirst = false;
            }
            return newState;
        default:
            return state;
    };
};



export default reducer;
