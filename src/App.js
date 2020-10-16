import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Work } from './components/work';
import { Skills } from './components/skill';
import { About } from './components/about';
import { Home } from './components/home';
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
