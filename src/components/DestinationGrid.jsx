// import React from "react";

// export default function DestinationGrid() {
//   // Demo place names (YOU can change later)
//   const places = [
//     "LEH LADAKH",
//     "NORTH-EAST INDIA",
//     "OFFBEAT HIMACHAL",
//     "ANDAMAN ISLANDS",
//     "RAJASTHAN",
//     "KERALA",
//     "KASHMIR",
//     "GOA",
//     "UTTARAKHAND",
//     "SIKKIM",
//   ];

//   // Image filenames (must exist in src/assets)
//   const filenames = [
//     "image1.jpg",
//     "jail.jpg",
//     "image3.jpg",
//     "hhok.jpg",
//     "kerala.jpg",
//     "houseboat-Copy.jpg",
//     "lake.jpg",
//     "ganapatipule-beach.jpg",
//     "Sonmarg_Kashmir.jpg",
//     "GettyImages-2171354215.webp",
//   ];

//   const destinations = filenames.map((name, i) => ({
//     id: i,
//     image: new URL(`../assets/${name}`, import.meta.url).href,
//     title: places[i] || "DESTINATION",
//   }));

//   return (
//     <div className="bg-gray-50 py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {destinations.map((item) => (
//             <div
//               key={item.id}
//               className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
//             >
//               {/* Image */}
//               <div className="h-56 w-full overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   loading="lazy"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='20'>Image not found</text></svg>";
//                   }}
//                 />
//               </div>

//               {/* Title bar (like screenshot) */}
//               <div className="bg-white py-4 text-center border-t">
//                 <h3 className="text-lg font-bold text-[#0B3C5D] tracking-wide">
//                   {item.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function DestinationGrid() {
  // Demo place names (you can change later)
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
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* White title bar (like screenshot) */}
              <div className="bg-white py-4 text-center border-t">
                <h3 className="text-lg font-bold text-[#0B3C5D] tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



