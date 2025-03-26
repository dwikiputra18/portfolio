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
  
    return (
      <section id="projects" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
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
  