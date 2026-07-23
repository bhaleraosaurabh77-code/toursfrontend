import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    // ---------------- Tour ----------------
    tour: null,

    departure: null,

    // ---------------- Lead Traveller ----------------
    traveller: {
      name: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      nationality: "India",
      state: "",
      verified: false,
    },

    // ---------------- Co-Travellers ----------------
    coTravellers: [],

    // ---------------- Guests ----------------
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },

    // ---------------- Room ----------------
    room: {
      type: "Quad Sharing",
      multiplier: 1,
    },

    // ---------------- Train ----------------
    train: {
      type: "Sleeper",
      extra: 0,
    },

    // ---------------- Pricing ----------------
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