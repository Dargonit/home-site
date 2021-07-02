import {Route, Switch,Link} from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <header >
        <nav>
        <ul className="menu">
          <li className="logo">icon</li>
          <li className="item"> <Link to="/">Home </Link></li>
          <li className="item"><Link to="/about">About </Link></li>
          <li className="toggle"><a href="#"><i className="fa fa-bars" id="bars"></i></a></li>

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
