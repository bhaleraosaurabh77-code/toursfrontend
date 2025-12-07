import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header({ onAdminClick }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // Section links (must match section IDs in App.jsx)
  const links = [
    { name: "Home", href: "#home"},
    // { name: "Tours", href: "#tortypes" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  const handleScroll = (href) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjusts for fixed navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full top-0 bg-[#0078AA] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo Section */}
        <div
          onClick={() => handleScroll("#home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            onClick={() => navigate('/')}
            alt="Amit Tours & Travels"
            className="h-12 w-auto object-contain drop-shadow-md"
          />
          <h1 className="text-xl font-bold tracking-wide hidden sm:block">
            Amit Tours & Travels
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="text-white/90 hover:text-[#E63946] font-semibold transition-colors"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={onAdminClick}
            className="bg-[#E63946] hover:bg-[#c32f3b] text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            Admin
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0078AA] border-t border-white/20 shadow-md">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="block w-full text-left px-6 py-3 text-white hover:bg-[#E63946] hover:text-white font-medium transition"
            >
              {link.name}
            </button>
          ))}

          <div className="px-6 py-3 border-t border-white/20">
            <button
              onClick={onAdminClick}
              className="w-full bg-[#E63946] hover:bg-[#c32f3b] text-white py-2 rounded-full font-semibold"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
