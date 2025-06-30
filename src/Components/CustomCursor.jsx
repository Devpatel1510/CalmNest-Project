import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '40px',
    height: '40px',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 9999,
  };

  return (
    <img
      src="/arrowhead-rounded-outline.svg"
      alt="custom cursor"
      style={cursorStyle}
    />
  );
};

export default CustomCursor;
