import React from "react";

const NeedToKnowTab = () => {
  const items = [
    "Original Government ID",
    "Sports Shoes",
    "Light Jacket",
    "Cap / Hat",
    "Sunscreen",
    "Personal Medicines",
    "Mobile Charger",
    "Water Bottle",
  ];

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">

      <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-5 sm:mb-6">
        Things To Carry
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

        {items.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3 p-3 sm:p-4 border rounded-xl hover:bg-gray-50 transition"
          >

            <span className="text-green-600 text-lg sm:text-xl flex-shrink-0">
              ✔
            </span>

            <span className="text-sm sm:text-base text-gray-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default NeedToKnowTab;