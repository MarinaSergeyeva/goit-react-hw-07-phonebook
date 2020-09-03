import { combineReducers } from "redux";
import actionTypes from "./contactsActionTypes";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT_SUCCESS:
      return [...state, action.payload];

    case actionTypes.FETCH_CONTACT_SUCCESS:
      return action.payload;

    case actionTypes.REMOVE_CONTACT_SUCCESS:
      return state.filter((contact) => contact.id !== action.payload);

    // case actionTypes.DELETE:
    //   return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case actionTypes.FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};

const alert = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ALERT:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  alert,
});
