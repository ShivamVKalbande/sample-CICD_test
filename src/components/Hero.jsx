import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-white relative">
      <img 
        src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 text-center px-5">
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Opening Space For All
        </motion.h1>

        <motion.p
          className="mt-4 text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A modern React template inspired by space technology websites.
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-3 bg-white text-black rounded-lg font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
