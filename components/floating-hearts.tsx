'use client';

import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const createHeart = (x: number, y: number) => {
      const heart = document.createElement('div');
      heart.innerHTML = '♥';
      heart.className = 'floating-heart';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      heart.style.animation = `float-up ${2 + Math.random()}s ease-out forwards`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 2500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.97) {
        createHeart(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        id="hearts-container"
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      />
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
          }
        }
        
        .floating-heart {
          position: fixed;
          font-size: 24px;
          color: #ec4899;
          pointer-events: none;
          filter: drop-shadow(0 2px 4px rgba(236, 72, 153, 0.4));
        }
      `}</style>
    </>
  );
}
