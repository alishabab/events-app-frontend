import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Event from './Event';
import { getAllEvents } from '../actions/user';

const Events = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { events } = useSelector(state => state.user);
  const { message } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getAllEvents())
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  },[dispatch])

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return(
    <div>
      <h2>All Events</h2>
      {loading && <p>Loading..</p>}
      {message && <p>{message}</p>}
      <div className="d-flex justify-content-between flex-wrap">
        {!loading && events.map(event => <Event key={event.id} event={event} />)}
      </div>
    </div>
  )
}

export default Events;