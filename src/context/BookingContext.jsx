import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
 const [booking, setBooking] = useState({
  tour: null,

  departure: null,

  guests: {
    adults: 1,
    children: 0,
    infants: 0,
  },

  room: {
    type: "Quad Sharing",
    multiplier: 1,
  },

  train: {
    type: "Sleeper",
    extra: 0,
  },

  basePrice: 0,

  totalPrice: 0,

  advance: 0,

  balance: 0,
});

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);