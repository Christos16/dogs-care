import {
  SET_CURRENT_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
  UNLIKE_POST,
  LIKE_POST
} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload,
        loading: false
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;

    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
        loading: false
      };
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            postId: action.payload.postId
          }
        ]
      };
    case UNLIKE_POST:
      return {
        ...state,
        likes: state.likes.filter(like => like.postId !== action.payload.postId)
      };

    default:
      return state;
  }
}
