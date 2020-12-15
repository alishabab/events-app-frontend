import AuthService from '../service/auth.service';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types';

export const register = (name, email, password) => dispatch => AuthService.register(name, email, password).then(
  data => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: data.message,
    });

    return Promise.resolve();
  },
  error => {
    console.log(error.response);
    const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();
    // const message = error.response.data.errors[0];
    dispatch({
      type: REGISTER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const login = (email, password) => dispatch => AuthService.login(email, password).then(
  data => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    return Promise.resolve();
  },
  error => {
    const message = (error.response
          && error.response.data
          && error.response.data.message)
        || error.message
        || error.toString();

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  },
);

export const logout = () => dispatch => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};