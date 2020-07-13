import React from "react";
import "./App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";

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
                            <Link to="/test">Test Page</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/test">
                        <Test/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
