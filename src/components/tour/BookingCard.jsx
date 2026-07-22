import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Users,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";

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
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden lg:sticky lg:top-6">

        {/* Price Header */}

        <div className="bg-gradient-to-r from-[#0078AA] to-[#009FD4] p-5 sm:p-6 text-white">

          <p className="uppercase tracking-wider text-xs sm:text-sm text-blue-100">
            Starting From
          </p>

          <div className="flex items-end gap-2 mt-2 flex-wrap">

            <h2 className="text-4xl sm:text-5xl font-bold break-all">
              ₹{displayPrice.toLocaleString()}
            </h2>

            <span className="pb-1 sm:pb-2 text-sm text-blue-100">
              / Person
            </span>

          </div>

        </div>

        {/* Tour Info */}

        <div className="p-5 sm:p-6">

          <div className="space-y-5">

            {/* Seats */}

            <div className="flex justify-between items-center gap-4">

              <div className="flex items-center gap-3 text-gray-600">

                <Users
                  size={20}
                  className="text-[#0078AA] flex-shrink-0"
                />

                <span className="text-sm sm:text-base">
                  Seats Left
                </span>

              </div>

              <strong className="text-base sm:text-lg whitespace-nowrap">
                {displaySeats}
              </strong>

            </div>

            {/* Departure */}

            <div className="flex justify-between items-start gap-4">

              <div className="flex items-center gap-3 text-gray-600">

                <CalendarDays
                  size={20}
                  className="text-[#0078AA] flex-shrink-0"
                />

                <span className="text-sm sm:text-base">
                  Departure
                </span>

              </div>

              <strong className="text-right text-xs sm:text-sm leading-5 max-w-[150px] sm:max-w-[220px]">
                {displayDeparture}
              </strong>

            </div>

          </div>

          {/* Trust Box */}

          <div className="mt-6 bg-green-50 rounded-2xl border border-green-200 p-4">

            <div className="flex gap-3">

              <ShieldCheck
                className="text-green-600 mt-1 flex-shrink-0"
                size={22}
              />

              <div>

                <h3 className="font-semibold text-green-700 text-sm sm:text-base">
                  Secure Booking
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Book with confidence. Instant confirmation after payment.
                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="space-y-4 mt-8">

            <Link
              to="/booking"
              state={{
                tour,
                departure: selectedDeparture,
              }}
            >
              <button className="w-full bg-[#0078AA] hover:bg-[#00658f] transition text-white rounded-2xl py-3.5 sm:py-4 font-semibold flex justify-center items-center gap-3">

                Book Online

                <ArrowRight size={20} />

              </button>
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="w-full border-2 border-[#0078AA] text-[#0078AA] rounded-2xl py-3.5 sm:py-4 font-semibold hover:bg-blue-50 transition flex justify-center items-center gap-3"
            >

              <Download size={20} />

              Download Itinerary

            </button>

          </div>

        </div>

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
    </>
  );
};

export default BookingCard;