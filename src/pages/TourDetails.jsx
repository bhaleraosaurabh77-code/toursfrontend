import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, MapPin, Users } from "lucide-react";

import rajasthan from "../data/rajasthan";
import kerala from "../data/kerala";

import TourQuickInfo from "../components/tour/TourQuickInfo";
import Overview from "../components/tour/Overview";
import TourTabs from "../components/tour/TourTabs";
import DepartureDates from "../components/tour/DepartureDates";
import BookingCard from "../components/tour/BookingCard";

const TourDetails = () => {
  const { id } = useParams();

  const [selectedDeparture, setSelectedDeparture] = useState(null);

  const tours = {
    1: rajasthan,
    2: kerala,
  };

  const tour = tours[id];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Tour Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <section className="relative h-[65vh] sm:h-[75vh] lg:h-[500px]">

        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 text-white">

            <span className="inline-block bg-orange-500 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              🔥 Best Seller
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-5 leading-tight">
              {tour.title}
            </h1>

            <p className="mt-4 text-sm sm:text-lg max-w-3xl">
              {tour.subtitle}
            </p>

            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-8 mt-8 text-sm sm:text-base">

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {tour.duration}
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} />
                {tour.rating} Rating
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                {tour.seats} Seats
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {tour.state}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Left */}
          <div className="lg:col-span-2 space-y-8">

            <Overview tour={tour} />

            <TourQuickInfo
              includes={tour.quickIncludes}
              highlights={tour.highlights}
            />

            <DepartureDates
              departures={tour.departures}
              onSelect={setSelectedDeparture}
            />

            <TourTabs tour={tour} />

          </div>

          {/* Right */}
          <div className="w-full">

            <div className="lg:sticky lg:top-24">
              <BookingCard
                tour={tour}
                selectedDeparture={selectedDeparture}
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default TourDetails;