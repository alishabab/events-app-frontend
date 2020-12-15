import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={["/","/login"]} component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/profile' component={Profile} />
      </Switch> 
    </div>
  );
}

export default App;
