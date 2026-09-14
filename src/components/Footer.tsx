import { Waves } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-4 text-center text-xs text-gray-400 border-t border-white/5 bg-ocean-950/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-400/15 flex items-center justify-center text-cyan-300">
            <Waves className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-sm">آکادمی تخصصی شنا اکبر قربانی</span>
        </div>

        <p className="text-gray-400">
          طراحی شده توسط{' '}
          <strong className="text-cyan-300 font-bold">محمد امین و صالح برجلو</strong>
        </p>

        <div className="flex items-center gap-4 text-xs">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">
            بازگشت به بالا
          </a>
          <span>•</span>
          <a href="#courses" className="hover:text-cyan-400 transition-colors">
            دوره‌ها
          </a>
          <span>•</span>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            تماس
          </a>
        </div>
      </div>
    </footer>
  );
}
