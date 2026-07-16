import React from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, MapPin, Users } from "lucide-react";
import rajasthan from "../data/rajasthan";
import kerala from "../data/kerala";
import Overview from "../components/Overview";
import Itinerary from "../components/Itinerary";
import BookingCard from "../components/BookingCard";
import DepartureDates from "../components/DepartureDates";

const TourDetails = () => {
    const { id } = useParams();

const tours = {
  1: rajasthan,
  2: kerala,
};

const tour = tours[id];
if (!tour) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Tour Not Found</h1>
    </div>
  );
}
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <section className="relative h-[500px]">

        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
              🔥 Best Seller
            </span>

            <h1 className="text-5xl font-bold mt-5">
  {tour.title}
</h1>

            <p className="mt-4 text-lg">
              {tour.subtitle}
            </p>

            <div className="flex flex-wrap gap-8 mt-8">

              <div className="flex items-center gap-2">
                <Clock size={20} />
                {tour.duration}
              </div>

              <div className="flex items-center gap-2">
                <Star size={20} />
                {tour.rating} Rating
              </div>

              <div className="flex items-center gap-2">
                <Users size={20} />
                {tour.seats} Seats Available
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {tour.state}
              </div>

            </div>

          </div>

        </div>

      </section>

     <div className="max-w-7xl mx-auto px-6 py-12">

  <div className="grid lg:grid-cols-3 gap-10">

    {/* Left Side */}

    <div className="lg:col-span-2">

     <Overview tour={tour} />

<Itinerary itinerary={tour.itinerary} />

<DepartureDates departures={tour.departures} />

    </div>

    {/* Right Side */}

    <div>

      <BookingCard tour={tour} />

    </div>

  </div>

</div>

    </div>
  );
};

export default TourDetails;