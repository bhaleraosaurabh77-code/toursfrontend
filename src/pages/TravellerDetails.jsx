import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Users } from "lucide-react";
import { useBooking } from "../context/BookingContext";

const TravellerDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { booking, setBooking } = useBooking();

  const { traveller, guests } = booking;

  const [leadTraveller, setLeadTraveller] = useState({
    firstName: traveller.firstName || "",
    lastName: traveller.lastName || "",
    email: traveller.email || "",
    mobile: traveller.mobile || "",
    gender: traveller.gender || "",
    dob: traveller.dob || "",
    nationality: traveller.nationality || "India",
    state: traveller.state || "",
  });

  const [coTravellers, setCoTravellers] = useState([]);

  useEffect(() => {
    const travellers = [];

    for (let i = 2; i <= guests.adults; i++) {
      travellers.push({
        type: `Adult ${i}`,
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
      });
    }

    for (let i = 1; i <= guests.children; i++) {
      travellers.push({
        type: `Child ${i}`,
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
      });
    }

    for (let i = 1; i <= guests.infants; i++) {
      travellers.push({
        type: `Adult ${i}`,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        });
    }

    setCoTravellers(travellers);
  }, [guests]);

  const handleLeadChange = (e) => {
    setLeadTraveller({
      ...leadTraveller,
      [e.target.name]: e.target.value,
    });
  };

  const handleTravellerChange = (index, field, value) => {
    const updated = [...coTravellers];

    updated[index][field] = value;

    setCoTravellers(updated);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-3xl font-bold text-[#0078AA]">
                Traveller Details
              </h2>

              <p className="text-gray-500 mt-2">
                Please enter traveller details exactly as per Government ID.
              </p>

            </div>

            {/* Lead Traveller */}

            <div className="bg-white rounded-2xl shadow-md p-6">

              <div className="flex items-center gap-3 mb-6">

                <User className="text-[#0078AA]" />

                <h3 className="text-xl font-semibold">
                  Lead Traveller
                </h3>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={leadTraveller.firstName}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={leadTraveller.lastName}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={leadTraveller.email}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={leadTraveller.mobile}
                  readOnly
                  className="border rounded-lg px-4 py-3 bg-gray-100"
                />

                <select
                  name="gender"
                  value={leadTraveller.gender}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                >
                  <option value="">Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input
                  type="date"
                  name="dob"
                  value={leadTraveller.dob}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

                <input
                  type="text"
                  name="nationality"
                  value={leadTraveller.nationality}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State *"
                  value={leadTraveller.state}
                  onChange={handleLeadChange}
                  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                />

              </div>

            </div>

            {/* Co-Travellers */}

            {coTravellers.length > 0 && (
              <div className="space-y-6">

                {coTravellers.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6"
                  >

                    <div className="flex items-center gap-3 mb-6">

                      <Users className="text-[#0078AA]" />

                      <h3 className="text-xl font-semibold">
                        {person.type}
                      </h3>

                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                      <input
                        type="text"
                        placeholder="First Name"
                        value={person.firstName}
                        onChange={(e) =>
                          handleTravellerChange(
                            index,
                            "firstName",
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                      />

                      <input
                        type="text"
                        placeholder="Last Name"
                        value={person.lastName}
                        onChange={(e) =>
                          handleTravellerChange(
                            index,
                            "lastName",
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                      />

                      {person.type.startsWith("Adult") && (
  <>
    <input
      type="tel"
      placeholder="Mobile Number"
      value={person.mobile || ""}
      onChange={(e) =>
        handleTravellerChange(index, "mobile", e.target.value)
      }
      className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
    />

    <input
      type="email"
      placeholder="Email Address"
      value={person.email || ""}
      onChange={(e) =>
        handleTravellerChange(index, "email", e.target.value)
      }
      className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
    />
  </>
)}



                      <select
                        value={person.gender}
                        onChange={(e) =>
                          handleTravellerChange(
                            index,
                            "gender",
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                      >
                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>

                      <input
                        type="date"
                        value={person.dob}
                        onChange={(e) =>
                          handleTravellerChange(
                            index,
                            "dob",
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0078AA]"
                      />

                    </div>

                  </div>
                ))}

              </div>
            )}
                      </div>

          {/* RIGHT SIDE - Booking Summary */}

          <div>

            <div className="bg-white rounded-2xl shadow-md p-6 lg:sticky lg:top-24">

              <h3 className="text-2xl font-bold text-[#0078AA] mb-6">
                Booking Summary
              </h3>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Tour</span>
                  <span className="font-semibold text-right">
                    {booking.tour?.title || "-"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Departure</span>
                  <span className="font-semibold">
                    {booking.departure?.date || "-"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Guests</span>
                  <span className="font-semibold">
                    {booking.guests.adults} Adult
                    {booking.guests.adults > 1 ? "s" : ""}
                    {booking.guests.children > 0 &&
                      `, ${booking.guests.children} Child`}
                    {booking.guests.infants > 0 &&
                      `, ${booking.guests.infants} Infant`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Room</span>
                  <span className="font-semibold">
                    {booking.room.type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Train</span>
                  <span className="font-semibold">
                    {booking.train.type}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between">
                  <span>Tour Price</span>
                  <span className="font-semibold">
                    ₹{booking.basePrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-bold text-[#0078AA] pt-3 border-t">
                  <span>Total</span>
                  <span>
                    ₹{booking.totalPrice.toLocaleString()}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-10">

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          <button
            onClick={() => {
              if (
                !leadTraveller.firstName ||
                !leadTraveller.lastName ||
                !leadTraveller.email ||
                !leadTraveller.gender ||
                !leadTraveller.dob ||
                !leadTraveller.state
              ) {
                alert("Please fill all required Lead Traveller details.");
                return;
              }

              setBooking((prev) => ({
                ...prev,

                traveller: {
                  ...prev.traveller,
                  ...leadTraveller,
                },

                coTravellers,
              }));

              navigate("/review", {
                state: location.state,
              });
            }}
            className="bg-[#0078AA] hover:bg-[#00658F] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Continue to Review →
          </button>

        </div>

      </div>

    </div>
  );
};

export default TravellerDetails;