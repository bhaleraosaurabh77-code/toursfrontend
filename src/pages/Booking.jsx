import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CalendarDays, ShieldCheck } from "lucide-react";

import Stepper from "../components/booking/Stepper";
import AddGuests from "../components/booking/AddGuests";
import TrainSelection from "../components/booking/TrainSelection";
import BookingSummary from "../components/booking/BookingSummary";

import { calculatePricing } from "../utils/pricingEngine";

const Booking = () => {
  const location = useLocation();

  const selectedTour = location.state?.tour || null;
  const selectedDeparture = location.state?.departure || null;

  const quadPrice =
    selectedDeparture?.price || selectedTour?.basePrice || 11999;

  const departureDate = selectedDeparture
    ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
    : selectedTour?.nextDeparture || "";

  const defaultPricing = calculatePricing({
    quadPrice,
    adults: 1,
    children: 0,
    trainExtra: 0,
  });

  const [bookingData, setBookingData] = useState({
    tourName: selectedTour?.title || "Tour",
    departure: departureDate,
    adults: 1,
    children: 0,
    basePrice: quadPrice,
    roomType: defaultPricing.roomType,
    pricePerPerson: defaultPricing.adultPrice,
    childPrice: defaultPricing.childPrice,
    train: "Sleeper Class",
    trainExtra: 0,
  });

  useEffect(() => {
    if (!selectedDeparture) return;

    const pricing = calculatePricing({
      quadPrice: selectedDeparture.price,
      adults: bookingData.adults,
      children: bookingData.children,
      trainExtra: bookingData.trainExtra,
    });

    setBookingData((prev) => ({
      ...prev,
      tourName: selectedTour?.title || prev.tourName,
      departure: `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`,
      basePrice: selectedDeparture.price,
      roomType: pricing.roomType,
      pricePerPerson: pricing.adultPrice,
      childPrice: pricing.childPrice,
    }));
  }, [selectedDeparture]);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5 sm:p-6">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0078AA]">
                Complete Your Booking
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Secure your seats by completing the booking process.
              </p>
            </div>

            <div className="bg-[#F7F9FC] rounded-2xl px-4 py-4 border w-full lg:w-auto">

              <div className="flex items-center gap-2 text-[#0078AA] font-semibold text-sm sm:text-base">
                <CalendarDays size={18} />
                {bookingData.departure}
              </div>

              <h2 className="text-lg sm:text-xl font-bold mt-2">
                {bookingData.tourName}
              </h2>

            </div>

          </div>

        </div>

        {/* Stepper */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 mt-6 p-4 sm:p-5 overflow-x-auto">
          <Stepper currentStep={2} />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_420px] gap-8 mt-6">

          {/* Left */}
          <div className="space-y-6">

            <AddGuests
              bookingData={bookingData}
              setBookingData={setBookingData}
            />

            <TrainSelection
              onContinue={(data) => {
                setBookingData((prev) => ({
                  ...prev,
                  train: data.train,
                  trainExtra: data.extra,
                }));
              }}
            />

          </div>

          {/* Right */}
          <div className="space-y-5 xl:sticky xl:top-6 self-start">

            <BookingSummary bookingData={bookingData} />

            <div className="bg-white rounded-2xl border border-gray-200 p-5">

              <div className="flex items-start gap-3">

                <ShieldCheck
                  size={28}
                  className="text-green-600 flex-shrink-0"
                />

                <div>

                  <h3 className="font-semibold">
                    Secure Booking
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Your payment and personal details are protected with secure encryption.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Continue Button */}
        <div className="mt-8">

          <button
            className="
              w-full
              lg:w-auto
              lg:ml-auto
              flex
              items-center
              justify-center
              gap-3
              bg-gradient-to-r
              from-[#0078AA]
              to-[#009FD4]
              hover:from-[#00658f]
              hover:to-[#0086c4]
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-base
              sm:text-lg
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            Continue to Traveller Details
            <span className="text-xl">→</span>
          </button>

        </div>

      </div>

    </div>
  );
};

export default Booking;