import { FETCH_BOOKS } from "../actions/actionTypes";
const initialState = {
  books: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};
