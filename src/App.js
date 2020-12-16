import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Events from './components/Events';
import CreatedEvents from './components/CreatedEvents';
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
        <Route exact path='/add-events' component={AddEvent} />
        <Route exact path='/created-events' component={CreatedEvents} />
      </Switch> 
    </div>
  );
}

export default App;
