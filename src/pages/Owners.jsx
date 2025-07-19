import React, { useEffect } from "react";

const owners = [
  {
    id: 1,
    name: "Ajay Dhaduk",
    phone: "6354885890",
    email: "ajaydhaduk60@gmail.com",
    address:
      "Greenland chokdi, Kuvavda Road, Bombay Super Mall Same, Shree Hari Krishna Motors, Rajkot",
    workingHours: "Mon - Sun:  24 Hours",
    garageType: "Multi-Brand Car Service & Accessories",
  },
  {
    id: 2,
    name: "Paras Kachchhi",
    phone: "6352231903",
    address:
      "Greenland chokdi, Kuvavda Road, Bombay Super Mall Same, Shree Hari Krishna Motors, Rajkot",
    workingHours: "Mon - Sun:  24 Hours",
    garageType: "Multi-Brand Car Service & Accessories",
  },
];

const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <footer
      className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2e1065] text-white py-16 px-6 mt-16 rounded-t-3xl shadow-2xl overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 opacity-25 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-200 mb-10 tracking-wider">
          Garage Owners
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {owners.map((owner) => (
            <div
              key={owner.id}
              className="flex flex-col items-center text-center bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-md border-4 border-white mb-4">
                <span className="text-2xl font-bold text-white">
                  {owner.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {owner.name}
              </h3>

              <p className="text-sm text-gray-200 mb-1">
                <span className="font-semibold text-blue-400">Phone:</span>{" "}
                {owner.phone}
              </p>

              {owner.email && (
                <p className="text-sm text-gray-200 mb-1">
                  <span className="font-semibold text-blue-400">Email:</span>{" "}
                  {owner.email}
                </p>
              )}

              <p className="text-sm text-gray-200 mb-1">
                <span className="font-semibold text-blue-400">Garage Type:</span>{" "}
                {owner.garageType}
              </p>
              <p className="text-sm text-gray-200 mb-1">
                <span className="font-semibold text-blue-400">Working Hours:</span>{" "}
                {owner.workingHours}
              </p>
              <p className="text-sm text-gray-200">
                <span className="font-semibold text-blue-400">Address:</span>{" "}
                {owner.address}
              </p>
            </div>
          ))}

        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} AutoZone Garage. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
