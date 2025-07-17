import React, { useState, useEffect } from "react";

// Load Poppins font dynamically
const loadFont = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

// Smooth scroll to section with slight delay
const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); // Delay to ensure section is rendered
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  const navItems = [
    { label: "Home", id: "home", hover: "hover:text-indigo-600" },
    { label: "Services", id: "services", hover: "hover:text-emerald-600" },
    { label: "Accessories", id: "accessories", hover: "hover:text-purple-600" },
    { label: "Owners", id: "owners", hover: "hover:text-pink-600" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-[#f0f4ff] via-[#e4e9ff] to-[#f9f9ff]">
      <div
        className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h1 className="text-2xl font-bold text-indigo-700">HariKrishna Motors</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ label, id, hover }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-gray-700 font-medium px-3 py-2 rounded transition ${hover}`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 10h20M6 16h20M6 22h20" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white shadow-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {navItems.map(({ label, id, hover }) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setOpen(false);
              }}
              className={`text-gray-700 font-medium px-3 py-2 rounded transition text-left ${hover}`}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
