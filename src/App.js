import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Events from './components/Events';
import EventDetail from './components/EventDetail';
import CreatedEvents from './components/CreatedEvents';
import JoinedEvents from './components/JoinedEvents';
import AddEvent from './components/AddEvent';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={["/","/login"]} component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/events/:id' component={EventDetail} />
        <Route exact path='/add-events' component={AddEvent} />
        <Route exact path='/created-events' component={CreatedEvents} />
        <Route exact path='/joined-events' component={JoinedEvents} />
      </Switch> 
    </div>
  );
}

export default App;
