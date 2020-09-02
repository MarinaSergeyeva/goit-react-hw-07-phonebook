import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";

const middleware = [];

const store = createStore(
  contactsReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
