
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

export const Studio: React.FC = () => (
  <section id="studio" className="py-32 px-12 max-w-6xl mx-auto">
    <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">Laboratory / Equipment</h2>
    <div className="grid md:grid-cols-3 gap-16">
      {ARTIST_DATA.studio.map((cat, i) => (
        <div key={i}>
          <h4 className="font-serif text-3xl italic mb-6 border-b border-black/5 pb-2">{cat.category}</h4>
          <ul className="space-y-3 opacity-60 font-sans text-xs tracking-widest uppercase">
            {cat.items.map((item, j) => <li key={j} className="flex gap-3">
              <span className="text-[#a78bfa] font-bold">/</span>
              <span>{item}</span>
            </li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
