import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Phone, ShieldCheck } from "lucide-react";
import { useBooking } from "../context/BookingContext";

const LoginOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { booking, setBooking } = useBooking();

  const bookingData = location.state?.bookingData;
  const selectedTour = location.state?.selectedTour;
  const selectedDeparture = location.state?.selectedDeparture;

  useEffect(() => {
  if (!bookingData) {
    navigate("/", { replace: true });
  }
}, [bookingData, navigate]);

useEffect(() => {
  setName("");
  setMobile("");
  setOtp("");
  setOtpSent(false);
  setError("");
}, []);

  const [name, setName] = useState(booking.traveller.name || "");
  const [mobile, setMobile] = useState(booking.traveller.mobile || "");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handleGetOTP = () => {
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      setError("Name should contain only letters.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    alert("Demo OTP: 123456");
    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
  setError("");

  if (otp !== "123456") {
    setError("Invalid OTP");
    return;
  }

 setBooking({
  ...booking,
  traveller: {
    name,
    mobile,
    verified: true,
  },
});

navigate("/review", {
  replace: true,
  state: {
    bookingData,
    selectedTour,
    selectedDeparture,
  },
});

// Clear the form after navigating
setName("");
setMobile("");
setOtp("");
setOtpSent(false);
};

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-[#0078AA]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-[#0078AA]" size={34} />
          </div>

          <h1 className="text-3xl font-bold text-[#0078AA]">
            Traveller Verification
          </h1>

          <p className="text-gray-500 mt-2">
            Verify your mobile number to continue your booking.
          </p>

        </div>

        {error && (
          <div className="mb-5 rounded-xl bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-[#0078AA] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Mobile Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="tel"
                maxLength={10}
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                className="w-full border rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-[#0078AA] outline-none"
              />
            </div>
          </div>

          {!otpSent ? (
            <button
              onClick={handleGetOTP}
              className="w-full bg-[#0078AA] hover:bg-[#00658f] text-white py-3 rounded-xl font-semibold transition"
            >
              Get OTP
            </button>
          ) : (
            <>
              <div>
                <label className="block font-medium mb-2">
                  Enter OTP
                </label>

                <input
                  type="text"
                  maxLength={6}
                  placeholder="123456"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0078AA] outline-none text-center tracking-[8px] text-xl"
                />
              </div>

              <button
                onClick={handleVerifyOTP}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Verify OTP
              </button>
            </>
          )}

        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Demo OTP: <span className="font-semibold">123456</span>
        </div>

      </div>
    </div>
  );
};

export default LoginOTP;