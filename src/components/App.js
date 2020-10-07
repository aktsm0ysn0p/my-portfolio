import React from 'react';
import logo from '../logo.svg';
import './App.css';
// import img from '../img/sample.png';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2>{props.item.title}</h2>
      <img src={require('../img/sample.png')} style={{ width: 150, height: 100}}/>
      <p>使用言語 :{props.item.language}</p>
      <p>{props.item.explanation}</p>
      <p>{props.item.url}</p>
    </section>
  );
}

function MyPortfolios() {
  const items = [
    { title: 'MySite', img: '../img/sample.png', language: 'HTML/CSS/JavaScript/PHP/MySOL', explanation: '初めての作品です', url: 'url' },
    { title: 'Todolist', img: '../img/sample.png', language: 'HTML/CSS/JavaScript', explanation: '趣味のの作品です', url: 'url２' },
  ];

  const portfolio = items.map(item => {
    return (
      <Portfolio
        item={item}
      />
    );
  });
  return (
    <div className="my-portfolios">
      <h1>MyPortfolios</h1>
      <div className="portfolios">
        {portfolio}
      </div>

    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <MyPortfolios />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
