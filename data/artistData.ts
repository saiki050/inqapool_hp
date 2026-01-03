
/**
 * アーティスト「inqapool」の全てのデータを管理するファイルです。
 * 情報を更新したい時は、このファイルを編集するだけでサイト全体に反映されます。
 */
export const ARTIST_DATA = {
  brand: "INQAPOOL",
  name: "Risako Taguchi",
  role: "Musician",
  tagline: "Ambient Synthesis / Sound Sculpture",
  location: "Tokyo, Japan",
  email: "contact@inqapool.com",
  
  // 自己紹介文（Aboutセクション用）
  bio: [
    "Risako Taguchiによるプロジェクトinqapool（インカプール）は、シンセシスを「建築資材」として捉え、音の物理的次元を探求するアンビエント・シンセサイザー・アーティストです。",
    "光の回折、幾何学的な空間構造、そして素材の質感からインスピレーションを受け、周波数を空間的な構造物へと彫刻するように構築します。彼女のサウンドは、静寂とノイズの境界線を漂うように設計されています。"
  ],
  
  // 作品リスト（Worksセクション用）
  works: [
    { 
      title: 'Structural Silence', 
      year: '2024', 
      type: 'LP',
      cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    },
    { 
      title: 'Monolithic Drift', 
      year: '2023', 
      type: 'EP',
      cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800',
    },
    { 
      title: 'Resonance Architecture', 
      year: '2023', 
      type: 'Single',
      cover: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800',
    }
  ],
  
  // 使用機材（Studioセクション用）
  studio: [
    { category: 'Synthesis', items: ['Eurorack Modular', 'Prophet-6', 'Moog Matriarch'] },
    { category: 'Processing', items: ['Strymon BigSky', 'Hologram Microcosm', 'Analog Heat'] },
    { category: 'Environment', items: ['Ableton Live 12', 'Max for Live', 'Bitwig Studio'] }
  ]
};
