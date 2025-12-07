// pages/EducationalVisitsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import TourPackages from "../components/TourPackages";

export default function EducationalVisitsPage() {
  return (
    <div className="bg-[#F5F9FC] min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0078AA] to-[#00A8E8] text-white py-20 overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dots.png')]"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg">
            Educational & Industrial Visits
          </h1>
          <p className="mt-3 text-lg opacity-90 font-light">
            Curated industry-focused experiences for schools, colleges & institutions
          </p>

          <Link
            to="/"
            className="inline-block mt-6 px-6 py-2 bg-white text-[#0078AA] font-medium rounded-xl shadow hover:bg-gray-100 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 animate-fadeInSlow">
        <h2 className="text-2xl font-semibold text-[#2A2A2A] mb-4">
          Explore Our Student Packages
        </h2>
        <p className="text-gray-600 mb-10">
          Handpicked itineraries designed especially for student groups, focusing on
          knowledge, fun, and exposure to real-world industry practices.
        </p>

        <div className="mt-6">
          <TourPackages onlyCategory="students" />
        </div>
      </main>
    </div>
  );
}
