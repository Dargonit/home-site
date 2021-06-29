import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component{
    render(){
        return (
            <div className="App">
                <header>
                    <img src={logo}/>
                </header>
            </div>
        );
    }
}
export default Home;