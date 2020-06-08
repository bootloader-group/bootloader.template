import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Wrapper from './components/wrapper/wrapper';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <Wrapper>
      <Router>
        <Navigation></Navigation>
        <Switch>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
