import React, { useState } from "react";
import { motion } from "framer-motion";
import alloy from "../assets/alloy.webp";
import fog from "../assets/fog.webp";
import seatcover from "../assets/seat cover.webp";
import stereo from "../assets/stereos.png";
import mat from "../assets/mat.jpg";
import camera from "../assets/camera.webp";

const Accessories = () => {
  const [accessories] = useState([
    { id: 1, name: "Alloy Wheels", price: 5000, available: true, img: alloy },
    { id: 2, name: "Fog Lights", price: 3000, available: false, img: fog },
    { id: 3, name: "Seat Covers", price: 2500, available: true, img: seatcover },
    { id: 4, name: "Stereo System", price: 7000, available: true, img: stereo },
    { id: 5, name: "Floor Mats", price: 1200, available: true, img: mat },
    { id: 6, name: "Rear Camera", price: 3500, available: false, img: camera },
  ]);

  return (
    <div id="accessories" className="relative py-16 px-4 overflow-hidden">
      {/* Background Video */}
     

      {/* Overlay to darken or soften background */}
<div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Car Accessories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.04 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden flex flex-col transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-gray-100 w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-base mb-2">Price: ₹{item.price}</p>
               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
