import React from "react";
import TourCard from "../components/TourCard";
import tours from "../data/tours";

const TourCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-700">
            Featured Tour Packages
          </h1>

          <p className="text-gray-600 mt-3">
            Explore our most popular tour packages.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
           <TourCard
  key={tour.id}
  id={tour.id}
  image={tour.image}
  title={tour.title}
  places={tour.places}
  duration={tour.duration}
  price={tour.price}
  rating={tour.rating}
  departure={tour.departure}
  seats={tour.seats}
  badge={tour.badge}
/>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TourCards;  



// import React from "react";
// import { MapPin, Clock, Star, Users, Calendar, ArrowRight } from "lucide-react";

// /**
//  * TourCard — designed around Rajasthan's haveli architecture:
//  * an arched "jharokha" window frames the photo, a gold seal carries
//  * the price like a royal stamp, and a mirror-work diamond marks the divider.
//  *
//  * Drop this into ../components/TourCard.jsx in your project.
//  * Swap the <a href> for a React Router <Link> if you're using one.
//  */
// export function TourCard({
//   id = 1,
//   image = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
//   title = "Highlights of Rajasthan",
//   places = "Jaipur • Udaipur • Jodhpur • Jaisalmer",
//   duration = "7 Days / 6 Nights",
//   price = "24,999",
//   rating = 4.8,
//   departure = "12 Aug 2026",
//   seats = 4,
//   badge = "Bestseller",
// }) {
//   return (
//     <div className="group relative w-full max-w-sm mx-auto font-[Inter]">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');
//       `}</style>

//       <div className="relative rounded-2xl bg-[#FBF7EF] shadow-[0_4px_20px_rgba(122,37,48,0.12)] overflow-hidden border border-[#E8D9B8] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_36px_rgba(122,37,48,0.22)]">

//         {/* Image frame with arched "jharokha" mask */}
//         <div className="relative px-3 pt-3">
//           <div className="relative h-52 overflow-hidden rounded-t-[3rem] rounded-b-md ring-1 ring-[#C9A24B]/50">
//             <img
//               src={image}
//               alt={title}
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             {/* subtle top gradient for badge legibility */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/10" />

//             {/* Corner motifs, echoing mirror-work embroidery */}
//             <span className="absolute top-2 left-2 h-2 w-2 rotate-45 bg-[#C9A24B]" />
//             <span className="absolute top-2 right-2 h-2 w-2 rotate-45 bg-[#C9A24B]" />

//             {/* Badge */}
//             {badge && (
//               <div className="absolute top-3 left-1/2 -translate-x-1/2">
//                 <span className="inline-block text-[11px] tracking-wide font-semibold uppercase text-[#FBF7EF] bg-[#7A2530] px-3 py-1 rounded-full ring-1 ring-[#C9A24B]/70 shadow-sm">
//                   {badge}
//                 </span>
//               </div>
//             )}

//             {/* Rating chip */}
//             <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/45 backdrop-blur-sm text-[#F3E4B8] text-xs font-semibold px-2 py-1 rounded-full">
//               <Star className="h-3 w-3 fill-[#F3E4B8] text-[#F3E4B8]" />
//               {rating}
//             </div>
//           </div>

//           {/* Price seal, overlapping the frame like a wax stamp */}
//           <div className="absolute -bottom-5 right-6 h-16 w-16 rounded-full bg-[#7A2530] ring-4 ring-[#FBF7EF] shadow-md flex flex-col items-center justify-center">
//             <span className="text-[9px] text-[#E8C87A] leading-none">from</span>
//             <span className="text-[#FBF7EF] text-[13px] font-bold leading-tight">
//               ₹{price}
//             </span>
//           </div>
//         </div>

//         {/* Body */}
//         <div className="px-5 pt-7 pb-5">
//           <h3 className="text-[22px] leading-tight font-[Cormorant_Garamond] font-700 text-[#3A2418] pr-10">
//             {title}
//           </h3>

//           <p className="mt-1.5 flex items-start gap-1.5 text-sm text-[#6B5B4B]">
//             <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#8B3A3A]" />
//             {places}
//           </p>

//           <div className="mt-3 flex items-center gap-4 text-sm text-[#6B5B4B]">
//             <span className="flex items-center gap-1.5">
//               <Clock className="h-4 w-4 text-[#2C4A6E]" />
//               {duration}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <Calendar className="h-4 w-4 text-[#2C4A6E]" />
//               {departure}
//             </span>
//           </div>

//           {/* Divider with mirror-work diamond */}
//           <div className="relative my-4 h-px bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent">
//             <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rotate-45 bg-[#C9A24B]" />
//           </div>

//           <div className="flex items-center justify-between">
//             <span className="flex items-center gap-1.5 text-xs font-medium text-[#B04A2C]">
//               <Users className="h-3.5 w-3.5" />
//               {seats <= 5 ? `Only ${seats} seats left` : `${seats} seats open`}
//             </span>

//             <a
//               href={`/tours/${id}`}
//               className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-[#FBF7EF] bg-[#7A2530] hover:bg-[#8B2E3A] px-4 py-2 rounded-full transition-colors duration-200"
//             >
//               View Details
//               <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Demo grid — sample data only, so you can preview the design.
// // Replace with your own tours.map(...) in TourCards.jsx as before.
// const sampleTours = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
//     title: "Highlights of Rajasthan",
//     places: "Jaipur • Udaipur • Jodhpur • Jaisalmer",
//     duration: "7 Days / 6 Nights",
//     price: "24,999",
//     rating: 4.8,
//     departure: "12 Aug 2026",
//     seats: 4,
//     badge: "Bestseller",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
//     title: "Royal Udaipur Getaway",
//     places: "Udaipur • Mount Abu",
//     duration: "4 Days / 3 Nights",
//     price: "13,499",
//     rating: 4.6,
//     departure: "3 Sep 2026",
//     seats: 9,
//     badge: "New",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
//     title: "Golden Desert Trail",
//     places: "Jaisalmer • Sam Dunes • Bikaner",
//     duration: "5 Days / 4 Nights",
//     price: "16,999",
//     rating: 4.9,
//     departure: "20 Sep 2026",
//     seats: 2,
//     badge: "Almost Full",
//   },
// ];

// export default function TourCardDemo() {
//   return (
//     <div className="min-h-screen bg-[#F3EEE3] py-12">
//       <div className="max-w-6xl mx-auto px-5">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-[Cormorant_Garamond] font-700 text-[#3A2418]">
//             Featured Tour Packages
//           </h1>
//           <p className="text-[#6B5B4B] mt-2">
//             Explore our most popular tour packages.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
//           {sampleTours.map((tour) => (
//             <TourCard key={tour.id} {...tour} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


