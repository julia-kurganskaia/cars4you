//@ts-check

import { getCars } from "../apis/cars";

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

export function setCars(cars) {
  return {
    type: SET_CARS,
    cars
  };
};

export function fetchCars() {
  return dispatch => {
    return getCars()
      .then(cars => {
        dispatch(setCars(cars))
        return null
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
