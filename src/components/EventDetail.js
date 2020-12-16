import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import UserService from '../service/user.service';

const EventDetail = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    setLoading(true);
    UserService.getEvent(id)
      .then(response => {
        setLoading(false);
        setContent(response.data)
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      })
  }, [id])

  useEffect(() => {
    UserService.getEventAttendees(id)
      .then(response => {
        setParticipants(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  },[id])

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return(
    <div>
      {loading && <p>loading..</p>}
      {content && 
        <div>
          <h2>{content.name}</h2>
          <p>{content.description}</p>
          <p>
            <strong>Start date: </strong>{content.start_date} <strong> End date: </strong>{content.end_date}
          </p>
          <h4>Particpants</h4>
          <ul>
            {participants.map(participant => <li key={participant.id}> # {participant.name}</li>)}
          </ul>
        </div>
      }
      <button onClick={() => history.goBack()}>
        Back
      </button>
    </div>

  )
}

export default EventDetail;