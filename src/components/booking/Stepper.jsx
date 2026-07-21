// import React from "react";
// import { Check } from "lucide-react";

// const steps = [
//   "Departure",
//   "Guests",
//   "Train",
//   "Review",
// ];

// const Stepper = ({ currentStep = 1 }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

//       <div className="flex items-center justify-between">

//         {steps.map((step, index) => {

//           const stepNo = index + 1;

//           const completed = stepNo < currentStep;

//           const active = stepNo === currentStep;

//           return (
//             <React.Fragment key={step}>

//               <div className="flex flex-col items-center">

//                 <div
//                   className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all
//                   ${
//                     completed
//                       ? "bg-green-500 text-white"
//                       : active
//                       ? "bg-blue-700 text-white"
//                       : "bg-gray-200 text-gray-500"
//                   }`}
//                 >
//                   {completed ? <Check size={20} /> : stepNo}
//                 </div>

//                 <span
//                   className={`mt-3 text-sm font-medium ${
//                     active ? "text-blue-700" : "text-gray-600"
//                   }`}
//                 >
//                   {step}
//                 </span>

//               </div>

//               {index !== steps.length - 1 && (
//                 <div className="flex-1 h-1 bg-gray-200 mx-3 rounded-full"></div>
//               )}

//             </React.Fragment>
//           );
//         })}

//       </div>

//     </div>
//   );
// };

// export default Stepper;


import React from "react";
import { Check } from "lucide-react";

const steps = [
  "Departure",
  "Guests",
  "Train",
  "Review",
];

const Stepper = ({ currentStep = 1 }) => {
  return (
    <div className="w-full">

      <div className="flex items-center">

        {steps.map((step, index) => {

          const stepNo = index + 1;

          const completed = stepNo < currentStep;

          const active = stepNo === currentStep;

          return (

            <React.Fragment key={step}>

              {/* Step */}

              <div className="flex flex-col items-center min-w-[90px]">

                <div
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300

                  ${
                    completed
                      ? "bg-green-500 text-white shadow-lg shadow-green-200"
                      : active
                      ? "bg-[#0078AA] text-white ring-4 ring-blue-100 shadow-lg"
                      : "bg-gray-100 text-gray-500 border-2 border-gray-300"
                  }`}
                >
                  {completed ? (
                    <Check size={24} />
                  ) : (
                    stepNo
                  )}
                </div>

                <span
                  className={`mt-3 text-sm font-semibold text-center

                  ${
                    active
                      ? "text-[#0078AA]"
                      : completed
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {step}
                </span>

              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (

                <div className="flex-1 px-2">

                  <div className="h-[4px] rounded-full bg-gray-200 relative overflow-hidden">

                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500

                      ${
                        completed
                          ? "w-full bg-green-500"
                          : "w-0"
                      }`}
                    />

                  </div>

                </div>

              )}

            </React.Fragment>

          );

        })}

      </div>

    </div>
  );
};

export default Stepper;