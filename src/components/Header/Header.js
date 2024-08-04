import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Wyatt LeVine</h1>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;