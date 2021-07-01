import logo from './logo.svg';
import {Route, Switch,Link} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <header >
        <nav>
        <ul id="nav">
          <li><Link to="/">Home </Link></li>
          <li><Link to="/about">About </Link></li>
        </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
