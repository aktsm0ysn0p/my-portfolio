import React from 'react';
import { Link } from 'react-router-dom';
// import { Work } from './components/work';
// import { Skills } from './components/skill';
// import { About }  from './components/about';

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
          <li key="1"><Link to="/" className="app-list" >HOME</Link></li>
          <li key="2"><Link to="/work" className="app-list">WORK</Link></li>
          <li key="3"><Link to="/skill" className="app-list">SKILL</Link></li>
          <li key="4"><Link to="/about" className="app-list">ABOUT</Link></li>
        </ul>
      </Headerbar>
    );
  }
}



export { AppBar };
