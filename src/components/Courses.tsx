'use client';

import { Sparkles, Zap, Shield, ArrowLeft } from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  return (
    <section id="courses" className="relative z-10 py-16 sm:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-widest uppercase">
          COURSES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
          دوره‌های آموزشی آکادمی
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          مسیر یادگیری شنا از صفر مطلق تا سطح حرفه‌ای و مسابقه‌ای
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {/* Course Card 1 */}
        <div className="ultra-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <Sparkles className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              مقدماتی & غلبه بر ترس
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              ویژه افرادی که از آب می‌ترسند یا هیچ تجربه‌ای ندارند. یادگیری شناوری کامل، کنترل تنفس
              و تکنیک‌های پایه کرال سینه و پشت.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCourse('مقدماتی & غلبه بر ترس')}
            className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group-hover:gap-4 transition-all pt-2 text-right cursor-pointer"
          >
            <span>ثبت‌نام و رزرو</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Course Card 2 (Featured) */}
        <div className="ultra-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group border-cyan-400/60 shadow-2xl shadow-cyan-500/20">
          <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-black text-[10px] sm:text-xs px-4 py-1.5 rounded-br-2xl uppercase tracking-wider shadow">
            پیشنهاد ویژه
          </div>
          <div>
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-cyan-400 text-black flex items-center justify-center mb-6 sm:mb-8 shadow-lg shadow-cyan-400/30">
              <Zap className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              اصلاح تکنیک ۴ شنا
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              آموزش تخصصی شنای قورباغه، پروانه، کرال سینه و پشت به همراه اصلاح فریم‌به‌فریم حرکات دست
              و پا و تنفس.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCourse('اصلاح تکنیک ۴ شنا (دوره حرفه‌ای)')}
            className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-cyan-400 text-black font-black text-sm hover:bg-cyan-300 active:scale-95 transition-all w-full cursor-pointer shadow-lg shadow-cyan-400/20"
          >
            <span>ثبت‌نام دوره حرفه‌ای</span>
          </button>
        </div>

        {/* Course Card 3 */}
        <div className="ultra-glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
              <Shield className="w-7 sm:w-8 h-7 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              VIP خصوصی & هیدروتراپی
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              آموزش تک‌نفره فشرده، تمرینات بازتوانی مفصلی و عضلانی در آب و آماده‌سازی برای آزمون‌های
              نجات‌غریق.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCourse('VIP خصوصی & هیدروتراپی')}
            className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm group-hover:gap-4 transition-all pt-2 text-right cursor-pointer"
          >
            <span>درخواست کلاس VIP</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
