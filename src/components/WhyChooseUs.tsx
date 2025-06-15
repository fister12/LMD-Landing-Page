import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const strengths = [
    {
      title: "Global Reach",
      description: "Access to suppliers and manufacturers worldwide, allowing us to source even the most specialized items.",
      color: "bg-blue-800"
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery across India and 2-day express imports from major global hubs.",
      color: "bg-blue-700"
    },
    {
      title: "Technical Expertise",
      description: "Highly skilled engineers with experience across various industrial sectors and technologies.",
      color: "bg-blue-600"
    },
    {
      title: "Cost Effectiveness",
      description: "Competitive pricing while maintaining the highest quality standards for all products and services.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="strengths" className="py-16 bg-white relative overflow-hidden">
      {/* Background design element */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            What makes LMD International your ideal partner for industrial solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <div className={`${strength.color} h-2 w-full absolute top-0 left-0`}></div>
              <div className="px-6 py-8 bg-white border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-700">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-800 to-blue-600 p-10 rounded-xl shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience Our Excellence?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            From rare component sourcing to precision engineering solutions, we&apos;re here to support your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+919971281622"
              className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Call: +91-9971281622
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
