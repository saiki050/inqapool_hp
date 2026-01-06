
/**
 * アーティスト「inqapool」の全てのデータを管理するファイルです。
 * 情報を更新したい時は、このファイルを編集するだけでサイト全体に反映されます。
 */
const publicImage = (path: string) => `/images/${path}`;
const heroImage = (file: string) => publicImage(`hero/${file}`);
const performanceImage = (file: string) => publicImage(`performance/${file}`);

export const ARTIST_DATA = {
  brand: "INQAPOOL",
  name: "Risako Taguchi",
  role: "Artist, Performer,\nand educator working with synthesizers.",
  tagline: "Electronic Sound Artist",
  location: "Tokyo, Japan",
  email: "contact@inqapool.com",
  heroImages: {
    primary: heroImage('prof_01.jpeg'),
    secondary: heroImage('prof_01.jpeg'),
    stacked: heroImage('prof_01.jpeg'),
  },
  socialLinks: [
    { name: 'Instagram', href: 'https://www.instagram.com/inqapool?igsh=MWo4bTBzeWNuZnZuZw%3D%3D&utm_source=qr' },
    { name: 'Bandcamp', href: 'https://inqapool.bandcamp.com' },
    { name: 'Soundcloud', href: 'https://on.soundcloud.com/c9kAFS9wD1DlwalPzl' },
  ],

  // 自己紹介文（Aboutセクション用）
  bio: [
    "InqapoolはRisako Taguchiのソロプロジェクト、Inqapoolは、大阪生まれ、東京拠点のアーティスト。モジュラーシンセサイザーによるライブパフォーマンスやDJセットを通して、深く重層的なサウンドスケープを紡ぎ出している。",
    "2016年よりDJとして活動を開始。実験的エレクトロニクス、アンビエント、抽象的なリズムを横断するスタイルを軸に、日本国内に加え、上海やベルリンなどのクラブやライブハウス、ブランド主催のパーティをはじめとする幅広い文脈での出演実績を持つ。",
    "ベルリンでの滞在を経て、モジュラーシンセサイザーを用いたライブパフォーマンスやオリジナル作品のリリースへと表現の幅を拡張。モジュラーシンセサイザーが持つ自由な特性を活かした、生々しさと即興性に満ちたライブパフォーマンスには定評があり、東京の電子音楽シーンからも信頼も厚い。近年では Tokyo Festival of Modular 2024、電子音楽に特化したキュレーションの野外フェスティバル rural 2025、重要文化財・笠森観音境内で開催されたアートティバル Kasamori Passing 2025 などに出演している。",
    "また、空間的な音へのアプローチを活かし、楽曲提供やサウンド制作も行う。近年には、KORG 社のヒーリングサウンドインテリア ON・YU に音源を提供した。",
  ],

  // 作品リスト（Performanceセクション用）
  performances: [
    {
      title: 'rural',
      year: '2025',
      type: 'Live Installation',
      images: [
        performanceImage('rural_01.jpeg'),
      ],
    },
    {
      title: 'KASAMORI PASSING',
      year: '2025',
      type: 'Kasamori temple',
      images: [
        performanceImage('kasamori_01.jpeg'),
        performanceImage('kasamori_02.jpeg'),
        performanceImage('kasamori_03.jpeg'),
      ],
    },
  ],

  // 使用機材（Studioセクション用）
  studio: [
    { category: 'Synthesis', items: ['Eurorack Modular', 'Prophet-6', 'Moog Matriarch'] },
    { category: 'Processing', items: ['Strymon BigSky', 'Hologram Microcosm', 'Analog Heat'] },
    { category: 'Environment', items: ['Ableton Live 12', 'Max for Live', 'Bitwig Studio'] }
  ]
};
