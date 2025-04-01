import React from 'react';
import styles from '../css/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>
        <div className={styles.underline}></div>
        
        <div className={styles.content}>
          <p className={styles.bio}>
            Ambitious and detail-oriented Bachelor of IT student specializing in Mobile and Web Development at RMIT Vietnam University. 
            Proficient in Java, React, Swift, and Android Development, with a strong ability to solve complex problems and collaborate effectively in teams. 
            Passionate about building innovative applications with real-world impact and eager to contribute to cutting-edge tech solutions.
          </p>
          
          <h3 className={styles.subtitle}>Key <span className={styles.highlight}>Skills</span></h3>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💻</div>
              <h4>Full-Stack Development</h4>
              <p>Java, React, Node.js, Express, Firebase</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📱</div>
              <h4>Mobile & Web</h4>
              <p>iOS, Android, HTML, CSS, JavaScript</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🗄️</div>
              <h4>Database Management</h4>
              <p>Firebase Firestore, MongoDB</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔍</div>
              <h4>Algorithm & Problem-Solving</h4>
              <p>Data structures, optimization</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔄</div>
              <h4>Version Control</h4>
              <p>Git, GitHub</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>👥</div>
              <h4>Team Collaboration</h4>
              <p>Leadership, communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;