import { v4 as uuidv4 } from "uuid";
import actionTypes from "./contactsActionTypes";

const addContactRequest = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT_REQUEST,
    payload: {
      ...contact,
    },
  };
};

const addContactSuccess = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT_SUCCESS,
    payload: {
      ...contact,
    },
  };
};

const addContactError = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT_ERROR,
    payload: {
      ...contact,
    },
  };
};

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: { id },
});

const changeFilter = (filter) => ({
  type: actionTypes.FILTER,
  payload: { filter },
});

const showAlert = () => ({
  type: actionTypes.ALERT,
});

export default {
  addContact,
  deleteContact,
  changeFilter,
  showAlert,
  addContactRequest,
  addContactSuccess,
  addContactError,
};
