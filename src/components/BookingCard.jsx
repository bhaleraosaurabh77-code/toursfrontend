import React, { useState } from "react";
import { Link } from "react-router-dom";
import DownloadItineraryModal from "./DownloadItineraryModal";

const BookingCard = ({ tour }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

      <p className="text-gray-500 text-sm">
        Starting From
      </p>

      <h2 className="text-4xl font-bold text-blue-700">
        ₹{tour.basePrice.toLocaleString()}
      </h2>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>⭐ Rating</span>
          <strong>{tour.rating}</strong>
        </div>

        <div className="flex justify-between">
          <span>👥 Seats</span>
          <strong>{tour.seats}</strong>
        </div>

        <div className="flex justify-between">
          <span>📅 Departure</span>
          <strong>{tour.nextDeparture}</strong>
        </div>

      </div>

      <div className="space-y-3 mt-8">

  <Link to="/booking">
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
  tour={tour}
/>
    </div>
  );
};

export default BookingCard;