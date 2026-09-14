import { Target, Video, CheckCircle2, Check } from 'lucide-react';

export default function About() {
  const qualifications = [
    'آموزش تخصصی چهار شنا اصلی (کرال سینه، کرال پشت، قورباغه، پروانه)',
    'دوره تخصصی هیدروتراپی (آب‌درمانی) برای کاهش دردهای مفصلی',
    'آماده‌سازی فشرده متقاضیان آزمون‌های نجات‌غریق',
    'تکنیک‌های پیشرفته اصلاح استایل و استقامت در آب',
  ];

  return (
    <section id="about" className="relative z-10 py-16 sm:py-24 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column (Text & Methods) */}
        <div className="space-y-6 text-right">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-widest uppercase">
            ABOUT THE COACH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            رویکرد مدرن در آموزش شنا با <span className="text-cyan-400">استاد اکبر قربانی</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light">
            شنا تنها یک ورزش نیست، بلکه هنر هماهنگی کامل ذهن، تنفس و عضلات در محیط آب است. من با
            بهره‌گیری از دانش روز بیومکانیک ورزش‌های آبی و روانشناسی غلبه بر استرس، شرایطی را فراهم
            می‌کنم که در کوتاه‌ترین زمان، روان‌ترین استایل شنا را به دست آورید.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-ocean-900/60 border border-cyan-500/20 flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-300">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">متد اختصاصی</h4>
                <p className="text-xs text-gray-400 mt-0.5">تمرین بر اساس فیزیک بدن شما</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ocean-900/60 border border-cyan-500/20 flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-amber-400/10 text-amber-300">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">آنالیز زیر آب</h4>
                <p className="text-xs text-gray-400 mt-0.5">فیلمبرداری و آنالیز فریم‌به‌فریم</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Qualifications Card) */}
        <div className="relative">
          <div className="ultra-glass rounded-3xl p-6 sm:p-8 border border-cyan-400/30 space-y-6 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
              <CheckCircle2 className="text-cyan-400 w-6 sm:w-7 h-6 sm:h-7" />
              <span>تخصص‌ها و صلاحیت‌ها</span>
            </h3>

            <ul className="space-y-3.5 text-gray-300 text-xs sm:text-sm">
              {qualifications.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-ocean-950/70 p-3.5 rounded-xl border border-white/5 hover:border-cyan-400/25 transition-colors"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="text-emerald-400 w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
