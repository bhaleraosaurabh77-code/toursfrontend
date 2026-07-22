import React, { useState } from "react";
import { Train, CheckCircle2 } from "lucide-react";

const trains = [
  {
    id: "sleeper",
    name: "Sleeper Class",
    extra: 0,
    description: "Comfortable Non-AC Sleeper Coach",
  },
  {
    id: "ac3",
    name: "AC 3 Tier",
    extra: 3000,
    description: "Air Conditioned 3 Tier Coach",
  },
];

const TrainSelection = ({ onContinue }) => {
  const [selectedTrain, setSelectedTrain] = useState(trains[0]);

  const handleSelect = (train) => {
    setSelectedTrain(train);

    if (onContinue) {
      onContinue({
        train: train.name,
        extra: train.extra,
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#0078AA]">
          Select Train Class
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Choose your preferred railway class. Prices update instantly.
        </p>

      </div>

      {/* Options */}

      <div className="space-y-5">

        {trains.map((train) => {

          const active = selectedTrain.id === train.id;

          return (

            <div
              key={train.id}
              onClick={() => handleSelect(train)}
              className={`cursor-pointer rounded-2xl border-2 transition-all duration-300 p-4 sm:p-6
              ${
                active
                  ? "border-[#0078AA] bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-[#0078AA] hover:shadow-sm"
              }`}
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left */}

                <div className="flex items-start sm:items-center gap-4">

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                    ${
                      active
                        ? "bg-[#0078AA] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Train size={28} />
                  </div>

                  <div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      {train.name}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base mt-1">
                      {train.description}
                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="sm:text-right">

                  <p className="text-xl sm:text-2xl font-bold text-[#0078AA]">

                    {train.extra === 0
                      ? "Included"
                      : `+ ₹${train.extra.toLocaleString()}`}

                  </p>

                  {train.extra !== 0 && (

                    <p className="text-sm text-gray-500">
                      per passenger
                    </p>

                  )}

                  {active && (

                    <div className="flex items-center sm:justify-end gap-2 mt-3 text-green-600 font-semibold">

                      <CheckCircle2 size={18} />

                      Selected

                    </div>

                  )}

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default TrainSelection;