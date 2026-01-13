
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

export const About: React.FC = () => (
  <section id="about" className="py-32 px-12 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <img
        src={ARTIST_DATA.bioImage}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div className="space-y-6 text-lg font-light opacity-80 leading-relaxed font-serif">
        {ARTIST_DATA.bio.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  </section>
);
