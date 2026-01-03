
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

export const Performance: React.FC = () => (
  <section id="performance" className="py-32 px-12 bg-black text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-8xl italic mb-20 opacity-20 select-none">Performance</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {ARTIST_DATA.performance.map((work, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden bg-neutral-900 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={work.cover}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
              <h3 className="font-serif text-xl italic group-hover:text-[#a78bfa] transition-colors">{work.title}</h3>
              <span className="font-sans text-[10px] opacity-40 uppercase tracking-widest">{work.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
