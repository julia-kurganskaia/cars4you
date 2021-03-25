//@ts-check

import { LOW_PRICE_FIRST, HIGH_PRICE_FIRST, NEW_CARS_FIRST, OLD_CARS_FIRST, LOW_ODOMETER_FIRST, HIGH_ODOMETER_FIRST } from "../actions";


const initialState = {
    sortBy: "",
    priceHighestFirst: false,
    oldestYearFirst: false,
    highOdometerNumber: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOW_PRICE_FIRST:
            let newState = {...state};

            newState.sortBy = "price";
            newState.priceHighestFirst = false;

            return newState;

        case HIGH_PRICE_FIRST:
            newState = {...state};

            newState.sortBy = "price";
            newState.priceHighestFirst = true;

            return newState;

        case NEW_CARS_FIRST:
            newState = {...state};

            newState.sortBy = "year";
            newState.oldestYearFirst = false;

            return newState;

            case OLD_CARS_FIRST:
                newState = {...state};

                newState.sortBy = "year";
                newState.oldestYearFirst = true;

                return newState;

            case LOW_ODOMETER_FIRST:
                newState = {...state};

                newState.highOdometerNumber = false;
                newState.sortBy = "odometer";

                return newState;

            case HIGH_ODOMETER_FIRST:
                newState = {...state};

                newState.highOdometerNumber = true;
                newState.sortBy = "odometer";

                return newState;

        default:
            return state;
    };
};

export default reducer;
