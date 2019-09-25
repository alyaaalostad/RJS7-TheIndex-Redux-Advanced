import { FETCH_AUTHORS } from "./actionTypes";
import axios from "axios";

export const fetchAuthor = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = response.data;
      dispatch({
        type: FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error(err);
    }
  };
};
