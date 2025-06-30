import React, { useRef, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Play, Pause } from 'lucide-react'; // Optional: use any icons
import Nav from './Components/Nav';


import ContactPage from './Pages/Contact';
import HomePage1 from './Pages/Home1';
import Admin from './Pages/Admin';
import Card1 from './Pages/Card1';
import Card2 from './Pages/Card2';
import Card3 from './Pages/Card3';
import About1 from './Pages/About1';
import { Toaster } from 'react-hot-toast';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    const handleAutoPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error('Autoplay blocked', err);
        });
      }
    };

    window.addEventListener('click', handleAutoPlay, { once: true });

    return () => window.removeEventListener('click', handleAutoPlay);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Play failed', err);
      });
    }
  };

  return (
    <div className="scroll-smooth relative">
      <Toaster toastOptions={{ duration: 3000 }} />


      <audio ref={audioRef} loop>
        <source src="/r1.mp3" type="audio/mp3" />
        Your browser does not support audio.
      </audio>


      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleMusic}
          className="btn btn-circle btn-neutral shadow-lg hover:scale-110 transition"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage1 />} />
      
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/card1" element={<Card1 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
      </Routes>
    </div>
  );
}

export default App;
