import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">We're a SaaS startup dedicated to revolutionizing your workflow and boosting productivity.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-sm text-gray-600 hover:text-blue-600">Home</NavLink></li>
              <li><NavLink to="/features" className="text-sm text-gray-600 hover:text-blue-600">Features</NavLink></li>
              <li><NavLink to="/pricing" className="text-sm text-gray-600 hover:text-blue-600">Pricing</NavLink></li>
              <li><NavLink to="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><NavLink to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 SaaSLogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;