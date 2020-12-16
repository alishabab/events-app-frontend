import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { postEvent } from '../actions/user';
const AddEvent = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
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
      .then(() => {
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
        <button type="submit"> Create </button>
      </form>
    
    </div>
  )
}

export default AddEvent;