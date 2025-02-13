import ComparisonGrid from "@/components/Grid";

const comparisonData = [
  {
    title: "iKörkort.nu",
    description: "Ett prisvärt val med stabil prestanda.",
    highlights: ["Bra batteritid", "Lågt pris", "Grundläggande funktioner"],
  },
  {
    title: "KörkortAI.se",
    description: "En premiumprodukt med avancerade funktioner.",
    highlights: ["Hög prestanda", "Avancerade funktioner", "Dyrare pris"],
  },
  {
    title: "Körkortonline.se",
    description: "Ett balanserat val mellan pris och prestanda.",
    highlights: ["Bra prestanda", "Medelpris", "Användarvänlig"],
  },
  {
    title: "Körkortssidan.se",
    description: "Ett budgetval för dem som bara behöver grundläggande funktioner.",
    highlights: ["Billigast", "Lätt att använda", "Begränsad funktionalitet"],
  },
];

const prosList = [
  "Lång batteritid",
  "Bra pris/prestanda",
  "Hög prestanda",
  "Användarvänlig",
];

const consList = [
  "Dyrt",
  "Kort batteritid på vissa modeller",
  "Kan vara svårt att konfigurera",
];

const bestFeatures = ["Hög prestanda", "Bra pris/prestanda", "Lång batteritid"];

export default function JamforelsePage() {
  return (
    <div className="min-h-screen  py-10">
    

      <ComparisonGrid items={comparisonData} pros={prosList} cons={consList} bestFeatures={bestFeatures} />
    </div>
  );
}
