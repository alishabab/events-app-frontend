/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://aqueous-basin-53582.herokuapp.com';

const getAllEvents = () => axios.get(`${API_URL}/events`, {
  headers: authHeader(),
})

const getCreatedEvents = userId => axios.get(`${API_URL}/users/${userId}/created_events`, {
  headers: authHeader(),
})

const getAttendedEvents = userId => axios.get(`${API_URL}/users/${userId}/attended_events`, {
  headers: authHeader(),
})

const postEvent = event => axios.post(`${API_URL}/events`, { event: event}, {
  headers: authHeader(),
})

const deleteEvent = eventId => axios.delete(`${API_URL}/events/${eventId}`, {
  headers: authHeader(),
})

const getEventAttendees = eventId => axios.get(`${API_URL}/events/${eventId}/attendees`, {
  headers: authHeader(),
})

const postInvitation = (eventId, attendeeId) => axios.post(`${API_URL}/events/${eventId}/invitations`, 
{
  attendee_id: attendeeId,
},
{
  headers: authHeader(),
})

const deleteInvitation = (eventId, attendeeId) => axios.delete(`${API_URL}/events/${eventId}/invitations/1`,{
  headers: authHeader(),
  data: { attendee_id: attendeeId, }
})

export default {
  getAllEvents,
  getCreatedEvents,
  getAttendedEvents,
  postEvent,
  deleteEvent,
  getEventAttendees,
  postInvitation,
  deleteInvitation,
}