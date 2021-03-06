import axios from "axios";
import { FETCH_USER, UPDATE_FORM_DATA } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateFormData = (data) => {
  return { type: UPDATE_FORM_DATA, payload: data };
};
