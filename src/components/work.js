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
    { title: 'My-Portfolio', img: require('../img/my-portfolio.png'), language: 'React.js', explanation: '初ライブラリ使用作品。Reactを２週間勉強し、５日で作成しました。', url: '' },
    { title: 'Todolist', img: require('../img/todolist.png'), language: 'HTML/CSS/JavaScript/PHP/MySQL', explanation: '初作品のCRUDアプリ。制作期間１週間。Herokuを使ってデプロイしました。', url: 'https://mytodolist-app-1.herokuapp.com/' },
  ];

  const portfolio = items.map( item => {
    return (
      <Portfolio>
        <a href={item.url}>
          <img src={item.img} />
          <div className="portfolio-inner">
            <h2>{item.title}</h2>
            <p>使用言語／ライブラリ: {item.language}</p>
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
