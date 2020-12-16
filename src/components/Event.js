/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../service/user.service';
import { delteEvent } from '../actions/user';
const Event = ({ event }) => {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    UserService.getEventAttendees(event.id)
    .then(res => {
      const attendeeIds = res.data.map(attendee => attendee.id);
      console.log("from useEffect")
      setLoading(false);
      setJoined(attendeeIds.includes(currentUser.user.id));
    })
  },[])

  const deleteHandler = (eventId) => {
    setLoading(true);
    dispatch(delteEvent(eventId)).then(() => {
      setLoading(false);
      window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    })
  }

  const handleInvite = (eventId, attendeeId) => {
    if (!joined) {
      setLoading(true);
      UserService.postInvitation(eventId, attendeeId)
      .then(res => {
        setLoading(false);
        setJoined(true);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
    } else {
      setLoading(true);
      UserService.deleteInvitation(eventId, attendeeId)
      .then(res => {
        setLoading(false);
        setJoined(false);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        console.log(err.response);
      })
    }
  }

  return (
  <div className="card" style={{width: '18rem'}}>
    {loading && <p>loading..</p>}
    <div className="card-body">
      <h5 className="card-title">{event.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{event.start_date}</h6>
      <p className="card-text">{event.description}</p>
      { currentUser.user.id === event.creator_id ? 
        <button type="button" onClick={() => deleteHandler(event.id)}>
          Delete
        </button> : null
      }
      <button type="button" onClick={() => handleInvite(event.id, currentUser.user.id)} disabled={loading}>
          {joined ? 'Leave' : 'Join'}
      </button>
    </div>
  </div>
)};

export default Event;