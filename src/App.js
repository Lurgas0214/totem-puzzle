import React from "react";
import {Component} from "react";
import TotemPuzzle from "./components/TotemPuzzle";
import config from "./services/config.json";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <TotemPuzzle config={config.default}/>
                </header>
            </div>
        );
    };
}

export default App;
