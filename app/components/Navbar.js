'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white shadow-md'}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/">
            <Image 
              src={isScrolled ? "/images/logo-white.png" : "/images/logo.png"} 
              alt="Logo" 
              width={40} 
              height={40} 
            />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-white' : 'text-black'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex space-x-6 hidden ${isScrolled ? 'text-white' : 'text-black'}`}>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        {isOpen && (
          <ul className="md:hidden bg-white p-4 space-y-2 text-black">
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
