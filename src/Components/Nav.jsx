/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowTopbar(false); 
        } else {
          setShowTopbar(true); 
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 w-full scroll-smooth z-50 shadow bg-[#c6e9e7]">
      
      {showTopbar && (
        <div className="flex justify-center items-center bg-[#fff7f6] scroll-smooth text-sm text-[#1a1a1a] font-sans transition-all duration-300">
          <div className="flex items-center space-x-2 px-4 py-1">
            <Phone className="text-[#f28c3b]" size={16} />
            <span className="font-semibold">(323) 555-0192</span>
          </div>
          <div className="border-l border-gray-400 h-4 mx-2" />
          <div className="flex items-center space-x-2 px-4 py-1">
            <MapPin className="text-[#f28c3b]" size={16} />
            <span className="font-semibold">
              1287 Maplewood Drive, Los Angeles, CA 90026
            </span>
          </div>
        </div>
      )}

      
      <nav
        className={`transition-all scroll-smooth duration-300 ${
          scrolled ? 'bg-[#a0d6d5] shadow-lg' : 'bg-[#c9e9e8] shadow-md'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-extrabold text-xl text-[#1a1a1a]">CalmNest</div>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-2xl text-[#1a1a1a]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={`flex flex-col md:flex-row gap-6 md:gap-8 text-[#1a1a1a] font-medium text-base absolute md:static left-0 right-0 bg-[#c9e9e8] md:bg-transparent transition-transform duration-300 md:translate-y-0 z-40 md:z-auto ${
              menuOpen ? 'translate-y-[60px]' : 'translate-y-[-200%]'
            } md:flex`}
          >
            <div className="hidden md:flex space-x-8 font-semibold text-lg text-black">
                     <Link to={`/`} className="hover:text-[#1d4ed8] transition-colors">Home</Link>
                     <Link to={`/#services`} className="hover:text-[#1d4ed8] transition-colors">Services</Link>
                     <Link to={`/about`} className="hover:text-[#1d4ed8] transition-colors">About</Link>
                     <Link to={`/#Rates`} className="hover:text-[#1d4ed8] transition-colors">Rates & FAQ</Link>
                     <Link to="/contact" className="hover:text-[#1d4ed8] transition-colors">Contact</Link>
           
                     
                       
                    
                   </div>
          </ul>
        </div>
      </nav>

      {menuOpen && (
              <div className="md:hidden px-4 pb-5 pt-2 space-y-3 font-semibold text-lg text-black bg-[#c6e9e7]">
                <Link to={`/`} className="block hover:text-[#1d4ed8]" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to={`/#services`} className="block hover:text-[#1d4ed8]" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to={`/about`} className="block hover:text-[#1d4ed8]" onClick={() => setIsOpen(false)}>About</Link>
                <Link to={`/#Rates`} className="block hover:text-[#1d4ed8]" onClick={() => setIsOpen(false)}>Rates & FAQ</Link>
                <Link to="/contact" className="block hover:text-[#1d4ed8]" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            )}
    </header>
  );
}

export default Nav;
