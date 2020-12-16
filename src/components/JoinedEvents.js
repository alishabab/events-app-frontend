import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Event from './Event';
import { getAttendedEvents } from '../actions/user';

const JoinedEvents = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { attendedEvents } = useSelector(state => state.user);
  const { message } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(getAttendedEvents(currentUser.user.id))
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  },[dispatch, currentUser.user.id])

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return(
    <div>
      <h2> Events Joined By Me</h2>
      {loading && <p>Loading..</p>}
      {message && <p>{message}</p>}
      <div className="d-flex justify-content-between flex-wrap">
        {!loading && attendedEvents.map(event => <Event key={event.id} event={event} />)}
      </div>
    </div>
  )
}

export default JoinedEvents;