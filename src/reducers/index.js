import { combineReducers } from 'redux';
import SittersReducer from './SittersReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

import bookingReducer from './bookingReducer';

export default combineReducers({
  sitters: SittersReducer,
  user: authReducer,
  errors: errorReducer,
  booking: bookingReducer
});
