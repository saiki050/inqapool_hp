
/**
 * アーティスト「inqapool」の全てのデータを管理するファイルです。
 * 情報を更新したい時は、このファイルを編集するだけでサイト全体に反映されます。
 */
const publicImage = (path: string) => `/images/${path}`;
const heroImage = (file: string) => publicImage(`hero/${file}`);
const performanceImage = (file: string) => publicImage(`performance/${file}`);
const bioImage = (file: string) => publicImage(`bio/${file}`);

export const ARTIST_DATA = {
  brand: "Inqapool",
  name: "Risako Taguchi",
  role: "Synthesizer Performer",
  tagline: "Electronic Sound Artist",
  location: "Tokyo, Japan",
  email: "contact@inqapool.com",
  heroImages: {
    primary: heroImage('prof_01.jpeg'),
    secondary: heroImage('prof_01.jpeg'),
    stacked: heroImage('prof_01.jpeg'),
  },
  bioImage: bioImage('bio.jpeg'),
  socialLinks: [
    { name: 'Instagram', href: 'https://www.instagram.com/inqapool?igsh=MWo4bTBzeWNuZnZuZw%3D%3D&utm_source=qr' },
    { name: 'Bandcamp', href: 'https://inqapool.bandcamp.com' },
    { name: 'Soundcloud', href: 'https://on.soundcloud.com/c9kAFS9wD1DlwalPzl' },
  ],

  // 自己紹介文（Aboutセクション用）
  bio: [
    "Inqapool / Risako Taguchi",
    "大阪出身、現在は東京を拠点に活動。モジュラーシンセサイザーを用いたライブパフォーマンス、およびDJセットを通じ、深く重層的なサウンドスケープを紡ぎ出すアーティストである。",
    "2016年よりDJとしてのキャリアを始動。実験的なエレクトロニクス、アンビエント、抽象的なリズムを横断する独自のスタイルを軸に、ContactやWombといった国内の主要ベニューのみならず、上海やベルリンのクラブ、ライブハウス、さらにブランド主催のパーティなど、多種多様な文脈でプレイを重ねてきた。",
    "その後、ベルリンでの滞在を契機に、モジュラーシンセサイザーを主軸としたライブパフォーマンスとオリジナル作品のリリースへと表現の幅を拡張。モジュラーシンセの自由な特性を最大限に活かした、生々しさと即興性に満ちたパフォーマンスには定評があり、東京の電子音楽シーンにおいて確かな信頼を獲得している。",
    "その活動は多岐にわたり、近年ではモジュラーシンセの祭典「Tokyo Festival of Modular 2024」をはじめ、先鋭的なキュレーションで知られる野外フェスティバル「rural 2025」、さらには重要文化財・笠森観音境内を舞台としたアートフェスティバル「Kasamori Passing 2025」など、象徴的なイベントへの出演を果たしている。",
    "また、音を空間的に捉えるアプローチを活かし、KORG社のヒーリングサウンドインテリア「ON・YU」への音源提供も行う。",
  ],

  // 作品リスト（Performanceセクション用）
  performances: [
    {
      title: 'rural',
      year: '2025',
      type: 'Live Installation',
      images: [
        performanceImage('rural_01.jpeg'),
        performanceImage('rural_02.jpeg'),
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
