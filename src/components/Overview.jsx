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
    <section className="bg-white rounded-2xl shadow-md p-8">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Tour Overview
      </h2>

      <p className="text-gray-600 leading-8">
        Experience an unforgettable journey through{" "}
        <span className="font-semibold">{tour.state}</span> with our{" "}
        <span className="font-semibold">{tour.title}</span> package.
      </p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <Clock className="mx-auto text-blue-700" />
          <p className="mt-3 font-semibold">
            {tour.duration}
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <MapPin className="mx-auto text-blue-700" />
          <p className="mt-3 font-semibold">
            {tour.cities} Cities
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <Hotel className="mx-auto text-blue-700" />
          <p className="mt-3 font-semibold">
            Hotel Stay
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center">
          <Bus className="mx-auto text-blue-700" />
          <p className="mt-3 font-semibold">
            Transport Included
          </p>
        </div>

      </div>

      <h3 className="text-2xl font-bold mt-10 mb-5">
        Tour Includes
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
          <Hotel className="text-green-600" />
          Hotel
        </div>

        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
          <Utensils className="text-green-600" />
          Meals
        </div>

        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
          <Bus className="text-green-600" />
          Transport
        </div>

        <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
          <Camera className="text-green-600" />
          Sightseeing
        </div>

      </div>

    </section>
  );
};

export default Overview;