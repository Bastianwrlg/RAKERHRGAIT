import React, { useEffect, useState } from 'react';

interface LaserPointerProps {
  active: boolean;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ active }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer Glow */}
      <div className="w-8 h-8 rounded-full bg-red-500/30 blur-sm animate-ping absolute -inset-1" />
      {/* Core Laser Dot */}
      <div className="w-5 h-5 rounded-full bg-red-600 shadow-[0_0_15px_#ef4444,0_0_30px_#dc2626] border border-red-300 relative flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>
    </div>
  );
};
