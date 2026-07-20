import React, { useState } from "react";
import { Link } from "react-router-dom";
import DownloadItineraryModal from "./DownloadItineraryModal";

const BookingCard = ({ tour, selectedDeparture }) => {
  const [showModal, setShowModal] = useState(false);

  const displayPrice = selectedDeparture
    ? selectedDeparture.price
    : tour.basePrice;

  const displayDeparture = selectedDeparture
    ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
    : tour.nextDeparture;

  const displaySeats = selectedDeparture
    ? selectedDeparture.totalSlots
    : tour.seats;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <p className="text-gray-500 text-sm">
        Starting From
      </p>

      <h2 className="text-4xl font-bold text-blue-700 mt-1">
        ₹{displayPrice.toLocaleString()}
      </h2>

      <p className="text-sm text-gray-500">
        Per Person
      </p>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>⭐ Rating</span>
          <strong>{tour.rating}</strong>
        </div>

        <div className="flex justify-between">
          <span>👥 Seats</span>
          <strong>{displaySeats}</strong>
        </div>

        <div className="flex justify-between">
          <span>📅 Departure</span>
          <strong>{displayDeparture}</strong>
        </div>

      </div>

      <div className="space-y-3 mt-8">

        <Link
          to="/booking"
          state={{
            tour,
            departure: selectedDeparture,
          }}
        >
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold">
            Book Online
          </button>
        </Link>

        <button
          onClick={() => setShowModal(true)}
          className="w-full border-2 border-blue-700 text-blue-700 py-4 rounded-xl font-bold hover:bg-blue-50"
        >
          Download Itinerary
        </button>

      </div>

      <DownloadItineraryModal
        open={showModal}
        onClose={() => setShowModal(false)}
        tour={{
          ...tour,
          basePrice: displayPrice,
          nextDeparture: displayDeparture,
        }}
      />

    </div>
  );
};

export default BookingCard;