import React from "react";
import "./App.scss";
import ass from '../src/margot-robbie-ass.png'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Bootloader.template
                </p>
                <div>
                    <img src={ass} alt="" className="main-image"/>
                </div>
            </header>
        </div>
    );
}

export default App;
