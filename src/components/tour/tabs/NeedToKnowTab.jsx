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

    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-[#0078AA] mb-6">
        Things To Carry
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {items.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3 p-4 border rounded-xl"
          >
            <span className="text-green-600 text-xl">
              ✔
            </span>

            {item}

          </div>

        ))}

      </div>

    </div>

  );
};

export default NeedToKnowTab;