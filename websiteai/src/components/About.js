import React from 'react';
import styles from '../css/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.text}>Ambitious and detail-oriented Bachelor of IT student specializing in Mobile and Web Development at RMIT Vietnam University. <br/> Proficient in Java, React, Swift, and Android Development, with a strong ability to solve complex problems and collaborate effectively in teams. <br/> Passionate about building innovative applications with real-world impact and eager to contribute to cutting-edge tech solutions.</p>
      <p className={styles.title1}>Key Skills</p>
      <p className={styles.text}>
      <p className={styles.text}>●	Full-Stack Development (Java, React, Node.js, Express, Firebase)</p>
      <p className={styles.text}>●	Mobile & Web Development (iOS, Android, HTML, CSS, JavaScript)</p>
      <p className={styles.text}>●	Database Management (Firebase Firestore, MongoDB)</p>
      <p className={styles.text}>●	Algorithm & Problem-Solving Skills</p>
      <p className={styles.text}>●	Version Control (Git, GitHub)</p>
      <p className={styles.text}>●	Team Collaboration & Leadership</p>
      </p>
    </section>
  );
}

export default About;