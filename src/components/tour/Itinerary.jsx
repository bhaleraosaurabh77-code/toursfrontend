import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";

const Itinerary = ({ itinerary = [] }) => {
  const [openDay, setOpenDay] = useState(1);

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <section className="mt-12">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <div>

          <h2 className="text-4xl font-bold text-[#0078AA]">

            Tour Itinerary

          </h2>

          <p className="text-gray-500 mt-2">

            Day-wise travel plan

          </p>

        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl">

          <CalendarDays
            size={22}
            className="text-[#0078AA]"
          />

          <span className="font-semibold text-[#0078AA]">

            {itinerary.length} Days

          </span>

        </div>

      </div>

      

      {/* Accordion */}

      <div className="space-y-6 mt-8">

        {itinerary.map((day) => {

          const isOpen =
            openDay === day.day;

          return (

            <div
              key={day.day}
              className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden transition-all"
            >

              {/* Header */}

              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-center justify-between px-6 py-6 hover:bg-blue-50 transition"
              >

                <div className="flex items-center gap-5">

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl

                  ${
                    isOpen
                      ? "bg-[#0078AA] text-white"
                      : "bg-blue-100 text-[#0078AA]"
                  }`}>

                    {day.day}

                  </div>

                  <div className="text-left">

                    <h3 className="text-xl font-bold text-gray-800">

                      {day.title}

                    </h3>

                    <div className="flex flex-wrap gap-5 mt-2 text-gray-500 text-sm">

                      <div className="flex items-center gap-2">

                        <Clock size={16} />

                        Day {day.day}

                      </div>

                      <div className="flex items-center gap-2">

                        <MapPin size={16} />

                        {day.stay}

                      </div>

                    </div>

                  </div>

                </div>

                {isOpen ? (

                  <ChevronUp
                    size={24}
                    className="text-[#0078AA]"
                  />

                ) : (

                  <ChevronDown
                    size={24}
                    className="text-[#0078AA]"
                  />

                )}

              </button>

              {/* Expanded Content Starts Here */}
              {isOpen && (
                <div className="border-t border-gray-200">
                                    <div className="grid lg:grid-cols-3 gap-8 p-8">

                    {/* LEFT */}

                    <div className="lg:col-span-2">

                      <h4 className="text-lg font-bold text-[#0078AA] mb-4">
                        About the Day
                      </h4>

                      <p className="text-gray-600 leading-8">
                        {day.description}
                      </p>

                      {/* Highlights */}

                      <h4 className="text-lg font-bold text-[#0078AA] mt-8 mb-4">
                        Places Covered
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {day.highlights.map((item, index) => (

                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0078AA] font-medium text-sm hover:bg-[#0078AA] hover:text-white transition"
                          >
                            {item}
                          </span>

                        ))}

                      </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                      <div className="space-y-5">

                        {/* Meals */}

                        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">

                          <h4 className="font-bold text-orange-600 mb-3">
                            🍽 Meals
                          </h4>

                          {day.meals.length > 0 ? (

                            day.meals.map((meal, index) => (

                              <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700 py-1"
                              >

                                <span className="text-green-600">
                                  ✓
                                </span>

                                {meal}

                              </div>

                            ))

                          ) : (

                            <p className="text-gray-500">
                              No Meals Included
                            </p>

                          )}

                        </div>

                        {/* Stay */}

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">

                          <h4 className="font-bold text-green-700 mb-3">
                            🛏 Stay
                          </h4>

                          <p className="text-gray-700 font-medium">
                            {day.stay}
                          </p>

                        </div>

                        {/* Day Number */}

                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">

                          <h4 className="font-bold text-[#0078AA] mb-3">
                            📅 Tour Day
                          </h4>

                          <p className="text-4xl font-bold text-[#0078AA]">
                            Day {day.day}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>





                </div>
              )}

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="mt-10 bg-gradient-to-r from-[#0078AA] to-[#009FD4] rounded-3xl text-white p-8">

        <div className="grid md:grid-cols-3 gap-8">

          <div>

            <h3 className="text-2xl font-bold mb-3">
              Tour Duration
            </h3>

            <p className="text-blue-100">
              {itinerary.length} Days
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-3">
              Destinations
            </h3>

            <p className="text-blue-100">
              Jaipur • Jaisalmer • Jodhpur
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-3">
              Tour Type
            </h3>

            <p className="text-blue-100">
              • Family • Group
            </p>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Itinerary;