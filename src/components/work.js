import React from 'react';

function Portfolio(props) {
  return (
    <a href={props.url} className="portfolio-wrapper">
      <section className="portfolio">
        <h2>{props.title}</h2>
        <img src={require('../img/sample.png')} style={{ width: 150, height: 100 }} />
        <p>使用言語 :{props.language}</p>
        <p>{props.explanation}</p>
        <p>{props.url}</p>
      </section>
    </a>
  );
}

function MyPortfolios() {
  const items = [
    { title: 'ポートフォリオ', img: '../img/sample.png', language: 'HTML/CSS/JavaScript/PHP/MySOL', explanation: '初めての作品です', url: 'url' },
    { title: 'Todolist', img: '../img/todolist.png', language: 'HTML/CSS/JavaScript/PHP/MySQL', explanation: 'CRUDアプリです。初作品🐨', url: 'https://mytodolist-app-1.herokuapp.com/' },
  ];

  const portfolio = items.map((item, index) => {
    return (
      <Portfolio
        key={index}
        title={item.title}
        language={item.language}
        explanation={item.explanation}
        url={item.url}
      />
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
