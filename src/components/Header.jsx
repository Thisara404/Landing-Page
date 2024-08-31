import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SaaSLogo</div>
          <div className="hidden md:flex items-center space-x-6">
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
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li><NavLink to="/" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>Home</NavLink></li>
                <li><NavLink to="/features" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>Features</NavLink></li>
                <li><NavLink to="/pricing" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>Pricing</NavLink></li>
                <li><NavLink to="/contact" className="block py-2 hover:text-blue-600" onClick={toggleMenu}>Contact</NavLink></li>
              </ul>
            </nav>
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
