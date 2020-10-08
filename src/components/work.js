import React from 'react';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2>{props.title}</h2>
      <img src={require('../img/sample.png')} style={{ width: 150, height: 100 }} />
      <p>使用言語 :{props.language}</p>
      <p>{props.explanation}</p>
      <p>{props.url}</p>
    </section>
  );
}

function MyPortfolios() {
  const items = [
    { title: 'ポートフォリオ', img: '../img/sample.png', language: 'HTML/CSS/JavaScript/PHP/MySOL', explanation: '初めての作品です', url: 'url' },
    { title: 'Todolist', img: '../img/sample.png', language: 'HTML/CSS/JavaScript', explanation: '趣味のの作品です', url: 'url２' },
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
    <div className="my-portfolios">
      <h1>My Works</h1>
      <div className="portfolios">
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
