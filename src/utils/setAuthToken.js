import axios from 'axios';
//What we're doing now, prevent us from manually make sure that we have the token
//For each request we're in, if we are logged in, we can call this function
//And it's just gonna attach the token to that function

//Adding this authorization token to every request we're logged in
const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
