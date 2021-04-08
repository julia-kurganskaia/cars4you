import { combineReducers } from 'redux';

import cars from "./cars";
import sorting from "./sorting";
import filtering from "./filtering";
import users from "./users";

export default combineReducers({
  cars,
  sorting,
  filtering,
  users,
});
