// src/components/Header.jsx
import React, { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, MapPin, Heart } from "lucide-react"; // removed User import
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: " #about" }
  ];

  const handleScroll = (href) => {
    setOpen(false);
    setActive(href);
    const target = document.querySelector(href);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollEffect = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScrollEffect);

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;

    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [open]);

  // helper to open the Plan My Tour modal via the global event
  const openEnquiry = () => window.dispatchEvent(new Event('open-enquiry'));

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0078AA] to-[#005A87] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:18002093344" className="font-semibold hover:underline">
                7709040404
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={14} />
              <span>Pune, Maharashtra, IN</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:text-[#FFD700] transition-colors hidden sm:block">
              Customer Support
            </button>
            <button className="hover:text-[#FFD700] transition-colors hidden sm:block">
              Our Stores
            </button>
            <button className="flex items-center gap-1 hover:text-[#FFD700] transition-colors">
              <Heart size={16} />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          
          {/* LOGO */}
          <div
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={logo}
              alt="Amit Tours & Travels Logo"
              className="h-12 w-auto object-contain hover:scale-105 transition-transform"
            />

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#0078AA] tracking-wide leading-tight">
                Amit Tours & Travels
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  active === link.href
                    ? "bg-[#0078AA] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#E0F7FA] hover:text-[#0078AA]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Login button removed on purpose so visitors don't see admin */}
            <button
              onClick={openEnquiry}
              className="bg-gradient-to-r from-[#E63946] to-[#D62839] text-white px-6 py-2 rounded-full font-bold shadow-md transition-all flex items-center gap-2"
            >
              ✓ Plan My Tour
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0078AA] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="max-w-7xl mx-auto">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className={`block w-full text-left px-6 py-4 font-medium transition-colors border-b border-gray-100 ${
                  active === link.href
                    ? "bg-[#E0F7FA] text-[#0078AA] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="p-4 space-y-3 bg-gray-50">
              {/* Mobile Login removed */}
              <button
                onClick={openEnquiry}
                className="w-full bg-gradient-to-r from-[#E63946] to-[#D62839] text-white py-3 rounded-full font-bold shadow-md flex items-center justify-center gap-2"
              >
                ✓ Plan My Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
