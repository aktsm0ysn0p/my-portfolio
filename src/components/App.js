import React from 'react';
import './App.css';
import { Work} from './work.js';
import { Skills } from './skill.js';
import { About } from './about.js';
import { Home } from './home.js';

// function Title() {
//   return (
//     <div>
//       <h1>TAKADA</h1>
//     </div>
//   );
// }

// function OthersItem(props) {
//   return (
//     <li>
//       {props.other}
//     </li>
//   );
// }

// function Others() {
//   // const others = ['WORK', 'SKILL', 'ABOUT'];
//   return (
//     <ul>
//       {/* <OthersItem /> */}
//     </ul>
//   );
// }


// function Header() {
//   return (
//     <header>
//       <Title />
//       <Others />
//     </header>
//   );
// }




class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Home />
        <Work />
        <Skills />
        <About />
      </div>
    );
  }
}

export default App;
