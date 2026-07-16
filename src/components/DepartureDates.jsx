import React, { useState } from "react";

const DepartureDates = ({ departures, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (departure) => {
    setSelected(departure);

    if (onSelect) {
      onSelect(departure);
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-8 mt-10">

      <h2 className="text-3xl font-bold text-blue-700 mb-2">
        Departure Dates
      </h2>

      <p className="text-gray-500 mb-8">
        Select your preferred departure date.
      </p>

      <div className="space-y-4">

        {departures.map((departure) => (

          <div
            key={departure.id}
            onClick={() => handleSelect(departure)}
            className={`cursor-pointer border rounded-xl p-5 transition duration-300
            ${
              selected?.id === departure.id
                ? "border-blue-700 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-bold text-lg">
                  {departure.date}
                </h3>

                <p className="text-sm text-gray-500">
                  {departure.seats} Seats Available
                </p>

              </div>

              <div className="text-right">

                <h2 className="text-2xl font-bold text-blue-700">
                  ₹{departure.price.toLocaleString()}
                </h2>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default DepartureDates;