import types from './types';

export const addContact = payload => ({
  type: types.ADD_CONTACT,
  payload,
});

export const deleteContact = payload => ({
  type: types.DELETE_CONTACT,
  payload,
});

export const filterContact = payload => ({
  type: types.FILTER_CONTACT,
  payload,
});
