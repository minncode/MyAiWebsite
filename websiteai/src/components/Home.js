import React from 'react';
import styles from '../css/Home.module.css';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1 className={styles.title}>Hello, I'm Kim Minsung</h1>
      <p className={styles.subtitle}>Web & App Developer</p>
      <a href="#about" className={styles.button}>See More</a>
    </section>
  );
}

export default Home;