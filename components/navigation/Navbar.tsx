
import React from 'react';

export const Navbar: React.FC = () => {
  const menuItems = ['About', 'Works', 'Studio', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 md:px-20 pt-12 pb-8 pointer-events-none">
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        <a href="#" className="pointer-events-auto font-serif text-2xl tracking-tighter hover:opacity-50 transition-all duration-500">
          inqapool
        </a>
        
        <ul className="flex gap-12 pointer-events-auto items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="group relative font-sans text-[9px] uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-all duration-300 flex flex-col items-center"
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
