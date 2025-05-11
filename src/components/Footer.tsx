import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Image as ImageIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ImageIcon className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                BG Remover
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Remove image backgrounds instantly with our AI-powered tool. Fast, accurate, and easy to use.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} BG Remover. All rights reserved. Crafted by Md Aashik.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;