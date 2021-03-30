import { combineReducers } from 'redux';

import cars from "./cars";
import sorting from "./sorting";
import filtering from "./filtering";

export default combineReducers({
  cars,
  sorting,
  filtering,
});
