import React from 'react';

function Skill(props) {
  return (
    <div className="skill-card">
      <h3>{props.title}</h3>
      <p>{props.explanation}</p>
    </div>
  );
}

function Skills() {
  const skills = [
    { title: 'HTML/CSS', explanation: '既存のサイト模写をしてコーディング方法を学びました。Sass も少し勉強済。' },
    { title: 'JavaScript (ES8)', explanation: 'プログラミング言語の基礎共通点を学び、ドットインストールでミニゲームアプリを作りながらDOM操作を学びました。' },
    { title: 'PHP', explanation: 'データの受け取りやCSRF対策、基本的なSQLとのデータのやりとりを学び、簡単なToDoリストアプリを作成しました。' },
    { title: 'SQL', explanation: 'MySQLで基本的な処理を学びました。' },
    { title: 'Git / GitHub', explanation: 'ローカルリポジトリにコミットし、完成したものをリモートリポジトリにプッシュする基本的な処理を学びました。' },
  ];


  const skillsItem = skills.map((skill, index) => {
    return (
      <Skill
        key={index}
        title={skill.title}
        explanation={skill.explanation}
      />
    );
  })


  return (
    <div className="skill-page">
      <span>独学したで習得したスキル</span>
      <div className="sill-container">
        <div className="skill-wrapper">
            {skillsItem}
        </div>
      </div>
      <span>目標</span>
      <div className="target-skill">
        <p>UI / UX を理解し、積極的に色々なことに挑戦するフロントエンドエンジニアを目指しています。</p>
      </div>
    </div>
  );
}

export { Skills };
