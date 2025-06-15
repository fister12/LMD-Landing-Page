import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">LMD INTERNATIONAL</h2>
            <p className="text-gray-300 mb-4">
              Your Global Partner for Precision Sourcing & Engineering
            </p>
            <p className="text-gray-300">
              Speed | Precision | Global Reach
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#strengths" className="text-gray-300 hover:text-white transition-colors">
                  Our Strengths
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">📍</span>
                <span className="text-gray-300">East Delhi, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">✉️</span>
                <a href="mailto:info@lmdinternational.com" className="text-gray-300 hover:text-white transition-colors">
                  info@lmdinternational.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">📞</span>
                <a href="tel:+919971281622" className="text-gray-300 hover:text-white transition-colors">
                  +91-9971281622
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2"></span>
                <span className="text-gray-300">(WhatsApp Available)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} LMD INTERNATIONAL. All rights reserved.
          </p>
          <div className="mt-2">
            <span className="text-gray-500 text-sm">
              Designed and developed for global business solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
