// src/pages/EducationalVisitsPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import EducationalVisits from "../components/EducationalVisits";

/* Gallery Card Component */
const GalleryCard = ({ type, src, caption }) => (
  <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
    {type === "image" ? (
      <img
        src={src}
        alt={caption}
        className="w-full h-52 sm:h-56 object-cover"
      />
    ) : (
      <video
        src={src}
        controls
        className="w-full h-52 sm:h-56 object-cover"
      />
    )}

    <div className="p-4">
      <p className="text-sm sm:text-base text-gray-700 font-medium text-center">
        {caption}
      </p>
    </div>
  </div>
);

export default function EducationalVisitsPage() {
  return (
    <div className="bg-[#F5F9FC] min-h-screen">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0078AA] to-[#00A8E8] text-white py-14 sm:py-16 lg:py-20 overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dots.png')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Educational & Industrial Visits
          </h1>

          <p className="mt-4 text-base sm:text-lg opacity-90 max-w-3xl mx-auto">
            Curated industry-focused experiences for schools, colleges &
            institutions.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 px-5 sm:px-6 py-3 bg-white text-[#0078AA] font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

      {/* Packages */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#0078AA] mb-3">
          Explore Our Student Packages
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-3xl">
          Handpicked itineraries specially designed for schools and colleges,
          combining education, industrial exposure and unforgettable travel
          experiences.
        </p>

        <EducationalVisits onlyCategory="students" />

        {/* Gallery */}
        <section className="mt-14 sm:mt-20">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0078AA] mb-6 sm:mb-8">
            Educational & Industrial Visit Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

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

      </main>

    </div>
  );
}