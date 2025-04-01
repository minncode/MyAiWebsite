import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../css/Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in <span className={styles.highlight}>Touch</span></h2>
        <div className={styles.underline}></div>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <p className={styles.intro}>Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
            
            <div className={styles.contactGrid}>
              <a href="mailto:kikimin19@gmail.com" className={styles.contactCard}>
                <div className={styles.iconContainer}>
                  <FaEnvelope className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>Email</h3>
                  <p>kikimin19@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/minncode" 
                className={styles.contactCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.iconContainer}>
                  <FaGithub className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>GitHub</h3>
                  <p>minncode</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/minsung-kim-595a64273/" 
                className={styles.contactCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.iconContainer}>
                  <FaLinkedin className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3>LinkedIn</h3>
                  <p>Minsung Kim</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <form className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" className={styles.formInput} required />
              </div>
              
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" className={styles.formInput} required />
              </div>
              
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" className={styles.formTextarea} rows="5" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;