// src/components/AboutUs.jsx

import React, { useState, useEffect } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("mission");
  const [visible, setVisible] = useState(true);

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
      "Over the years, we've had the privilege of serving thousands of travellers. Our work supports local communities, promotes responsible travel and helps travellers explore destinations in a meaningful and well-guided way.",
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
    {
      value: "12+",
      label: "Years of Service",
    },
    {
      value: "4500+",
      label: "Travellers Assisted",
    },
    {
      value: "4.7/5",
      label: "Average Rating",
    },
  ];

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section
      id="about"
      className="w-full bg-slate-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-[#0078AA]">
            About Amit Tours & Travels
          </h1>

          <div className="mx-auto mt-4 mb-5 w-20 h-[3px] bg-[#0078AA] rounded-full" />

          <p className="text-base md:text-lg text-slate-700 leading-8">
            Professional, reliable and experience-focused travel services —
            crafted with care.
          </p>

        </div>

        {/* Tabs */}

        <div className="mb-8">

          <div
            className="flex gap-3 overflow-x-auto no-scrollbar px-2 sm:px-0 py-2 sm:justify-center snap-x snap-mandatory"
            role="tablist"
            aria-label="About tabs"
          >

            {tabs.map((tab) => (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-pressed={activeTab === tab.id}
                className={`flex-shrink-0 snap-start px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300

                ${
                  activeTab === tab.id
                    ? "bg-[#0078AA] text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>

            ))}

          </div>

        </div>

        {/* Content */}

        <div
          className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 mb-10 transition-all duration-300

          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >

          <p className="text-slate-700 text-base md:text-lg leading-8">
            {content[activeTab]}
          </p>

        </div>

        {/* Features */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >

              <div className="text-3xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0078AA] mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 leading-6">
                {feature.text}
              </p>

            </div>

          ))}

        </div>

        {/* Stats */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

            {stats.map((item, index) => (

              <div key={index}>

                <h3 className="text-3xl font-bold text-[#0078AA]">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-700">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </section>
  );
}