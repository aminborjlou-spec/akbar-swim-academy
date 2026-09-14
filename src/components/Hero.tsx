import { ShieldCheck, ArrowLeft, PhoneCall, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative z-10 pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full ultra-glass text-cyan-300 text-xs sm:text-sm font-semibold mb-6 border border-cyan-400/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>مربی و آنالیزور بین‌المللی شنا</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-6 tracking-tight">
            تسلط کامل بر <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-500 bg-clip-text text-transparent neon-text-cyan inline-block mt-1 sm:mt-0">
              دنیای زیر آب
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light mb-8 sm:mb-10">
            آموزش علمی و استاندارد ۴ شنای اصلی، تکنیک‌های نجات‌غریق و غلبه کامل بر استرس آب توسط{' '}
            <strong className="text-cyan-300 font-extrabold">استاد اکبر قربانی</strong> با متدهای آنالیز بیومکانیکال بدن.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 items-center">
            <a
              href="#courses"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-black text-sm sm:text-base shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>مشاهده دوره‌های تخصصی</span>
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl ultra-glass text-white font-bold text-sm sm:text-base hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-3 border border-cyan-400/25"
            >
              <PhoneCall className="w-5 h-5 text-cyan-400" />
              <span>مشاوره اختصاصی</span>
            </a>
          </div>
        </div>

        {/* 3D Coach Highlight Card */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Ambient rotating frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-emerald-400 blur-2xl opacity-40 animate-pulse"></div>

            <div className="ultra-glass rounded-3xl p-6 sm:p-8 relative z-10 h-full flex flex-col justify-between border border-cyan-400/40 shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">
                  <Trophy className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <span className="px-3 py-1 bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold tracking-wider">
                  VIP COACHING
                </span>
              </div>

              <div className="my-5 sm:my-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5">اکبر قربانی</h3>
                <p className="text-cyan-400 font-medium text-xs sm:text-sm">
                  مدرس عالی فدراسیون و شناگر استقامت
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center">
                <div className="bg-ocean-900/60 p-3 rounded-xl border border-cyan-500/15">
                  <span className="block text-2xl font-black text-cyan-300">+۱۰</span>
                  <span className="text-[11px] text-gray-400 font-medium">سال تجربه</span>
                </div>
                <div className="bg-ocean-900/60 p-3 rounded-xl border border-cyan-500/15">
                  <span className="block text-2xl font-black text-amber-300">+۵۰۰</span>
                  <span className="text-[11px] text-gray-400 font-medium">شناگر آموزش‌دیده</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
