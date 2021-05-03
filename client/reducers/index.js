//@ts-check

import { combineReducers } from 'redux';

import cars from "./cars";
import sorting from "./sorting";
import filtering from "./filtering";
import login from "./login";
import profile from "./profile";

export default combineReducers({
  cars,
  sorting,
  filtering,
  login,
  profile,
});
