import { FETCH_BOOKS } from "./actionTypes";
import axios from "axios";

export const fetchBook = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const books = response.data;
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error(err);
    }
  };
};
