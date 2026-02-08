import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SkyNetics</h3>
            <p className="text-gray-400 max-w-md">
              Democratizing space data access. A full-stack platform for real-time Near-Earth Object monitoring and risk analysis.
              Built for the Hackathon.
            </p>
          </div>
          

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Button variant="link" asChild className="text-gray-400 hover:text-cyan-400 p-0 h-auto"><a href="https://github.com/owaish3301/iitbbs-NEO-Monitoring">GitHub Repo</a></Button></li>
              <li><Button variant="link" asChild className="text-gray-400 hover:text-cyan-400 p-0 h-auto"><a href="mailto:owaish3301@gmail.com">Contact Team</a></Button></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SkyNetics. All rights reserved. Data provided by NASA NeoWs API.
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild className="text-gray-500 hover:text-white hover:bg-transparent">
              <a href="https://github.com/owaish3301"><Github className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-500 hover:text-white hover:bg-transparent">
              <a href="https://x.com/AlamOwaish92081"><Twitter className="w-5 h-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-500 hover:text-white hover:bg-transparent">
              <a href="https://www.linkedin.com/in/owaish-alam-a7393a314/"><Linkedin className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
