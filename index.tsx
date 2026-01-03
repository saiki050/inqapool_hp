
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BaseLayout } from './components/layout/BaseLayout';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Performance } from './components/sections/Performance';
import { Studio } from './components/sections/Studio';
import { Contact } from './components/sections/Contact';
import { ARTIST_DATA } from './data/artistData';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

const BandcampIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" fill="currentColor">
    <path d="M4 6.5h12.4L20 17.5H7.6L4 6.5Z" />
  </svg>
);

const SoundcloudIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" fill="currentColor">
    <path d="M13.5 8.4a4 4 0 0 1 3.6-2.3c2.3 0 4.2 1.9 4.2 4.2v.4h.2c1 0 1.8.8 1.8 1.8 0 .9-.7 1.7-1.6 1.8H8.6a1.8 1.8 0 0 1-1.6-1L6 12.6a2.5 2.5 0 0 1 2.3-3.6c.3 0 .6.1.8.2a3.7 3.7 0 0 1 4.4-.8Z" />
    <path d="M4.6 10.6c-.5 0-.9.4-.9.9v2c0 .5.4.9.9.9s.9-.4.9-.9v-2c0-.5-.4-.9-.9-.9Zm-2 1c-.4 0-.8.3-.8.7v1.4c0 .4.3.7.8.7.4 0 .8-.3.8-.7v-1.4c0-.4-.3-.7-.8-.7Z" />
  </svg>
);

const App = () => {
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Instagram: InstagramIcon,
    Bandcamp: BandcampIcon,
    Soundcloud: SoundcloudIcon,
  };

  const socialLinks = (ARTIST_DATA.socialLinks ?? [])
    .map((link) => ({
      ...link,
      Icon: iconMap[link.name],
    }))
    .filter((link) => link.Icon);

  return (
    <BaseLayout>
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Performance />
        <Studio />
        <Contact />
      </main>

      <footer className="py-12 px-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 font-sans text-[10px] tracking-[0.5em] uppercase border-t border-black/5 mx-12">
        <span>&copy; {new Date().getFullYear()} {ARTIST_DATA.name}</span>
        <div className="flex gap-6">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="hover:text-[#a78bfa] transition-colors flex items-center gap-2"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={name}
            >
              <Icon />
              <span className="sr-only">{name}</span>
            </a>
          ))}
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
