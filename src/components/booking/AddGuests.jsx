// import React, { useState } from "react";

// const AddGuests = ({ onContinue }) => {
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);

//   const totalGuests = adults + children + infants;

//   const increase = (type) => {
//   if (totalGuests >= 44) return;

//   if (type === "adult" && adults < 4) {
//     setAdults(adults + 1);
//   }

//   if (type === "child") {
//     setChildren(children + 1);
//   }

//   if (type === "infant") {
//     setInfants(infants + 1);
//   }
// };

//   const decrease = (type) => {
//     if (type === "adult" && adults > 1) setAdults(adults - 1);
//     if (type === "child" && children > 0) setChildren(children - 1);
//     if (type === "infant" && infants > 0) setInfants(infants - 1);
//   };

//    let roomType = "";
// let pricePerPerson = 11999;

// switch (adults) {
//   case 1:
//     roomType = "Single Sharing";
//     pricePerPerson = Math.round(11999 * 1.520875);
//     break;

//   case 2:
//     roomType = "Double Sharing";
//     pricePerPerson = Math.round(11999 * 1.3225);
//     break;

//   case 3:
//     roomType = "Triple Sharing";
//     pricePerPerson = Math.round(11999 * 1.15);
//     break;

//   case 4:
//     roomType = "Quad Sharing";
//     pricePerPerson = 11999;
//     break;

//   default:
//     roomType = "Quad Sharing";
//     pricePerPerson = 11999;
// }

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Add Guests
//       </h2>

//      <GuestRow
//       title="Adults"
//       subtitle="12 Years & Above"
//       value={adults}
//       onAdd={() => increase("adult")}
//       onRemove={() => decrease("adult")}
//       disableAdd={adults >= 4}
//     />

//       <GuestRow
//         title="Children"
//         subtitle="5 - 11 Years"
//         value={children}
//         onAdd={() => increase("child")}
//         onRemove={() => decrease("child")}
//       />

//       <GuestRow
//         title="Infants"
//         subtitle="0 - 4 Years"
//         value={infants}
//         onAdd={() => increase("infant")}
//         onRemove={() => decrease("infant")}
//       />

//       <div className="mt-8 p-4 rounded-xl bg-blue-50 flex justify-between">

//         <span className="font-semibold">
//           Total Guests
//         </span>

//         <span className="font-bold text-blue-700">
//           {totalGuests} / 44
//         </span>

//       </div>

//     <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex justify-between items-center">
//   <div>
//     <p className="text-sm text-gray-600">Room Assigned</p>
//     <h3 className="font-bold text-green-700">{roomType}</h3>
//   </div>

//   <span className="text-2xl">🏨</span>
// </div>

//       <button
//         className="w-full mt-8 bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800"
//        onClick={() =>
//        onContinue({
//   adults,
//   children,
//   infants,
//   roomType,
//   pricePerPerson,
// })

//         }
//       >
//         Continue
//       </button>

//     </div>
//   );
// };

// function GuestRow({
//   title,
//   subtitle,
//   value,
//   onAdd,
//   onRemove,
//   disableAdd = false,
// }) {
//   return (
//     <div className="flex justify-between items-center py-5 border-b">

//       <div>

//         <h3 className="font-semibold">
//           {title}
//         </h3>

//         <p className="text-sm text-gray-500">
//           {subtitle}
//         </p>

//       </div>

//       <div className="flex items-center gap-4">

//   {/* Minus Button */}

//   <button
//     onClick={onRemove}
//     className="w-10 h-10 rounded-full border border-gray-300"
//   >
//     −
//   </button>

//   {/* Count */}

//   <span className="font-bold text-lg w-6 text-center">
//     {value}
//   </span>

//   {/* Plus Button */}

//   <button
//     onClick={onAdd}
//     disabled={disableAdd}
//     className={`w-10 h-10 rounded-full text-white transition ${
//       disableAdd
//         ? "bg-gray-300 cursor-not-allowed"
//         : "bg-blue-700 hover:bg-blue-800"
//     }`}
//   >
//     +
//   </button>

// </div>
//     </div>
//   );
// }

// export default AddGuests;



// import React, { useEffect, useState } from "react";

// const BASE_PRICE = 11999;
// const CHILD_PRICE = Math.round(BASE_PRICE * 0.7);

