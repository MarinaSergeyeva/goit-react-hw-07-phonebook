import axios from "axios";
import actionTypes from "../contacts/contactsActionTypes";
import contactsActions from "../contacts/contactsActions";

const onAddContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());
    const result = await axios.post("https://hwasync-redux-bc22.firebaseio.com/contacts.json", contact)
        .then(res => {
            console.log(res.data);
            // dispatch(contactsActions.addContactRequest(res.data)))
};
};

export default {
    onAddContact,
}
