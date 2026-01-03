
import React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

/**
 * 画面全体の枠組みを定義するコンポーネント。
 * 外周のパディングと紫色のボーダーを管理します。
 */
export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#e5e5e5] p-3 selection:bg-[#a78bfa]/30">
      <div className="min-h-[calc(100vh-24px)] border border-[#a78bfa] relative flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};
