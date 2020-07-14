import React from "react";
import "./App.scss";
import ass from './images/margot-robbie-ass.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/home";

export default function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul className="nav-list">
                        <li className="App-link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="App-link">
                            <Link to="/pleasure">Pleasure booth</Link>
                        </li>
                        <li className="App-link">
                            <Link to="/goodbye">Bye</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/pleasure">
                        <About/>
                    </Route>
                    <Route path="/goodbye">
                        <Users/>
                    </Route>
                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>
        </Router>
    );
};

function About() {
    return (
        <img src={ass} alt="sweet mother of ass" className="main-image"/>
    )
};

function Users() {
    return (
        <div className="goodbye-container">
            <h2 className="App-header">We hope you enjoyed your faptastic visit :) Goodbye!</h2>;
        </div>
    )
};
