
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

import Stepper from "../components/booking/Stepper";
import AddGuests from "../components/booking/AddGuests";
import TrainSelection from "../components/booking/TrainSelection";
import BookingSummary from "../components/booking/BookingSummary";

import { calculatePricing } from "../utils/pricingEngine";

const Booking = () => {
  const location = useLocation();

  const selectedTour =
    location.state?.tour || null;

  const selectedDeparture =
    location.state?.departure || null;

  const quadPrice =
    selectedDeparture?.price ||
    selectedTour?.basePrice ||
    11999;

  const departureDate = selectedDeparture
    ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
    : selectedTour?.nextDeparture || "";

  const defaultPricing =
    calculatePricing({
      quadPrice,
      adults: 1,
      children: 0,
      trainExtra: 0,
    });

  const [bookingData, setBookingData] =
    useState({

      tourName:
        selectedTour?.title || "Tour",

      departure:
        departureDate,

      adults: 1,

      children: 0,

      basePrice: quadPrice,

      roomType:
        defaultPricing.roomType,

      pricePerPerson:
        defaultPricing.adultPrice,

      childPrice:
        defaultPricing.childPrice,

      train:
        "Sleeper Class",

      trainExtra: 0,

    });

  useEffect(() => {

    if (!selectedDeparture) return;

    const pricing =
      calculatePricing({

        quadPrice:
          selectedDeparture.price,

        adults:
          bookingData.adults,

        children:
          bookingData.children,

        trainExtra:
          bookingData.trainExtra,

      });

    setBookingData((prev) => ({

      ...prev,

      tourName:
        selectedTour?.title ||
        prev.tourName,

      departure:
        `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`,

      basePrice:
        selectedDeparture.price,

      roomType:
        pricing.roomType,

      pricePerPerson:
        pricing.adultPrice,

      childPrice:
        pricing.childPrice,

    }));

  }, [selectedDeparture]);

  return (

    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">

        {/* Header */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h1 className="text-3xl lg:text-4xl font-bold text-[#0078AA]">

                Complete Your Booking

              </h1>

              <p className="text-gray-500 mt-2">

                Secure your seats by completing the booking process.

              </p>

            </div>

            <div className="bg-[#F7F9FC] rounded-2xl px-5 py-4 border">

              <div className="flex items-center gap-2 text-[#0078AA] font-semibold">

                <CalendarDays size={18} />

                {bookingData.departure}

              </div>

              <h2 className="text-xl font-bold mt-2">

                {bookingData.tourName}

              </h2>

            </div>

          </div>

        </div>

        {/* Stepper */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 mt-6 p-5">

          <Stepper currentStep={2} />

        </div>

        {/* Main Layout */}

        <div className="grid xl:grid-cols-[1.8fr_420px] gap-8 mt-6">

          {/* LEFT */}

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

          {/* RIGHT */}

          <div className="xl:sticky xl:top-6 self-start space-y-5">

            <BookingSummary
              bookingData={bookingData}
            />

            <div className="bg-white rounded-2xl border border-gray-200 p-5">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={28}
                  className="text-green-600"
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

        <div className="mt-8 flex justify-end">

          <button
            className="
              bg-gradient-to-r
              from-[#0078AA]
              to-[#009FD4]
              hover:from-[#00658f]
              hover:to-[#0086c4]
              text-white
              px-10
              py-4
              rounded-2xl
              font-semibold
              text-lg
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              flex
              items-center
              gap-3
            "
          >
            Continue to Traveller Details

            <span className="text-xl">
              →
            </span>

          </button>

        </div>

      </div>

    </div>

  );
};

export default Booking;