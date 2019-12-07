import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_USER,
  SET_USER,
  SET_UNAUTHENTICATED
} from './types';
import axios from 'axios';

export const loginUser = userData => dispatch => {
  setLoading();
  axios
    .post('/login', userData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      // history.push('/');
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};

//Logout User
export const logoutUser = () => dispatch => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => dispatch => {
  axios.get(`/user`).then(res => {
    dispatch({
      type: SET_USER,
      payload: res.data
    });
  });
};

export const signUp = (newUserData, history) => dispatch => {
  setLoading();
  axios
    .post('/signup', newUserData)
    .then(res => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/login');
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const uploadImage = formData => dispatch => {
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => console.log(err));
};

export const editUserDetails = userDetails => dispatch => {
  axios
    .post('/user', userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => console.log(err));
};

export const setLoading = () => dispatch => ({
  type: LOADING_USER
});
