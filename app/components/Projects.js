"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/project.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Monstreation Website",
      description: "Developing Monstreation's profile website to showcase products and services.",
      image: "/images/monstre.png",
      link: "https://monstreation.com",
    },
    {
      title: "Inventory Management System",
      description: "An inventory tracking system using Laravel, React, and MySQL.",
      image: "/images/inventory.png",
      link: "https://your-inventory-system.com",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my projects and skills.",
      image: "/images/portfolio.png",
      link: "https://your-portfolio.com",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Hentikan observer setelah muncul
        }
      },
      { threshold: 0.2 } // Section akan terlihat ketika 20% sudah masuk viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles.projectsSection} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${isVisible ? styles.visible : ""}`}
            >
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
