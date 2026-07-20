// export const calculateBookingPrice = (
//   basePrice,
//   roomMultiplier,
//   trainExtra
// ) => {
//   const totalPrice = Math.round(basePrice * roomMultiplier + trainExtra);

//   const advance = Math.round(totalPrice * 0.30);

//   const balance = totalPrice - advance;

//   return {
//     totalPrice,
//     advance,
//     balance,
//   };
// };  old pricing engine code, replaced with new pricing engine in pricingEngine.js

// ==========================================
// Pricing Engine
// Amit Tours & Travels
// ==========================================

// Departure Price = Quad Sharing Price

export const calculatePricing = ({
  quadPrice,
  adults = 1,
  children = 0,
  trainExtra = 0,
}) => {

  // -----------------------------
  // Room Prices
  // -----------------------------

  const triplePrice = Math.round(quadPrice * 1.15);

  const doublePrice = Math.round(triplePrice * 1.15);

  const singlePrice = Math.round(doublePrice * 1.15);

  // -----------------------------
  // Room Selection
  // -----------------------------

  let roomType = "";
  let adultPrice = quadPrice;

  switch (adults) {

    case 1:
      roomType = "Single Sharing";
      adultPrice = singlePrice;
      break;

    case 2:
      roomType = "Double Sharing";
      adultPrice = doublePrice;
      break;

    case 3:
      roomType = "Triple Sharing";
      adultPrice = triplePrice;
      break;

    default:
      roomType = "Quad Sharing";
      adultPrice = quadPrice;
      break;

  }

  // -----------------------------
  // Child Pricing
  // 70% of Selected Room Type
  // -----------------------------

  const childPrice = Math.round(adultPrice * 0.70);

  // -----------------------------
  // Totals
  // -----------------------------

  const adultTotal =
    adultPrice * adults;

  const childTotal =
    childPrice * children;

  const trainPassengers =
    adults + children;

  const trainTotal =
    trainPassengers * trainExtra;

  const subtotal =
    adultTotal +
    childTotal +
    trainTotal;

  const gst =
    Math.round(subtotal * 0.05);

  const grandTotal =
    subtotal + gst;

  const advance =
    Math.round(grandTotal * 0.30);

  const balance =
    grandTotal - advance;

  // -----------------------------
  // Return Everything
  // -----------------------------

  return {

    // Room Details
    roomType,

    // Individual Prices
    quadPrice,
    triplePrice,
    doublePrice,
    singlePrice,

    adultPrice,
    childPrice,

    // Totals
    adultTotal,
    childTotal,
    trainTotal,

    subtotal,
    gst,
    grandTotal,

    advance,
    balance,

  };

};