import React from "react";
import {
  Hotel,
  Utensils,
  Bus,
  Camera,
  Clock,
  MapPin,
} from "lucide-react";

const Overview = ({ tour }) => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-5 sm:p-6 lg:p-8">

      {/* Heading */}

      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">
        Tour Overview
      </h2>

      {/* Description */}

      <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
        Experience an unforgettable journey through{" "}
        <span className="font-semibold">{tour.state}</span> with our{" "}
        <span className="font-semibold">{tour.title}</span> package.
      </p>

      {/* Tour Highlights */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">

        <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center hover:shadow-md transition">

          <Clock
            className="mx-auto text-blue-700"
            size={30}
          />

          <p className="mt-3 font-semibold text-sm sm:text-base">
            {tour.duration}
          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center hover:shadow-md transition">

          <MapPin
            className="mx-auto text-blue-700"
            size={30}
          />

          <p className="mt-3 font-semibold text-sm sm:text-base">
            {tour.cities} Cities
          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center hover:shadow-md transition">

          <Hotel
            className="mx-auto text-blue-700"
            size={30}
          />

          <p className="mt-3 font-semibold text-sm sm:text-base">
            Hotel Stay
          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-4 sm:p-5 text-center hover:shadow-md transition">

          <Bus
            className="mx-auto text-blue-700"
            size={30}
          />

          <p className="mt-3 font-semibold text-sm sm:text-base">
            Transport Included
          </p>

        </div>

      </div>

      {/* Includes */}

      <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-5">
        Tour Includes
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 hover:shadow-md transition">

          <Hotel
            className="text-green-600"
            size={24}
          />

          <span className="font-medium text-sm sm:text-base">
            Hotel
          </span>

        </div>

        <div className="bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 hover:shadow-md transition">

          <Utensils
            className="text-green-600"
            size={24}
          />

          <span className="font-medium text-sm sm:text-base">
            Meals
          </span>

        </div>

        <div className="bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 hover:shadow-md transition">

          <Bus
            className="text-green-600"
            size={24}
          />

          <span className="font-medium text-sm sm:text-base">
            Transport
          </span>

        </div>

        <div className="bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 hover:shadow-md transition">

          <Camera
            className="text-green-600"
            size={24}
          />

          <span className="font-medium text-sm sm:text-base">
            Sightseeing
          </span>

        </div>

      </div>

    </section>
  );
};

export default Overview;