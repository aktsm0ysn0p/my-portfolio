import React from 'react';
import { Link } from 'react-router-dom';
import { Work } from './work.js';
import { Skills } from './skill.js';
import { About } from './about.js';
// import { Home } from './home.js';

function Headerbar(props) {
  return (
    <div className="app-header">
      <header>
        {props.children}
      </header>
    </div>
  );
}

class AppBar extends React.Component {
  render() {
    return (
      <Headerbar>
        <ul className="app-lists">
          <li><Link to="/" className="app-list" >HOME</Link></li>
          <li><Link to="/work" className="app-list">WORK</Link></li>
          <li><Link to="/skill" className="app-list">SKILL</Link></li>
          <li><Link to="/about" className="app-list">ABOUT</Link></li>
        </ul>
      </Headerbar>
    );
  }
}



export { AppBar };
