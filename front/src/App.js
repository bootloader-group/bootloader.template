import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Wrapper from './components/App';

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            Henlo
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
