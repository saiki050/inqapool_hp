
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Instagram, 
  Twitter, 
  Mail,
  Menu,
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

/**
 * --------------------------------------------------------------------------------
 * DATA - Responsibility separation
 * --------------------------------------------------------------------------------
 */
const ARTIST_DATA = {
  brand: "inqapool",
  name: "Risako Taguchi",
  tagline: "Ambient Synthesis / Sound Sculpture",
  location: "Tokyo, Japan",
  bio: [
    "Risako Taguchiによるプロジェクトinqapool（インカプール）は、シンセシスを「建築資材」として捉え、音の物理的次元を探求するアンビエント・シンセサイザー・アーティスト。",
    "光の回折、幾何学的な空間構造、そして素材の質感からインスピレーションを受け、周波数を空間的な構造物へと彫刻する。彼女のサウンドは、静寂とノイズの境界線を漂うように構築されている。"
  ],
  works: [
    { 
      id: 1, 
      title: 'Structural Silence', 
      year: '2024', 
      type: 'LP',
      cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      link: '#'
    },
    { 
      id: 2, 
      title: 'Monolithic Drift', 
      year: '2023', 
      type: 'EP',
      cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop',
      link: '#'
    },
    { 
      id: 3, 
      title: 'Resonance Architecture', 
      year: '2023', 
      type: 'Single',
      cover: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop',
      link: '#'
    }
  ],
  studio: [
    { category: 'Synthesis', items: ['Eurorack Modular', 'Prophet-6', 'Moog Matriarch'] },
    { category: 'Processing', items: ['Strymon BigSky', 'Hologram Microcosm', 'Analog Heat'] },
    { category: 'Environment', items: ['Ableton Live 12', 'Max for Live', 'Bitwig Studio'] }
  ],
  social: [
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Mail, label: 'Email', url: 'mailto:contact@inqapool.com' }
  ]
};

