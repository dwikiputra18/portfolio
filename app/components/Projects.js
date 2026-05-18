"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/project.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Monstreation Website",
      description: "Professional portfolio showcasing an extensive range of custom products and branding services, designed to maximize brand awareness and drive high conversion rates for clients.",
      image: "/images/monstreation-banner.png",
      link: "https://monstreation.com",
      tags: ["Web Design", "E-commerce"]
    },
    {
      id: 2,
      title: "Bali Divine Tours",
      description: "Interactive tour booking platform featuring advanced search capabilities and a secure, trustworthy payment system for seamless vacation planning and reservations.",
      image: "/images/bali-divine-tours-banner.png",
      link: "https://balidivinetour.com",
      tags: ["Travel", "Booking System"]
    },
    {
      id: 3,
      title: "Bali Haven Tour",
      description: "Modern travel agency website with an attractive gallery of tour packages and full responsive design that works perfectly across all devices and screen sizes.",
      image: "/images/bali-haven-tour-banner.png",
      link: "https://balihaventour.com",
      tags: ["Travel", "Tourism"]
    },
    {
      id: 4,
      title: "Bali Voyager",
      description: "User-friendly web application for browsing tour packages with intuitive UI/UX design and comprehensive destination information for informed travel decisions.",
      image: "/images/bali-voyager-banner.png",
      link: "https://balivoyagerco.com",
      tags: ["Web App", "Travel"]
    },
    {
      id: 5,
      title: "Bali In Tour Packages",
      description: "Customizable itinerary platform with real-time booking capabilities and premium customer support service to ensure exceptional travel experiences.",
      image: "/images/bali-in-tour-banner.png",
      link: "https://inbalitourpackage.com",
      tags: ["Travel Packages", "Booking"]
    },
    {
      id: 6,
      title: "Royal Bali Escape",
      description: "Premium tour operator website featuring elegant design and exclusive amenities for luxury travel experiences, catering to discerning travelers worldwide.",
      image: "/images/royal-bali-escape-banner.png",
      link: "https://royalbaliescape.com",
      tags: ["Luxury Travel", "Premium"]
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${isVisible ? styles.visible : ""}`}
            >
              <Image 
                src={project.image} 
                alt={project.title}
                width={1200}
                height={600}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
