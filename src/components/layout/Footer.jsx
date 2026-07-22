import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-2xl font-bold text-[#00B4D8]">
              Amit Tours & Travels
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Discover amazing destinations across India with comfortable
              journeys, trusted service, and unforgettable memories.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Tours
              </li>

              <li className="hover:text-white cursor-pointer transition">
                About
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">

                <FaPhoneAlt className="mt-1 text-[#00B4D8]" />

                <span>+91 9876543210</span>

              </div>

              <div className="flex items-start gap-3">

                <FaEnvelope className="mt-1 text-[#00B4D8]" />

                <span>info@amittours.com</span>

              </div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-[#00B4D8]" />

                <span>Pune, Maharashtra</span>

              </div>

            </div>

          </div>

          {/* Follow */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">

          © {new Date().getFullYear()} Amit Tours & Travels. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}