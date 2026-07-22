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
    <div className="w-full overflow-x-auto pb-2">

      <div className="flex items-center min-w-[650px] sm:min-w-0">

        {steps.map((step, index) => {

          const stepNo = index + 1;

          const completed = stepNo < currentStep;

          const active = stepNo === currentStep;

          return (

            <React.Fragment key={step}>

              {/* Step */}

              <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">

                <div
                  className={`relative
                    w-11 h-11
                    sm:w-14 sm:h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-base
                    sm:text-lg
                    font-bold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "bg-green-500 text-white shadow-lg shadow-green-200"
                        : active
                        ? "bg-[#0078AA] text-white ring-4 ring-blue-100 shadow-lg"
                        : "bg-gray-100 text-gray-500 border-2 border-gray-300"
                    }`}
                >
                  {completed ? (
                    <Check size={22} />
                  ) : (
                    stepNo
                  )}
                </div>

                <span
                  className={`mt-3
                    text-xs
                    sm:text-sm
                    font-semibold
                    text-center

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

                <div className="flex-1 px-2 sm:px-4">

                  <div className="h-1 rounded-full bg-gray-200 relative overflow-hidden">

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