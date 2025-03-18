import React from 'react';
import styles from '../css/Home.module.css';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1 className={styles.title}>안녕하세요, 저는 [당신의 이름]입니다!</h1>
      <p className={styles.subtitle}>웹 개발자이자 AI 애호가입니다.</p>
      <a href="#about" className={styles.button}>더 알아보기</a>
    </section>
  );
}

export default Home;