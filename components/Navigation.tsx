
import React from 'react';

/**
 * 画面上部に固定されるメニューバーです。
 * スムーズに各セクションへ移動するためのリンクを提供します。
 */
export const Navigation = () => {
  const menuItems = ['About', 'Performance', 'Studio', 'Contact'];

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-12 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center">
        {/* 左側のブランドロゴ（クリックでトップへ） */}
        <a href="#" className="pointer-events-auto font-serif text-xl tracking-tighter hover:opacity-50 transition-opacity">
          inqapool
        </a>
        
        {/* 右側のメニュー項目 */}
        <ul className="flex gap-8 pointer-events-auto">
          {menuItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
