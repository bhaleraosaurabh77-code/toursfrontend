// import { calculatePricing } from "../utils/pricingEngine";
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import Stepper from "../components/booking/Stepper";
// import AddGuests from "../components/AddGuests";
// import TrainSelection from "../components/TrainSelection";
// import BookingSummary from "../components/BookingSummary";

// const Booking = () => {
//   const location = useLocation();

//   const selectedTour = location.state?.tour || null;
//   const selectedDeparture = location.state?.departure || null;

//   // Departure price is always Quad Sharing Price
//   const quadPrice =
//     selectedDeparture?.price ||
//     selectedTour?.basePrice ||
//     11999;

//   const departureDate = selectedDeparture
//     ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
//     : selectedTour?.nextDeparture || "";

//   const [bookingData, setBookingData] = useState({
//     // Tour
//     tourName: selectedTour?.title || "Tour",
//     departure: departureDate,

//     // Guests
//     adults: 1,
//     children: 0,

//     // Pricing
//     basePrice: quadPrice, // Quad Sharing Price
//     roomType: "Single Sharing",

//     // Default = Single Sharing
//     pricePerPerson: Math.round(quadPrice * 1.520875),

//     // Child = 70% of Single Sharing
//     childPrice: Math.round(
//       Math.round(quadPrice * 1.520875) * 0.70
//     ),

//     // Train
//     train: "Sleeper Class",
//     trainExtra: 0,
//   });

//   // Update prices whenever departure changes
//   useEffect(() => {
//     if (!selectedDeparture) return;

//     const quad = selectedDeparture.price;

//     const single = Math.round(quad * 1.520875);

//     setBookingData((prev) => ({
//       ...prev,

//       tourName: selectedTour?.title || prev.tourName,

//       departure: `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`,

//       basePrice: quad,

//       // Default room when page opens
//       roomType: "Single Sharing",

//       pricePerPerson: single,

//       childPrice: Math.round(single * 0.70),
//     }));
//   }, [selectedDeparture, selectedTour]);

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

//           {/* Left */}

//           <div className="lg:col-span-2 space-y-8">

//             <AddGuests
//               bookingData={bookingData}
//               setBookingData={setBookingData}
//             />

//             <TrainSelection
//               onContinue={(data) => {
//                 setBookingData((prev) => ({
//                   ...prev,
//                   train: data.train,
//                   trainExtra: data.extra,
//                 }));
//               }}
//             />

//           </div>

//           {/* Right */}

//           <div>

//             <BookingSummary
//               bookingData={bookingData}
//             />

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Booking;




import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Stepper from "../components/booking/Stepper";
import AddGuests from "../components/AddGuests";
import TrainSelection from "../components/TrainSelection";
import BookingSummary from "../components/BookingSummary";

import { calculatePricing } from "../utils/pricingEngine";

const Booking = () => {
  const location = useLocation();

  const selectedTour = location.state?.tour || null;
  const selectedDeparture = location.state?.departure || null;

  // Departure Price = Quad Sharing Price
  const quadPrice =
    selectedDeparture?.price ||
    selectedTour?.basePrice ||
    11999;

  const departureDate = selectedDeparture
    ? `${selectedDeparture.day}, ${selectedDeparture.date} ${selectedDeparture.month} ${selectedDeparture.year}`
    : selectedTour?.nextDeparture || "";

  // Default Pricing
  const defaultPricing = calculatePricing({
    quadPrice,
    adults: 1,
    children: 0,
    trainExtra: 0,
  });

  const [bookingData, setBookingData] = useState({
    // Tour
    tourName: selectedTour?.title || "Tour",
    departure: departureDate,

    // Guests
    adults: 1,
    children: 0,

    // Departure Price
    basePrice: quadPrice,

    // Room
    roomType: defaultPricing.roomType,

    // Prices
    pricePerPerson: defaultPricing.adultPrice,
    childPrice: defaultPricing.childPrice,

    // Train
    train: "Sleeper Class",
    trainExtra: 0,
  });

  // Update whenever departure changes
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
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold text-blue-700">
          Book Your Tour
        </h1>

        <p className="text-gray-600 mt-2">
          Complete your booking in 5 easy steps.
        </p>

        <div className="mt-8">
          <Stepper currentStep={2} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

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

          <div>

            <BookingSummary
              bookingData={bookingData}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Booking;