import React from 'react';
import './css/about.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div>
        <address>
          <span>aktsm0ysn0p@gmail.com</span>
        </address>
        <p>※問い合わせフォームは準備中です</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h2>About Me</h2>
      <div>
        <p>
          Name: Aika Takada
        <br />
        Birthday: 1996/10/09
        <br />
        Career: 接客業を中心に働いてきました。IT業界未経験。
        <br />
        Hobby: YouTube、ゲーム、ナルト、散歩
        <br />
        GitHub: <a href="https://github.com/aktsm0ysn0p">https://github.com/aktsm0ysn0p</a>
        </p>
      </div>

    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <Profile />
      <Contact />
    </div>
  );
}

export { About };
