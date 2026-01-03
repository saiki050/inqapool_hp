
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BaseLayout } from './components/layout/BaseLayout';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Works } from './components/sections/Works';
import { Studio } from './components/sections/Studio';
import { Contact } from './components/sections/Contact';
import { ARTIST_DATA } from './data/artistData';

const App = () => {
  return (
    <BaseLayout>
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Works />
        <Studio />
        <Contact />
      </main>
      
      <footer className="py-12 px-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 font-sans text-[8px] tracking-[0.5em] uppercase border-t border-black/5 mx-12">
        <span>&copy; {new Date().getFullYear()} {ARTIST_DATA.name}</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#a78bfa] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#a78bfa] transition-colors">Bandcamp</a>
          <a href="#" className="hover:text-[#a78bfa] transition-colors">Soundcloud</a>
        </div>
      </footer>
    </BaseLayout>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
