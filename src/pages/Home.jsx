import React, { useEffect, useState } from "react";
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
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const fullText = "Welcome to Harikrishna Motors";

 const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -100; // adjust this to control scroll position
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


  useEffect(() => {
    const handleTyping = () => {
      const current = fullText.substring(0, displayText.length + (isDeleting ? -1 : 1));
      setDisplayText(current);

      if (!isDeleting && current === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && current === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 50);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, loopNum]);

  return (
    <div className="min-h-screen scroll-smooth">
      {/* ✅ Hero Section */}
      <motion.section
        id="home"
        className="relative text-white py-24 px-6 flex flex-col items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0.5 }} animate={{ opacity: 0.8 }} transition={{ duration: 2 }}>
          <img src={back4} alt="Background" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full z-0" />
        <motion.div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500 opacity-20 blur-2xl rounded-full z-0" />

        <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          {displayText}
          <span className="text-white animate-pulse">|</span>
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-white font-semibold mb-8 text-center max-w-2xl relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
          Experience premium car care, expert mechanics, and the best accessories for every model. Your car deserves the best!
        </motion.p>

        {/* ✅ Clickable Services (Scroll with ID) */}
        <motion.div
          className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {[
            { name: "CAR SERVICING", icon: "🛠️", id: "car-servicing" },
            { name: "AIRCON SERVICING", icon: "❄️", id: "aircon-servicing" },
            { name: "VEHICLE HEALTH CHECK", icon: "✅", id: "vehicle-health" },
            { name: "AUTOMOBILE REPAIR", icon: "🔧", id: "automobile-repair" },
          ].map((service, idx) => (
            <div
              key={idx}
              onClick={() => scrollTo(service.id)}
              className="cursor-pointer flex items-center justify-between px-6 py-5 rounded-2xl bg-gradient-to-br from-[#1e293b]/40 to-[#334155]/70 text-white backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out group hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(59,130,246,0.6)] hover:backdrop-blur-lg"
            >
              <span className="text-white text-lg font-semibold drop-shadow-md tracking-wide">{service.name}</span>
              <span className="text-3xl drop-shadow-sm">{service.icon}</span>
            </div>
          ))}
        </motion.div>
      </motion.section>
      {/* ✅ Service Sections */}
     
      {/* ✅ Accessories Section */}
      <section
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
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
