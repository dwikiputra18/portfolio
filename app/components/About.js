import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src="/images/PP.PNG" 
              alt="About Me" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a professional web developer with extensive experience in building modern and efficient web applications.
              Passionate about coding and problem-solving, I specialize in technologies like PHP, Laravel, JavaScript, React.js, Express.js, MySQL, and PostgreSQL.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              My goal is to create high-quality, user-friendly, and scalable digital solutions that meet the needs of businesses and individuals.
              Whether it’s developing an e-commerce platform, an admin dashboard, or a portfolio website, I am dedicated to delivering top-notch results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
