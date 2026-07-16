import React, { useState } from "react";

const trains = [
  {
    id: "sleeper",
    name: "Sleeper Class",
    extra: 0,
  },
  {
    id: "ac3",
    name: "AC 3 Tier",
    extra: 3000,
  },
];

const TrainSelection = ({ onContinue }) => {
  const [selectedTrain, setSelectedTrain] = useState(trains[0]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Choose Train Class
      </h2>

      <div className="space-y-4">

        {trains.map((train) => (

          <div
            key={train.id}
            onClick={() => setSelectedTrain(train)}
            className={`border rounded-xl p-5 cursor-pointer transition
            ${
              selectedTrain.id === train.id
                ? "border-blue-700 bg-blue-50"
                : "border-gray-200"
            }`}
          >

            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-bold">
                  {train.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {train.extra === 0
                    ? "Included"
                    : `+ ₹${train.extra.toLocaleString()} per person`}
                </p>
              </div>

            </div>

          </div>

        ))}

      </div>

     <button
  onClick={() =>
    onContinue &&
    onContinue({
      train: selectedTrain.name,
      extra: selectedTrain.extra,
    })
  }
  className="w-full mt-8 bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800"
>
  Continue to Review
</button>

    </div>
  );
};

export default TrainSelection;