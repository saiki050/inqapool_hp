
/**
 * アーティスト「inqapool」の全てのデータを管理するファイルです。
 * 情報を更新したい時は、このファイルを編集するだけでサイト全体に反映されます。
 */
const COVER_STRUCTURAL_SILENCE = new URL('./img/949E2735-78EC-488E-8A14-F7499E2C64B9.jpeg', import.meta.url).href;
const COVER_MONOLITHIC_DRIFT = new URL('./img/IMG_4952.jpeg', import.meta.url).href;
const COVER_RESONANCE_ARCHITECTURE = new URL('./img/IMG_3714.jpeg', import.meta.url).href;

export const ARTIST_DATA = {
  brand: "INQAPOOL",
  name: "Risako Taguchi",
  role: "Ambient Artist",
  tagline: "Live / Sound Design",
  location: "Tokyo, Japan",
  email: "contact@inqapool.com",

  // 自己紹介文（Aboutセクション用）
  bio: [
    "Risako Taguchiによるプロジェクトinqapool（インカプール）は、シンセシスを「建築資材」として捉え、音の物理的次元を探求するアンビエント・シンセサイザー・アーティストです。",
    "光の回折、幾何学的な空間構造、そして素材の質感からインスピレーションを受け、周波数を空間的な構造物へと彫刻するように構築します。彼女のサウンドは、静寂とノイズの境界線を漂うように設計されています。"
  ],

  // 作品リスト（Performanceセクション用）
  performance: [
    {
      title: 'Structural Silence',
      year: '2024',
      type: 'LP',
      cover: COVER_STRUCTURAL_SILENCE,
    },
    {
      title: 'Monolithic Drift',
      year: '2023',
      type: 'EP',
      cover: COVER_MONOLITHIC_DRIFT,
    },
    {
      title: 'Resonance Architecture',
      year: '2023',
      type: 'Single',
      cover: COVER_RESONANCE_ARCHITECTURE,
    }
  ],

  // 使用機材（Studioセクション用）
  studio: [
    { category: 'Synthesis', items: ['Eurorack Modular', 'Prophet-6', 'Moog Matriarch'] },
    { category: 'Processing', items: ['Strymon BigSky', 'Hologram Microcosm', 'Analog Heat'] },
    { category: 'Environment', items: ['Ableton Live 12', 'Max for Live', 'Bitwig Studio'] }
  ]
};
