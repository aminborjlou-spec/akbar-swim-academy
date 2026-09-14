/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import WaterBackground from './components/WaterBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import MediaGallery from './components/MediaGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('اصلاح تکنیک ۴ شنا (پیشنهاد ویژه)');

  const handleOpenBooking = (courseName?: string) => {
    if (courseName) {
      setSelectedCourse(courseName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen relative bg-[#010a15] text-[#f3f4f6] selection:bg-cyan-400 selection:text-black font-['Vazirmatn',sans-serif]">
      {/* Dynamic Water & Ambient Simulation Canvas */}
      <WaterBackground />

      {/* Main Navigation Bar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Highlight Stats */}
        <Stats />

        {/* About Coach Akbar Ghorbani */}
        <About />

        {/* Specialized Courses */}
        <Courses onSelectCourse={(course) => handleOpenBooking(course)} />

        {/* Media & Student Results */}
        <MediaGallery />

        {/* Contact & Booking Section */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}

