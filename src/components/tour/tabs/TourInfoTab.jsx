import React from "react";
import {
  Bus,
  Hotel,
  UtensilsCrossed,
  CheckCircle,
} from "lucide-react";

const Card = ({ icon, title, children }) => (
  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border p-5 sm:p-6">

    <div className="flex items-center gap-3 mb-5">

      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#0078AA] flex-shrink-0">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold">
        {title}
      </h3>

    </div>

    {children}

  </div>
);

const TourInfoTab = ({ tour }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

      <Card
        title="Transportation"
        icon={<Bus size={24} />}
      >
        <ul className="space-y-2 text-sm sm:text-base text-gray-600">
          <li>🚆 Sleeper / AC Train Journey</li>
          <li>🚌 AC Bus / Tempo Traveller</li>
        </ul>
      </Card>

      <Card
        title="Accommodation"
        icon={<Hotel size={24} />}
      >
        <ul className="space-y-2 text-sm sm:text-base text-gray-600">
          <li>🏨 Hotel Stay</li>
          <li>🏕 Desert Camp</li>
        </ul>
      </Card>

      <Card
        title="Meals"
        icon={<UtensilsCrossed size={24} />}
      >
        <ul className="space-y-2 text-sm sm:text-base text-gray-600">
          <li>Breakfast</li>
          <li>Dinner</li>
          <li>No Meals in Train</li>
        </ul>
      </Card>

      <Card
        title="Tour Includes"
        icon={<CheckCircle size={24} />}
      >
        <ul className="space-y-2 text-sm sm:text-base text-gray-600">

          {tour.includes?.map((item, index) => (

            <li key={index}>
              ✔ {item.title}
            </li>

          ))}

        </ul>
      </Card>

    </div>
  );
};

export default TourInfoTab;