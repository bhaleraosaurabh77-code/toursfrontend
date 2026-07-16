import React from "react";
import TourCard from "../components/TourCard";
import tours from "../data/tours";

const TourCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-700">
            Featured Tour Packages
          </h1>

          <p className="text-gray-600 mt-3">
            Explore our most popular tour packages.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
           <TourCard
  key={tour.id}
  id={tour.id}
  image={tour.image}
  title={tour.title}
  places={tour.places}
  duration={tour.duration}
  price={tour.price}
  rating={tour.rating}
  departure={tour.departure}
  seats={tour.seats}
  badge={tour.badge}
/>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TourCards;