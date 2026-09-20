'use client';

import { useState } from 'react';
import { Waves, Menu, X, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 px-2.5 sm:px-6 lg:px-8 w-full max-w-full pointer-events-none">
      <nav className="max-w-7xl mx-auto ultra-glass rounded-2xl px-3 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center transition-all duration-300 pointer-events-auto w-full">
        {/* Logo & Coach Name */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-glow transition-transform group-hover:scale-105 shrink-0">
            <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>
          <div className="flex flex-col text-right">
            <span
              className="font-black text-lg sm:text-2xl tracking-normal text-white group-hover:text-cyan-300 transition-colors font-hasti leading-tight"
            >
              اکبر قربانی
            </span>
            <span className="text-[9px] sm:text-[10px] text-cyan-400 tracking-wider sm:tracking-widest uppercase font-semibold">
              PRO SWIM COACH
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold text-gray-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors py-1">
            خانه
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors py-1">
            درباره استاد
          </a>
          <a href="#courses" className="hover:text-cyan-400 transition-colors py-1">
            دوره‌ها
          </a>
          <a href="#media" className="hover:text-cyan-400 transition-colors py-1">
            ویدیوها
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">
            ارتباط مستمر
          </a>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-xl p-[2px] focus:outline-none cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-600 rounded-xl animate-pulse"></span>
            <span className="relative block px-3 sm:px-6 py-2 sm:py-2.5 rounded-[10px] bg-ocean-950 font-bold text-xs sm:text-sm text-cyan-300 group-hover:bg-transparent group-hover:text-black transition-all duration-300 whitespace-nowrap shadow-md">
              <span className="hidden xs:inline">رزرو سریع سانس</span>
              <span className="xs:hidden">رزرو سانس</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex w-9 h-9 sm:w-10 sm:h-10 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/25 text-cyan-300 hover:bg-cyan-400/20 transition-colors focus:outline-none shrink-0"
            aria-label="باز کردن منو"
            id="mobileMenuBtn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2.5 ultra-glass rounded-2xl p-4 border border-cyan-400/25 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl pointer-events-auto">
          <div className="flex flex-col text-right text-sm font-semibold text-gray-200 divide-y divide-white/5">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-xl hover:bg-white/5 hover:text-cyan-300 transition-colors flex items-center justify-between"
            >
              <span>خانه</span>
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-xl hover:bg-white/5 hover:text-cyan-300 transition-colors flex items-center justify-between"
            >
              <span>درباره استاد</span>
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-xl hover:bg-white/5 hover:text-cyan-300 transition-colors flex items-center justify-between"
            >
              <span>دوره‌ها</span>
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#media"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-xl hover:bg-white/5 hover:text-cyan-300 transition-colors flex items-center justify-between"
            >
              <span>ویدیوها</span>
              <ArrowLeft className="w-4 h-4 text-gray-500" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-xl hover:bg-white/5 text-cyan-300 transition-colors flex items-center justify-between font-bold"
            >
              <span>رزرو و ارتباط</span>
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
