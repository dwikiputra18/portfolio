"use client";
import { useEffect, useState } from "react";
import style from "../styles/about.module.css"; // Import CSS Module

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Gambar masuk dari kiri */}
          <div
            className={`md:w-1/2 mb-6 md:mb-0 flex justify-center ${
              isVisible ? style.fadeLeft : "opacity-0"
            }`}
          >
            <img
              src="/images/PP.PNG"
              alt="About Me"
              className="rounded-lg shadow-lg w-3/4 md:w-full max-w-sm"
            />
          </div>
          {/* Deskripsi masuk dari kanan */}
          <div
            className={`md:w-1/2 md:pl-10 ${
              isVisible ? style.fadeRight : "opacity-0"
            }`}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a professional web developer with extensive experience in
              building modern and efficient web applications. Passionate about
              coding and problem-solving, I specialize in technologies like
              PHP, Laravel, JavaScript, React.js, Express.js, MySQL, and
              PostgreSQL.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              My goal is to create high-quality, user-friendly, and scalable
              digital solutions that meet the needs of businesses and
              individuals. Whether it’s developing an e-commerce platform, an
              admin dashboard, or a portfolio website, I am dedicated to
              delivering top-notch results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
