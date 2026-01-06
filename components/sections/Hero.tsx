
import React from 'react';
import { ARTIST_DATA } from '../../data/artistData';

/**
 * 2カラム構成のヒーローセクション。
 * 重なりを解消し、広大な余白を確保したレイアウトです。
 */
export const Hero: React.FC = () => {
  const HERO_STACK_PRIMARY = ARTIST_DATA.heroImages?.stacked;

  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-44 pb-32 px-10 md:px-20 lg:px-28 gap-20 lg:gap-40 items-start justify-between relative">

      {/* 左側：イメージスタック（幅を少し絞って余白を確保） */}
      <div className="w-full lg:w-[40%] flex flex-col relative z-10 -mt-6 lg:-mt-10">
        {/* メインイメージ */}
        <div className="w-full aspect-[10/14] overflow-hidden grayscale bg-neutral-300 shadow-2xl">
          {HERO_STACK_PRIMARY && (
            <img
              src={HERO_STACK_PRIMARY}
              alt="Structural Sound"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* 右側：タイポグラフィとプロフィール */}
      <div className="w-full lg:w-[50%] flex flex-col justify-between h-full lg:min-h-[calc(100vh-280px)] self-stretch z-20">

        {/* ブランドロゴ：重なりを防ぐためにclampの上限を調整 */}
        <div className="text-right flex flex-col items-end">
          <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.85] uppercase tracking-tighter select-none break-keep">
            {ARTIST_DATA.brand}
          </h1>
          <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.8em] opacity-30">
            {ARTIST_DATA.tagline}
          </p>
        </div>

        {/* 下部のプロフィール情報 */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-32 lg:mt-0 pt-16 border-t border-black/10">
          <div className="text-left">
            {/* <h2 className="text-4xl font-serif font-light tracking-tight">{ARTIST_DATA.name}</h2> */}
            <p className="text-xl italic opacity-40 font-serif mt-2 whitespace-pre-line">
              {ARTIST_DATA.role}
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <a
              href={`mailto:${ARTIST_DATA.email}`}
              className="font-sans text-[10px] font-medium uppercase tracking-[0.5em] border-b border-black/60 pb-3 hover:opacity-30 transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
