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
    <div className="group w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-1">

      {/* Image */}
      <div className="relative overflow-hidden h-52 sm:h-60 lg:h-64">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold shadow">
          🔥 {badge}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow">
          ⭐ {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">

        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-500 mt-3 text-sm sm:text-base leading-6">
          📍 {places}
        </p>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          🕒 {duration}
        </p>

        {/* Seats & Departure */}
        <div className="flex justify-between items-center mt-5 text-sm sm:text-base">

          <span className="text-green-600 font-semibold">
            👥 {seats} Seats
          </span>

          <span className="text-gray-600">
            📅 {departure}
          </span>

        </div>

        {/* Price */}
        <div className="mt-6">

          <p className="text-gray-500 text-sm">
            Starting From
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AA] mt-1">
            {price}
          </h2>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">

          <Link
            to={`/tour/${id}`}
           className="w-full flex items-center justify-center border-2 border-[#0078AA] text-[#0078AA] py-3 rounded-xl font-semibold hover:bg-[#0078AA] hover:text-white transition">
            View Details
          </Link>

          <Link
            to="/booking"
            className="w-full flex items-center justify-center bg-[#0078AA] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#00658F] hover:shadow-lg transition-all duration-300">
            Book Online
          </Link>

        </div>

      </div>

    </div>
  );
};

export default TourCard;