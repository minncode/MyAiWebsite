import React from 'react';
import styles from '../css/Projects.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectItem}>
        <h3 className={styles.projectTitle}>DeepSeek 웹사이트</h3>
        <p className={styles.projectDesc}>LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.</p>
        <p className={styles.projectTech}>기술: React, Node.js</p>
      </div>
      {/* 다른 프로젝트 추가 가능 */}
    </section>
  );
}

export default Projects;