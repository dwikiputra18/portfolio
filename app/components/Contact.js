"use client";
import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaTiktok, FaPaperPlane, FaCheck, FaGit, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const email = 'dwikiputra1894@gmail.com';
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Muhammad Dwiki Putra",
      link: "https://linkedin.com/in/muhammaddwikiputra",
      color: "from-cyan-500 to-cyan-600",
      external: true
    }
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/dwikiputra18", label: "GitHub" },
    { icon: FaInstagram, link: "https://instagram.com/wiklycode.dev", label: "Instagram" },
    { icon: FaTiktok, link: "https://tiktok.com/@wiklycode.dev", label: "TikTok" },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Professional Info Section */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-8">Why Work Together?</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-0.5 rounded-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">✓ Professional Expertise</h4>
                  <p className="text-gray-300">
                    Years of experience in building high-performance, scalable web solutions tailored to your business needs.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-0.5 rounded-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">✓ Modern Technologies</h4>
                  <p className="text-gray-300">
                    Specialized in cutting-edge frameworks and best practices to deliver responsive and efficient applications.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-0.5 rounded-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">✓ Quick Turnaround</h4>
                  <p className="text-gray-300">
                    Committed to delivering quality results within tight deadlines without compromising on excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Connect on professional networks</p>
              <div className="flex gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      title={method.title}
                      className="group w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                    >
                      <Icon className="text-xl text-white" />
                    </a>
                  );
                })}
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="group w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                    >
                      <Icon className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-blue-400 transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 transition-all duration-300 group-focus-within:bg-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-blue-400 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 transition-all duration-300 group-focus-within:bg-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-blue-400 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 transition-all duration-300 resize-none group-focus-within:bg-gray-600"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  {submitted ? (
                    <>
                      <FaCheck className="text-lg" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-400 text-sm text-center mt-6">
                I'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-bold mb-2">Let's Build Something Great Together</h3>
          <p className="text-blue-100 mb-4">
            Fill out the form above and I'll be in touch with you shortly to discuss your project in detail.
          </p>
          <p className="text-sm text-blue-200">
            Response time: Within 24 business hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
