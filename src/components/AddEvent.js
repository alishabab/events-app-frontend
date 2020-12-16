import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MultiSelect from "react-multi-select-component";
import { postEvent, getAllAttendees } from '../actions/user';
import UserService from '../service/user.service';
const AddEvent = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { attendees } = useSelector(state => state.user);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  let options = attendees.map(attendee => ({label: attendee.name, value: attendee.id}))
  useEffect(() => {
    setLoading(true);
    dispatch(getAllAttendees())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
  },[dispatch])
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  const handleNameChange = e => {
    setName(e.target.value)
  }
  const handleDescriptionChange = e => {
    setDescription(e.target.value)
  }
  const handleStartDateChange = e => {
    setStartDate(e.target.value)
  }
  const handleEndDateChange = e => {
    setEndDate(e.target.value)
  }

  const clearForm = () => {
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setSelected([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const event = {
      name: name,
      description: description,
      start_date: startDate,
      end_date: endDate,
    }
    dispatch(postEvent(event))
      .then((eventId) => {
        selected.forEach(option => {
          UserService.postInvitation(eventId, option.value)
        })
        setLoading(false);
        clearForm();
      })
      .catch(() => setLoading(false));
  }
  return (
    <div>
      {loading && <p>loading..</p>}
      {message && <h3>{message}</h3>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={handleNameChange}/>
        <label>Description</label>
        <input value={description} onChange={handleDescriptionChange}/>
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={handleStartDateChange}/>
        <label>End Date</label>
        <input type="date" value={endDate} onChange={handleEndDateChange}/>
        <div style={{width: '30%', marginLeft: '25%'}}>
          <label>Select attendees</label>
          <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={"Select"}
          />
        </div>
        <button type="submit" disabled={loading}> Create </button>
      </form>
    
    </div>
  )
}

export default AddEvent;