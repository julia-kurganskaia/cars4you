import { getCars } from "../apis/cars";

export const SET_CARS = "SET_CARS";
export const TOGGLE_PRICE = "TOGGLE_PRICE";
export const TOGGLE_YEAR = "TOGGLE_YEAR";

export function setCars (cars) {
  return {
    type: SET_CARS,
    cars
  };
};

export function fetchCars () {
  return dispatch => {
    return getCars()
      .then(cars => {
        dispatch(setCars(cars))
        return null
      });
  };
};

export function togglePrice () {
  return {
    type: TOGGLE_PRICE,
  };
};

export function toggleYear () {
  return {
    type: TOGGLE_YEAR,
  };
};
