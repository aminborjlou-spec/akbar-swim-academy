'use client';

import { Phone, MessageCircle, Instagram, Send } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      <div className="ultra-glass rounded-3xl p-6 sm:p-12 md:p-14 border border-cyan-400/40 relative overflow-hidden text-center shadow-2xl">
        {/* Glow corner accent */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          همین امروز شنا را شروع کنید
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
          جهت مشاوره رایگان، استعلام قیمت دوره‌ها و هماهنگی سانس‌های استخر با استاد اکبر قربانی در
          ارتباط باشید.
        </p>

        {/* Action Buttons: Phone Call & WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-10">
          <a
            href="tel:09921742735"
            className="w-full sm:w-auto ultra-glass px-6 sm:px-8 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-4 hover:border-cyan-400 transition-all text-white border border-cyan-500/30 group"
          >
            <Phone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="text-right">
              <span className="text-[11px] text-gray-400 block">تماس تلفنی مستقیم</span>
              <span
                dir="ltr"
                style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}
                className="font-black text-xl tracking-wider text-cyan-200 block font-mono"
              >
                0992 174 2735
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/989921742735"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-3.5 transition-all font-bold text-base sm:text-lg shadow-xl shadow-emerald-600/30"
          >
            <MessageCircle className="w-6 h-6" />
            <span>ارسال پیام مستقیم در واتساپ</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-6 border-t border-white/10 flex justify-center items-center gap-6 text-gray-400">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3.5 rounded-full bg-ocean-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-400 transition-all group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-3.5 rounded-full bg-ocean-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-400 transition-all group"
          >
            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
