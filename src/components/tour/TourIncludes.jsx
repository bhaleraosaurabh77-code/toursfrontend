// import React from "react";
// import {
//   Hotel,
//   UtensilsCrossed,
//   Bus,
//   Camera,
//   Tent,
//   ShieldCheck,
//   Users,
//   Coffee,
//   Luggage,
//   Ticket,
// } from "lucide-react";

// const iconMap = {
//   hotel: Hotel,
//   meals: UtensilsCrossed,
//   transport: Bus,
//   sightseeing: Camera,
//   camp: Tent,
//   safari: ShieldCheck,
//   manager: Users,
//   welcome: Coffee,
//   luggage: Luggage,
//   ticket: Ticket,
// };

// const TourIncludes = ({ includes = [] }) => {
//   return (
//     <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">

//       <div className="flex items-center gap-3 mb-6">

//         <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
//           <ShieldCheck className="text-green-600" size={28} />
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold text-blue-700">
//             Tour Includes
//           </h2>

//           <p className="text-gray-500 text-sm">
//             Everything included in your package
//           </p>
//         </div>

//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

//         {includes.map((item, index) => {
//           const Icon = iconMap[item.icon] || ShieldCheck;

//           return (
//             <div
//               key={index}
//               className="group border border-gray-200 rounded-2xl p-5 hover:border-green-500 hover:shadow-lg transition duration-300 bg-white"
//             >

//               <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition">

//                 <Icon
//                   size={28}
//                   className="text-green-600"
//                 />

//               </div>

//               <h3 className="font-semibold text-lg text-gray-800">
//                 {item.title}
//               </h3>

//               <p className="text-sm text-gray-500 mt-2">
//                 {item.description}
//               </p>

//             </div>
//           );
//         })}

//       </div>

//     </section>
//   );
// };

// export default TourIncludes;


import React, { useState } from "react";
import {
  Hotel,
  UtensilsCrossed,
  Bus,
  Train,
  Camera,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const icons = {
  Hotel: Hotel,
  Meals: UtensilsCrossed,
  Transport: Bus,
  Train: Train,
  Sightseeing: Camera,
  Coordinator: UserCheck,
};

const TourIncludes = ({ includes = [], highlights = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleHighlights = showAll
    ? highlights
    : highlights.slice(0, 6);

  return (
    <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 overflow-hidden mt-8 sm:mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}

        <div className="p-5 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r">

          <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-6 sm:mb-8">
            Tour Includes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">

            {includes.map((item, index) => {

              const Icon = icons[item.icon] || Camera;

              return (

                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-blue-50 transition"
                >

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">

                    <Icon
                      size={24}
                      className="text-[#0078AA] sm:w-7 sm:h-7"
                    />

                  </div>

                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    {item.title}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-5 sm:p-6 lg:p-8">

          <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-6">
            Tour Highlights
          </h2>

          <ul className="space-y-3">

            {visibleHighlights.map((item, index) => (

              <li
                key={index}
                className="flex items-start gap-3"
              >

                <span className="text-green-600 mt-1 flex-shrink-0">
                  ●
                </span>

                <span className="text-sm sm:text-base text-gray-700 leading-6">
                  {item.title}
                </span>

              </li>

            ))}

          </ul>

          {highlights.length > 6 && (

            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 sm:mt-8 w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-[#0078AA] text-[#0078AA] font-semibold hover:bg-[#0078AA] hover:text-white transition flex items-center justify-center gap-2"
            >

              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View More
                  <ChevronDown size={18} />
                </>
              )}

            </button>

          )}

        </div>

      </div>

    </section>
  );
};

export default TourIncludes;