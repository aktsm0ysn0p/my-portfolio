import React from 'react';
import './css/work.css';

function Portfolio(props) {
  return (
    <div className="portfolio">
      {props.children}
    </div>
  );
}

function MyPortfolios() {
  const items = [
    { title: 'ポートフォリオ', img: '../img/sample.png', language: 'HTML/CSS/JavaScript/PHP/MySOL', explanation: '初めての作品です', url: 'url' },
    { title: 'Todolist', img: '../img/todolist.png', language: 'HTML/CSS/JavaScript/PHP/MySQL', explanation: 'CRUDアプリです。初作品🐨', url: 'https://mytodolist-app-1.herokuapp.com/' },
  ];

  const portfolio = items.map( item => {
    return (
      <Portfolio>
        <a href={item.url}>
          <img src={require('../img/sample.png')} />
          <div className="portfolio-inner">
            <h2>{item.title}</h2>
            <p>使用言語: {item.language}</p>
            <p>{item.explanation}</p>
          </div>
        </a>
      </Portfolio>
    );
  });
  return (
    <div className="portfolio-container">
      <h1>My Works</h1>
      <div className="portfolio-wrapper">
        {portfolio}
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="work">
      <MyPortfolios />
    </div>
  );
}

export { Work };
