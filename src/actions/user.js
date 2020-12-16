import {  
  EVENTS_SUCCESS, 
  EVENTS_FAIL, 
  CREATED_EVENTS_SUCCESS,
  CREATED_EVENTS_FAIL,
  ADD_EVENTS_SUCCESS, 
  ADD_EVENTS_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  SET_MESSAGE } from './types';
import UserService from '../service/user.service';

export const getAllEvents = () => dispatch => UserService.getAllEvents().then(response => {
  console.log(response)
  dispatch({type: EVENTS_SUCCESS, payload: response.data})
  return Promise.resolve();
}, err => {
  dispatch({type: EVENTS_FAIL, payload: err.message})
  return Promise.reject();
})

export const getCreatedEvents = userId => dispatch => UserService.getCreatedEvents(userId).then(response => {
  console.log(response)
  dispatch({type: CREATED_EVENTS_SUCCESS, payload: response.data})
  return Promise.resolve();
}, err => {
  dispatch({type: CREATED_EVENTS_FAIL, payload: err.message})
  return Promise.reject();
})

export const postEvent = event => dispatch => UserService.postEvent(event).then(response => {
  dispatch({type: ADD_EVENTS_SUCCESS, payload: response.data})
  dispatch({
    type: SET_MESSAGE,
    payload: 'Event Added',
  });
  return Promise.resolve();
}, err => {
  dispatch({type: ADD_EVENTS_FAIL, payload: err.message})
  return Promise.reject();
})

export const delteEvent = eventId => dispatch => UserService.deleteEvent(eventId).then(response => {
  dispatch({type: DELETE_EVENT_SUCCESS, payload: ''})
  dispatch({
    type: SET_MESSAGE,
    payload: 'Event Deleted',
  });
  return Promise.resolve();
}, err => {
  dispatch({type: DELETE_EVENT_FAIL, payload: err.message})
  return Promise.reject();
})

