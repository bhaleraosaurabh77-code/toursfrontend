export const calculateBookingPrice = (
  basePrice,
  roomMultiplier,
  trainExtra
) => {
  const totalPrice = Math.round(basePrice * roomMultiplier + trainExtra);

  const advance = Math.round(totalPrice * 0.30);

  const balance = totalPrice - advance;

  return {
    totalPrice,
    advance,
    balance,
  };
};