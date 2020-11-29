import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
<Router>
  <Switch>

    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route path="/home">
      <Home></Home>
    </Route>

    <Route path="/login">
    <Login></Login>
    </Route>

    <Route path="/*">
    <NoMatch></NoMatch>
    </Route>

  </Switch>
</Router>
    
   
  );
}

export default App;
