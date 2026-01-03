
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

export const Performance: React.FC = () => (
  <section id="performance" className="py-32 px-12 bg-black text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-serif text-8xl italic mb-20 opacity-20 select-none">Performance</h2>

      <div className="flex flex-col gap-16 md:gap-20">
        {ARTIST_DATA.performances.map((work, i) => {
          const isEven = i % 2 === 0;
          const images = work.images ?? [];

          return (
            <div
              key={work.title}
              className="grid md:grid-cols-2 gap-10 md:gap-12 items-stretch"
            >
              <div className={isEven ? '' : 'md:order-2'}>
                <div className="space-y-6">
                  {images.map((src: string, idx: number) => (
                    <div
                      key={`${work.title}-${idx}`}
                      className="aspect-[3/2] overflow-hidden bg-neutral-900"
                    >
                      <img
                        src={src}
                        alt={`${work.title} image ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={isEven ? '' : 'md:order-1'}>
                <div className="h-full flex flex-col justify-between gap-6 border-b border-white/10 pb-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-4xl italic">{work.title}</h3>
                    <p className="font-sans uppercase text-[10px] tracking-[0.4em] opacity-60">
                      {work.type}
                    </p>
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40">
                    {work.year}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
