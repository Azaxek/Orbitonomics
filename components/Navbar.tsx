
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Satellite } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Impact', path: '/projects' },
    { name: 'Founder', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                <Satellite className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Orbitonomics
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
