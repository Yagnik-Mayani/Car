import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import backv1 from "../assets/backv1.mp4";

const carServicing = [
  { name: "Car Inspection", price: "₹500" },
  { name: "Car Suspension & Fitment Services", price: "₹500" },
  { name: "Car Tyre & Wheel Services", price: "₹300" },
  { name: "Car Polishing Services", price: "₹300" },
  { name: "Car Cluth & Body Parts Services", price: "₹300" },
  { name: "Car Lights & Fittings", price: "₹300" },
  { name: "Car Regular Services", price: "₹1000" },
  { name: "Car Battery Repairs & Services", price: "₹300" },
  { name: "Car Mechanical Repairs", price: "₹499" },
  { name: "Car Wash Services", price: "₹250" },
];

const airconServicing = ["Car AC Repair & Services ₹1000"];
const vehicleHealthCheck = ["Car Denting and Painting Services"];
const automobileRepair = [
  "CNG Conversion Kit Repair & Services",
  "CNG Kit Servicing",
  "CNG Conversion Kit Maintenance",
  "Compressed Natural Gas Kit Repair",
  "CNG Adaptation Kit Services",
  "CNG Retrofit Kit Services",
  "CNG Cylinder Testing Services",
  "CNG Conversion Kit Testing Services",
  "Automobile Services",
];

const vehicleSpecialisation = [
  "DoorStep Service", "Weighbridge Services", "Service Guarantee",
  "Emergency Service", "Locked / Lost Keys", "Car Pickup And Drop",
  "Auto Detailing", "Oil Change", "Membership Required", "Car Detailing",
  "Doorstep Car Repair", "Battery Jump-Start"
];

const SectionHeader = ({ title }) => (
  <h3 className="text-xl font-semibold text-white mt-12 mb-6 underline underline-offset-4">
    {title}
  </h3>
);
const serviceCardClass =
  "flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/10 p-4 transition duration-300 group " +
  "hover:shadow-[0_0_15px_rgba(255,255,255,0.3),0_0_25px_rgba(59,130,246,0.6)]";

const serviceCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden scroll-smooth" id="services">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backv1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-10 tracking-tight">
          🚗 Our Garage Services
        </h2>

        {/* Section 1 */}
        <div id="car-servicing">
          <SectionHeader title="1. CAR SERVICING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {carServicing.map((item, index) => (
              <motion.div
                key={index}
                className={serviceCardClass}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
                <span className="font-medium group-hover:text-blue-600 transition">
                  {item.name} — <strong>{item.price}</strong>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div id="aircon-servicing">
          <SectionHeader title="2. AIRCON SERVICING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {airconServicing.map((item, index) => (
              <motion.div
                key={index}
                className={serviceCardClass}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
                <span className="font-medium group-hover:text-blue-600 transition">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div id="vehicle-health">
          <SectionHeader title="3. VEHICLE HEALTH CHECK" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {vehicleHealthCheck.map((item, index) => (
              <motion.div
                key={index}
                className={serviceCardClass}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
                <span className="font-medium group-hover:text-blue-600 transition">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div id="automobile-repair">
          <SectionHeader title="4. AUTOMOBILE REPAIR" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {automobileRepair.map((item, index) => (
              <motion.div
                key={index}
                className={serviceCardClass}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
                <span className="font-medium group-hover:text-blue-600 transition">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div id="vehicle-specialisation">
          <SectionHeader title="5. VEHICLE SPECIALISATION" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {vehicleSpecialisation.map((item, index) => (
              <motion.div
                key={index}
                className={serviceCardClass}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
                <span className="font-medium group-hover:text-blue-600 transition">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
