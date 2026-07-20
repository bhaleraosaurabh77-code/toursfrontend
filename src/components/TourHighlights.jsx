import React from "react";
import {
  Castle,
  Landmark,
  Mountain,
  Tent,
  Camera,
  Music2,
  Trees,
  MapPinned,
} from "lucide-react";

const iconMap = {
  castle: Castle,
  landmark: Landmark,
  mountain: Mountain,
  tent: Tent,
  camera: Camera,
  music: Music2,
  trees: Trees,
  map: MapPinned,
};

const TourHighlights = ({ highlights = [] }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Tour Highlights
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {highlights.map((item, index) => {
          const Icon = iconMap[item.icon] || MapPinned;

          return (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon
                  size={24}
                  className="text-blue-700"
                />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
};

export default TourHighlights;