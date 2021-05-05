//@ts-check

import { combineReducers } from 'redux';

import cars from "./cars";
import sorting from "./sorting";
import filtering from "./filtering";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({
  cars,
  sorting,
  filtering,
  auth,
  profile,
});
