import {
  GET_SITTERS,
  GET_SITTER,
  SET_LOADING,
  FILTER_CONTACTS,
  SET_ERRORS
} from './types';
import axios from 'axios';

export const getSitters = () => dispatch => {
  setLoading();
  axios
    .get('/sitters')
    .then(res =>
      dispatch({
        type: GET_SITTERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err.response.data));
};

//Get sitter by Id

export const getSitter = sitterId => dispatch => {
  setLoading();
  axios
    .get(`/sitters/${sitterId}`)
    .then(res =>
      dispatch({
        type: GET_SITTER,
        payload: res.data
      })
    )
    .catch(err => console.log(err.response.data));
};

export const setLoading = () => dispatch => ({
  type: SET_LOADING
});

export const filterContacts = text => dispatch => {
  dispatch({ type: FILTER_CONTACTS, payload: text });
};

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/user', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};