// const AddGuests = ({ bookingData, setBookingData }) => {
//   const [adults, setAdults] = useState(bookingData?.adults || 1);
//   const [children, setChildren] = useState(bookingData?.children || 0);
//   const [infants, setInfants] = useState(bookingData?.infants || 0);

//   const totalGuests = adults + children + infants;

//   const increase = (type) => {
//     if (totalGuests >= 44) return;

//     if (type === "adult" && adults < 4) {
//       setAdults((prev) => prev + 1);
//     }

//     if (type === "child") {
//       setChildren((prev) => prev + 1);
//     }

//     if (type === "infant") {
//       setInfants((prev) => prev + 1);
//     }
//   };

//   const decrease = (type) => {
//     if (type === "adult" && adults > 1) {
//       setAdults((prev) => prev - 1);
//     }

//     if (type === "child" && children > 0) {
//       setChildren((prev) => prev - 1);
//     }

//     if (type === "infant" && infants > 0) {
//       setInfants((prev) => prev - 1);
//     }
//   };

//   let roomType = "";
//   let pricePerPerson = BASE_PRICE;

//   switch (adults) {
//     case 1:
//       roomType = "Single Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.520875);
//       break;

//     case 2:
//       roomType = "Double Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.3225);
//       break;

//     case 3:
//       roomType = "Triple Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.15);
//       break;

//     case 4:
//       roomType = "Quad Sharing";
//       pricePerPerson = BASE_PRICE;
//       break;

//     default:
//       roomType = "Quad Sharing";
//       pricePerPerson = BASE_PRICE;
//   }

//   // Update Booking Summary instantly
//   useEffect(() => {
//     setBookingData((prev) => ({
//       ...prev,
//       adults,
//       children,
//       infants,
//       roomType,
//       pricePerPerson,
//       childPrice: CHILD_PRICE,
//     }));
//   }, [
//     adults,
//     children,
//     infants,
//     roomType,
//     pricePerPerson,
//     setBookingData,
//   ]);

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Add Guests
//       </h2>

//       <GuestRow
//         title="Adults"
//         subtitle="5 Years & Above"
//         value={adults}
//         onAdd={() => increase("adult")}
//         onRemove={() => decrease("adult")}
//         disableAdd={adults >= 4}
//       />

//       <GuestRow
//         title="Children"
//         subtitle="2 - 5 Years (70% Charges)"
//         value={children}
//         onAdd={() => increase("child")}
//         onRemove={() => decrease("child")}
//       />

//       <GuestRow
//         title="Infants"
//         subtitle="Below 2 Years"
//         value={infants}
//         onAdd={() => increase("infant")}
//         onRemove={() => decrease("infant")}
//       />

//       <div className="mt-8 p-4 rounded-xl bg-blue-50 flex justify-between">
//         <span className="font-semibold">
//           Total Guests
//         </span>

//         <span className="font-bold text-blue-700">
//           {totalGuests} / 44
//         </span>
//       </div>

//       <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex justify-between items-center">
//         <div>
//           <p className="text-sm text-gray-600">
//             Room Assigned
//           </p>

//           <h3 className="font-bold text-green-700">
//             {roomType}
//           </h3>
//         </div>

//         <span className="text-2xl">🏨</span>
//       </div>
//     </div>
//   );
// };

// function GuestRow({
//   title,
//   subtitle,
//   value,
//   onAdd,
//   onRemove,
//   disableAdd = false,
// }) {
//   return (
//     <div className="flex justify-between items-center py-5 border-b">
//       <div>
//         <h3 className="font-semibold">
//           {title}
//         </h3>

//         <p className="text-sm text-gray-500">
//           {subtitle}
//         </p>
//       </div>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={onRemove}
//           className="w-10 h-10 rounded-full border border-gray-300"
//         >
//           −
//         </button>

//         <span className="font-bold text-lg w-6 text-center">
//           {value}
//         </span>

//         <button
//           onClick={onAdd}
//           disabled={disableAdd}
//           className={`w-10 h-10 rounded-full text-white transition ${
//             disableAdd
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-700 hover:bg-blue-800"
//           }`}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddGuests;



// import React, { useEffect, useState } from "react";

// const BASE_PRICE = 11999;
// const CHILD_PRICE = Math.round(BASE_PRICE * 0.7);

