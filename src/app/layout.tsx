import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'اکبر قربانی | آکادمی تخصصی شنا',
  description: 'وبسایت رسمی آکادمی تخصصی آموزش شنا و نجات‌غریق استاد اکبر قربانی',
  openGraph: {
    title: 'اکبر قربانی | آکادمی تخصصی شنا',
    description: 'وبسایت رسمی آکادمی تخصصی آموزش شنا و نجات‌غریق استاد اکبر قربانی',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth dark">
      <body className="bg-[#010a15] text-[#f3f4f6] selection:bg-cyan-500 selection:text-black overflow-x-hidden font-['Vazirmatn',sans-serif]">
        {children}
      </body>
    </html>
  );
}
