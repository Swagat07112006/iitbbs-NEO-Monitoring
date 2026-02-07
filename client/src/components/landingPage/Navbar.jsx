import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <Rocket className="h-8 w-8 text-cyan-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
              Cosmic Watch
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-cyan-400 text-white transition-colors duration-200 text-sm font-medium">Home</a>
              <a href="#features" className="hover:text-cyan-400 text-gray-300 transition-colors duration-200 text-sm font-medium">Features</a>
              <a href="#community" className="hover:text-cyan-400 text-gray-300 transition-colors duration-200 text-sm font-medium">Community</a>
              <a 
                href="/auth" 
                className="bg-cyan-600/90 hover:bg-cyan-500 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 border border-cyan-400/20 inline-block"
              >
                Login / Register
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#community" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Community</a>
            <button className="w-full text-left mt-2 bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-600/30 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
