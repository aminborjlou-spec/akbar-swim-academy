import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#010a15] text-white p-4 text-center">
      <h1 className="text-6xl font-black text-cyan-400 mb-4">۴۰۴</h1>
      <h2 className="text-2xl font-bold mb-3">صفحه مورد نظر یافت نشد</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد یا آدرس آن تغییر کرده باشد.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
