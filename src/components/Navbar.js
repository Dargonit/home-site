import {Route, Switch,Link} from "react-router-dom";
import '../styles/Navbar.css';
import Home from "../views/Home";
import Library from "../views/Library";
import About from "../views/About";
import icon from "../assets/Icon-funny.png"

function Navbar() {
    return (
        <div>
            <header >
                <nav>
                    <ul className="menu">
                        <li className="logo"><Link to="/home-site"><img className="icon" src={icon} alt="Kitty"/> </Link></li>
                        <li className="item"> <Link to="/home-site">Home </Link></li>
                        <li className="item"> <Link to="/library">Library </Link></li>
                        <li className="item"><Link to="/about">About </Link></li>
                        <li className="toggle"><a href="/"><i className="fa fa-bars" id="bars"></i></a></li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/home-site">
                        <Home></Home>
                    </Route>
                    <Route exact path="/library">
                        <Library></Library>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                </Switch>
            </header>
        </div>
    );
}

export default Navbar;
