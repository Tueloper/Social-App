/* eslint-disable max-len */
import {
  POST_SIGN_UP, POST_SIGN_UP_FAIL, LOAD_USER_FAIL, LOAD_USER,
  UPDATE_PROFILE, UPDATE_PROFILE_ERROR,
  LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, GET_USER_PROFILE, GET_USER_PROFILE_ERROR, UPDATE_PASSWORD_ERROR,
} from '../actionTypes/authTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loader: true,
  sessionUser: null,
  sessionError: null,
  user: null,
  loading: true,
  loginError: false,
  updatePasswordError: null,
  profileLoader: true,
  userProfile: null,
  userProfileError: null,
  updateProfileError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        sessionUser: payload,
        loading: false,
        userJoinCompany: false,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        sessionError: payload,
        loading: false,
      };
    case POST_SIGN_UP:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        user: payload,
        loader: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
        loader: false,
      };
    case LOG_OUT:
    case LOGIN_FAIL:
    case POST_SIGN_UP_FAIL:
      localStorage.clear('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        user: null,
        loadVerification: true,
        verificationStatus: null,
        loginError: true,
        userProfile: null,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        updatePasswordError: payload,
        profileLoader: false,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
        profileLoader: false,
        userProfileError: null,
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        userProfile: null,
        profileLoader: false,
        userProfileError: payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        updateProfile: payload,
        loading: false,
        updateProfileError: null,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfile: null,
        loading: false,
        updateProfileError: payload,
      };
    default:
      return state;
  }
};
