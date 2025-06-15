import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">
              LMD <span className="text-gray-800">INTERNATIONAL</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-800 font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-800 font-medium">
              Services
            </Link>
            <Link href="#strengths" className="text-gray-700 hover:text-blue-800 font-medium">
              Our Strengths
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-800 font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+919971281622" 
              className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors"
            >
              <FiPhone className="text-white" />
              <span>+91-9971281622</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#strengths" 
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Strengths
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+919971281622" 
                className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <FiPhone className="text-white" />
                <span>+91-9971281622</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
