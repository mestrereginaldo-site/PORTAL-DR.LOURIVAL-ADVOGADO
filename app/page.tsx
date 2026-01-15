import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import { Scale, Users, Calculator, ArrowRight, ShieldCheck, Gavel } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroCarousel />
      
      <section className="relative z-20 -mt-20 px-4 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden bg-white">
          <div className="p-10 border-r border-gray-100 hover:bg-gray-50 transition-colors">
            <Calculator className="w-8 h-8 text-navy-900 mb-4" />
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Calculadora INSS</h3>
            <p className="text-gray-600 mb-4 text-sm">Simule sua aposentadoria.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">Simular <ArrowRight size={14}/></span>
          </div>
          <div className="p-10 bg-navy-900 text-white">
            <Scale className="w-8 h-8 text-gold-400 mb-4" />
            <h3 className="text-xl font-serif font-bold text-white mb-2">Previdenciário</h3>
            <p className="text-gray-300 mb-4 text-sm">Aposentadorias e Revisões.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">Serviços <ArrowRight size={14}/></span>
          </div>
          <div className="p-10 hover:bg-gray-50 transition-colors">
            <Users className="w-8 h-8 text-navy-900 mb-4" />
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Trabalhista</h3>
            <p className="text-gray-600 mb-4 text-sm">Defesa de direitos.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">Saiba Mais <ArrowRight size={14}/></span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Excelência e Justiça</h2>
        <p className="max-w-3xl mx-auto text-gray-600">Compromisso absoluto com o seu direito.</p>
      </section>
    </main>
  );
}
