import logo from './logo.svg';
import {Route, Switch,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
        <ul id="nav">
          <li><Link to="/">Home </Link></li>
        </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
