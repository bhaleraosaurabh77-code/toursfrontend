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
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

      <div className="flex items-center justify-between">

        {steps.map((step, index) => {

          const stepNo = index + 1;

          const completed = stepNo < currentStep;

          const active = stepNo === currentStep;

          return (
            <React.Fragment key={step}>

              <div className="flex flex-col items-center">

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all
                  ${
                    completed
                      ? "bg-green-500 text-white"
                      : active
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {completed ? <Check size={20} /> : stepNo}
                </div>

                <span
                  className={`mt-3 text-sm font-medium ${
                    active ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {step}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-200 mx-3 rounded-full"></div>
              )}

            </React.Fragment>
          );
        })}

      </div>

    </div>
  );
};

export default Stepper;