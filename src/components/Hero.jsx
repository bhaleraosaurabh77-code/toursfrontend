import React, { useState } from 'react'
import { Search } from 'lucide-react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 4.5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
      `}</style>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${new URL('../assets/GPYT.png', import.meta.url).href})`,
          }}
          aria-hidden="true"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            
            {/* Hero Text */}
            <div className="max-w-3xl animate-float">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 drop-shadow-2xl leading-tight">
                Perfect trips,
              </h1>
              <h2 className="text-5xl md:text-7xl font-light italic text-yellow-300 mb-6 drop-shadow-2xl">
                yahi se..
              </h2>
              
              <p className="text-xl md:text-2xl text-white drop-shadow-2xl leading-relaxed">
                From insta worthy days to bucket list <span className="italic">adventures</span>...
                <br />
                <span className="italic">we plan your perfect escape for you!</span>
              </p>
            </div>

            {/* Search Box */}
            <div className="w-full max-w-xl animate-float-delay">
              <div className="bg-white/95 backdrop-blur-lg rounded-full shadow-2xl p-1.5 flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder='Search "Spiti Valley"'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-gray-700 text-base bg-transparent py-2 pr-3"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
