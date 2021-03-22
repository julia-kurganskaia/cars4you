import { combineReducers } from 'redux'

import cars from './cars'
import sorting from './sorting';

export default combineReducers({
  cars,
  sorting,
});
