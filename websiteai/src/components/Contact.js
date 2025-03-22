import React from "react";
import styles from "../css/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contacts</h2>
      <p className={styles.text}>Email: kikimin19@gmail.com</p>
      <p className={styles.text}>
        GitHub:{" "}
        <a
          href="https://github.com/minncode"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          minncode Github
        </a>
      </p>
      <p className={styles.text}>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/minsung-kim-595a64273/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Minsung LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Contact;
