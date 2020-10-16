import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Work } from './components/work';
import { Skills } from './components/skill';
import { About } from './components/about';
import { Home } from './components/home';
import { AppBar } from './appbar.js';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <AppBar />
    <Route exact path='/' component={Home} />
    <Route exact path='/work' component={Work} />
    <Route exact path='/skill' component={Skills} />
    <Route path='/About' component={About} />
  </Router>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
