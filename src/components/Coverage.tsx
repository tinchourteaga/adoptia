import React from 'react';
import { Globe2 } from 'lucide-react';

const Coverage: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Global Presence</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Currently operating in Spain and across South America, we're expanding our network
            to help more pets find their forever homes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className="text-blue-100">Active Regions</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 size={20} className="text-white" />
              <span className="text-blue-100">50+ Partner Shelters</span>
            </div>
          </div>
          
          <div className="relative h-[500px] bg-white/10 backdrop-blur-md rounded-2xl p-8">
            {/* Spain Region */}
            <div className="absolute top-[25%] left-[45%] group">
              <div className="animate-ping absolute w-8 h-8 bg-white opacity-20 rounded-full"></div>
              <div className="absolute w-8 h-8 bg-white opacity-30 rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full relative"></div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                Spain: 20+ shelters
              </div>
            </div>

            {/* South America Region */}
            <div className="absolute top-[60%] left-[30%] group">
              <div className="animate-ping absolute w-16 h-24 bg-white opacity-20 rounded-full"></div>
              <div className="absolute w-16 h-24 bg-white opacity-30 rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full relative"></div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                South America: 30+ shelters
              </div>
            </div>

            {/* Map Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-white/10"></div>
              ))}
            </div>

            {/* Continents Outline */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-[20%] left-[40%] w-[20%] h-[15%] bg-white/20 rounded-lg transform rotate-12"></div>
              <div className="absolute top-[45%] left-[20%] w-[25%] h-[35%] bg-white/20 rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Spain</h3>
              <p className="text-blue-100">20+ partner shelters across major cities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">South America</h3>
              <p className="text-blue-100">30+ partner shelters in Argentina, Chile, and Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;