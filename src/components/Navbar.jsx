import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 text-white px-10 py-4 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold tracking-wide">Skyroot Clone</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about">About</a>
        <a href="#mission">Mission</a>
        <a href="#rockets">Rockets</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
