// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/hero";
// import TourTypes from "./components/TourTypes";
// import DestinationGrid from "./components/DestinationGrid";
// import Features from "./components/Features";
// import AdminLogin from "./components/Admin/AdminLogin";
// import AdminDashboard from "./components/Admin/AdminDashboard";

// import EducationalVisitsPage from "./pages/EducationalVisitsPage";
// import FloatingActions from "./components/FloatingActions";

// // CHANGE THIS to whatever secret path you prefer (keep it private)
// const ADMIN_PATH = "/amit-admin-2025-96";

// function AdminPage() {
//   return (
//     <div className="max-w-6xl mx-auto py-10 px-6">
//       <AdminLogin onLoggedIn={() => {}} />
//       <AdminDashboard />
//     </div>
//   );
// }

// function MainContent() {
//   return (
//     <>
//       <section id="home"><Hero /></section>

//       <section id="packages" className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
//             Types of Tours We Arrange
//           </h2>
//           <TourTypes />
//         </div>
//       </section>

//       <section id="gallery" className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-8">
//             Explore Destinations
//           </h2>
//           <DestinationGrid />
//         </div>
//       </section>

//       <section id="about" className="max-w-7xl mx-auto py-16 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-12">
//           Why Choose Us?
//         </h2>
//         <Features />
//       </section>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="font-sans text-gray-800 antialiased">
//         <Header />

//         <main className="pt-20">
//           <Routes>
//             <Route path="/" element={<MainContent />} />
//             <Route path="/educational-visits" element={<EducationalVisitsPage />} />
//             <Route path={ADMIN_PATH} element={<AdminPage />} />
//             <Route path="*" element={<MainContent />} />
//           </Routes>
//         </main>

//         <FloatingActions />

//         <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 mt-8">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <p>&copy; 2025 Amit Tours and Travel. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }






// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
const ADMIN_PATH = "/amit-admin-2025-96";

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

      <section id="about" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0078AA] text-center mb-12">
          Why Choose Us?
        </h2>
        <Features />
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-gray-800 antialiased">
        <Header />

        <main className="pt-20">
          <Routes>
            {/* Main Website */}
            <Route path="/" element={<MainContent />} />
            <Route path="/educational-visits" element={<EducationalVisitsPage />} />

            {/* Admin Login Page */}
            <Route path={ADMIN_PATH} element={<AdminLoginPage />} />

            {/* Admin Dashboard Page */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Fallback to home */}
            <Route path="*" element={<MainContent />} />
          </Routes>
        </main>

        <FloatingActions />

        <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 mt-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p>&copy; 2025 Amit Tours and Travel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
