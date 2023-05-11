import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <h3>Tech Blog</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/">ブログ</a>
          </li>
          <li>
            <a href="/">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
