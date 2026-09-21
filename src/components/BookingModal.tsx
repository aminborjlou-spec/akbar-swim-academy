'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { X, Calendar, Phone, CheckCircle, Waves } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export default function BookingModal({ isOpen, onClose, selectedCourse }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(selectedCourse || 'اصلاح تکنیک ۴ شنا (پیشنهاد ویژه)');
  const [dayPreference, setDayPreference] = useState('روزهای فرد (عصر)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = encodeURIComponent(
      `درود بر استاد اکبر قربانی بزرگوار،\nدرخواست هماهنگی سانس شنا دارم:\n👤 نام: ${name}\n📱 شماره تماس: ${phone}\n🏊‍♂️ دوره انتخابی: ${course}\n⏰ زمان پیشنهادی: ${dayPreference}`
    );
    window.open(`https://wa.me/989357520046?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg ultra-glass rounded-3xl p-6 sm:p-8 border border-cyan-400/40 text-right shadow-2xl bg-[#03172d]/95">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">رزرو سریع سانس شنا</h3>
            <p className="text-xs text-cyan-400 font-medium">آکادمی تخصصی استاد اکبر قربانی</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">پیام شما به واتساپ هدایت شد!</h4>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
              اطلاعات شما با موفقیت برای استاد اکبر قربانی فرستاده شد. جهت پاسخگویی سریع، چت واتساپ
              را ادامه دهید یا در صورت نیاز با شماره ۰۹۳۵۷۵۲۰۰۴۶ تماس بگیرید.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors"
            >
              متوجه شدم
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                required
                placeholder="مثال: رضا محمدی"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-ocean-950/80 border border-cyan-400/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">شماره همراه</label>
              <input
                type="tel"
                required
                dir="ltr"
                placeholder="09120000000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-ocean-950/80 border border-cyan-400/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">دوره انتخابی</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-ocean-950/80 border border-cyan-400/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="مقدماتی & غلبه بر ترس">مقدماتی & غلبه بر ترس</option>
                <option value="اصلاح تکنیک ۴ شنا (پیشنهاد ویژه)">
                  اصلاح تکنیک ۴ شنا (پیشنهاد ویژه)
                </option>
                <option value="VIP خصوصی & هیدروتراپی">VIP خصوصی & هیدروتراپی (آب‌درمانی)</option>
                <option value="آمادگی نجات‌غریق">آماده‌سازی نجات‌غریق</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                سانس یا روز ترجیحی
              </label>
              <select
                value={dayPreference}
                onChange={(e) => setDayPreference(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-ocean-950/80 border border-cyan-400/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="روزهای فرد (عصر)">روزهای فرد (عصر)</option>
                <option value="روزهای زوج (عصر)">روزهای زوج (عصر)</option>
                <option value="سانس صبح">سانس صبح</option>
                <option value="جمعه‌ها و آخر هفته">جمعه‌ها و آخر هفته</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-black text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                ارسال و هماهنگی با استاد در واتساپ
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
