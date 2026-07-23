import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  User,
  CalendarDays,
  Train,
  BedDouble,
  Users,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import { useBooking } from "../context/BookingContext";

const ReviewBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { booking } = useBooking();

  const bookingData = location.state?.bookingData;
  const selectedTour = location.state?.selectedTour;
  const selectedDeparture = location.state?.selectedDeparture;

  const [accepted, setAccepted] = useState(false);

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-[#0078AA] text-white px-6 py-3 rounded-xl"
        >
          Go Home
        </button>
      </div>
    );
  }

  const subtotal =
    bookingData.pricePerPerson * bookingData.adults +
    bookingData.childPrice * bookingData.children +
    bookingData.trainExtra;

  const gst = Math.round(subtotal * 0.05);

  const grandTotal = subtotal + gst;

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">

          <button
            onClick={() =>
                navigate("/booking", {
                replace: true,
                state: {
                    tour: selectedTour,
                    departure: selectedDeparture,
                },
                })
            }
            className="flex items-center gap-2 text-[#0078AA] font-semibold"
            >
            <ArrowLeft size={20} />
            Back
            </button>

          <h1 className="text-3xl font-bold text-[#0078AA]">
            Review Booking
          </h1>

          <div></div>

        </div>

        <div className="grid lg:grid-cols-[1.7fr_420px] gap-8">

          {/* Left */}

          <div className="space-y-6">

            {/* Traveller */}

<div className="bg-white rounded-3xl shadow-sm border p-6">

  <h2 className="text-xl font-bold mb-6">
    Traveller Details
  </h2>

  {/* Lead Traveller */}

  <div className="rounded-2xl border border-[#D8ECF7] p-5 bg-[#F8FCFE]">

    <h3 className="font-semibold text-[#0078AA] mb-5">
      Lead Traveller
    </h3>

    <div className="grid sm:grid-cols-2 gap-5">

      <div>
        <p className="text-xs text-gray-500">
          First Name
        </p>

        <h4 className="font-semibold">
          {booking.traveller.firstName}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Last Name
        </p>

        <h4 className="font-semibold">
          {booking.traveller.lastName}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Mobile
        </p>

        <h4 className="font-semibold">
          {booking.traveller.mobile}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Email
        </p>

        <h4 className="font-semibold break-all">
          {booking.traveller.email}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Gender
        </p>

        <h4 className="font-semibold">
          {booking.traveller.gender}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Date of Birth
        </p>

        <h4 className="font-semibold">
          {booking.traveller.dob}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          Nationality
        </p>

        <h4 className="font-semibold">
          {booking.traveller.nationality}
        </h4>
      </div>

      <div>
        <p className="text-xs text-gray-500">
          State
        </p>

        <h4 className="font-semibold">
          {booking.traveller.state}
        </h4>
      </div>

    </div>

  </div>

  {/* Co Travellers */}

  {booking.coTravellers?.length > 0 && (

    <div className="space-y-4 mt-6">

      <h3 className="font-semibold text-[#0078AA]">
        Co-Travellers
      </h3>

      {booking.coTravellers.map((traveller, index) => (

        <div
          key={index}
          className="rounded-2xl border p-5"
        >

          <h4 className="font-semibold mb-4">
            {traveller.type}
          </h4>

          <div className="grid sm:grid-cols-2 gap-5">

            <div>
              <p className="text-xs text-gray-500">
                First Name
              </p>

              <h4 className="font-semibold">
                {traveller.firstName}
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Last Name
              </p>

              <h4 className="font-semibold">
                {traveller.lastName}
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Gender
              </p>

              <h4 className="font-semibold">
                {traveller.gender}
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Date of Birth
              </p>

              <h4 className="font-semibold">
                {traveller.dob}
              </h4>
            </div>

          </div>

        </div>

      ))}

    </div>

  )}

</div>
            {/* Tour */}

            <div className="bg-white rounded-3xl shadow-sm border p-6">

              <h2 className="text-xl font-bold mb-5">
                Tour Details
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-[#0078AA]" />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Tour
                    </p>

                    <h3 className="font-semibold">
                      {bookingData.tourName}
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-[#0078AA]" />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Departure
                    </p>

                    <h3 className="font-semibold">
                      {bookingData.departure}
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-3">
                  <Train className="text-[#0078AA]" />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Train
                    </p>

                    <h3 className="font-semibold">
                      {bookingData.train}
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-3">
                  <BedDouble className="text-[#0078AA]" />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Room
                    </p>

                    <h3 className="font-semibold">
                      {bookingData.roomType}
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-[#0078AA]" />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Guests
                    </p>

                    <h3 className="font-semibold">
                      {bookingData.adults} Adult(s)
                      {bookingData.children > 0 &&
                        `, ${bookingData.children} Child`}
                    </h3>
                  </div>

                </div>

              </div>

            </div>
                      </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Price Summary */}

            <div className="bg-white rounded-3xl shadow-sm border p-6">

              <h2 className="text-xl font-bold mb-5">
                Price Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>
                    Adults ({bookingData.adults})
                  </span>

                  <span>
                    ₹
                    {(bookingData.pricePerPerson * bookingData.adults).toLocaleString()}
                  </span>
                </div>

                {bookingData.children > 0 && (
                  <div className="flex justify-between">
                    <span>
                      Children ({bookingData.children})
                    </span>

                    <span>
                      ₹
                      {(bookingData.childPrice * bookingData.children).toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>
                    Train Upgrade
                  </span>

                  <span>
                    ₹{bookingData.trainExtra.toLocaleString()}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between">
                  <span>
                    Sub Total
                  </span>

                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>
                    GST (5%)
                  </span>

                  <span>
                    ₹{gst.toLocaleString()}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold text-[#0078AA]">
                  <span>
                    Grand Total
                  </span>

                  <span>
                    ₹{grandTotal.toLocaleString()}
                  </span>
                </div>

              </div>

            </div>

            {/* Terms */}

            <div className="bg-white rounded-3xl shadow-sm border p-6">

              <label className="flex items-start gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1"
                />

                <span className="text-sm text-gray-600">
                  I have read and agree to the Terms & Conditions,
                  Cancellation Policy and Privacy Policy.
                </span>

              </label>

            </div>

            {/* Payment Button */}

            <button
              disabled={!accepted}
              onClick={() => alert("Payment Gateway Coming Soon")}
              className={`
                w-full
                py-4
                rounded-2xl
                font-semibold
                text-lg
                transition-all
                ${
                  accepted
                    ? "bg-[#0078AA] hover:bg-[#00658f] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              Proceed to Payment
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReviewBooking;