// src/components/AboutUs.jsx
import React, { useState, useEffect } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("mission");
  const [visible, setVisible] = useState(true); // for fade animation

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "approach", label: "How We Work" },
    { id: "team", label: "Our Team" },
    { id: "impact", label: "Our Impact" },
  ];

  const content = {
    mission:
      "At Amit Tours & Travels, our mission is to design reliable, comfortable and well-organized journeys. We focus on clarity, safety and practical planning so every guest — families, students or groups — can enjoy a smooth and meaningful travel experience.",
    approach:
      "Our approach is built on careful coordination and genuine local partnerships. We plan each itinerary with attention to timing, accessibility, accommodation quality and group needs, ensuring every tour feels effortless and comfortable from start to finish.",
    team:
      "Our team consists of experienced travel planners, trained coordinators and on-ground support staff. Together, we work to maintain high service standards and provide consistent guidance, making every journey organized and stress-free.",
    impact:
      "Over the years, we’ve had the privilege of serving thousands of travellers. Our work supports local communities, promotes responsible travel and helps travellers explore destinations in a meaningful and well-guided way.",
  };

  const features = [
    {
      icon: "📌",
      title: "Thoughtful Planning",
      text: "Itineraries designed for comfort, timing and practical convenience.",
    },
    {
      icon: "🛡️",
      title: "Reliable Safety",
      text: "Clear safety standards and dependable on-ground support.",
    },
    {
      icon: "👥",
      title: "Group Friendly",
      text: "Flexible travel options suited for families, students and corporate groups.",
    },
    {
      icon: "💼",
      title: "Transparent Service",
      text: "Clear communication, no hidden charges and professional coordination.",
    },
  ];

  const stats = [
    { value: "12+", label: "Years of Service" },
    { value: "4500+", label: "Travellers Assisted" },
    { value: "4.7/5", label: "Average Rating" },
  ];

  // handle fade animation when switching tabs
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 120); // short fade-out then in
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <section id="about" className="w-full bg-slate-50 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0078AA] mb-2 md:mb-3">
            About Amit Tours & Travels
          </h1>
          <div className="mx-auto my-3 w-20 h-[3px] bg-[#0078AA] rounded" />
          <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
            Professional, reliable and experience-focused travel services — crafted with care.
          </p>
        </div>

        {/* Tabs: scrollable on small screens */}
        <div className="mb-6">
          <div
            className="flex gap-3 overflow-x-auto no-scrollbar px-2 sm:px-0 py-1 sm:justify-center snap-x snap-mandatory"
            role="tablist"
            aria-label="About tabs"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`flex-shrink-0 snap-start px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#0078AA] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content with fade */}
        <div
          className={`bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 border border-slate-200 transition-opacity duration-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
          aria-live="polite"
        >
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            {content[activeTab]}
          </p>
        </div>

        {/* Features Grid with subtle entrance and responsive tweaks */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition transform-gpu duration-300 ease-out text-center border border-slate-200"
              style={{
                // small stagger effect using inline style for simplicity
                transitionDelay: `${i * 40}ms`,
                willChange: "transform, opacity",
              }}
            >
              <div className="text-2xl md:text-3xl mb-3">{f.icon}</div>
              <h3 className="text-[#0078AA] font-semibold text-base md:text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-2">
                <p className="text-2xl md:text-3xl font-semibold text-[#0078AA] mb-1">{s.value}</p>
                <p className="text-sm md:text-base text-slate-700">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* small helper style: hide scrollbar (works for Webkit + Firefox) */}
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* WebKit */
        }
      `}</style>
    </section>
  );
}

