import React from "react";
import { motion } from "framer-motion";

import car1 from "../assets/car1.webp";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.avif";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.webp";
import car7 from "../assets/car7.avif";
import car8 from "../assets/car8.jpeg";
import back2 from "../assets/back2.png";
import back4 from "../assets/back4.png";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const cars = [
  { img: car1, title: "Luxury Sedan", desc: "Indulge in refined comfort and advanced technology..." },
  { img: car2, title: "Sport Coupe", desc: "Feel the adrenaline with our sport coupes..." },
  { img: car3, title: "Family SUV", desc: "Perfect for family adventures..." },
  { img: car4, title: "Electric Vehicle", desc: "Go green with our electric vehicles..." },
  { img: car5, title: "Classic Convertible", desc: "Embrace the open road..." },
  { img: car6, title: "Off-Road Truck", desc: "Tackle any terrain with confidence..." },
  { img: car7, title: "City Hatchback", desc: "Navigate city life with ease..." },
  { img: car8, title: "Premium Wagon", desc: "Travel in style and comfort..." },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative text-white py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* ✅ Only the image layer with reduced opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={back4}
            alt="Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Colored blur elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500 opacity-20 blur-2xl rounded-full z-0"></div>

        {/* Main content */}
        <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg relative z-10" variants={heroChild}>
          Welcome to Harikrishna Motors
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-blue-100 mb-8 text-center max-w-2xl relative z-10" variants={heroChild}>
          Experience premium car care, expert mechanics, and the best accessories for every model. Your car deserves the best!
        </motion.p>
      </motion.section>

      {/* Accessories Section */}
      <section
        id="accessories"
        className="relative py-20 px-6"
        style={{
          backgroundImage: `url(${back2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#232526] to-[#3b82f6] opacity-80 pointer-events-none"></div>
        <motion.h2
          className="relative text-3xl font-bold text-white mb-12 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured Cars
        </motion.h2>
        <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col group transition-all duration-300 hover:shadow-2xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex items-center justify-center bg-gray-100 w-full aspect-[4/3] overflow-hidden">
                <img src={car.img} alt={car.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-2xl mb-2 text-blue-800">{car.title}</h3>
                <p className="text-gray-600 text-base mb-4">{car.desc}</p>
                <motion.a
                  href="#owners"
                  className="mt-auto inline-block px-4 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                >
                  Meet Our Owners
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
