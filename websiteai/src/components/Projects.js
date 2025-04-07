import React, { useState } from "react";
import styles from "../css/Projects.module.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "MinsungAI site",
      description:
        "An interactive chat website using Google Gemma model.",
      technologies: ["React", "Node.js"],
      category: "ai",
      image: "/images/minsungai.png",
    },
    {
      id: 2,
      title: "Pixora App Project",
      description:
        "Designed and developed an educational AI image classification Android app for children",
      technologies: ["Java(Android)", "TensorFlow Lite", "Firebase"],
      category: "ai",
      image: "/images/Pixora.png",
    },
    {
      id: 3,
      title: "SplitFriend App Project",
      description:
        "Implemented the back-end for a group expense-sharing Android app, focusing on secure payment processing and real-time activity tracking.",
      technologies: ["Java(Android)", "Stripe API", "Firebase"],
      category: "mobile",
      image: "/images/splitfriend.png",
    },
    {
      id: 4,
      title: "Interactio Social Media Platform",
      description:
        "Develope a full-stack social media platform inspired by platforms like Facebook.",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "web",
      image: "/images/interactio.png",
    },
    {
      id: 5,
      title: "CleanViet – The Waste Classification App",
      description:
        "The App helps users classify waste using image recognition and simple quiz.",
      technologies: ["React", "Node.js", "Firebase"],
      category: "mobile",
      image: "/images/cleanviet.png",
    },
    {
      id: 6,
      title: "RMITdays - RMIT Campus Web App",
      description:
        "Created a campus society web based application to support student experience at RMIT University.",
      technologies: ["HTML/CSS/JS", "Node.js", "MongoDB"],
      category: "web",
      image: "/images/rmitdays.png",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Projects <span className={styles.highlight}>Portfolio</span>
        </h2>
        <div className={styles.underline}></div>

        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "all" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "web" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("web")}
          >
            Web
          </button>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "mobile" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("mobile")}
          >
            Mobile
          </button>
          <button
            className={`${styles.filterBtn} ${
              activeFilter === "ai" ? styles.active : ""
            }`}
            onClick={() => setActiveFilter("ai")}
          >
            AI
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${styles.projectImg}
                            ${project.id === 1 ? styles.webImg : ""}
                            ${project.id === 2 ? styles.mobileImg : ""}
                            ${project.id === 3 ? styles.mobileImg : ""}
                            ${project.id === 4 ? styles.webImg : ""}
                            ${project.id === 5 ? styles.mobileImg : ""}
                            ${project.id === 6 ? styles.mobileImg : ""}`}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
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
