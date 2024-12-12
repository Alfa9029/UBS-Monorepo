// src/components/NavigationButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButton = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {text}
    </button>
  );
};

export default NavigationButton;