/**
 * --------------------------------------------------------------------------------
 * COMPONENTS
 * --------------------------------------------------------------------------------
 */

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Works', 'Studio', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-[#e5e5e5]/80 backdrop-blur-md' : 'py-8'}`}>
        <div className="container mx-auto px-12 flex justify-between items-center">
          <a href="#" className="logo-text text-2xl font-light">inqapool</a>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3"
          >
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity hidden md:block">Menu</span>
            <div className="p-2 border border-black/5 rounded-full hover:bg-black/5 transition-colors">
              <Menu size={18} strokeWidth={1} />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-[#e5e5e5] z-[200] transition-all duration-700 flex flex-col justify-center items-center ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-12 right-12 p-4 border border-black/5 rounded-full hover:bg-black/5 transition-all"
        >
          <X size={24} strokeWidth={1} />
        </button>
        
        <div className="space-y-8 text-center">
          {navItems.map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-5xl md:text-7xl font-serif-display italic lowercase hover:text-violet-500 transition-colors reveal active"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12 flex gap-8 opacity-40">
          {ARTIST_DATA.social.map((s, i) => (
            <a key={i} href={s.url} className="hover:opacity-100 transition-opacity">
              <s.icon size={20} strokeWidth={1} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section className="min-h-screen pt-32 pb-20 px-8 md:px-12 flex flex-col">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
      
      {/* Visual Component */}
      <div className="lg:col-span-7 flex flex-col justify-center relative">
        <div className="image-reveal aspect-[4/3] w-full max-w-4xl shadow-2xl reveal active">
          <img 
            src="https://images.unsplash.com/photo-1518005020251-582c78975171?q=80&w=1200&auto=format&fit=crop" 
            alt="Sculptural Minimalist Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 md:right-12 image-reveal aspect-square w-1/3 border-[10px] border-[#e5e5e5] shadow-lg reveal active delay-200">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
            alt="Abstract Light and Space" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Typography Component */}
      <div className="lg:col-span-5 flex flex-col justify-end lg:pb-24">
        <div className="reveal active delay-300">
          <h1 className="logo-text text-[15vw] lg:text-[7vw] leading-none mb-4 -ml-2">
            inqapool
          </h1>
          <p className="text-sm font-mono-tech uppercase tracking-[0.4em] text-black/40 mb-12">
            {ARTIST_DATA.tagline}
          </p>
          <div className="flex items-center gap-6">
             <div className="w-12 h-[1px] bg-violet-400"></div>
             <p className="text-xs font-mono-tech tracking-widest opacity-60">{ARTIST_DATA.location}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-20 flex justify-between items-end reveal active delay-300">
      <div className="text-[10px] font-mono-tech tracking-[0.5em] uppercase opacity-20">
        Established 2022 / Frequency Sculpting
      </div>
      <div className="animate-bounce">
         <ArrowRight size={20} className="rotate-90 opacity-40" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-40 px-8 md:px-24">
    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-5 reveal">
        <h2 className="text-6xl md:text-8xl font-serif-display italic leading-[0.9] lowercase">
          Sound <br/>
          As <br/>
          Structure.
        </h2>
      </div>
      <div className="md:col-span-7 space-y-8 text-lg font-light leading-relaxed text-black/70 reveal delay-200">
        {ARTIST_DATA.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <div className="pt-8">
          <a href="#works" className="inline-flex items-center gap-4 group text-sm font-mono-tech uppercase tracking-widest">
            <span className="group-hover:mr-2 transition-all">Explore Works</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Works = () => (
  <section id="works" className="py-40 px-8 md:px-24 bg-black text-white">
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-24 reveal">
        <h2 className="text-7xl md:text-9xl font-serif-display italic lowercase opacity-30">Works</h2>
        <div className="text-[10px] font-mono-tech tracking-[0.4em] uppercase opacity-40 mb-4 hidden md:block">
          Select Discography
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {ARTIST_DATA.works.map((work, i) => (
          <div key={work.id} className="group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
            <div className="relative aspect-square overflow-hidden bg-neutral-900 mb-8 border border-white/5">
              <img 
                src={work.cover} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <a href={work.link} className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
              <h3 className="text-2xl font-serif-display italic">{work.title}</h3>
              <span className="text-[10px] font-mono-tech opacity-40">{work.year}</span>
            </div>
            <p className="mt-2 text-[10px] font-mono-tech uppercase tracking-widest opacity-30">{work.type}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Studio = () => (
  <section id="studio" className="py-40 px-8 md:px-24">
    <div className="max-w-6xl mx-auto">
      <div className="mb-24 reveal">
        <h2 className="text-[10px] font-mono-tech tracking-[0.5em] uppercase opacity-40 mb-4">Laboratory</h2>
        <div className="decorative-line"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-20">
        {ARTIST_DATA.studio.map((cat, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <h4 className="font-serif-display text-4xl italic mb-10 lowercase">{cat.category}</h4>
            <ul className="space-y-6">
              {cat.items.map((item, j) => (
                <li key={j} className="text-xs font-mono-tech uppercase tracking-[0.2em] text-black/40 flex items-center gap-4 group">
                   <div className="w-1 h-1 rounded-full bg-violet-400 group-hover:scale-[3] transition-transform"></div>
                   {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-40 px-8 md:px-24 border-t border-black/5">
    <div className="max-w-3xl mx-auto text-center reveal">
      <h2 className="text-6xl md:text-8xl font-serif-display italic mb-16 lowercase">Contact Signal</h2>
      <p className="text-sm font-mono-tech tracking-widest opacity-40 mb-20 uppercase">For collaborations and inquiries</p>
      
      <div className="space-y-12">
        <a href="mailto:hello@inqapool.com" className="block text-3xl md:text-5xl font-serif-display hover:text-violet-500 transition-colors">
          hello@inqapool.com
        </a>
        
        <div className="flex justify-center gap-12 pt-12">
          {ARTIST_DATA.social.map((s, i) => (
            <a key={i} href={s.url} className="p-4 border border-black/5 rounded-full hover:bg-black text-white group transition-all duration-500">
              <s.icon size={22} className="text-black group-hover:text-white transition-colors" strokeWidth={1} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-12 bg-white flex flex-col items-center">
    <div className="logo-text text-3xl mb-8">inqapool</div>
    <div className="text-[9px] font-mono-tech uppercase tracking-[0.6em] opacity-30">
      &copy; {new Date().getFullYear()} RISAKO TAGUCHI / SOUND SCULPTURE
    </div>
  </footer>
);

/**
 * --------------------------------------------------------------------------------
 * MAIN APP
 * --------------------------------------------------------------------------------
 */
const App = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-frame selection:bg-violet-100">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Works />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
