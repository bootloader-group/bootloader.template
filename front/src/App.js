import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/main.scss';

import Wrapper from './components/wrapper/wrapper';
import Navigation from './components/navigation/navigation';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import My404Page from './pages/my404';

function App() {
  return (
    <Wrapper>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={My404Page} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
