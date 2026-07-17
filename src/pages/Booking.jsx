// import React, { useState } from "react";

// import Stepper from "../components/booking/Stepper";
// import AddGuests from "../components/AddGuests";
// import TrainSelection from "../components/TrainSelection";
// import BookingSummary from "../components/BookingSummary";

// const Booking = () => {
//   const [bookingData, setBookingData] = useState({
//   adults: 1,
//   roomType: "Single Sharing",
//   train: "Sleeper Class",
//   trainExtra: 0,
//   pricePerPerson: 18249,
// });
//   return (
//     <div className="min-h-screen bg-gray-100">

//       <div className="max-w-7xl mx-auto py-10 px-6">

//         {/* Heading */}

//         <h1 className="text-4xl font-bold text-blue-700">
//           Book Your Tour
//         </h1>

//         <p className="text-gray-600 mt-2">
//           Complete your booking in 5 easy steps.
//         </p>

//         {/* Stepper */}

//         <div className="mt-8">
//           <Stepper currentStep={2} />
//         </div>

//         {/* Main Layout */}

//         <div className="grid lg:grid-cols-3 gap-8 mt-8">

//           {/* LEFT */}

//           <div className="lg:col-span-2 space-y-8">

//            <AddGuests
//             onContinue={(data) => {
//                 setBookingData((prev) => ({
//                 ...prev,
//                 adults: data.adults,
//                 roomType: data.roomType,
//                 pricePerPerson: data.pricePerPerson,
//                 }));
//             }}
//             />

//            <TrainSelection
//   onContinue={(data) => {
//     setBookingData((prev) => ({
//       ...prev,
//       train: data.train,
//       trainExtra: data.extra,
//     }));
//   }}
// />

//           </div>

//           {/* RIGHT */}

//           <div>

//            <BookingSummary bookingData={bookingData} />
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Booking;




import React, { useState } from "react";

import Stepper from "../components/booking/Stepper";
import AddGuests from "../components/AddGuests";
import TrainSelection from "../components/TrainSelection";
import BookingSummary from "../components/BookingSummary";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    adults: 1,
    children: 0,
    infants: 0,

    roomType: "Single Sharing",

    pricePerPerson: 18249,
    childPrice: Math.round(11999 * 0.7),

    train: "Sleeper Class",
    trainExtra: 0,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-6">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-blue-700">
          Book Your Tour
        </h1>

        <p className="text-gray-600 mt-2">
          Complete your booking in 5 easy steps.
        </p>

        {/* Stepper */}

        <div className="mt-8">
          <Stepper currentStep={2} />
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

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

          <div>
            <BookingSummary bookingData={bookingData} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Booking;