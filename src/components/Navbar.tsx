import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
  }`;

  const activeClass = 'text-purple-600 font-medium';
  const inactiveClass = 'text-gray-700 hover:text-purple-600 transition-colors duration-300';

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ImageIcon className="h-8 w-8 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            BG Remover
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className={isActive('/') ? activeClass : inactiveClass}>
              Home
            </Link>
            <Link to="/how-it-works" className={isActive('/how-it-works') ? activeClass : inactiveClass}>
              How It Works
            </Link>
            <Link to="/features" className={isActive('/features') ? activeClass : inactiveClass}>
              Features
            </Link>
            <Link to="/pricing" className={isActive('/pricing') ? activeClass : inactiveClass}>
              Pricing
            </Link>
            <Link to="/faq" className={isActive('/faq') ? activeClass : inactiveClass}>
              FAQ
            </Link>
            <Link to="/contact" className={isActive('/contact') ? activeClass : inactiveClass}>
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn btn-secondary py-2 px-4">
                  Dashboard
                </Link>
                <button onClick={logout} className="btn btn-primary py-2 px-4">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary py-2 px-4">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary py-2 px-4">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className={`py-2 ${isActive('/') ? activeClass : inactiveClass}`}>
            Home
          </Link>
          <Link to="/how-it-works" className={`py-2 ${isActive('/how-it-works') ? activeClass : inactiveClass}`}>
            How It Works
          </Link>
          <Link to="/features" className={`py-2 ${isActive('/features') ? activeClass : inactiveClass}`}>
            Features
          </Link>
          <Link to="/pricing" className={`py-2 ${isActive('/pricing') ? activeClass : inactiveClass}`}>
            Pricing
          </Link>
          <Link to="/faq" className={`py-2 ${isActive('/faq') ? activeClass : inactiveClass}`}>
            FAQ
          </Link>
          <Link to="/contact" className={`py-2 ${isActive('/contact') ? activeClass : inactiveClass}`}>
            Contact
          </Link>

          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn btn-secondary">
                  Dashboard
                </Link>
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;