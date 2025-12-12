
// src/pages/FamilyHolidays.jsx
import React, { useState } from "react";
import { Search, ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* Package data: prices removed per request */
const familyPackages = [
  {
    id: "andaman",
    title: "ANDAMAN",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80",
  },
  {
    id: "bhutan",
    title: "BHUTAN",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1600&q=80",
  },
  {
    id: "spiritual",
    title: "SPIRITUAL JOURNEY",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80",
  },
  {
    id: "himachal",
    title: "HIMACHAL",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
  },
  {
    id: "kerala",
    title: "KERALA",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80",
  },
  {
    id: "srilanka",
    title: "SRI LANKA",
    subtitle: "Tour Packages",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
  },
];

/* Single banner for each package (no prices) */
function PackageBanner({ pkg }) {
  return (
    <article
      className="relative h-80 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500 bg-white"
      aria-labelledby={`pkg-${pkg.id}-title`}
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* subtle overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <header>
          <h2
            id={`pkg-${pkg.id}-title`}
            className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md tracking-tight"
          >
            {pkg.title}
          </h2>
          <p className="text-sm md:text-base text-white/90 mt-1">{pkg.subtitle}</p>
        </header>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div className="flex gap-3">
            <a
              href={`/packages/${pkg.id}`}
              className="inline-flex items-center gap-2 bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-white transition"
            >
              View Details
              <ArrowRight size={16} />
            </a>

            <a
              href={`https://wa.me/917709040404?text=${encodeURIComponent(
                "Hi, I'd like more information about the " + pkg.title + " family package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Main page */
export default function FamilyHolidays() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPackages = familyPackages.filter((pkg) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      pkg.title.toLowerCase().includes(q) ||
      (pkg.subtitle && pkg.subtitle.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ✅ SIMPLE BACK BUTTON (ONLY THIS ADDED) */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-slate-300 shadow-sm hover:bg-slate-50 transition"
        >
          <ArrowLeft size={18} />
          <span className="text-slate-700 text-sm">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
            Family Holiday Packages
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Handpicked, family-friendly itineraries — comfortable pacing and activities for all ages.
          </p>

          {/* search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search destinations, e.g. Kerala, Himachal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPackages.map((pkg) => (
            <PackageBanner key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No packages found</h3>
            <p className="text-slate-600">Try a different search or contact us and we'll help you find the right fit.</p>
          </div>
        )}

        {/* Contact Section (unchanged) */}
        <section className="mt-12 bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Need help planning your family trip?
              </h2>
              <p className="mt-2 text-slate-600">
                Tell us about your group and travel dates — we will share suitable itinerary options.
              </p>
            </div>

            <div className="flex-1 md:flex-none flex flex-col sm:flex-row gap-3 items-center justify-end">
              <a
                href="tel:+917709040404"
                className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 text-slate-800 px-5 py-3 rounded-full font-medium hover:shadow transition"
              >
                <Phone size={18} className="text-slate-700" />
                Call: +91 77090 40404
              </a>
              <a
                href="https://wa.me/917709040404?text=Hi%20Amit%20Tours,%20I%20need%20help%20planning%20a%20family%20trip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-green-700 border border-green-100 px-5 py-3 rounded-full font-medium hover:bg-green-50 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
