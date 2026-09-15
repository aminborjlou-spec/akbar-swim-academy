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
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="bg-[#010a15] text-[#f3f4f6] selection:bg-cyan-500 selection:text-black overflow-x-hidden font-['Vazirmatn',sans-serif]">
        {children}
      </body>
    </html>
  );
}
