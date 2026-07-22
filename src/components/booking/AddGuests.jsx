import React, { useEffect, useState } from "react";
import { calculatePricing } from "../../utils/pricingEngine";

const AddGuests = ({ bookingData, setBookingData }) => {
  const [adults, setAdults] = useState(bookingData?.adults || 1);
  const [children, setChildren] = useState(bookingData?.children || 0);

  const quadPrice = bookingData.basePrice || 11999;

  const pricing = calculatePricing({
    quadPrice,
    adults,
    children,
    trainExtra: bookingData.trainExtra || 0,
  });

  const roomType = pricing.roomType;
  const pricePerPerson = pricing.adultPrice;
  const childPrice = pricing.childPrice;

  const totalGuests = adults + children;

  const increase = (type) => {
    if (totalGuests >= 44) return;

    if (type === "adult" && adults < 4) {
      setAdults((prev) => prev + 1);
    }

    if (type === "child") {
      setChildren((prev) => prev + 1);
    }
  };

  const decrease = (type) => {
    if (type === "adult" && adults > 1) {
      setAdults((prev) => prev - 1);
    }

    if (type === "child" && children > 0) {
      setChildren((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setBookingData((prev) => ({
      ...prev,
      adults,
      children,
      roomType,
      basePrice: quadPrice,
      pricePerPerson,
      childPrice,
    }));
  }, [
    adults,
    children,
    quadPrice,
    roomType,
    pricePerPerson,
    childPrice,
    setBookingData,
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8">

      <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-6">
        Add Guests
      </h2>

      <GuestRow
        title="Adults"
        subtitle="5 Years & Above"
        value={adults}
        onAdd={() => increase("adult")}
        onRemove={() => decrease("adult")}
        disableAdd={adults >= 4}
      />

      <GuestRow
        title="Children"
        subtitle="2 - 5 Years • Extra Mattress"
        value={children}
        onAdd={() => increase("child")}
        onRemove={() => decrease("child")}
      />

      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
        <h3 className="font-semibold text-green-700">
          Infants (0 - 2 Years)
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          ✔ Free of Cost
        </p>
      </div>

      <div className="mt-6 bg-[#EAF7FC] rounded-xl p-4 flex justify-between items-center">

        <span className="font-semibold">
          Total Guests
        </span>

       <span className="font-bold text-[#0078AA]">
          {totalGuests} / 44
        </span>

      </div>

      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">

        <div className="flex flex-col sm:flex-row sm:justify-between gap-5">

          <div>

            <p className="text-sm text-gray-500">
              Room Assigned
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-green-700">
              {roomType}
            </h3>

          </div>

          <div className="sm:text-right">

            <p className="text-sm text-gray-500">
              Price Per Adult
            </p>

            <h3 className="text-2xl font-bold text-[#0078AA]">
              ₹{pricePerPerson.toLocaleString()}
            </h3>

          </div>

        </div>

      </div>

      {children > 0 && (

        <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-5">

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

            <div>

              <p className="text-sm text-gray-500">
                Child Price
              </p>

              <p className="text-xs text-gray-500">
                (70% of selected room price)
              </p>

            </div>

            <h3 className="text-xl font-bold text-orange-600">
              ₹{childPrice.toLocaleString()}
            </h3>

          </div>

        </div>

      )}

    </div>
  );
};

function GuestRow({
  title,
  subtitle,
  value,
  onAdd,
  onRemove,
  disableAdd = false,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-5 border-b">

      <div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {subtitle}
        </p>

      </div>

      <div className="flex items-center justify-center sm:justify-end gap-5">

        <button
          onClick={onRemove}
          className="w-11 h-11 rounded-full border border-gray-300 hover:bg-gray-100 text-xl transition"
        >
          −
        </button>

        <span className="font-bold text-xl w-8 text-center">
          {value}
        </span>

        <button
          onClick={onAdd}
          disabled={disableAdd}
          className={`w-11 h-11 rounded-full text-white text-xl transition ${
            disableAdd
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#0078AA] hover:bg-[#00658F]"
          }`}
        >
          +
        </button>

      </div>

    </div>
  );
}

export default AddGuests;