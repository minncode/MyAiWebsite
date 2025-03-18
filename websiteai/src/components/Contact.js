import React from 'react';
import styles from '../css/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>연락처</h2>
      <p className={styles.text}>Email: [당신의 이메일]</p>
      <p className={styles.text}>
        GitHub: <a href="[당신의 GitHub URL]" className={styles.link}>[당신의 GitHub 사용자 이름]</a>
      </p>
      <p className={styles.text}>
        LinkedIn: <a href="[당신의 LinkedIn URL]" className={styles.link}>[당신의 이름]</a>
      </p>
    </section>
  );
}

export default Contact;