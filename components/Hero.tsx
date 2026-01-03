
import React from 'react';
import { ARTIST_DATA } from '../data/artistData';

const HERO_PRIMARY = new URL('../data/img/IMG_0705.png', import.meta.url).href;
const HERO_SECONDARY = new URL('../data/img/IMG_0830.png', import.meta.url).href;

/**
 * ヒーローセクション
 * 
 * ここでは「Tailwind CSS」という仕組みを使ってデザインしています。
 * className="xxx" の中に書いてある単語が、それぞれデザインの命令です。
 * 例: 
 *  - grayscale: 画像を白黒にする
 *  - aspect-[16/10]: 横長（16:10）の形に固定する
 *  - border-[#a78bfa]: 紫色の枠線をつける
 */
export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row p-8 md:p-12 gap-12 items-start justify-between">
      
      {/* 左半分：視覚的なインパクトを与える画像エリア */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        
        {/* 上段画像：シンプルに白黒で表示 */}
        <div className="w-full aspect-[16/10] overflow-hidden grayscale">
          <img 
            src={HERO_PRIMARY} 
            alt="Architecture View" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full aspect-[16/10] overflow-hidden">
          <img 
            src={HERO_SECONDARY} 
            alt="Architecture Detail" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* 右半分：文字情報（ロゴや名前）を表示するエリア */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between h-full lg:min-h-[calc(100vh-160px)] self-stretch">
        
        {/* 右上の巨大ロゴ：画面幅に合わせてサイズが変わる（clamp）命令を使用 */}
        <div className="text-right pt-12">
          <h1 className="font-serif text-[clamp(4rem,12vw,12rem)] leading-[0.8] uppercase tracking-tighter">
            {ARTIST_DATA.brand}
          </h1>
        </div>

        {/* 右下のプロフィール情報：名前と役割、そしてお問い合わせリンク */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-20 lg:mt-0">
          <div className="text-left">
            <h2 className="text-3xl font-serif font-light">{ARTIST_DATA.name}</h2>
            <p className="text-xl italic opacity-60 font-serif">{ARTIST_DATA.role}</p>
          </div>
          
          <div className="mt-8 md:mt-0">
            {/* WORK WITH ME: マウスを乗せると少し透明になる（hover:opacity-50） */}
            <a 
              href={`mailto:${ARTIST_DATA.email}`}
              className="font-sans text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-50 transition-opacity"
            >
              WORK WITH ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
