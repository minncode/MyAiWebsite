import React from 'react';
import styles from '../css/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.text}>저는 [당신의 기술/경험/목표]를 가진 개발자입니다.</p>
      <p className={styles.text}>기술 스택: React, Node.js, Python, [추가 기술]</p>
    </section>
  );
}

export default About;