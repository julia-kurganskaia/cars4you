//@ts-check

import { getCars, addNewListing } from "../apis/cars";
import { login, logout, getProfile, signUp } from "../apis/auth";
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
export const SET_PROFILE = "SET_PROFILE";
export const SIGNUP_USER = "SIGNUP_USER";


export function setUser(userData) {
  return {
    type: USER_DATA,
    userData
  };
};

export function signUpUser(name, email, password) {
  return (dispatch) => {
    return signUp(name, email, password)
      .then(user => {
        sessionStorage.setItem("userName", user.body.user_name);
        history.push("/");
        return user.body;
      })
      .then(user => {
        dispatch(registerUser(user))
      })
      .catch(() => {
        alert("User with this email already exists or you didn't fill all required fields.");
      });
  };
};

export function registerUser(user) {
  return {
    type: SIGNUP_USER,
    user
  }
};

export function loginUser(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(res => {
        sessionStorage.setItem("userName", res.body.user_name);
        history.push("/");
        return res.body;
      })
      .then(user => {
        dispatch(setUser(user))
      })
      .catch(() => {
        alert("Please, enter correct credentials");
      });
  };
};

export function userLogout() {
  sessionStorage.clear();

  return (dispatch) => {
    return logout()
      .then(() => {
        dispatch(userLogoutAction())
      });
  };
};

export function userLogoutAction() {
  return {
    type: USER_LOGOUT,
  }
};

export function userProfile(user) {
  return {
    type: SET_PROFILE,
    user
  }
};

export function getUserProfile() {
  return (dispatch) => {
    return getProfile()
      .then(user => {
        dispatch(userProfile(user))
      });
  }
};

export function setCars(cars) {
  return {
    type: SET_CARS,
    cars
  };
};

export function fetchCars() {
  return (dispatch) => {
    getCars()
      .then(cars => {
        dispatch(setCars(cars));
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

export function postNewListing(listing) {
  return () => {
    return addNewListing(listing)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        alert("Something went wrong")
      });
  };
 };

