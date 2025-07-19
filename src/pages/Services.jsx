import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import backv1 from "../assets/backv1.mp4";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  "hover:shadow-[0_0_15px_rgba(255,255,255,0.3),0_0_25px_rgba(59,130,246,0.6)] cursor-pointer";

const serviceCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    date: "",
  });

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService("");
    setFormData({ name: "", email: "", contact: "", date: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      contact_number: formData.contact,
      selected_service: selectedService,
      booking_date: formData.date,
    };

    emailjs
      .send("service_27f05l5", "template_b3vk28s", templateParams, "UzfehVF2zLWCAcf9g")
      .then(() => {
        toast.success("✅ Booking request sent successfully!");
        handleCloseForm();
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("❌ Failed to send booking. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  };

  const renderServiceCards = (services) =>
    services.map((item, index) => {
      const name = typeof item === "string" ? item : item.name;
      return (
        <motion.div
          key={index}
          className={serviceCardClass}
          variants={serviceCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onClick={() => handleServiceClick(name)}
        >
          <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
          <span className="font-medium group-hover:text-blue-600 transition">
            {name} {item.price && <>— <strong>{item.price}</strong></>}
          </span>
        </motion.div>
      );
    });

  return (
    <section className="relative py-16 px-6 overflow-hidden scroll-smooth" id="services">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" src={backv1} autoPlay loop muted playsInline />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl font-semibold mb-10 tracking-tight">🚗 Our Garage Services</h2>

        <div id="car-servicing">
          <SectionHeader title="1. CAR SERVICING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {renderServiceCards(carServicing)}
          </div>
        </div>

        <div id="aircon-servicing">
          <SectionHeader title="2. AIRCON SERVICING" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {renderServiceCards(airconServicing)}
          </div>
        </div>

        <div id="vehicle-health">
          <SectionHeader title="3. VEHICLE HEALTH CHECK" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {renderServiceCards(vehicleHealthCheck)}
          </div>
        </div>

        <div id="automobile-repair">
          <SectionHeader title="4. AUTOMOBILE REPAIR" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {renderServiceCards(automobileRepair)}
          </div>
        </div>

        <div id="vehicle-specialisation">
          <SectionHeader title="5. VEHICLE SPECIALISATION" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-black">
            {renderServiceCards(vehicleSpecialisation)}
          </div>
        </div>
      </div>

      {/* Toast messages */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Booking Form Modal */}
      
   {showForm && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl relative overflow-hidden">

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-red-400 transition"
        onClick={handleCloseForm}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Header */}
      <h3 className="text-3xl font-extrabold text-center mb-6 tracking-wide drop-shadow">
        🚘 Car Service Booking
      </h3>

      {/* Form */}
      <form className="space-y-5" onSubmit={sendEmail}>
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Your Name</label>
          <div className="flex items-center bg-white text-black rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-white/60">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full bg-transparent focus:outline-none"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email</label>
          <div className="flex items-center bg-white text-black rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-white/60">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v1l10 6 10-6V6c0-1.1-.9-2-2-2zm0 4l-10 6L4 8v10h16V8z" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full bg-transparent focus:outline-none"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Contact Number</label>
          <div className="flex items-center bg-white text-black rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-white/60">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2c.4-.4 1-.5 1.5-.3 1.6.6 3.4 1 5.1 1.1.5 0 1 .5 1 1V21c0 .6-.4 1-1 1C10.1 22 2 13.9 2 3c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 .1 1.8.5 3.6 1.1 5.2.2.5.1 1.1-.3 1.5L6.6 10.8z" />
            </svg>
            <input
              type="tel"
              name="contact"
              placeholder="9876543210"
              className="w-full bg-transparent focus:outline-none"
              required
              onChange={handleChange}
              value={formData.contact}
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Service Date</label>
          <input
            type="date"
            name="date"
            className="bg-white text-black px-3 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/60"
            required
            onChange={handleChange}
            value={formData.date}
          />
        </div>

        {/* Selected Service */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Selected Service</label>
          <input
            type="text"
            readOnly
            value={selectedService}
            className="bg-gray-100 text-black px-3 py-2 rounded-xl w-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center items-center gap-2 bg-white text-indigo-700 py-3 rounded-xl text-lg font-semibold transition ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-100"
          }`}
        >
          {isLoading ? (
            <svg className="animate-spin w-5 h-5 text-indigo-700" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l-4 4H4z" />
            </svg>
          ) : (
            "Book Now"
          )}
        </button>
      </form>
    </div>
  </div>
)}


    </section>
  );
};

export default Services;
