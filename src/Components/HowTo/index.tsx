"use client"
import { motion } from 'framer-motion';

const AnimatedSection = () => {
  return (
    <div className=" container px-4 w-[95%] md:w-[90%]  flex flex-col md:flex-row items-center bg-blue-500  pt-10 pb-9  border-b border-ui-border-base mx-auto rounded-2xl overflow-hidden">
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/path/to/your/image.png"
          alt="Demo GIF"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div 
        className="md:w-1/2 mt-6 md:mt-0 md:ml-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">See How it Works</h2>
        <ul className="space-y-6 text-secondary list-none">
          <motion.li 
            className="mb-4 border-b pb-4 border-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-primary flex items-center gap-2">
              <div className="bg-black text-white rounded-full px-3 py-1">1</div>
              Download App and Create your Profiles
            </h3>
            <p className="text-gray-600">
              Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.
            </p>
          </motion.li>
          <motion.li 
            className="mb-4 border-b pb-4 border-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-primary flex items-center gap-2">
              <div className="bg-black text-white rounded-full px-3 py-1">2</div>
              Organize your Widgets
            </h3>
            <p className="text-gray-600">
              Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.
            </p>
          </motion.li>
          <motion.li 
            className="mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-primary flex items-center gap-2">
              <div className="bg-black text-white rounded-full px-3 py-1">3</div>
              Done! Enjoy Your New App Center
            </h3>
            <p className="text-gray-600">
              Flexible layouts, and instant results! Choose a pre-built header or create a custom layout that perfectly suits your needs.
            </p>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