// const AddGuests = ({ bookingData, setBookingData }) => {
//   const [adults, setAdults] = useState(bookingData?.adults || 1);
//   const [children, setChildren] = useState(bookingData?.children || 0);

//   // Only Adults + Children count towards the 44 guest limit
//   const totalGuests = adults + children;

//   const increase = (type) => {
//     if (totalGuests >= 44) return;

//     if (type === "adult" && adults < 4) {
//       setAdults((prev) => prev + 1);
//     }

//     if (type === "child") {
//       setChildren((prev) => prev + 1);
//     }
//   };

//   const decrease = (type) => {
//     if (type === "adult" && adults > 1) {
//       setAdults((prev) => prev - 1);
//     }

//     if (type === "child" && children > 0) {
//       setChildren((prev) => prev - 1);
//     }
//   };

//   let roomType = "";
//   let pricePerPerson = BASE_PRICE;

//   switch (adults) {
//     case 1:
//       roomType = "Single Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.520875);
//       break;

//     case 2:
//       roomType = "Double Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.3225);
//       break;

//     case 3:
//       roomType = "Triple Sharing";
//       pricePerPerson = Math.round(BASE_PRICE * 1.15);
//       break;

//     case 4:
//       roomType = "Quad Sharing";
//       pricePerPerson = BASE_PRICE;
//       break;

//     default:
//       roomType = "Quad Sharing";
//       pricePerPerson = BASE_PRICE;
//   }

//   useEffect(() => {
//     setBookingData((prev) => ({
//       ...prev,
//       adults,
//       children,
//       roomType,
//       pricePerPerson,
//       childPrice: CHILD_PRICE,
//     }));
//   }, [adults, children, roomType, pricePerPerson, setBookingData]);

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Add Guests
//       </h2>

//       {/* Adults */}

//       <GuestRow
//         title="Adults"
//         subtitle="5 Years & Above"
//         value={adults}
//         onAdd={() => increase("adult")}
//         onRemove={() => decrease("adult")}
//         disableAdd={adults >= 4}
//       />

//       {/* Children */}

//       <GuestRow
//         title="Children"
//         subtitle="2 - 5 Years • 70% Charges • Extra Mattress Provided"
//         value={children}
//         onAdd={() => increase("child")}
//         onRemove={() => decrease("child")}
//       />

//       {/* Infant Information */}

//       <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
//         <h3 className="font-semibold text-green-700">
//           Infants (0 - 2 Years)
//         </h3>

//         <p className="text-sm text-gray-600 mt-2">
//           ✔ Free of Cost
//         </p>

//         {/* <p className="text-sm text-gray-600">
//           ✔ No separate seat or bed will be provided.
//         </p>

//         <p className="text-sm text-gray-600">
//           ✔ Infants are not counted in the maximum guest limit.
//         </p> */}
//       </div>

//       {/* Total Guests */}

//       <div className="mt-8 p-4 rounded-xl bg-blue-50 flex justify-between">
//         <span className="font-semibold">
//           Total Guests
//         </span>

//         <span className="font-bold text-blue-700">
//           {totalGuests} / 44
//         </span>
//       </div>

//       {/* Room */}

//       <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex justify-between items-center">
//         <div>
//           <p className="text-sm text-gray-600">
//             Room Assigned
//           </p>

//           <h3 className="font-bold text-green-700">
//             {roomType}
//           </h3>
//         </div>

//         <span className="text-2xl">🏨</span>
//       </div>
//     </div>
//   );
// };

// function GuestRow({
//   title,
//   subtitle,
//   value,
//   onAdd,
//   onRemove,
//   disableAdd = false,
// }) {
//   return (
//     <div className="flex justify-between items-center py-5 border-b">
//       <div>
//         <h3 className="font-semibold">
//           {title}
//         </h3>

//         <p className="text-sm text-gray-500">
//           {subtitle}
//         </p>
//       </div>

//       <div className="flex items-center gap-4">
//         <button
//           onClick={onRemove}
//           className="w-10 h-10 rounded-full border border-gray-300"
//         >
//           −
//         </button>

//         <span className="font-bold text-lg w-6 text-center">
//           {value}
//         </span>

//         <button
//           onClick={onAdd}
//           disabled={disableAdd}
//           className={`w-10 h-10 rounded-full text-white transition ${
//             disableAdd
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-700 hover:bg-blue-800"
//           }`}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddGuests;


