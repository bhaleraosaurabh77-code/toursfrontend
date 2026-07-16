import React from "react";

const Itinerary = ({ itinerary }) => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-8 mt-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Tour Itinerary
      </h2>

      <div className="space-y-8">
        {itinerary.map((day) => (
          <div
            key={day.day}
            className="border-l-4 border-blue-600 pl-6 relative"
          >
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {day.day}
            </div>

            <h3 className="text-xl font-bold mb-2">
              Day {day.day} - {day.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {day.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {day.highlights.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="text-sm text-gray-500">
              <strong>Meals:</strong>{" "}
              {day.meals.length ? day.meals.join(", ") : "No Meals"}
              <br />
              <strong>Stay:</strong> {day.stay}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;