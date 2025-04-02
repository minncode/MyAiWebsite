import React, { useState } from 'react';
import styles from '../css/Projects.module.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'My website with AI chat',
      description: 'An interactive chat website leveraging LM Studio\'s DeepSeek model.',
      technologies: ['React', 'Node.js'],
      category: 'web',
      image: '/img/deepseek.jpg' // placeholder path
    },
    {
      id: 2,
      title: 'Pixora App Project',
      description: 'Designed and developed an educational AI image classification Android app for children, using Java and TensorFlow Lite.',
      technologies: ['Java(Android)', 'TensorFlow Lite', 'Firebase'],
      category: 'ai',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 3,
      title: 'SplitFriend App Project',
      description: 'Implemented the back-end for a group expense-sharing Android app, focusing on secure payment processing and real-time activity tracking.',
      technologies: ['Java(Android)', 'Stripe API', 'Firebase'],
      category: 'ai',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 4,
      title: 'Interactio Social Media Platform',
      description: 'Develope a full-stack social media platform using React, Node.js, and MongoDB, inspired by platforms like Facebook.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'mobile',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 5,
      title: 'CleanViet – The Waste Classification App',
      description: 'The App helps users classify waste using image recognition and simple quiz.',
      technologies: ['React', 'Node.js'],
      category: 'web',
      image: '/img/imageclassify.jpg' // placeholder path
    },
    {
      id: 6,
      title: 'RMITdays - Campus Companion Web App',
      description: 'Created a campus society web based application to support student experience at RMIT University.',
      technologies: ['HTML/CSS/JS', 'Node.js', 'MongoDB'],
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