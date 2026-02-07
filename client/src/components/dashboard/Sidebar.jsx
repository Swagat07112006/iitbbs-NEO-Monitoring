import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Rocket, 
  LayoutDashboard, 
  Telescope, 
  ShieldAlert, 
  Settings, 
  LogOut,
  Orbit
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
    { icon: <Telescope size={20} />, label: 'Asteroid Feed', path: '/dashboard/feed' },
    { icon: <ShieldAlert size={20} />, label: 'Risk Analysis', path: '/dashboard/risk' },
    { icon: <Orbit size={20} />, label: '3D Map', path: '/dashboard/map' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 z-50 hidden md:flex flex-col">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Rocket className="h-6 w-6 text-cyan-500 mr-2" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Cosmic Watch
        </span>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-900/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* User & Settings */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
          <Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
        
        <div className="flex items-center gap-3 mt-4 px-2 pt-4 border-t border-white/5">
          <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xs font-bold">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white font-medium">Astro Dev</span>
            <span className="text-xs text-gray-500">Researcher</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
