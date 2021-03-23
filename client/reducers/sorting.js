//@ts-check

import { TOGGLE_PRICE } from "../actions";
import { TOGGLE_YEAR } from "../actions";

const initialState = {
    sortBy: "",
    pricelowestFirst: false,
    oldestYearFirst: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRICE:
            let newState = {...state};

            newState.sortBy = "price";

            if (newState.pricelowestFirst === false) {
                newState.pricelowestFirst = true;
            } else {
                newState.pricelowestFirst = false;
            }
            return newState;
        case TOGGLE_YEAR:
            newState = {...state};

            newState.sortBy = "year";

            if (newState.oldestYearFirst === false) {
                newState.oldestYearFirst = true;
            } else {
                newState.oldestYearFirst = false;
            }
            return newState;
        default:
            return state;
    };
};



export default reducer;
