import {
  BOOKING_NOW,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_LOADING,
  GET_BOOKING
} from './types';
import axios from 'axios';

export const bookNow = (sitterId, newBooking) => dispatch => {
  setLoading();
  axios
    .post(`/sitter/${sitterId}/booking`, newBooking)
    .then(res => {
      dispatch({ type: BOOKING_NOW, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => dispatch({ type: SET_ERRORS, payload: err.response.data }));
};

export const setLoading = () => dispatch => ({
  type: SET_LOADING
});

export const getBooking = handle => dispatch => {
  setLoading();
  axios
    .get(`/booking/${handle}`)
    .then(res => {
      dispatch({ type: GET_BOOKING, payload: res.data });
    })
    .catch(err => console.log(err));
};
