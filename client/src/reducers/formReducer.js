import { UPDATE_FORM_DATA } from "../actions/types";

const formReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default formReducer;
