
import React from "react";

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

  // GST Split
  const cgst = Math.round(subtotal * 0.025);

  const sgst = Math.round(subtotal * 0.025);

  const gst = cgst + sgst;

  const grandTotal = subtotal + gst;

  const advance = Math.round(grandTotal * 0.30);

  const balance = grandTotal - advance;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Booking Summary
      </h2>

      <div className="space-y-4">

        {/* Tour Details */}

        <div className="flex justify-between">
          <span>Tour</span>
          <strong>{bookingData.tourName}</strong>
        </div>

        <div className="flex justify-between">
          <span>Departure</span>
          <strong>{bookingData.departure}</strong>
        </div>

        <div className="flex justify-between">
          <span>Adults (5+)</span>
          <strong>{bookingData.adults}</strong>
        </div>

        <div className="flex justify-between">
          <span>Children (2–5)</span>
          <strong>{bookingData.children}</strong>
        </div>

        <div className="flex justify-between">
          <span>Room Type</span>
          <strong>{bookingData.roomType}</strong>
        </div>

        <div className="flex justify-between">
          <span>Train</span>
          <strong>{bookingData.train}</strong>
        </div>

        <hr />

        {/* Price Breakdown */}

        <div>

          <h3 className="text-lg font-bold text-blue-700 mb-3">
            Price Breakdown
          </h3>

          <div className="bg-gray-50 rounded-xl border p-4 space-y-3">

            <div className="flex justify-between items-center">
              <span>
                Adults ({bookingData.adults} × ₹
                {(bookingData.pricePerPerson || 0).toLocaleString()})
              </span>

              <strong>
                ₹{adultTotal.toLocaleString()}
              </strong>
            </div>

            {bookingData.children > 0 && (
              <div className="flex justify-between items-center">
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
              <div className="flex justify-between items-center">
                <span>
                  Train Charges ({trainPassengers} × ₹
                  {(bookingData.trainExtra || 0).toLocaleString()})
                </span>

                <strong>
                  ₹{trainTotal.toLocaleString()}
                </strong>
              </div>
            )}

          </div>

        </div>

        <hr />

        {/* Totals */}

        <div className="flex justify-between">
          <span>Subtotal</span>
          <strong>
            ₹{subtotal.toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>CGST (2.5%)</span>
          <strong>
            ₹{cgst.toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>SGST (2.5%)</span>
          <strong>
            ₹{sgst.toLocaleString()}
          </strong>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold text-blue-700">
          <span>Grand Total</span>
          <span>
            ₹{grandTotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-green-600 font-semibold">
          <span>Advance Payment (30%)</span>
          <span>
            ₹{advance.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-orange-600 font-semibold">
          <span>Balance Payment (70%)</span>
          <span>
            ₹{balance.toLocaleString()}
          </span>
        </div>

      </div>

    </div>
  );
};

export default BookingSummary;