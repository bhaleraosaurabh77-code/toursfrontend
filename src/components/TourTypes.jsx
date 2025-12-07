// components/TourTypes.jsx
import React, { useState } from "react";
import {
  Compass,
  Calendar,
  Users,
  Heart,
  BookOpen,
  Star,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ✅ Import your educational visit image properly
import educationalImg from "../assets/educational.png";

const categories = [
  {
    id: "adventure",
    title: "Adventure Trips",
    subtitle: "Trek • Raft • Camp",
    description: "Push your limits with thrilling outdoor experiences",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    icon: Compass,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "weekend",
    title: "Weekend Escapes",
    subtitle: "Quick getaways near you",
    description: "Perfect breaks to refresh and recharge",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    icon: Calendar,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "family",
    title: "Family Holidays",
    subtitle: "Comfort & Fun for all ages",
    description: "Create memories that last forever",
    image:
      "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=1200&q=80",
    icon: Users,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    subtitle: "Romantic escapes & resorts",
    description: "Begin your journey together in paradise",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&q=80",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },

  // ✅ FIXED: Use imported image here
  {
    id: "students",
    title: "Educational Visits",
    subtitle: "Industry tours & learning",
    description: "Learning beyond classroom walls",
    image: educationalImg,
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600",
  },

  {
    id: "luxury",
    title: "Luxury Getaways",
    subtitle: "Premium stays & VIP service",
    description: "Indulge in world-class experiences",
    image:
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=1200&q=80",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "wildlife",
    title: "Wildlife & Nature",
    subtitle: "Safaris • Birding • Parks",
    description: "Discover the wonders of nature",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "custom",
    title: "Customized Tours",
    subtitle: "Build your perfect itinerary",
    description: "Your dream trip, your way",
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
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isHovered = hoveredCard === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === "students") navigate("/educational-visits");
                  else navigate(`/category/${cat.id}`);
                }}
                onMouseEnter={() => setHoveredCard(cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white focus:outline-none focus:ring-4 focus:ring-[#0078AA] focus:ring-opacity-50"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.06}s both`,
                }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="p-5">
                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg mb-4`}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{cat.subtitle}</p>

                  <p
                    className={`text-xs text-gray-500 transition-all duration-300 overflow-hidden ${
                      isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {cat.description}
                  </p>

                  <div
                    className={`flex items-center gap-2 mt-4 text-[#0078AA] ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-sm font-semibold">Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
