"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Scale, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-navy-900 py-3 shadow-xl" : "bg-navy-900/80 backdrop-blur-md py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <div className="bg-gold-400 p-2 rounded-sm text-navy-900">
            <Scale size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold leading-none tracking-wide">LOURIVAL OLIVEIRA</span>
            <span className="text-[10px] text-gold-400 tracking-[0.3em] uppercase">Advocacia Premium</span>
          </div>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-sm tracking-widest uppercase">
          <Link href="/" className="hover:text-gold-400 transition-colors">Início</Link>
          <Link href="#" className="hover:text-gold-400 transition-colors">Sobre</Link>
          <button className="bg-gold-400 text-navy-900 px-6 py-2 rounded-sm hover:bg-white transition-all font-bold flex items-center gap-2">
            <Phone size={16} /> Consulta
          </button>
        </div>

        {/* Botão Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-gray-800 p-6 flex flex-col gap-4 text-white z-50">
            <Link href="/" className="py-3 border-b border-gray-800 text-lg">Início</Link>
            <Link href="#" className="py-3 border-b border-gray-800 text-lg">Sobre o Escritório</Link>
            <Link href="#" className="py-3 border-b border-gray-800 text-lg">Áreas de Atuação</Link>
        </div>
      )}
    </nav>
  );
}
