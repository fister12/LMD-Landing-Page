import { motion } from 'framer-motion';
import { FiClock, FiTool, FiGlobe, FiBriefcase } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiClock className="w-8 h-8 text-blue-800" />,
      title: "Lightning-Fast Sourcing & Delivery",
      description: [
        "Same-day delivery across India via major airports",
        "2-day express imports from all major cities in China and beyond"
      ]
    },
    {
      icon: <FiTool className="w-8 h-8 text-blue-800" />,
      title: "Reverse Engineering Expertise",
      description: [
        "Reproduction of critical imported components via micron-level 3D scanning",
        "Cost-effective and accurate alternatives to expensive or obsolete machine parts"
      ]
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-blue-800" />,
      title: "Global Trade Support",
      description: [
        "Export facilitation for Indian products",
        "Assistance in sourcing machines & products for business continuity"
      ]
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-blue-800" />,
      title: "Business Consulting Services",
      description: [
        "Guidance on international trade, machinery acquisition",
        "Process optimization and business continuity planning"
      ]
    }
  ];
  
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Strengths</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            At LMD International, we pride ourselves on our unique capabilities that set us apart in the global sourcing and engineering industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="bg-blue-100 p-3 rounded-lg">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-800 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md transition-colors"
          >
            <span>Discuss Your Requirements</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
