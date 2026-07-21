import React from "react";
import { Link } from "react-router-dom";

const TourCard = ({
  id,
  image,
  title,
  duration,
  places,
  price,
  rating,
  departure,
  seats,
  badge = "Best Seller",
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">

      {/* Image */}
      <div className="relative overflow-hidden h-64">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          🔥 {badge}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          ⭐ {rating}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-500 mt-2 text-sm">
          📍 {places}
        </p>

        <p className="text-gray-600 mt-3">
          🕒 {duration}
        </p>

        <div className="flex justify-between mt-4">

          <span className="text-green-600 font-semibold">
            👥 {seats} Seats
          </span>

          <span className="text-gray-600">
            📅 {departure}
          </span>

        </div>

        <div className="mt-5">

          <p className="text-sm text-gray-500">
            Starting From
          </p>

          <h2 className="text-3xl font-bold text-blue-700">
            {price}
          </h2>

        </div>


  <div className="grid grid-cols-2 gap-3 mt-6">

  <Link to={`/tour/${id}`}
    className="flex items-center justify-center border-2 border-blue-700 text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
  >
    View Details
  </Link>

  <Link
    to="/booking"
    className="flex items-center justify-center bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 rounded-xl transition"
  >
    Book Online
  </Link>

</div>

</div>

</div>


  );
};

export default TourCard;