// import React, { useEffect, useState } from "react";
// import { calculatePricing } from "../utils/pricingEngine";


// const AddGuests = ({ bookingData, setBookingData }) => {
//   const [adults, setAdults] = useState(bookingData?.adults || 1);
//   const [children, setChildren] = useState(bookingData?.children || 0);

//   // Selected Departure Price (Always Quad Sharing)
//   const quadPrice = bookingData.basePrice || 11999;

//   // Room Prices
//   const singlePrice = Math.round(quadPrice * 1.520875);
//   const doublePrice = Math.round(quadPrice * 1.3225);
//   const triplePrice = Math.round(quadPrice * 1.15);

//   // Child Price = 70% of Single Sharing
//   const childPrice = Math.round(singlePrice * 0.70);

//   const totalGuests = adults + children;

//   // Room Assignment
//   let roomType = "";
//   let pricePerPerson = quadPrice;

//   switch (adults) {
//     case 1:
//       roomType = "Single Sharing";
//       pricePerPerson = singlePrice;
//       break;

//     case 2:
//       roomType = "Double Sharing";
//       pricePerPerson = doublePrice;
//       break;

//     case 3:
//       roomType = "Triple Sharing";
//       pricePerPerson = triplePrice;
//       break;

//     default:
//       roomType = "Quad Sharing";
//       pricePerPerson = quadPrice;
//   }

//   // Increase Guest Count
//   const increase = (type) => {
//     if (totalGuests >= 44) return;

//     if (type === "adult" && adults < 4) {
//       setAdults((prev) => prev + 1);
//     }

//     if (type === "child") {
//       setChildren((prev) => prev + 1);
//     }
//   };

//   // Decrease Guest Count
//   const decrease = (type) => {
//     if (type === "adult" && adults > 1) {
//       setAdults((prev) => prev - 1);
//     }

//     if (type === "child" && children > 0) {
//       setChildren((prev) => prev - 1);
//     }
//   };

//   // Update Booking Summary Automatically
//   useEffect(() => {
//     setBookingData((prev) => ({
//       ...prev,
//       adults,
//       children,
//       roomType,
//       basePrice: quadPrice,
//       pricePerPerson,
//       childPrice,
//     }));
//   }, [
//     adults,
//     children,
//     quadPrice,
//     roomType,
//     pricePerPerson,
//     childPrice,
//     setBookingData,
//   ]);
//     return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

//       {/* Heading */}

//       <h2 className="text-2xl font-bold text-blue-700 mb-6">
//         Add Guests
//       </h2>

//       {/* Adults */}

//       <GuestRow
//         title="Adults"
//         subtitle="5 Years & Above"
//         value={adults}
//         onAdd={() => increase("adult")}
//         onRemove={() => decrease("adult")}
//         disableAdd={adults >= 4}
//       />

//       {/* Children */}

//       <GuestRow
//         title="Children"
//         subtitle="2 - 5 Years • Extra Mattress"
//         value={children}
//         onAdd={() => increase("child")}
//         onRemove={() => decrease("child")}
//       />

//       {/* Infant */}

//       <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

//         <h3 className="font-semibold text-green-700">
//           Infants (0 - 2 Years)
//         </h3>

//         <p className="text-sm text-gray-600 mt-1">
//           ✔ Free of Cost
//         </p>

//       </div>

//       {/* Guest Count */}

//       <div className="mt-8 p-4 rounded-xl bg-blue-50 flex justify-between">

//         <span className="font-semibold">
//           Total Guests
//         </span>

//         <span className="font-bold text-blue-700">
//           {totalGuests} / 44
//         </span>

//       </div>

//       {/* Room Details */}

//       <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">

//         <div className="flex justify-between items-center">

//           <div>

//             <p className="text-sm text-gray-500">
//               Room Assigned
//             </p>

//             <h3 className="text-lg font-bold text-green-700">
//               {roomType}
//             </h3>

//           </div>

//           <div className="text-right">

//             <p className="text-sm text-gray-500">
//               Price Per Adult
//             </p>

//             <h3 className="text-2xl font-bold text-blue-700">
//               ₹{pricePerPerson.toLocaleString()}
//             </h3>

//           </div>

//         </div>

//       </div>

//       {/* Child Price */}

//       {children > 0 && (

