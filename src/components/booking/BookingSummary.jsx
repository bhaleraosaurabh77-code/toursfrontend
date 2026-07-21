
// import React from "react";

// const BookingSummary = ({ bookingData }) => {
//   const adultTotal =
//     (bookingData.pricePerPerson || 0) * (bookingData.adults || 0);

//   const childTotal =
//     (bookingData.childPrice || 0) * (bookingData.children || 0);

//   const trainPassengers =
//     (bookingData.adults || 0) +
//     (bookingData.children || 0);

//   const trainTotal =
//     (bookingData.trainExtra || 0) *
//     trainPassengers;

//   const subtotal =
//     adultTotal +
//     childTotal +
//     trainTotal;

//   // GST Split
//   const cgst = Math.round(subtotal * 0.025);

//   const sgst = Math.round(subtotal * 0.025);

//   const gst = cgst + sgst;

//   const grandTotal = subtotal + gst;

//   const advance = Math.round(grandTotal * 0.30);

//   const balance = grandTotal - advance;

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Booking Summary
//       </h2>

//       <div className="space-y-4">

//         {/* Tour Details */}

//         <div className="flex justify-between">
//           <span>Tour</span>
//           <strong>{bookingData.tourName}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>Departure</span>
//           <strong>{bookingData.departure}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>Adults (5+)</span>
//           <strong>{bookingData.adults}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>Children (2–5)</span>
//           <strong>{bookingData.children}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>Room Type</span>
//           <strong>{bookingData.roomType}</strong>
//         </div>

//         <div className="flex justify-between">
//           <span>Train</span>
//           <strong>{bookingData.train}</strong>
//         </div>

//         <hr />

//         {/* Price Breakdown */}

//         <div>

//           <h3 className="text-lg font-bold text-blue-700 mb-3">
//             Price Breakdown
//           </h3>

//           <div className="bg-gray-50 rounded-xl border p-4 space-y-3">

//             <div className="flex justify-between items-center">
//               <span>
//                 Adults ({bookingData.adults} × ₹
//                 {(bookingData.pricePerPerson || 0).toLocaleString()})
//               </span>

//               <strong>
//                 ₹{adultTotal.toLocaleString()}
//               </strong>
//             </div>

//             {bookingData.children > 0 && (
//               <div className="flex justify-between items-center">
//                 <span>
//                   Children ({bookingData.children} × ₹
//                   {(bookingData.childPrice || 0).toLocaleString()})
//                 </span>

//                 <strong>
//                   ₹{childTotal.toLocaleString()}
//                 </strong>
//               </div>
//             )}

//             {(bookingData.trainExtra || 0) > 0 && (
//               <div className="flex justify-between items-center">
//                 <span>
//                   Train Charges ({trainPassengers} × ₹
//                   {(bookingData.trainExtra || 0).toLocaleString()})
//                 </span>

//                 <strong>
//                   ₹{trainTotal.toLocaleString()}
//                 </strong>
//               </div>
//             )}

//           </div>

//         </div>

//         <hr />

//         {/* Totals */}

//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <strong>
//             ₹{subtotal.toLocaleString()}
//           </strong>
//         </div>

//         <div className="flex justify-between">
//           <span>CGST (2.5%)</span>
//           <strong>
//             ₹{cgst.toLocaleString()}
//           </strong>
//         </div>

//         <div className="flex justify-between">
//           <span>SGST (2.5%)</span>
//           <strong>
//             ₹{sgst.toLocaleString()}
//           </strong>
//         </div>

//         <hr />

//         <div className="flex justify-between text-2xl font-bold text-blue-700">
//           <span>Grand Total</span>
//           <span>
//             ₹{grandTotal.toLocaleString()}
//           </span>
//         </div>

//         <div className="flex justify-between text-green-600 font-semibold">
//           <span>Advance Payment (30%)</span>
//           <span>
//             ₹{advance.toLocaleString()}
//           </span>
//         </div>

//         <div className="flex justify-between text-orange-600 font-semibold">
//           <span>Balance Payment (70%)</span>
//           <span>
//             ₹{balance.toLocaleString()}
//           </span>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default BookingSummary;  old design














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

  const gst = cgst + sgst;

  const grandTotal = subtotal + gst;

  const advance = Math.round(grandTotal * 0.30);

  const balance = grandTotal - advance;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-[#0078AA] to-[#009FD4] px-6 py-5">

        <h2 className="text-2xl font-bold text-white">
          Booking Summary
        </h2>

        <p className="text-blue-100 mt-1 text-sm">
          Review your booking before proceeding.
        </p>

      </div>

      <div className="p-6 space-y-6">

        {/* Tour Details */}

        <div className="bg-[#F8FAFC] rounded-2xl border p-5">

          <h3 className="font-bold text-lg text-[#0078AA] mb-4">
            Tour Details
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-gray-600">
                <Receipt size={18} />
                Tour
              </div>

              <strong>{bookingData.tourName}</strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays size={18} />
                Departure
              </div>

              <strong className="text-right">
                {bookingData.departure}
              </strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-gray-600">
                <Users size={18} />
                Guests
              </div>

              <strong>
                {bookingData.adults} Adult{bookingData.adults > 1 && "s"}
                {bookingData.children > 0 &&
                  `, ${bookingData.children} Child`}
              </strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-gray-600">
                <BedDouble size={18} />
                Room
              </div>

              <strong>{bookingData.roomType}</strong>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-gray-600">
                <Train size={18} />
                Train
              </div>

              <strong>{bookingData.train}</strong>

            </div>

          </div>

        </div>

        {/* Price Breakdown */}

        <div>

          <h3 className="font-bold text-lg text-[#0078AA] mb-4">
            Price Breakdown
          </h3>

          <div className="rounded-2xl border overflow-hidden">

            <div className="flex justify-between px-5 py-4 border-b">
              <span>
                Adults ({bookingData.adults} × ₹
                {(bookingData.pricePerPerson || 0).toLocaleString()})
              </span>

              <strong>
                ₹{adultTotal.toLocaleString()}
              </strong>
            </div>

            {bookingData.children > 0 && (

              <div className="flex justify-between px-5 py-4 border-b">

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

              <div className="flex justify-between px-5 py-4">

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

        <div className="bg-[#F8FAFC] rounded-2xl border p-5 space-y-3">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <strong>₹{subtotal.toLocaleString()}</strong>
          </div>

          <div className="flex justify-between">
            <span>CGST (2.5%)</span>
            <strong>₹{cgst.toLocaleString()}</strong>
          </div>

          <div className="flex justify-between">
            <span>SGST (2.5%)</span>
            <strong>₹{sgst.toLocaleString()}</strong>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-bold text-[#0078AA]">

            <span>Grand Total</span>

            <span>
              ₹{grandTotal.toLocaleString()}
            </span>

          </div>

        </div>

        {/* Payment */}

        <div className="rounded-2xl overflow-hidden border">

          <div className="bg-green-50 px-5 py-4 border-b">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <Wallet size={18} />
                Advance Payment (30%)
              </div>

              <span className="text-xl font-bold text-green-700">
                ₹{advance.toLocaleString()}
              </span>

            </div>

          </div>

          <div className="bg-orange-50 px-5 py-4">

            <div className="flex justify-between items-center">

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