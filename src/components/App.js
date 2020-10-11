import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Work } from './work.js';
import { Skills } from './skill.js';
import { About } from './about.js';
import { Home } from './home.js';
import { AppBar } from './appbar.js';


class App extends React.Component {
  render() {
    return (
        <Router>
            <AppBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/skill' component={Skills} />
            <Route path='/About' component={About} />
        </Router>
    );
  }
}

export default App;
