import React from "react";
import TourCard from "../components/tour/TourCard";
import tours from "../data/tours";

const TourCards = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">
            Featured Tour Packages
          </h1>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Explore our most popular tour packages.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
    </section>
  );
};

export default TourCards;