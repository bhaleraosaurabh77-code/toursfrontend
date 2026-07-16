import React, { useState } from "react";

const rooms = [
  {
    id: "quad",
    title: "Quad Sharing",
    description: "4 Guests in One Room",
    multiplier: 1,
  },
  {
    id: "triple",
    title: "Triple Sharing",
    description: "3 Guests in One Room",
    multiplier: 1.15,
  },
  {
    id: "double",
    title: "Double Sharing",
    description: "2 Guests in One Room",
    multiplier: 1.3225,
  },
  {
    id: "single",
    title: "Single Sharing",
    description: "1 Guest in One Room",
    multiplier: 1.520875,
  },
];

const RoomSelection = ({ basePrice = 11999, onContinue }) => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Choose Room Sharing
      </h2>

      <div className="space-y-4">

        {rooms.map((room) => {
          const price = Math.round(basePrice * room.multiplier);

          return (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`border rounded-xl p-5 cursor-pointer transition ${
                selectedRoom.id === room.id
                  ? "border-blue-700 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between">

                <div>
                  <h3 className="font-bold">{room.title}</h3>
                  <p className="text-sm text-gray-500">
                    {room.description}
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="text-xl font-bold text-blue-700">
                    ₹{price.toLocaleString()}
                  </h3>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => onContinue && onContinue(selectedRoom)}
        className="w-full mt-8 bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800"
      >
        Continue
      </button>
    </div>
  );
};

export default RoomSelection;