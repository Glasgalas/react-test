import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filterContact } from './actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
  ],
  {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
);

const filter = createReducer('', {
  [filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', phoneNumber: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', phoneNumber: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', phoneNumber: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', phoneNumber: '227-91-26' },
//   ],
//   action,
// ) => {
//   const { payload, type } = action;

//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   const { payload, type } = action;

//   switch (type) {
//     case types.FILTER_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };
