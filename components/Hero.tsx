import React from "react";
import { Car } from "lucide-react"

import HeroFeatures from "./HeroFeatures";
import { LettersPullUp } from "./letters-pull-up";

const Hero = () => {
  return (
    
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        <Car className="h-20 w-10 mb-4 text-zinc-500" />
        <h1 className="text-4xl md:text-7xl font-bold mb-5 relative text-center text-zinc-700">
        <LettersPullUp className="text-4xl md:text-7xl font-bold mb-5 relative text-center text-zinc-700"text="Bästa Körkorts Appen" />
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            <LettersPullUp className="text-4xl md:text-7xl font-bold mb-5 relative text-center text-purple-700"text="2025" />
          </span>
        </h1>
       
        <h2 className="relative font-regular text-base text-zinc-500 tracking-wide mb-10 text-center max-w-3xl mx-auto antialiased">
          <span className="font-bold">
        Hitta den bästa körkortsappen och klara teoriprovet snabbare än någonsin.
        </span>
         Vi har noggrant jämfört funktioner, användarvänlighet och effektivitet för att ge dig det ultimata valet. 
        Välj en app som verkligen fungerar och gör din resa mot körkortet enklare.
        </h2>
      </div>
      <HeroFeatures />
      <button className="relative z-10 group mb-20">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <a
          className="relative z-10 px-6 py-3 bg-white text-zinc-700 font-bold rounded-lg block"
          href="#work"
        >
          Mot körkortet🚦 
        </a>
      </button>
    </div>
  );
};

export default Hero;
