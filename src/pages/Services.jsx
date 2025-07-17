import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  "DoorStep Service", "Weighbridge Services", "Service Guarantee", "Car Wash",
  "Emergency Service", "Locked / Lost Keys", "Car Pickup And Drop",
  "Auto Detailing", "Oil Change", "Membership Required", "Car Detailing",
  "Doorstep Car Repair", "Battery Jump-Start"
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 tracking-tight">
          🚗 Our Garage Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300 group"
            >
              <CheckCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition" />
              <span className="text-gray-800 underline decoration-dotted group-hover:text-blue-600 transition font-medium">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
