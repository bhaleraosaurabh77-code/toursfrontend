import React, { useState } from "react";
import {
  Hotel,
  UtensilsCrossed,
  Train,
  Bus,
  Camera,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  X,
} from "lucide-react";

const iconMap = {
  Hotel: Hotel,
  Meals: UtensilsCrossed,
  Train: Train,
  Transport: Bus,
  Sightseeing: Camera,
  Coordinator: UserCheck,
};

const TourQuickInfo = ({
  includes = [],
  highlights = [],
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mt-10">

        {/* Heading */}

        <div className="px-8 py-6 border-b bg-gradient-to-r from-[#0078AA] to-[#009FD4]">

          <h2 className="text-3xl font-bold text-white">
            Tour Quick Information
          </h2>

          <p className="text-blue-100 mt-2">
            Everything you need to know before booking your tour.
          </p>

        </div>

        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="p-8 border-r border-gray-200">

            <h3 className="text-2xl font-bold text-[#0078AA] mb-8">
              Tour Includes
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {includes.map((item, index) => {

                const Icon =
                  iconMap[item.icon] || Camera;

                return (

                  <div
                    key={index}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-[#0078AA] hover:bg-blue-50 transition duration-300 cursor-default"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-[#0078AA] transition">

                      <Icon
                        size={28}
                        className="text-[#0078AA] group-hover:text-white"
                      />

                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-8">

            <div className="flex justify-between items-center mb-8">

              <h3 className="text-2xl font-bold text-[#0078AA]">
                Tour Highlights
              </h3>

              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-[#0078AA] font-semibold hover:gap-3 transition-all"
              >
                View All
                <ChevronRight size={18} />
              </button>

            </div>

            <div className="space-y-4">

              {highlights.slice(0, 6).map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />

                  <div>

                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* ============================
            View All Highlights Modal
      ============================= */}

      {showModal && (

        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">

            {/* Modal Header */}

            <div className="flex items-center justify-between px-8 py-6 border-b bg-gradient-to-r from-[#0078AA] to-[#009FD4]">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Rajasthan Tour Highlights
                </h2>

                <p className="text-blue-100 mt-1">
                  Explore all the major attractions included in this tour.
                </p>

              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              >
                <X
                  size={22}
                  className="text-white"
                />
              </button>

            </div>

            {/* Modal Body */}

            <div className="overflow-y-auto max-h-[65vh] px-8 py-8">

              <div className="grid md:grid-cols-2 gap-5">

                {highlights.map((item, index) => (

                  <div
                    key={index}
                    className="border rounded-2xl p-5 hover:border-[#0078AA] hover:shadow-lg transition"
                  >

                    <div className="flex items-start gap-4">

                      <CheckCircle2
                        size={22}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />

                      <div>

                        <h3 className="text-lg font-bold text-gray-800">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 mt-2 leading-7">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Footer */}

            <div className="px-8 py-5 border-t bg-gray-50 flex justify-end">

              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl bg-[#0078AA] text-white font-semibold hover:bg-[#00658f] transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default TourQuickInfo;