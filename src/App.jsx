import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Pages
import FamilyHolidays from "./pages/FamilyHolidays";
import EducationalVisitsPage from "./pages/EducationalVisitsPage";
import TourDetails from "./pages/TourDetails";
import Booking from "./pages/Booking";
import TourCards from "./pages/TourCards";
import LoginOTP from "./pages/LoginOTP";
import TravellerDetails from "./pages/TravellerDetails";
import ReviewBooking from "./pages/ReviewBooking";

// Layout Components
import Header from "./components/layout/Header";
import FloatingActions from "./components/layout/FloatingActions";
import ScrollToTop from "./components/layout/ScrollToTop";

// Home Components
import Hero from "./components/home/Hero";
import TourTypes from "./components/home/TourTypes";
import DestinationGrid from "./components/home/DestinationGrid";
import Features from "./components/home/Features";

// Admin
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

// Secret admin login path
const ADMIN_PATH =
  import.meta.env.VITE_ADMIN_PATH || "/amit-admin-2025-96";

function AdminLoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-8 sm:py-10">
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

      {/* Featured Tours */}
      <section className="bg-gray-50 py-10 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TourCards />
        </div>
      </section>

      {/* Tour Types */}
      <section
        id="packages"
        className="bg-white py-10 sm:py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0078AA] text-center mb-6 sm:mb-8">
            Types of Tours We Arrange
          </h2>

          <TourTypes />

        </div>
      </section>

      {/* Destinations */}
      <section
        id="gallery"
        className="bg-white py-10 sm:py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0078AA] text-center mb-6 sm:mb-8">
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

function AppContent() {
  const location = useLocation();

  const hideHeader =
  location.pathname.startsWith("/tour/") ||
  location.pathname.startsWith("/booking") ||
  location.pathname.startsWith("/login") ||
  location.pathname.startsWith("/review") ||
  location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 antialiased">

      {!hideHeader && <Header />}

      <main className={`flex-1 ${hideHeader ? "" : "pt-16 sm:pt-20"}`}>

        <Routes>

          <Route
            path="/"
            element={<MainContent />}
          />

          <Route
            path="/family-holidays"
            element={<FamilyHolidays />}
          />

          <Route
            path="/educational-visits"
            element={<EducationalVisitsPage />}
          />

          <Route
            path="/tour/:id"
            element={<TourDetails />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/login"
            element={<LoginOTP />}
          />

          <Route
            path="/traveller-details"
            element={<TravellerDetails />}
          />

          <Route
            path="/review"
            element={<ReviewBooking />}
          />

          <Route
            path={ADMIN_PATH}
            element={<AdminLoginPage />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="*"
            element={<MainContent />}
          />

        </Routes>

      </main>

      {!hideHeader && <FloatingActions />}

      <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          <p className="text-sm sm:text-base">
            © 2025 Amit Tours and Travels. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <AppContent />

    </BrowserRouter>
  );
}