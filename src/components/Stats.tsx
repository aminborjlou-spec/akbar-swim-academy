import { Award, Users, HeartPulse, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Award,
      iconColor: 'text-amber-400',
      value: '۲۰+ سال',
      label: 'سال تجربه و سابقه مربیگری',
      neonClass: 'neon-text-gold',
    },
    {
      icon: Users,
      iconColor: 'text-cyan-400',
      value: '+۲۰۰۰',
      label: 'شناگر آموزش‌دیده و هنرجوی موفق',
      neonClass: 'neon-text-cyan',
    },
    {
      icon: HeartPulse,
      iconColor: 'text-emerald-400',
      value: '۱۰۰٪',
      label: 'تضمین رفع ترس از آب',
      neonClass: 'text-emerald-300',
    },
    {
      icon: Zap,
      iconColor: 'text-blue-400',
      value: '۴ شنا',
      label: 'آموزش تخصصی تکنیک',
      neonClass: 'text-blue-300',
    },
  ];

  return (
    <section className="relative z-10 py-10 sm:py-14 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="ultra-glass-card p-5 sm:p-6 rounded-2xl text-center border border-cyan-400/20"
            >
              <IconComponent className={`w-7 sm:w-8 h-7 sm:h-8 ${item.iconColor} mx-auto mb-3`} />
              <div
                className={`text-2xl sm:text-4xl font-black text-white mb-1 ${item.neonClass}`}
              >
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
