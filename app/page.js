import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export const metadata = {
  title: "Dwiki Putra | Web Developer Portfolio",
  description: "Portfolio resmi Dwiki Putra, seorang Web Developer yang berfokus pada Next.js, React, dan Laravel. Temukan proyek-proyek terbaik saya di sini.",
  keywords: ["Dwiki Putra", "Web Developer", "Next.js", "React", "Laravel", "Portfolio", "Frontend Developer", "Indonesia Developer"],
  authors: [{ name: "Dwiki Putra" }],
  creator: "Dwiki Putra",
  openGraph: {
    title: "Dwiki Putra | Web Developer Portfolio",
    description: "Lihat karya dan projek terbaik Dwiki Putra, Web Developer spesialis Next.js, React, dan Laravel.",
    url: "https://portfolio-dwk.vercel.app",
    siteName: "Dwiki Portfolio",
    images: [
      {
        url: "https://portfolio-dwk.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Dwiki Putra Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwiki Putra | Web Developer Portfolio",
    description: "Lihat karya dan projek terbaik Dwiki Putra, Web Developer spesialis Next.js, React, dan Laravel.",
    creator: "@dwikiputra18",
    images: ["https://portfolio-dwk.vercel.app/logo.png"],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-blue-500">Dwiki Putra</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          I&apos;m a passionate <span className="text-blue-400">Web Developer</span> specializing in
          modern web technologies like Next.js, React, and Laravel.
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition">
            Hire Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <About />
      {/* Project Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </main>
  );
}
