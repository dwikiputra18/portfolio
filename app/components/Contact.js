"use client";
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = 'dwikiputra1894@gmail.com';
    const subject = encodeURIComponent('Contact Inquiry');
    const body = encodeURIComponent('Hello, I would like to inquire about...');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-gray-700 mb-8">
          If you need a professional web developer for your project, feel free to reach out.
        </p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell me about your project or inquiry"
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-700">Or contact me directly:</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="mailto:dwikiputra1894@gmail.com" className="text-blue-600 text-2xl">
                <FaEnvelope />
              </a>
              <a href="tel:+6285974727274" className="text-blue-600 text-2xl">
                <FaPhone />
              </a>
              <a href="https://linkedin.com/in/muhammaddwikiputra" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
