'use client';

import { useEffect, useState } from 'react';

export default function FallingPetals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const container = document.getElementById('petals-container');
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'falling-petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animation = `fall ${5 + Math.random() * 5}s linear forwards`;
      petal.style.opacity = String(0.3 + Math.random() * 0.5);
      container.appendChild(petal);

      setTimeout(() => petal.remove(), 10000);
    };

    const interval = setInterval(createPetal, 300);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div
        id="petals-container"
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      />
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .falling-petal {
          position: fixed;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
          border-radius: 50% 0;
          pointer-events: none;
          top: 0;
        }
      `}</style>
    </>
  );
}
