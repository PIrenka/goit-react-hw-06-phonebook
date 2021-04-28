// import { v4 as uuid } from 'uuid';
import * as types from './types';

export const addContact = newContact => ({
  type: types.ADD_CONTACT,
  payload: {
    // id: uuid(),
    newContact,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

export const filterContacts = value => ({
  type: types.FILTER_CONTACTS,
  payload: value,
});
