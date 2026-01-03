
import React from 'react';
import { ARTIST_DATA } from '../data/artistData';

/**
 * 自己紹介セクション
 */
export const About = () => (
  <section id="about" className="py-32 px-12 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <h2 className="font-serif text-6xl italic leading-none">Sound <br/> as <br/> Structure.</h2>
      <div className="space-y-6 text-lg font-light opacity-80 leading-relaxed">
        {ARTIST_DATA.bio.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  </section>
);

/**
 * パフォーマンスリストセクション
 */
export const Performance = () => (
  <section id="performance" className="py-32 px-12 bg-black text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-8xl italic mb-20 opacity-20">Performance</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {ARTIST_DATA.works.map((work, i) => (
          <div key={i} className="group">
            <div className="aspect-square overflow-hidden bg-neutral-900 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={work.cover} alt={work.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
              <h3 className="font-serif text-xl italic">{work.title}</h3>
              <span className="font-sans text-[10px] opacity-40">{work.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/**
 * 使用機材セクション
 */
export const Studio = () => (
  <section id="studio" className="py-32 px-12 max-w-6xl mx-auto">
    <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">Laboratory / Equipment</h2>
    <div className="grid md:grid-cols-3 gap-16">
      {ARTIST_DATA.studio.map((cat, i) => (
        <div key={i}>
          <h4 className="font-serif text-3xl italic mb-6">{cat.category}</h4>
          <ul className="space-y-3 opacity-60 font-sans text-xs tracking-widest uppercase">
            {cat.items.map((item, j) => <li key={j}>/ {item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

/**
 * 連絡先セクション
 */
export const Contact = () => (
  <section id="contact" className="py-32 px-12 border-t border-black/5 text-center">
    <h2 className="font-serif text-6xl italic mb-12">Contact</h2>
    <a href={`mailto:${ARTIST_DATA.email}`} className="font-serif text-4xl hover:text-[#a78bfa] transition-colors underline decoration-1 underline-offset-8">
      {ARTIST_DATA.email}
    </a>
  </section>
);
