//@ts-check

import { getCars } from "../apis/cars";
import request from "superagent";
import history from "../utils/history";

export const SET_CARS = "SET_CARS";
export const LOW_PRICE_FIRST = "LOW_PRICE_FIRST";
export const HIGH_PRICE_FIRST = "HIGH_PRICE_FIRST";
export const NEW_CARS_FIRST = "NEW_CARS_FIRST";
export const OLD_CARS_FIRST = "OLD_CARS_FIRST";
export const TOGGLE_ODOMETER = "TOGGLE_ODOMETER";
export const LOW_ODOMETER_FIRST = "LOW_ODOMETER_FIRST";
export const HIGH_ODOMETER_FIRST = "HIGH_ODOMETER_FIRST";
export const FILTER_BY_LOCATION = "FILTER_BY_LOCATION";
export const FILTER_BY_COLOUR = "FILTER_BY_COLOUR";
export const FILTER_BY_MAKE = "FILTER_BY_MAKE";
export const FILTER_BY_FUEL = "FILTER_BY_FUEL";
export const USER_DATA = "USER_DATA";
export const USER_LOGOUT = "USER_LOGOUT";

export function loginUser(email, password) {
  return (dispatch) => {
    request.post("/api/v1/auth")
      .send({email: email, password: password})
      .then(res => {
        if (res.body === false) {
          alert("Please, enter correct credentials")
        } else {
          dispatch({
            type: USER_DATA,
            userData: res.body,
          })

          sessionStorage.setItem("userName", res.body.user_name);

          history.push("/");
        }
      })
  };
};

export function userLogout() {
  return (dispatch) => {
    request.post("/api/v1/auth/logout")
      .then(() => {
        dispatch({
          type: USER_LOGOUT,
        })
        sessionStorage.clear();
      });
  };
};

export function setCars(cars) {
  return {
    type: SET_CARS,
    cars
  };
};

export function fetchCars() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.cars.length !== 0) {
      return;
    }

    return getCars()
      .then(cars => {
        dispatch(setCars(cars));
        return null;
      });
  };
};

export function lowPriceFirst() {
  return {
    type: LOW_PRICE_FIRST,
  };
};

export function highPriceFirst() {
  return {
    type: HIGH_PRICE_FIRST,
  };
};

export function newCarsFirst() {
  return {
    type: NEW_CARS_FIRST,
  };
};

export function oldCarsFirst() {
  return {
    type: OLD_CARS_FIRST,
  };
};

export function lowOdometerFirst() {
  return {
    type: LOW_ODOMETER_FIRST,
  };
};

export function highOdometerFirst() {
  return {
    type: HIGH_ODOMETER_FIRST,
  };
};

export function filterByLocation(location) {
  return {
    type: FILTER_BY_LOCATION,
    location
  };
};

export function filterByColour(colour) {
  return {
    type: FILTER_BY_COLOUR,
    colour
  };
};

export function filterByMakeCompany (make) {
  return {
    type: FILTER_BY_MAKE,
    make
  };
};

export function filterByFuel(fuel) {
  return {
    type: FILTER_BY_FUEL,
    fuel
  };
};
