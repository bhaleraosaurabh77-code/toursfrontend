import React from "react";

const PoliciesTab = () => {
  return (
    <div className="space-y-5 sm:space-y-6">

      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">

        <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-4 sm:mb-5">
          Payment Policy
        </h2>

        <ul className="space-y-3 text-sm sm:text-base text-gray-600">

          <li>• 30% advance to confirm booking.</li>

          <li>• Balance amount 30 days before departure.</li>

          <li>• Payment via UPI, Bank Transfer, Cards.</li>

        </ul>

      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8">

        <h2 className="text-xl sm:text-2xl font-bold text-[#0078AA] mb-4 sm:mb-5">
          Cancellation Policy
        </h2>

        <ul className="space-y-3 text-sm sm:text-base text-gray-600">

          <li>• 30+ days : Minimal charges</li>

          <li>• 15–29 days : Partial deduction</li>

          <li>• Less than 15 days : Cancellation charges apply</li>

        </ul>

      </div>

    </div>
  );
};

export default PoliciesTab;