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
    <section className="mt-10 sm:mt-12">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AA]">
            Tour Itinerary
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Day-wise travel plan
          </p>

        </div>

        <div className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl w-fit">

          <CalendarDays
            size={22}
            className="text-[#0078AA]"
          />

          <span className="font-semibold text-[#0078AA] text-sm sm:text-base">
            {itinerary.length} Days
          </span>

        </div>

      </div>

      {/* Accordion */}

      <div className="space-y-5 sm:space-y-6">

        {itinerary.map((day) => {

          const isOpen = openDay === day.day;

          return (

            <div
              key={day.day}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-gray-200 overflow-hidden"
            >

              {/* Accordion Header */}

              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-start sm:items-center justify-between gap-4 px-4 sm:px-6 py-5 hover:bg-blue-50 transition"
              >

                <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">

                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0 ${
                      isOpen
                        ? "bg-[#0078AA] text-white"
                        : "bg-blue-100 text-[#0078AA]"
                    }`}
                  >
                    {day.day}
                  </div>

                  <div className="text-left min-w-0">

                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {day.title}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-5 mt-2 text-gray-500 text-sm">

                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        Day {day.day}
                      </div>

                      <div className="flex items-center gap-2 break-words">
                        <MapPin size={16} />
                        {day.stay}
                      </div>

                    </div>

                  </div>

                </div>

                {isOpen ? (
                  <ChevronUp
                    size={24}
                    className="text-[#0078AA] flex-shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={24}
                    className="text-[#0078AA] flex-shrink-0"
                  />
                )}

              </button>

              {/* Expanded Content */}

              {isOpen && (

                <div className="border-t border-gray-200">

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-5 sm:p-8">

                    {/* LEFT */}

                    <div className="lg:col-span-2">

                      <h4 className="text-lg font-bold text-[#0078AA] mb-4">
                        About the Day
                      </h4>

                      <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                        {day.description}
                      </p>

                      {/* Highlights */}

                      <h4 className="text-lg font-bold text-[#0078AA] mt-8 mb-4">
                        Places Covered
                      </h4>

                      <div className="flex flex-wrap gap-2 sm:gap-3">

                        {day.highlights.map((item, index) => (

                          <span
                            key={index}
                            className="px-3 sm:px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0078AA] font-medium text-xs sm:text-sm hover:bg-[#0078AA] hover:text-white transition"
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

                        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-5">

                          <h4 className="font-bold text-orange-600 mb-3">
                            🍽 Meals
                          </h4>

                          {day.meals.length > 0 ? (

                            day.meals.map((meal, index) => (

                              <div
                                key={index}
                                className="flex items-center gap-2 text-gray-700 py-1 text-sm sm:text-base"
                              >

                                <span className="text-green-600">
                                  ✓
                                </span>

                                {meal}

                              </div>

                            ))

                          ) : (

                            <p className="text-gray-500 text-sm">
                              No Meals Included
                            </p>

                          )}

                        </div>

                        {/* Stay */}

                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-5">

                          <h4 className="font-bold text-green-700 mb-3">
                            🛏 Stay
                          </h4>

                          <p className="text-gray-700 font-medium text-sm sm:text-base">
                            {day.stay}
                          </p>

                        </div>

                        {/* Day Number */}

                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5">

                          <h4 className="font-bold text-[#0078AA] mb-3">
                            📅 Tour Day
                          </h4>

                          <p className="text-3xl sm:text-4xl font-bold text-[#0078AA]">
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

      <div className="mt-8 sm:mt-10 bg-gradient-to-r from-[#0078AA] to-[#009FD4] rounded-2xl sm:rounded-3xl text-white p-5 sm:p-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          <div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Tour Duration
            </h3>

            <p className="text-blue-100 text-sm sm:text-base">
              {itinerary.length} Days
            </p>

          </div>

          <div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Destinations
            </h3>

            <p className="text-blue-100 text-sm sm:text-base leading-6">
              Jaipur • Jaisalmer • Jodhpur
            </p>

          </div>

          <div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Tour Type
            </h3>

            <p className="text-blue-100 text-sm sm:text-base">
              • Family • Group
            </p>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Itinerary;