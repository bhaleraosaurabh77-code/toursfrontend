import React, { useState } from "react";
import itineraryPDF from "../../assets/itineraries/rajasthan-itinerary.pdf";

const DownloadItineraryModal = ({
  open,
  onClose,
  tour,
}) => {

  const [step, setStep] = useState(1);

const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [otp, setOtp] = useState("");

const [error, setError] = useState("");

const resetForm = () => {
  setStep(1);
  setName("");
  setMobile("");
  setOtp("");
  setError("");
};

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md">

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Download {tour?.title} Itinerary
            </h2>

            <p className="text-gray-500 mb-6">
              Verify your mobile number to download the itinerary.
            </p>

            <input
                type="text"
                value={name}
               onChange={(e) => {
                const value = e.target.value;

                // Allow only alphabets and spaces
                if (/^[A-Za-z\s]*$/.test(value)) {
                    setName(value);
                    setError("");
                }
                }}
                placeholder="Full Name"
                className="w-full border rounded-xl p-3 mb-4"
                />

            <input
            type="tel"
            value={mobile}
            maxLength={10}
            onChange={(e) => {
            setMobile(e.target.value.replace(/\D/g, ""));
            setError("");
            }}
            placeholder="Mobile Number"
            className="w-full border rounded-xl p-3 mb-6"
            />

             {error && (
            <p className="text-red-500 text-sm mb-4">
                {error}
            </p>
            )}
            <button
              onClick={() => {

            if (!name.trim()) {
            setError("Name is required");
            return;
            }

            if (name.trim().length < 2) {
            setError("Name must contain at least 2 letters");
            return;
            }

            if (mobile.length !== 10) {
                setError("Enter a valid 10-digit mobile number");
                return;
            }

            setError("");
            setStep(2);

            }}
              className="w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              OTP Verification
            </h2>

            <p className="text-gray-500 mb-6">
              Enter the 6-digit OTP sent to your mobile.
            </p>

            {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
                {error}
            </p>
            )}

           <input
            type="text"
            value={otp}
            maxLength={6}
            onChange={(e) => {
            setOtp(e.target.value.replace(/\D/g, ""));
            setError("");
            }}
            placeholder="Enter OTP"
            className="w-full border rounded-xl p-3 text-center text-xl tracking-widest mb-6"
            />

            <button
              onClick={() => {

                if (otp.length !== 6) {
                    setError("OTP must be 6 digits");
                    return;
                }

                if (otp !== "123456") {
                    setError("Invalid OTP");
                    return;
                }

                setError("");
                setStep(3);

                }}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700"
            >
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="text-center">

              <div className="text-6xl mb-4">
                ✅
              </div>

              <h2 className="text-2xl font-bold text-green-600">
                Verification Successful
              </h2>

              <p className="text-gray-500 mt-3 mb-6">
                Your itinerary is ready.
              </p>

           <a
  href={itineraryPDF}
  download="Royale-Rajasthan-Itinerary.pdf"
  onClick={() => {
    setTimeout(() => {
      resetForm();
      onClose();
    }, 300);
  }}
  className="block w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 text-center"
>
  Download PDF
</a>

            </div>
          </>
        )}

       <button
  onClick={() => {
    if (step === 2) {
      setStep(1);
      setOtp("");
      setError("");
      return;
    }

    resetForm();
    onClose();
  }}
  className="w-full mt-4 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
>
  {step === 1
    ? "Cancel"
    : step === 2
    ? "Back"
    : "Done"}
</button>
      </div>

    </div>
  );
};

export default DownloadItineraryModal;