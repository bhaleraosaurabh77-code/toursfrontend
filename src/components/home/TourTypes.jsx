import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import educationalImg from "../../assets/educational.png";

const categories = [
  {
    id: "family",
    title: "Family Holidays",
    subtitle: "Comfort & Fun for all ages",
    description: "Create memories that last forever.",
    image:
      "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=1200&q=80",
    icon: Users,
    color: "from-green-500 to-emerald-600",
  },

  {
    id: "students",
    title: "Educational Visits",
    subtitle: "Industry tours & learning",
    description: "Learning beyond classroom walls.",
    image: educationalImg,
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600",
  },

  {
    id: "custom",
    title: "Customized Tours",
    subtitle: "Build your perfect itinerary",
    description: "Your dream trip, your way.",
    image:
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=1200&q=80",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
  },
];

export default function TourTypes() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AA]">
            Tour Categories
          </h2>

          <div className="w-20 h-1 bg-[#0078AA] rounded-full mx-auto mt-4 mb-5" />

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover travel experiences designed for every kind of traveller.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((cat, index) => {

            const Icon = cat.icon;
            const isHovered = hoveredCard === cat.id;

            return (

              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === "students") {
                    navigate("/educational-visits");
                  } else if (cat.id === "family") {
                    navigate("/family-holidays");
                  } else {
                    navigate(`/category/${cat.id}`);
                  }
                }}
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#0078AA]/30"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >

                {/* Image */}

                <div className="relative h-56 sm:h-64 overflow-hidden">

                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                </div>

                {/* Content */}

                <div className="p-6 text-left">

                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg mb-5`}
                  >

                    <Icon
                      size={22}
                      className="text-white"
                    />

                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {cat.subtitle}
                  </p>

                  <p
                    className={`text-sm text-gray-500 leading-6 transition-all duration-300 overflow-hidden ${
                      isHovered
                        ? "max-h-24 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {cat.description}
                  </p>

                  <div
                    className={`flex items-center gap-2 mt-5 font-semibold text-[#0078AA] transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >

                    <span>Explore</span>

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />

                  </div>

                </div>

              </button>

            );

          })}

        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}