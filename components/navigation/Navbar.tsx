
import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const menuItems = ['About', 'Performance', 'Studio', 'Contact'];
  const [hidden, setHidden] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) < 8) return; // 小さな揺れは無視

      if (currentY > 80 && delta > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const darkSections = Array.from(document.querySelectorAll('[data-dark-bg]'));
    if (darkSections.length === 0) {
      setIsDark(false);
      return;
    }

    const visibility = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
          visibility.set(entry.target, isVisible);
        });

        const anyDarkVisible = Array.from(visibility.values()).some(Boolean);
        setIsDark(anyDarkVisible);
      },
      { threshold: [0, 0.35, 0.6] }
    );

    darkSections.forEach((section) => {
      visibility.set(section, false);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-12 md:px-20 pt-12 pb-8 pointer-events-none transition-transform transition-colors duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'
        } ${isDark ? 'text-white' : 'text-black'}`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        <a href="#" className="pointer-events-auto font-serif text-4xl tracking-tighter hover:opacity-50 transition-all duration-500">
          inqapool
        </a>

        <ul className="flex gap-12 pointer-events-auto items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="group relative font-sans text-[12px] uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-all duration-300 flex flex-col items-center"
              >
                {item}
                <span className="absolute -bottom-2 w-0 h-[1px] bg-[#a78bfa] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
