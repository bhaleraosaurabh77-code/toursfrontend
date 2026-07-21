// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DownloadItineraryModal from "./DownloadItineraryModal";

// const BookingCard = ({ tour, selectedDeparture }) => {
//   const [showModal, setShowModal] = useState(false);

//   const displayPrice = selectedDeparture
//     ? selectedDeparture.price
//     : tour.basePrice;

//   const displayDeparture = selectedDeparture
//     ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
//     : tour.nextDeparture;

//   const displaySeats = selectedDeparture
//     ? selectedDeparture.totalSlots
//     : tour.seats;

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

//       <p className="text-gray-500 text-sm">
//         Starting From
//       </p>

//       <h2 className="text-4xl font-bold text-blue-700 mt-1">
//         ₹{displayPrice.toLocaleString()}
//       </h2>

//       <p className="text-sm text-gray-500">
//         Per Person
//       </p>

//       <div className="mt-6 space-y-4">

//         <div className="flex justify-between">
//           <span>⭐ Rating</span>
//           <strong>{tour.rating}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>👥 Seats</span>
//           <strong>{displaySeats}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>📅 Departure</span>
//           <strong>{displayDeparture}</strong>
//         </div>

//       </div>

//       <div className="space-y-3 mt-8">

//         <Link
//           to="/booking"
//           state={{
//             tour,
//             departure: selectedDeparture,
//           }}
//         >
//           <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold">
//             Book Online
//           </button>
//         </Link>

//         <button
//           onClick={() => setShowModal(true)}
//           className="w-full border-2 border-blue-700 text-blue-700 py-4 rounded-xl font-bold hover:bg-blue-50"
//         >
//           Download Itinerary
//         </button>

//       </div>

//       <DownloadItineraryModal
//         open={showModal}
//         onClose={() => setShowModal(false)}
//         tour={{
//           ...tour,
//           basePrice: displayPrice,
//           nextDeparture: displayDeparture,
//         }}
//       />

//     </div>
//   );
// };

// export default BookingCard;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
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
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden sticky top-6">

        {/* Price Header */}

        <div className="bg-gradient-to-r from-[#0078AA] to-[#009FD4] p-6 text-white">

          <p className="uppercase tracking-wider text-sm text-blue-100">
            Starting From
          </p>

          <div className="flex items-end gap-2 mt-2">

            <h2 className="text-5xl font-bold">
              ₹{displayPrice.toLocaleString()}
            </h2>

            <span className="pb-2 text-blue-100">
              / Person
            </span>

          </div>

        </div>

        {/* Tour Info */}

        <div className="p-6">

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              {/* <div className="flex items-center gap-3 text-gray-600">

                <Star
                  size={20}
                  className="text-yellow-500"
                />

                Rating

              </div> */}

              {/* <strong className="text-lg">
                {tour.rating}
              </strong> */}

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3 text-gray-600">

                <Users
                  size={20}
                  className="text-[#0078AA]"
                />

                Seats Left

              </div>

              <strong className="text-lg">
                {displaySeats}
              </strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3 text-gray-600">

                <CalendarDays
                  size={20}
                  className="text-[#0078AA]"
                />

                Departure

              </div>

              <strong className="text-right text-sm">
                {displayDeparture}
              </strong>

            </div>

          </div>

          {/* Trust Box */}

          <div className="mt-6 bg-green-50 rounded-2xl border border-green-200 p-4">

            <div className="flex gap-3">

              <ShieldCheck
                className="text-green-600 mt-1"
                size={22}
              />

              <div>

                <h3 className="font-semibold text-green-700">
                  Secure Booking
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Book with confidence.
                  Instant confirmation after payment.
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

              <button className="w-full bg-[#0078AA] hover:bg-[#00658f] transition text-white rounded-2xl py-4 font-semibold flex justify-center items-center gap-3">

                Book Online

                <ArrowRight size={20} />

              </button>

            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="w-full border-2 border-[#0078AA] text-[#0078AA] rounded-2xl py-4 font-semibold hover:bg-blue-50 transition flex justify-center items-center gap-3"
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