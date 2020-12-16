import { 
  EVENTS_SUCCESS, 
  EVENTS_FAIL, 
  CREATED_EVENTS_SUCCESS,
  CREATED_EVENTS_FAIL,
  ATTENDED_EVENTS_SUCCESS,
  ATTENDED_EVENTS_FAIL,
  ADD_EVENTS_SUCCESS, 
  ADD_EVENTS_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL } from '../actions/types';

const initialState = {
  events: [],
  createdEvents: [],
  attendedEvents: [],
}

const userReducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case EVENTS_SUCCESS:
      return {
        ...state,
        events: payload
      }
    case EVENTS_FAIL: 
      return {
        ...state,
        message: payload,
      }
    case CREATED_EVENTS_SUCCESS:
      return {
        ...state,
        createdEvents: payload
      }
    case CREATED_EVENTS_FAIL:
      return {
        ...state,
        message: payload
      }
    case ATTENDED_EVENTS_SUCCESS:
      return {
        ...state,
        attendedEvents: payload
      }
    case ATTENDED_EVENTS_FAIL:
      return {
        ...state,
        message: payload
      }
    case ADD_EVENTS_SUCCESS: 
      return {
        ...state,
        createdEvent: payload,
      }
    case ADD_EVENTS_FAIL: 
      return {
        ...state,
        message: payload,
      }
    case DELETE_EVENT_SUCCESS: 
      return {
        ...state,
        message: payload,
      }
    case DELETE_EVENT_FAIL: 
      return {
        ...state,
        message: payload,
      }
    default:
      return state
  }
}

export default userReducer;