import React, { useState } from "react";
import { Clock, Utensils, Hotel, Bus, Camera } from "lucide-react";
import bangaloreImg from '../assets/bg.jpg'
import keralaImg from '../assets/kr.jpg'
import hyderabadImg from '../assets/Hyderabad.avif';
// 🔧 Your WhatsApp number (editable)
const DEFAULT_WHATSAPP = "7709040404";

// 🧩 Editable Packages List
const packages = [
  {
    id: 1,
    title: "AMRITSAR – MANALI – CHANDIGARH",
    subtitle: "Industrial Visit Tour",
    description: "Explore the North: Golden Temple, Manali Hills & Chandigarh Industry Insights.",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&q=80",
    duration: "10 Days / 9 Nights",
  },
  {
    id: 2,
    title: "BANGALORE – MYSORE TECH & TRADITION TOUR",
    subtitle: "Educational + Industrial Visit",
    description: "Blend of Technology & Heritage: Mysore Palace, ISKCON & leading industries.",
    image: bangaloreImg,
    duration: "5 Days / 4 Nights",
  },
  {
    id: 3,
    title: "GOA EDUCATIONAL ESCAPE",
    subtitle: "Students Special Tour",
    description: "Study, Surf & Celebrate – the perfect mix of industry visits & beaches!",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    duration: "6 Days / 5 Nights",
  },
  {
    id: 4,
    title: "ROYAL HYDERABAD ESCAPE",
    subtitle: "Industrial + Cultural Tour",
    description: "Nawabi elegance with Ramoji Film City, Birla Mandir & Educational Visits.",
    image: hyderabadImg,
    duration: "6 Days / 5 Nights",
  },
  {
    id: 5,
    title: "KERALA INDUSTRIAL VISIT PLAN",
    subtitle: "Kochi – Munnar – Alleppey – Varkala",
    description: "Industrial visits in Kochi, scenic backwaters, tea gardens of Munnar and Varkala cliff.",
    image: keralaImg,
    duration: "7 Days / 6 Nights",
  },
  {
  id: 6,
  title: "RAJASTHAN INDUSTRIAL VISIT PLAN",
  subtitle: "Jaipur – Jaisalmer – Jodhpur",
  description: "Explore Jaipur’s heritage, Jaisalmer’s golden dunes & Jodhpur’s forts with industry visits and real-world learning.",
  image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
  duration: "7 Days / 6 Nights",
},
  
];

// 📱 WhatsApp helper
function whatsappLink(phone = DEFAULT_WHATSAPP, text = "") {
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

export default function TourPackages() {
  const [query, setQuery] = useState("");

  const filtered = packages.filter((p) =>
    (p.title + " " + p.subtitle + " " + (p.description || ""))
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="w-full bg-[linear-gradient(180deg,#F8F6F3_0%,#FFFFFF_100%)] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header with Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="text-4xl font-bold text-[#2A2A2A] text-center md:text-left">
            Our Tour Packages
          </h2>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <input
              aria-label="Search packages"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full md:w-80 px-5 py-3 rounded-full border-2 border-[#E8E6E2] bg-white text-[#2A2A2A] focus:ring-2 focus:ring-[#E8EEF5] focus:border-[#4A6FA5] focus:outline-none transition-all shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="px-6 py-3 bg-[#4A6FA5] text-white font-semibold rounded-full hover:bg-[#3f5f8c] transition-all shadow"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-[#E8E6E2]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {pkg.subtitle && (
                  <div className="absolute top-3 left-3 bg-[#4A6FA5]/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {pkg.subtitle}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 leading-tight min-h-[56px]">
                  {pkg.title}
                </h3>

                <p className="text-[#6B6B6B] text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {pkg.description}
                </p>

                {/* Duration */}
                <div className="flex justify-center mb-5">
                  <div className="flex items-center gap-2 bg-[#E8EEF5] text-[#2A2A2A] px-4 py-2 rounded-full">
                    <Clock size={16} />
                    <span className="font-semibold text-xs">{pkg.duration}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {[["Meals", Utensils], ["Stay", Hotel], ["Transport", Bus], ["Sightseeing", Camera]].map(([label, Icon], i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-1.5 bg-[#4A6FA5] text-white py-2.5 px-2 rounded-full font-semibold text-xs"
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  <button className="w-full bg-[#4A6FA5] hover:bg-[#3f5f8c] text-white font-bold py-3 px-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm">
                    View Details
                  </button>

                  <a
                    href={whatsappLink(
                      DEFAULT_WHATSAPP,
                      `Hi, please share more details about ${pkg.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center border-2 border-[#E8E6E2] text-[#4A6FA5] hover:bg-[#F4F7FA] font-semibold py-3 px-4 rounded-full transition-all text-sm"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#6B6B6B] text-lg">No packages found matching your search.</p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 px-6 py-3 bg-[#4A6FA5] text-white font-semibold rounded-full hover:bg-[#3f5f8c] transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      
    </div>
  );
}

