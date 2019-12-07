import { BOOKING_NOW, SET_LOADING, GET_BOOKING } from '../actions/types';

const initialState = { booking: [], loading: false, reservation: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOKING_NOW:
      return {
        ...state,
        reservation: [action.payload, ...state.booking],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_BOOKING:
      return {
        ...state,
        booking: action.payload
      };

    default:
      return state;
  }
}
