import {
  GET_SITTERS,
  GET_SITTER,
  SET_LOADING,
  FILTER_CONTACTS
} from '../actions/types';

const initialState = {
  sitters: [],
  sitter: {},
  filtered: {},
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SITTERS:
      return {
        ...state,
        sitters: action.payload,
        loading: false
      };
    case GET_SITTER:
      return {
        ...state,
        sitter: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.sitters.filter(sitter => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return sitter.name.match(regex) || sitter.location.match(regex);
        })
      };
    default:
      return state;
  }
};
