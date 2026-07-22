import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header({ onAdminClick }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const links = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
  ];

  const handleScroll = (href) => {
    setOpen(false);

    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0078AA] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
        {/* Logo */}
        <div
          onClick={() => {
            setOpen(false);
            navigate("/");
            handleScroll("#home");
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="Amit Tours & Travels"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-md"
          />

          <h1 className="hidden sm:block text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
            Amit Tours & Travels
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="text-white/90 hover:text-[#FFD166] transition-colors font-semibold"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={onAdminClick}
            className="bg-[#E63946] hover:bg-[#c32f3b] text-white px-4 lg:px-6 py-2 rounded-full font-semibold shadow-md transition whitespace-nowrap"
          >
            Admin
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0078AA] border-t border-white/20">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="block w-full text-left px-6 py-4 text-white font-medium hover:bg-[#E63946] transition"
            >
              {link.name}
            </button>
          ))}

          <div className="px-6 py-4 border-t border-white/20">
            <button
              onClick={() => {
                setOpen(false);
                onAdminClick();
              }}
              className="w-full bg-[#E63946] hover:bg-[#c32f3b] text-white py-3 rounded-full font-semibold transition"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}