import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';

const Navbar = () => {
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to="/" className="navbar-brand">
        Events App
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        { !currentUser && 
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/signup">
              Signup
            </NavLink>
          </li>
        </ul>}
        { currentUser &&
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link">
              Home 
              <span className="sr-only">
                (current)
              </span>
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink exact to="/events" className="nav-link">
              Events
            </NavLink>
          </li>
          { currentUser.user.role === 'creator' && <li className="nav-item active">
            <NavLink exact to="/add-events" className="nav-link">
              Add Events
            </NavLink>
          </li> }
          { currentUser.user.role === 'creator' && <li className="nav-item active">
            <NavLink exact to="/created-events" className="nav-link">
              Created Events
            </NavLink>
          </li> }
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={logOut}>Logout</a>
          </li>
        </ul> }
      </div>
    </nav>
  )
}

export default Navbar;