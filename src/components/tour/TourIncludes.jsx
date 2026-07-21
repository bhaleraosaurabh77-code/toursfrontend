import React from "react";
import {
  Hotel,
  UtensilsCrossed,
  Bus,
  Camera,
  Tent,
  ShieldCheck,
  Users,
  Coffee,
  Luggage,
  Ticket,
} from "lucide-react";

const iconMap = {
  hotel: Hotel,
  meals: UtensilsCrossed,
  transport: Bus,
  sightseeing: Camera,
  camp: Tent,
  safari: ShieldCheck,
  manager: Users,
  welcome: Coffee,
  luggage: Luggage,
  ticket: Ticket,
};

const TourIncludes = ({ includes = [] }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
          <ShieldCheck className="text-green-600" size={28} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700">
            Tour Includes
          </h2>

          <p className="text-gray-500 text-sm">
            Everything included in your package
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {includes.map((item, index) => {
          const Icon = iconMap[item.icon] || ShieldCheck;

          return (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-5 hover:border-green-500 hover:shadow-lg transition duration-300 bg-white"
            >

              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition">

                <Icon
                  size={28}
                  className="text-green-600"
                />

              </div>

              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default TourIncludes;