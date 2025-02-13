"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, } from "framer-motion";
import { Gift } from "lucide-react";

const reviews = [
  { text: "Den bästa körkortsappen – klarade provet direkt!", author: "Anna, 22" },
  { text: "AI:n hjälpte mig att fokusera på rätt frågor!", author: "Johan, 19" },
  { text: "Otroligt smidigt och pedagogiskt upplägg!", author: "Emelie, 24" },
];

export const Services = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="sistadelen" className="relative bg-white text-gray-900 py-20 px-8 text-center rounded-2xl shadow-lg mx-auto max-w-6xl">
      
      <h2 className="text-4xl font-extrabold text-purple-600">🚀 Redo att klara teoriprovet?</h2>
      <p className="mt-5 text-lg max-w-3xl mx-auto">
        Körkort AI har visat sig vara den smartaste vägen till körkortet. Testa appen idag och gör teorin enklare än någonsin!
      </p>
      
      <a target="_blank" href="https://korkortai.se/">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md text-lg transition-all">
        ✅ Testa Körkort AI nu
      </button>
      </a>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 z-10">⭐ Vad säger våra användare?</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-gray-100 text-gray-900 p-4 rounded-lg shadow-md mx-auto max-w-md"
          >
            <p className="text-lg">"{reviews[currentReview].text}"</p>
            <p className="text-sm font-semibold mt-2">– {reviews[currentReview].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      

      {/* Rabattkod-sektionen */}
      <div className="mt-8 p-6 bg-green-500 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold flex items-center justify-center">
          <Gift className="mr-2" /> Exklusiv rabattkod!
        </h3>
        <p className="text-lg mt-2">Klicka för att avslöja din rabatt:</p>
        {!showDiscount ? (
          <button
            onClick={() => setShowDiscount(true)}
            className="mt-4 bg-white text-green-600 py-2 px-6 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            🔥 Klicka här
          </button>
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-2xl font-bold"
          >
            TEORI2025
          </motion.p>
        )}
      </div>
    </div>
  );
};
