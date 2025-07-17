import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-gray-600 text-sm font-medium mb-2">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default Card;