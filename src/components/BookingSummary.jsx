import React from "react";

const BookingSummary = ({
  bookingData = {
    adults: 1,
    roomType: "Single Sharing",
    train: "Sleeper Class",
  },
}) => {
    const basePrice = 11999;

    const roomMultipliers = {
    "Single Sharing": 1.520875,
    "Double Sharing": 1.3225,
    "Triple Sharing": 1.15,
    "Quad Sharing": 1,
    };

const pricePerPerson = Math.round(
  basePrice * roomMultipliers[bookingData.roomType]
);

const total =
  bookingData.pricePerPerson * bookingData.adults +
  bookingData.trainExtra * bookingData.adults;

const advance = Math.round(total * 0.30);

const balance = total - advance;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Booking Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Tour</span>
          <strong>Royale Rajasthan</strong>
        </div>

        <div className="flex justify-between">
          <span>Departure</span>
          <strong>06 Sept 2026</strong>
        </div>

        <div className="flex justify-between">
          <span>Guests</span>
         <strong>{bookingData.adults} Adult{bookingData.adults > 1 ? "s" : ""}</strong>
        </div>

        <div className="flex justify-between">
          <span>Room</span>
          <strong>{bookingData.roomType}</strong>
        </div>

        <div className="flex justify-between">
          <span>Train</span>
          <strong>{bookingData.train}</strong>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
         <span>₹{total.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Advance (30%)</span>
          <span>₹{advance.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-orange-600">
          <span>Balance (70%)</span>
          <span>₹{balance.toLocaleString()}</span>
        </div>

      </div>

      <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800">
        Continue Booking
      </button>
    </div>
  );
};

export default BookingSummary;