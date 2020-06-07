import React from 'react';
import PropTypes from 'prop-types';
import './styles/main.scss';

const App = ({ children }) => <>{children}</>;

App.propTypes = {
    children: PropTypes.node.isRequired
};

export default App;