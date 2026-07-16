// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FamilyHolidays from "./pages/FamilyHolidays";
import EducationalVisitsPage from "./pages/EducationalVisitsPage";
import TourDetails from "./pages/TourDetails";
import Booking from "./pages/Booking";
import TourCards from "./pages/TourCards";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TourTypes from "./components/TourTypes";
import TourPackages from "./components/TourPackages";
import DestinationGrid from "./components/DestinationGrid";
import Features from "./components/Features";
import FloatingActions from "./components/FloatingActions";

import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

// Secret admin login path
const ADMIN_PATH =
  import.meta.env.VITE_ADMIN_PATH || "/amit-admin-2025-96";

function AdminLoginPage() {
  return (
    <div className="max-w-md mx-auto py-10 px-6">
      <AdminLogin
        onLoggedIn={() => {}}
        adminPath="/admin/dashboard"
      />
    </div>
  );
}

function MainContent() {
  return (
    <>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Tour Types */}
      <section id="packages" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
            Types of Tours We Arrange
          </h2>

          <TourTypes />
        </div>
      </section>

      {/* Tour Packages */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
          </h2> */}

          <TourCards/>
        </div>
      </section>

      {/* Destinations */}
      <section id="gallery" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
            Explore Destinations
          </h2>

          <DestinationGrid />
        </div>
      </section>

      {/* Features */}
      <Features />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-800 antialiased">

        {/* Header */}
        <Header />

        <main className="pt-20">
          <Routes>

            {/* Home */}
            <Route path="/" element={<MainContent />} />

            {/* Family Holidays */}
            <Route
              path="/family-holidays"
              element={<FamilyHolidays />}
            />

            {/* Educational Visits */}
            <Route
              path="/educational-visits"
              element={<EducationalVisitsPage />}
            />

            {/* Tour Details */}
            <Route
              path="/tour/:id"
              element={<TourDetails />}
            />

            {/* Booking */}
            <Route
              path="/booking"
              element={<Booking />}
            />

            {/* Admin */}
            <Route
              path={ADMIN_PATH}
              element={<AdminLoginPage />}
            />

            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

            {/* Fallback */}
            <Route path="*" element={<MainContent />} />

          </Routes>
        </main>

        {/* Floating Actions */}
        <FloatingActions />

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p>© 2025 Amit Tours and Travel. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}