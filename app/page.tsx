import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import { Scale, Users, Calculator, ShieldCheck, ArrowRight, Gavel } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. CARROSSEL (Topo do Site) */}
      <HeroCarousel />

      {/* 2. ÁREAS DE ATUAÇÃO (Cartões) */}
      <section className="relative z-20 -mt-20 px-4 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden bg-white">
          
          <div className="p-10 border-r border-gray-100 hover:bg-gray-50 transition-colors group">
            <div className="bg-navy-900/5 p-3 w-fit rounded mb-4 group-hover:bg-gold-400/20 transition-colors">
                <Calculator className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Calculadora INSS</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">Simule seu tempo de contribuição e saiba quando se aposentar.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">
              Simular Agora <ArrowRight size={14} />
            </span>
          </div>

          <div className="p-10 bg-navy-900 text-white relative overflow-hidden group">
            <div className="bg-white/10 p-3 w-fit rounded mb-4">
                <Scale className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Direito Previdenciário</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">Revisão de benefícios, Aposentadoria Especial e BPC/LOAS.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">
              Ver Serviços <ArrowRight size={14} />
            </span>
          </div>

          <div className="p-10 hover:bg-gray-50 transition-colors group">
            <div className="bg-navy-900/5 p-3 w-fit rounded mb-4 group-hover:bg-gold-400/20 transition-colors">
                <Users className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Direito Trabalhista</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">Defesa dos seus direitos em rescisões e acordos.</p>
            <span className="text-gold-400 font-bold text-xs uppercase flex items-center gap-2">
              Saiba Mais <ArrowRight size={14} />
            </span>
          </div>

        </div>
      </section>

      {/* 3. SOBRE O ESCRITÓRIO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-xs mb-3 block">Dr. Lourival Oliveira</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-8">
            Compromisso com o seu direito,<br />Paixão pela justiça.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            Nosso escritório nasceu com o propósito de oferecer uma advocacia de excelência, 
            combatendo injustiças e garantindo que cada cliente receba exatamente o que é seu por direito. 
            Com uma abordagem humanizada e técnica, tratamos seu caso como prioridade absoluta.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
             <div className="p-6 bg-white border border-gray-100 shadow-sm rounded">
                <ShieldCheck className="w-8 h-8 text-gold-400 mb-3" />
                <h4 className="font-bold text-navy-900 mb-1">Confiança</h4>
                <p className="text-sm text-gray-500">Transparência total em cada etapa do processo.</p>
             </div>
             <div className="p-6 bg-white border border-gray-100 shadow-sm rounded">
                <Gavel className="w-8 h-8 text-gold-400 mb-3" />
                <h4 className="font-bold text-navy-900 mb-1">Combatividade</h4>
                <p className="text-sm text-gray-500">Não aceitamos "não" como resposta final.</p>
             </div>
             <div className="p-6 bg-white border border-gray-100 shadow-sm rounded">
                <Calculator className="w-8 h-8 text-gold-400 mb-3" />
                <h4 className="font-bold text-navy-900 mb-1">Tecnologia</h4>
                <p className="text-sm text-gray-500">Cálculos precisos para o melhor benefício.</p>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
