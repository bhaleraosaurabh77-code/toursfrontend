import React, { useState } from "react";
import {
  CalendarDays,
  Info,
  Backpack,
  ShieldCheck,
  CircleHelp,
} from "lucide-react";

import ItineraryTab from "./tabs/ItineraryTab";
import TourInfoTab from "./tabs/TourInfoTab";
import NeedToKnowTab from "./tabs/NeedToKnowTab";
import PoliciesTab from "./tabs/PoliciesTab";
import FAQTab from "./tabs/FAQTab";

const tabs = [
  {
    id: "itinerary",
    label: "Itinerary",
    icon: CalendarDays,
  },
  {
    id: "tourinfo",
    label: "Tour Information",
    icon: Info,
  },
  {
    id: "needtoknow",
    label: "Need To Know",
    icon: Backpack,
  },
  {
    id: "policies",
    label: "Policies",
    icon: ShieldCheck,
  },
  {
    id: "faq",
    label: "FAQ",
    icon: CircleHelp,
  },
];

const TourTabs = ({ tour }) => {

  const [activeTab, setActiveTab] =
    useState("itinerary");

  return (

    <section className="mt-12">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-[#0078AA]">

          Tour Details

        </h2>

        <p className="text-gray-500 mt-2">

          Everything you need before booking

        </p>

      </div>

      {/* Tabs */}

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-3 overflow-x-auto">

        <div className="flex gap-3 min-w-max">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            const active =
              activeTab === tab.id;

            return (

              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap

                ${
                  active
                    ? "bg-[#0078AA] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
              >

                <Icon size={18} />

                {tab.label}

              </button>

            );

          })}

        </div>

      </div>

      {/* Content */}

      <div className="mt-8">

        {activeTab === "itinerary" && (

          <ItineraryTab
            itinerary={tour.itinerary}
          />

        )}

        {activeTab === "tourinfo" && (

          <TourInfoTab
            tour={tour}
          />

        )}

        {activeTab === "needtoknow" && (

          <NeedToKnowTab
            tour={tour}
          />

        )}

        {activeTab === "policies" && (

          <PoliciesTab
            tour={tour}
          />

        )}

        {activeTab === "faq" && (

          <FAQTab
            faq={tour.faq}
          />

        )}

      </div>

    </section>

  );

};

export default TourTabs;