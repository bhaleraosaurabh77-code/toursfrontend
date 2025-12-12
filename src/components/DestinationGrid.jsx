import React from "react";

export default function DestinationGrid() {
  // List filenames exactly as they appear inside src/assets
  const filenames = [
    "image1.jpg",
    "jail.jpg",
    "image3.jpg",
    "hhok.jpg",
    "kerala.jpg",
    "houseboat-Copy.jpg",
    "lake.jpg",
    "ganapatipule-beach.jpg",
    "Sonmarg_Kashmir.jpg",
    "GettyImages-2171354215.webp",
    "hit.jpg",
    "download.jpg",
    "image5.webp",      // if your file actually has a space, keep it
    "image 4.jpg",       // duplicates are OK — replace with actual files if needed
    "download (5).jpg"  // exact name if it exists (parentheses allowed)
  ];

  // Build destinations array by resolving each filename to a bundle URL (Vite-friendly)
  const destinations = filenames.map((name, i) => {
    // This resolves the file path relative to this module at build time.
    // If the file does not exist, your browser console will show a 404.
    const src = new URL(`../assets/${name}`, import.meta.url).href;
    return { id: i + 1, image: src, title: `Destination ${i + 1}` };
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
     
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // graceful fallback if file not found
                  e.currentTarget.style.objectFit = "contain";
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='20'>Image not found</text></svg>";
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {destination.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}

