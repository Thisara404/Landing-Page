import React from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SaaSLogo</div>
        <nav>
          <ul className="flex space-x-6">
            <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
            <li><NavLink to="/features" className="hover:text-blue-600">Features</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-blue-600">Pricing</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink></li>
          </ul>
        </nav>
        <div>
          <Button variant="outline" className="mr-2">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;