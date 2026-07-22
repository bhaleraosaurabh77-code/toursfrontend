import React, { useState } from "react";
import { Search } from "lucide-react";
import heroImage from "../../assets/GPYT.png";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
        }

        .animate-float{
          animation:float 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative h-[85vh] sm:h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">

          <div className="flex flex-col items-center text-center">

            {/* Heading */}
            <div className="max-w-4xl animate-float">

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight drop-shadow-xl">
                Perfect trips,
              </h1>

              <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl italic font-light text-yellow-300 drop-shadow-xl">
                yahi se..
              </h2>

              <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                From insta worthy days to bucket list{" "}
                <span className="italic">adventures</span>...
                <br className="hidden sm:block" />
                <span className="italic">
                  we plan your perfect escape for you!
                </span>
              </p>

            </div>

            {/* Search */}
            <div className="w-full max-w-2xl mt-10">

              <div className="flex items-center bg-white rounded-full shadow-2xl px-4 py-3">

                <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />

                <input
                  type="text"
                  placeholder='Search "Spiti Valley"'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none px-3 text-sm sm:text-base md:text-lg"
                />

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}