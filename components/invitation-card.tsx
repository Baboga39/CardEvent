'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface InvitationCardProps {
  onOpenDetails: () => void;
}

export default function InvitationCard({ onOpenDetails }: InvitationCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    onOpenDetails();
    setTimeout(() => setIsAnimating(false), 600);
  };
  return (
    <div className="w-full max-w-md animate-in fade-in duration-700">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative p-8 md:p-12 text-center space-y-6">
          {/* Heart decoration */}
          <div className="flex justify-center">
            <div className="text-primary animate-pulse">
              <Heart size={32} fill="currentColor" />
            </div>
          </div>

          {/* Main text */}
          <div className="space-y-3">
            <p className="text-sm tracking-widest text-muted-foreground uppercase font-light">
              Mời em đi ăn tối
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground">
              Một đêm<br />
              <span className="text-primary font-normal">chỉ có mình ta</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 py-4">
            <div className="h-px w-8 bg-primary/30" />
            <Heart size={16} className="text-primary" />
            <div className="h-px w-8 bg-primary/30" />
          </div>

          {/* Subtitle */}
          <p className="text-foreground/70 italic leading-relaxed">
            Em muốn những gì tốt đẹp nhất, đều có chị bé trong đó.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={handleClick}
              className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isAnimating ? 'animate-pulse scale-95' : ''
              }`}
            >
              Xem chi tiết
            </Button>
          </div>

          <style>{`
            @keyframes pulse-glow {
              0%, 100% {
                box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
              }
              50% {
                box-shadow: 0 0 0 10px rgba(236, 72, 153, 0);
              }
            }
          `}</style>

          {/* Footer text */}
          <p className="text-xs text-muted-foreground pt-4">
            Yêu chị bé ❤️
          </p>
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12 blur-2xl" />
    </div>
  );
}
