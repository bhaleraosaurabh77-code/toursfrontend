import React from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  Train,
  Receipt,
  Wallet,
} from "lucide-react";

const BookingSummary = ({ bookingData }) => {
  const adultTotal =
    (bookingData.pricePerPerson || 0) * (bookingData.adults || 0);

  const childTotal =
    (bookingData.childPrice || 0) * (bookingData.children || 0);

  const trainPassengers =
    (bookingData.adults || 0) +
    (bookingData.children || 0);

  const trainTotal =
    (bookingData.trainExtra || 0) *
    trainPassengers;

  const subtotal =
    adultTotal +
    childTotal +
    trainTotal;

  const cgst = Math.round(subtotal * 0.025);
  const sgst = Math.round(subtotal * 0.025);

  const grandTotal = subtotal + cgst + sgst;

  const advance = Math.round(grandTotal * 0.30);

  const balance = grandTotal - advance;

  return (
    <div className="w-full bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-[#0078AA] to-[#009FD4] px-5 sm:px-6 py-5">

        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Booking Summary
        </h2>

        <p className="text-blue-100 mt-1 text-sm">
          Review your booking before proceeding.
        </p>

      </div>

      <div className="p-4 sm:p-6 space-y-6">

        {/* Tour Details */}

        <div className="bg-[#F8FAFC] rounded-2xl border p-4 sm:p-5">

          <h3 className="font-bold text-lg text-[#0078AA] mb-4">
            Tour Details
          </h3>

          <div className="space-y-4">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <div className="flex items-center gap-2 text-gray-600">
                <Receipt size={18} />
                Tour
              </div>

              <strong className="break-words text-left sm:text-right">
                {bookingData.tourName}
              </strong>

            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays size={18} />
                Departure
              </div>

              <strong className="break-words text-left sm:text-right">
                {bookingData.departure}
              </strong>

            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <div className="flex items-center gap-2 text-gray-600">
                <Users size={18} />
                Guests
              </div>

              <strong className="text-left sm:text-right">
                {bookingData.adults} Adult
                {bookingData.adults > 1 && "s"}
                {bookingData.children > 0 &&
                  `, ${bookingData.children} Child`}
              </strong>

            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <div className="flex items-center gap-2 text-gray-600">
                <BedDouble size={18} />
                Room
              </div>

              <strong className="text-left sm:text-right">
                {bookingData.roomType}
              </strong>

            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

              <div className="flex items-center gap-2 text-gray-600">
                <Train size={18} />
                Train
              </div>

              <strong className="break-words text-left sm:text-right">
                {bookingData.train}
              </strong>

            </div>

          </div>

        </div>

        {/* Price Breakdown */}

        <div>

          <h3 className="font-bold text-lg text-[#0078AA] mb-4">
            Price Breakdown
          </h3>

          <div className="rounded-2xl border overflow-hidden">

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 px-4 sm:px-5 py-4 border-b">

              <span>
                Adults ({bookingData.adults} × ₹
                {(bookingData.pricePerPerson || 0).toLocaleString()})
              </span>

              <strong>
                ₹{adultTotal.toLocaleString()}
              </strong>

            </div>

            {bookingData.children > 0 && (

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 px-4 sm:px-5 py-4 border-b">

                <span>
                  Children ({bookingData.children} × ₹
                  {(bookingData.childPrice || 0).toLocaleString()})
                </span>

                <strong>
                  ₹{childTotal.toLocaleString()}
                </strong>

              </div>

            )}

            {(bookingData.trainExtra || 0) > 0 && (

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 px-4 sm:px-5 py-4">

                <span>
                  Train ({trainPassengers} × ₹
                  {(bookingData.trainExtra || 0).toLocaleString()})
                </span>

                <strong>
                  ₹{trainTotal.toLocaleString()}
                </strong>

              </div>

            )}

          </div>

        </div>

        {/* Totals */}

        <div className="bg-[#F8FAFC] rounded-2xl border p-4 sm:p-5 space-y-3">

          <div className="flex justify-between text-sm sm:text-base">

            <span>Subtotal</span>

            <strong>
              ₹{subtotal.toLocaleString()}
            </strong>

          </div>

          <div className="flex justify-between text-sm sm:text-base">

            <span>CGST (2.5%)</span>

            <strong>
              ₹{cgst.toLocaleString()}
            </strong>

          </div>

          <div className="flex justify-between text-sm sm:text-base">

            <span>SGST (2.5%)</span>

            <strong>
              ₹{sgst.toLocaleString()}
            </strong>

          </div>

          <hr />

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xl sm:text-2xl font-bold text-[#0078AA]">

            <span>Grand Total</span>

            <span>
              ₹{grandTotal.toLocaleString()}
            </span>

          </div>

        </div>

        {/* Payment */}

        <div className="rounded-2xl overflow-hidden border">

          <div className="bg-green-50 px-4 sm:px-5 py-4 border-b">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

              <div className="flex items-center gap-2 text-green-700 font-semibold">

                <Wallet size={18} />

                Advance Payment (30%)

              </div>

              <span className="text-lg sm:text-xl font-bold text-green-700">

                ₹{advance.toLocaleString()}

              </span>

            </div>

          </div>

          <div className="bg-orange-50 px-4 sm:px-5 py-4">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

              <span className="font-semibold text-orange-700">

                Balance Payment

              </span>

              <span className="text-lg font-bold text-orange-700">

                ₹{balance.toLocaleString()}

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingSummary;