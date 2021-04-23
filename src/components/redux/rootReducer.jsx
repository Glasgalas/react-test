import { combineReducers } from 'redux';
import todos from './todos/reducer';
import contacts from './contacts/reducer';

export default combineReducers({
  todos,
  contacts,
});