//         <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 flex justify-between items-center">

//           <div>

//             <p className="text-sm text-gray-500">
//               Child Price
//             </p>

//             <p className="text-xs text-gray-500">
//               (70% of per adult price)
//             </p>

//           </div>

//           <h3 className="text-xl font-bold text-orange-600">
//             ₹{childPrice.toLocaleString()}
//           </h3>

//         </div>

//       )}

//     </div>
//   );
// };

// function GuestRow({
//   title,
//   subtitle,
//   value,
//   onAdd,
//   onRemove,
//   disableAdd = false,
// }) {
//   return (
//     <div className="flex justify-between items-center py-5 border-b">

//       <div>

//         <h3 className="font-semibold">
//           {title}
//         </h3>

//         <p className="text-sm text-gray-500">
//           {subtitle}
//         </p>

//       </div>

//       <div className="flex items-center gap-4">

//         <button
//           onClick={onRemove}
//           className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
//         >
//           −
//         </button>

//         <span className="font-bold text-lg w-6 text-center">
//           {value}
//         </span>

//         <button
//           onClick={onAdd}
//           disabled={disableAdd}
//           className={`w-10 h-10 rounded-full text-white transition ${
//             disableAdd
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-700 hover:bg-blue-800"
//           }`}
//         >
//           +
//         </button>

//       </div>

//     </div>
//   );
// }

// export default AddGuests;



import React, { useEffect, useState } from "react";
import { calculatePricing } from "../../utils/pricingEngine";

const AddGuests = ({ bookingData, setBookingData }) => {
  const [adults, setAdults] = useState(bookingData?.adults || 1);
  const [children, setChildren] = useState(bookingData?.children || 0);

  // Departure Price (Quad Sharing)
  const quadPrice = bookingData.basePrice || 11999;

  // Pricing Engine
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

  // Increase Guests
  const increase = (type) => {
    if (totalGuests >= 44) return;

    if (type === "adult" && adults < 4) {
      setAdults((prev) => prev + 1);
    }

    if (type === "child") {
      setChildren((prev) => prev + 1);
    }
  };

  // Decrease Guests
  const decrease = (type) => {
    if (type === "adult" && adults > 1) {
      setAdults((prev) => prev - 1);
    }

    if (type === "child" && children > 0) {
      setChildren((prev) => prev - 1);
    }
  };

  // Update Parent Booking Data
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
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Add Guests
      </h2>

      {/* Adults */}

      <GuestRow
        title="Adults"
        subtitle="5 Years & Above"
        value={adults}
        onAdd={() => increase("adult")}
        onRemove={() => decrease("adult")}
        disableAdd={adults >= 4}
      />

      {/* Children */}

      <GuestRow
        title="Children"
        subtitle="2 - 5 Years • Extra Mattress"
        value={children}
        onAdd={() => increase("child")}
        onRemove={() => decrease("child")}
      />

      {/* Infants */}

      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

        <h3 className="font-semibold text-green-700">
          Infants (0 - 2 Years)
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          ✔ Free of Cost
        </p>

      </div>

      {/* Guest Count */}

      <div className="mt-8 p-4 rounded-xl bg-blue-50 flex justify-between">

        <span className="font-semibold">
          Total Guests
        </span>

        <span className="font-bold text-blue-700">
          {totalGuests} / 44
        </span>

      </div>

      {/* Room Details */}

      <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Room Assigned
            </p>

            <h3 className="text-lg font-bold text-green-700">
              {roomType}
            </h3>

          </div>

          <div className="text-right">

            <p className="text-sm text-gray-500">
              Price Per Adult
            </p>

            <h3 className="text-2xl font-bold text-blue-700">
              ₹{pricePerPerson.toLocaleString()}
            </h3>

          </div>

        </div>

      </div>

      {/* Child Price */}

      {children > 0 && (

        <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 flex justify-between items-center">

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
    <div className="flex justify-between items-center py-5 border-b">

      <div>

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {subtitle}
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={onRemove}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          −
        </button>

        <span className="font-bold text-lg w-6 text-center">
          {value}
        </span>

        <button
          onClick={onAdd}
          disabled={disableAdd}
          className={`w-10 h-10 rounded-full text-white transition ${
            disableAdd
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          +
        </button>

      </div>

    </div>
  );
}

export default AddGuests;