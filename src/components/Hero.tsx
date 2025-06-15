import { FiArrowRight, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-blue-800 bg-blue-100 rounded-full text-sm font-semibold">
                Global Precision Sourcing & Engineering
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Global Partner for <span className="text-blue-800">Industrial Solutions</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              Specializing in sourcing hard-to-find spares and consumables for industrial machines
              with lightning-fast delivery and precision engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md transition-colors w-full sm:w-auto"
              >
                <span>Contact Us</span>
                <FiArrowRight />
              </a>
              <a 
                href="#services" 
                className="flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md transition-colors w-full sm:w-auto"
              >
                <span>Our Services</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 p-6 rounded-lg shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="mt-1 flex-shrink-0" />
                  <p>East Delhi, India</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FiMail className="mt-1 flex-shrink-0" />
                  <a href="mailto:info@lmdinternational.com" className="hover:underline">
                    info@lmdinternational.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FiPhone className="mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+919971281622" className="hover:underline">
                      +91-9971281622
                    </a>
                    <p className="text-sm text-blue-100">(WhatsApp Available)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-500">
                <p className="text-center font-bold">
                  Speed | Precision | Global Reach
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
