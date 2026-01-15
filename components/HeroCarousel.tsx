"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

// Lista de Slides preenchida corretamente
const slides = [
  {
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1920",
    title: "Especialista em Previdenciário",
    subtitle: "Garantimos o melhor benefício para sua aposentadoria com análise técnica minuciosa."
  },
  {
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1920",
    title: "Defesa Trabalhista Forte",
    subtitle: "Protegendo seus direitos na relação de trabalho com estratégia e firmeza."
  },
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920",
    title: "Segurança Jurídica Total",
    subtitle: "Atuação ética e transparente para resolver seus conflitos cíveis."
  }
];

export default function HeroCarousel() {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-navy-900">
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full h-full relative">
            {/* Imagem */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
            />
            {/* Sombra escura para ler o texto */}
            <div className="absolute inset-0 bg-navy-900/60" />
            
            {/* Texto */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl text-white mt-10">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-xl leading-tight">
                    {s.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                    {s.subtitle}
                </p>
                <button className="bg-gold-400 text-navy-900 hover:bg-white font-bold py-4 px-10 rounded-sm transition-all shadow-lg text-lg flex items-center gap-2 mx-auto">
                    Agendar Consulta <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores (Bolinhas) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 rounded-full
              ${curr === i ? "bg-gold-400 w-8" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
