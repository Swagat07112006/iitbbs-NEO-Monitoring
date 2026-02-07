import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Cosmic Watch</h3>
            <p className="text-gray-400 max-w-md">
              Democratizing space data access. A full-stack platform for real-time Near-Earth Object monitoring and risk analysis.
              Built for the Hackathon.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Live Tracker</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Risk Assessment</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub Repo</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Team</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Cosmic Watch. All rights reserved. Data provided by NASA NeoWs API.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
