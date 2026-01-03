
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

export const Contact: React.FC = () => (
  <section id="contact" className="py-48 px-12 border-t border-black/5 text-center">
    <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] italic mb-12">Reach out.</h2>
    <div className="relative inline-block group">
      <a 
        href={`mailto:${ARTIST_DATA.email}`} 
        className="font-serif text-4xl hover:text-[#a78bfa] transition-all duration-300 decoration-1 underline-offset-8"
      >
        {ARTIST_DATA.email}
      </a>
      <div className="absolute -bottom-2 left-0 w-0 h-px bg-[#a78bfa] transition-all duration-500 group-hover:w-full"></div>
    </div>
  </section>
);
