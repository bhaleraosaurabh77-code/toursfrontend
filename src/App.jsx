// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FamilyHolidays from "./pages/FamilyHolidays";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TourTypes from "./components/TourTypes";
import DestinationGrid from "./components/DestinationGrid";
import Features from "./components/Features";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import EducationalVisitsPage from "./pages/EducationalVisitsPage";
import FloatingActions from "./components/FloatingActions";

// Secret admin login path
const ADMIN_PATH = import.meta.env.VITE_ADMIN_PATH || "/amit-admin-2025-96";

function AdminLoginPage() {
  return (
    <div className="max-w-md mx-auto py-10 px-6">
      <AdminLogin onLoggedIn={() => {}} adminPath="/admin/dashboard" />
    </div>
  );
}

function MainContent() {
  return (
    <>
      <section id="home"><Hero /></section>

      <section id="packages" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
            Types of Tours We Arrange
          </h2>
          <TourTypes />
        </div>
      </section>

      <section id="gallery" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
            Explore Destinations
          </h2>
          <DestinationGrid />
        </div>
      </section>

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

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/educational-visits" element={<EducationalVisitsPage />} />
            <Route path="/family-holidays" element={<FamilyHolidays />} />

            {/* Admin */}
            <Route path={ADMIN_PATH} element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Fallback */}
            <Route path="*" element={<MainContent />} />
          </Routes>
        </main>

        {/* ⭐ WhatsApp Button ONLY on Homepage */}
        {typeof window !== "undefined" && window.location.pathname === "/" && (
          <button
            onClick={() => {
              const number = "+917709040404";
              const msg =
                "Hello Amit Tours, I would like to enquire about your tour packages. Please assist me with the details.";
              const clean = number.replace(/[^0-9+]/g, "");
              const url = `https://wa.me/${clean.replace("+", "")}?text=${encodeURIComponent(msg)}`;
              window.open(url, "_blank");
            }}
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-[999]"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
            </svg>
          </button>
        )}

        {/* Floating Actions (Back to top, WhatsApp if no duplicates, Enquiry modal) */}
        <FloatingActions />

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p>&copy; 2025 Amit Tours and Travel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

