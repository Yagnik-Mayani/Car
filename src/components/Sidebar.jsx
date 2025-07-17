import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Garage Manager</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        <Link to="/accessories" className="hover:text-gray-400">Accessories</Link>
        <Link to="/owners" className="hover:text-gray-400">Owners</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
