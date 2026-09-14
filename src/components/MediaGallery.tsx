import { Mic, Waves, TrendingUp, Play } from 'lucide-react';

export default function MediaGallery() {
  const mediaItems = [
    {
      type: 'مصاحبه',
      icon: Mic,
      title: 'گفت‌وگو با هنرجویان',
      desc: 'تجربه و نظر هنرجویان درباره روند آموزش و غلبه بر استرس آب.',
      videoSrc: 'videos/interview.mp4',
      badgeColor: 'text-cyan-300 bg-cyan-400/10 border-cyan-400/20',
      duration: '۲:۴۵ دقیقه',
    },
    {
      type: 'تمرین',
      icon: Waves,
      title: 'تمرین هنرجویان',
      desc: 'بخشی از تمرین‌های عملی و تکنیکی در استخر و اجرای چهار شنا.',
      videoSrc: 'videos/training.mp4',
      badgeColor: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
      duration: '۳:۱۵ دقیقه',
    },
    {
      type: 'پیشرفت',
      icon: TrendingUp,
      title: 'پیشرفت هنرجویان',
      desc: 'نمونه‌هایی از مسیر پیشرفت، اصلاح بیومکانیک حرکات و استقامت.',
      videoSrc: 'videos/progress.mp4',
      badgeColor: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
      duration: '۱:۵۰ دقیقه',
    },
  ];

  return (
    <section id="media" className="relative z-10 py-16 sm:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-widest uppercase">
          MEDIA & RESULTS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
          ویدیوهای آکادمی
        </h2>
        <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
          بخشی از تمرین‌ها، آموزش‌ها، مصاحبه‌ها و پیشرفت هنرجویان را اینجا ببینید.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        {mediaItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <article
              key={index}
              className="video-card rounded-3xl group border border-cyan-400/20 bg-[#072849]/30"
            >
              {/* Video container */}
              <div className="relative aspect-video w-full bg-ocean-950 overflow-hidden flex items-center justify-center">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>

                {/* Fallback decorative overlay if video fails or is loading */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent flex items-end p-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1.5 text-[11px] text-cyan-200 bg-ocean-900/80 px-2.5 py-1 rounded-md border border-cyan-400/20 backdrop-blur-sm">
                    <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>

              {/* Video description content */}
              <div className="p-5 text-right">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{item.type}</span>
                </span>
                <h3 className="text-white font-bold text-lg mt-3 mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-6">{item.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
