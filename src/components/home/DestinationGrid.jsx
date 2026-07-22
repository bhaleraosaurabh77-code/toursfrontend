import React from "react";

export default function DestinationGrid() {
  const destinations = [
    {
      title: "UTTARAKHAND",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751428/Want_a_spiritual_travel_experience_in_Uttarakhand_saors4.jpg",
    },
    {
      title: "LEH LADAKH",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751428/Pangong_Lake_Leh_Ladakh_India_vyhcii.jpg",
    },
    {
      title: "KERALA",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751428/kerala_dhveji.jpg",
    },
    {
      title: "ANDAMAN ISLANDS",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751427/jail_q47c5c.jpg",
    },
    {
      title: "RAJASTHAN",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751427/Rajasthan_zgmyyl.jpg",
    },
    {
      title: "HIMACHAL",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751427/Himachal_fpqjms.jpg",
    },
    {
      title: "KASHMIR",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751427/lake_ig2yqv.jpg",
    },
    {
      title: "NORTH-EAST INDIA",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751425/x8o1tuyuhfoivivvecgm.jpg",
    },
    {
      title: "GOA",
      image:
        "https://res.cloudinary.com/dt0mm3yj1/image/upload/v1766751426/ganapatipule-beach_uqthni.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AA]">
            Popular Destinations
          </h2>

          <div className="w-20 h-1 bg-[#0078AA] rounded-full mx-auto mt-4 mb-5" />

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore India's most loved destinations with comfortable,
            well-planned and memorable travel experiences.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {destinations.map((item, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >

              {/* Image */}

              <div className="h-56 sm:h-60 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              {/* Title */}

              <div className="bg-white border-t px-4 py-5 text-center">

                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C5D] tracking-wide">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}