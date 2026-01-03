
import React from 'react';

/**
 * サイト全体の共通レイアウトを定義するコンポーネントです。
 * @param children - このコンポーネントの中に表示したい中身を受け取ります。
 */
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // 外側の余白（margin: 12px）と、紫色の境界線（border）を作成
    <div className="min-h-screen bg-[#e5e5e5] p-3">
      <div className="min-h-[calc(100vh-24px)] border border-[#a78bfa] relative flex flex-col">
        {/* コンテンツを表示するメインエリア */}
        {children}
      </div>
    </div>
  );
};
