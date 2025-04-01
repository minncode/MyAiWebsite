import React, { useEffect, useRef } from 'react';
import styles from '../css/Home.module.css';

function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Simple animation for elements on load
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title && subtitle && button) {
      setTimeout(() => {
        title.classList.add(styles.visible);
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add(styles.visible);
      }, 800);
      
      setTimeout(() => {
        button.classList.add(styles.visible);
      }, 1300);
    }
  }, []);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 ref={titleRef} className={`${styles.title}`}>
          Hello, I'm <span className={styles.name}>Kim Minsung</span>
        </h1>
        <p ref={subtitleRef} className={`${styles.subtitle}`}>
          <span className={styles.typed}>Web & App Developer</span>
        </p>
        <div className={styles.buttonContainer}>
          <a href="#about" ref={buttonRef} className={`${styles.button}`}>
            <span>See More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  );
}

export default Home;