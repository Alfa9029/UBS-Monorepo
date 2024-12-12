import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-teal-500 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="https://www.portaldeextrema.com.br/wp-content/uploads/2023/07/posto-saude-ubs.jpg" alt="Logo" className="h-12 w-12" />
        <span className="text-white ml-2">MAPSAÚDE</span>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
      </nav>
    </header>
  );
}

export default Header;