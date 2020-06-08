import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Wrapper from './components/wrapper/wrapper';
import Navigation from './components/navigation/navigation';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';


function App() {
  return (
    <Wrapper>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
