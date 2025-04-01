import React, { useState } from 'react';
import styles from '../css/Projects.module.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'DeepSeek 웹사이트',
      description: 'LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.',
      technologies: ['React', 'Node.js'],
      category: 'web',
      image: '/img/deepseek.jpg' // placeholder path
    },
    {
      id: 2,
      title: 'Image Classify',
      description: 'LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.',
      technologies: ['React', 'Node.js'],
      category: 'ai',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 3,
      title: 'Image Classify Pro',
      description: 'LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.',
      technologies: ['React', 'Node.js'],
      category: 'ai',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 4,
      title: 'Image Classify App',
      description: 'LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.',
      technologies: ['React', 'Node.js'],
      category: 'mobile',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 5,
      title: 'Image Classify Web',
      description: 'LM Studio의 DeepSeek 모델을 활용한 인터랙티브 채팅 웹사이트.',
      technologies: ['React', 'Node.js'],
      category: 'web',
      image: '/img/imageclassify.jpg' // placeholder path
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects <span className={styles.highlight}>Portfolio</span></h2>
        <div className={styles.underline}></div>
        
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`${styles.filterBtn} ${activeFilter === 'web' ? styles.active : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web
          </button>
          <button 
            className={`${styles.filterBtn} ${activeFilter === 'mobile' ? styles.active : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`${styles.filterBtn} ${activeFilter === 'ai' ? styles.active : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI
          </button>
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.placeholder}></div>
                <div className={styles.overlay}>
                  <a href="#" className={styles.viewBtn}>View Project</a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;