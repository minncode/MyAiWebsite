import React from 'react';
import styles from '../css/Header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <h2>[당신의 이름]</h2>
      <ul className={styles.navList}>
        <li><a href="#home" className={styles.link}>Home</a></li>
        <li><a href="#about" className={styles.link}>About</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#chat" className={styles.link}>Chat</a></li>
        <li><a href="#contact" className={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;