// pages/EducationalVisitsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import TourPackages from "../components/TourPackages";

/* Gallery Card Component */
const GalleryCard = ({ type, src, caption }) => (
  <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition">
    {type === "image" ? (
      <img
        src={src}
        alt={caption}
        className="w-full h-56 object-cover"
      />
    ) : (
      <video
        src={src}
        controls
        className="w-full h-56 object-cover"
      />
    )}
    <div className="p-4">
      <p className="text-gray-700 text-sm font-medium text-center">
        {caption}
      </p>
    </div>
  </div>
);

export default function EducationalVisitsPage() {
  return (
    <div className="bg-[#F5F9FC] min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0078AA] to-[#00A8E8] text-white py-20 overflow-hidden">
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

        {/* ===== PHOTO & VIDEO GALLERY ===== */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-[#2A2A2A] mb-6">
            Educational & Industrial Visit Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <GalleryCard
              type="image"
              src="https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766399381/10_e6tpi3.jpg"
              caption="Educational Visit – Student Group"
            />

            <GalleryCard
              type="image"
              src="https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766399378/8_l7atej.jpg"
              caption="Campus Exploration Activity"
            />

            <GalleryCard
              type="image"
              src="https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766399378/9_ukhjo2.jpg"
              caption="Industrial Exposure Program"
            />

            <GalleryCard
              type="image"
              src="https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766399378/7_x5qrae.jpg"
              caption="Learning Beyond Classroom"
            />

            <GalleryCard
              type="image"
              src="https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766399377/5_c1fwrz.jpg"
              caption="Student Industry Interaction"
            />

            <GalleryCard
              type="video"
              src="https://res.cloudinary.com/dt0mm3yj1/video/upload/v1766399220/2_rdffaw.mp4"
              caption="Industrial Visit – Live Experience"
            />

            <GalleryCard
              type="video"
              src="https://res.cloudinary.com/dt0mm3yj1/video/upload/v1766399282/14_xbqstn.mp4"
              caption="Educational Tour Highlights"
            />

          </div>
        </section>
        {/* ===== END GALLERY ===== */}

      </main>
    </div>
  );
}

