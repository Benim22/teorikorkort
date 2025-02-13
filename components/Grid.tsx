"use client";

import React, { useState } from "react";

const apps = [
  {
    name: "Körkort AI",
    rating: "9.5/10 ⭐",
    description: "AI-baserad inlärning som anpassar sig efter dig!",
    image: "/korkortai.png",
    best: true,
  },
  {
    name: "iKörkort.nu",
    rating: "8.0/10",
    description: "Bra gränssnitt och många frågor, men saknar AI-funktioner.",
    image: "/ikorkort.png",
    best: false,
  },
  {
    name: "Körkortonline",
    rating: "7.2/10",
    description: "Enkel och tydlig, men saknar innovation.",
    image: "/korkortonline.png",
    best: false,
  },
  {
    name: "Körkortssidan",
    rating: "7.8/10",
    description: "Brett frågebank men dyrt och saknar AI.",
    image: "/korkortssidan.png",
    best: false,
  },
];

const reviews = [
  { text: "Körkort AI hjälpte mig klara provet direkt!", author: "Emma, 22", stars: "⭐⭐⭐⭐⭐" },
  { text: "Bra app, men lite dyr.", author: "Johan, 19", stars: "⭐⭐⭐⭐" },
  { text: "AI-funktionen gjorde all skillnad!", author: "Sofia, 25", stars: "⭐⭐⭐⭐⭐" },
];

const faqs = [
    { 
      question: "Hur fungerar AI-inlärningen?", 
      answer: "Körkort AI använder avancerade algoritmer för att analysera dina svar och identifiera dina svagheter. Baserat på detta skapar appen personligt anpassade tester som fokuserar på de områden där du behöver förbättras. Genom att kontinuerligt justera frågorna efter dina prestationer får du en optimerad inlärningsupplevelse som ökar dina chanser att klara teoriprovet på kortare tid."
    },
    { 
      question: "Är Körkort AI gratis?", 
      answer: "Ja, du kan testa Körkort AI helt gratis och få tillgång till ett antal grundläggande funktioner, inklusive ett urval av teorifrågor och vissa tester. För att låsa upp fler funktioner, såsom AI-genererade övningar, fullständiga prov och detaljerad statistik över dina framsteg, kan du uppgradera till en premiumversion till en rimlig kostnad."
    },
    { 
      question: "Kan jag använda appen på både mobil och dator?", 
      answer: "Ja! Körkort AI är utvecklad för att fungera sömlöst på både iOS- och Android-enheter samt via webbläsare på datorer. Detta innebär att du kan studera var och när du vill, oavsett om du föredrar att använda din mobil, surfplatta eller dator. Dina framsteg synkroniseras automatiskt mellan enheterna, så du kan enkelt växla mellan dem utan att förlora din statistik."
    },
    { 
      question: "Hur många frågor innehåller appen?", 
      answer: "Körkort AI har en av de största databaserna med över 3000 aktuella frågor som är direkt anpassade efter Trafikverkets senaste krav och uppdateringar. Frågorna täcker alla relevanta ämnen, såsom trafikregler, vägskyltar, säkerhet och miljö, samt specifika scenarier som du kan stöta på under teoriprovet. Appen säkerställer att du får en bred och heltäckande inlärning inför ditt körkort."
    }
  ];
  

const ComparisonPage = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Jämförelsetabell */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">📊 Jämförelsetabell</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Funktion</th>
                <th className="border p-2">Körkort AI ✅</th>
                <th className="border p-2">iKörkort.nu</th>
                <th className="border p-2">Körkortonline</th>
                <th className="border p-2">Körkortssidan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">⭐ AI-stöd</td><td className="border p-2">Ja</td><td className="border p-2">Nej</td><td className="border p-2">Nej</td><td className="border p-2">Nej</td></tr>
              <tr><td className="border p-2">📱 Mobilvänlig</td><td className="border p-2">Ja</td><td className="border p-2">Ja</td><td className="border p-2">Nej</td><td className="border p-2">Nej</td></tr>
              <tr><td className="border p-2">📖 Antal frågor</td><td className="border p-2">3000+</td><td className="border p-2">2000</td><td className="border p-2">1500</td><td className="border p-2">2500</td></tr>
              <tr><td className="border p-2">🏆 Realistiska tester</td><td className="border p-2">Ja</td><td className="border p-2">Delvis</td><td className="border p-2">Nej</td><td className="border p-2">Ja</td></tr>
              <tr><td className="border p-2">💰 Prisvärd</td><td className="border p-2">Ja</td><td className="border p-2">Ja</td><td className="border p-2">Nej</td><td className="border p-2">Nej</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Klickbara kort */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app, index) => (
          <div key={index} className={`p-6 rounded-2xl shadow-lg text-center border ${app.best ? "border-green-500 bg-green-50" : "border-gray-300"} hover:scale-105 transition transform duration-300`}>
            <img src={app.image} alt={app.name} className="mx-auto w-5 h-5 " />
            <h3 className="text-xl font-bold mt-2">{app.name}</h3>
            <p className="text-gray-600">{app.rating}</p>
            <p className="text-sm mt-2">{app.description}</p>
          </div>
        ))}
      </div>

      {/* Användarrecensioner */}
      <div className="mt-10 bg-gray-100 p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold">💬 Användarrecensioner</h2>
        <p className="mt-2 text-lg">{reviews[activeReview].stars} {reviews[activeReview].text}</p>
        <p className="text-gray-600 mt-1">– {reviews[activeReview].author}</p>
      </div>

      {/* CTA Knapp */}
      <div className="text-center mt-8">
      <button
  onClick={() => {
    const section = document.getElementById("sistadelen");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md text-lg transition-all"
>
  🎯 Plugga smartare nu!
</button>
      </div>
      

      {/* FAQ Sektion med Drop-Down */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">❓ Vanliga frågor</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-green-500 bg-gray-50 rounded-lg p-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-semibold focus:outline-none"
              >
                {faq.question}
                <span className="text-green-500 text-xl">{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
