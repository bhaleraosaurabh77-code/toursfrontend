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
      <a
        href={whatsappLink(
          DEFAULT_WHATSAPP,
          "Hello, I want details about your tour packages."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
