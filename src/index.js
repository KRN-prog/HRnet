import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './utils/style/index.css';
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
