import { getCars } from "../apis/cars";

export const SET_CARS = "SET_CARS";

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
