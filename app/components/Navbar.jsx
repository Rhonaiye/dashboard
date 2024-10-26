'use client'
import React, { useState } from 'react';
import { FaHome, FaUser, FaPiggyBank, FaRocket, FaBullseye, FaPowerOff, FaBars } from 'react-icons/fa';
import {} from 'react-icons/md'
import Dashboard from './Dashboard';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Savings', icon: <FaBullseye /> },
    { label: 'Invest', icon: <FaRocket/> },
    { label: 'Account', icon: <FaUser /> },
  ];

  const bottomNavItems = [
    { label: 'Logout', icon: <FaPowerOff/> },
  ];

  // Hamburger menu icon component
  const MenuIcon = () => (
    <div className="space-y-1.5">
      {/* Your hamburger icon here */}
      <FaBars/>
    </div>
  );

  return (
    <div className="min-h-screen font-serif">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#072A63] text-white z-50 px-4">
        <div className="flex items-center justify-between h-full">
            <a href="#" className="text-xl font-bold flex gap-2 items-center"> <FaPiggyBank/>  Piggy vest</a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2" aria-label="Toggle menu">
            <MenuIcon />
          </button>
          
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-[#072A63] border-r border-gray-200
        transform transition-transform duration-200 ease-in-out z-40
        lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>

        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 bg-[#072A63] text-white">
            <FaBars/>
          <a href="#" className="text-xl font-bold flex gap-2 items-center"> <FaPiggyBank/>  Piggy vest</a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2">
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col h-[calc(100%-4rem)] justify-between bg-[#072A63] text-white">
          {/* Main Navigation */}
          <nav className="px-4 py-6 pl-5 pt-[5vh]">
            <ul className="space-y-2 flex flex-col gap-[5vh] font-bold">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Navigation */}
          <nav className="px-4 py-6">
            <ul className="space-y-2">
              {bottomNavItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <a href="#" className="block px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen pt-16 lg:pt-0">

        <div className="p-6 max-sm:p-0">
          <Dashboard/>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
