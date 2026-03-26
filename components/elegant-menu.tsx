'use client';

import React from 'react';
import { Wine } from 'lucide-react';

interface MenuItem {
  category: string;
  name: string;
  description?: string;
  icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    category: 'STARTER',
    name: 'Two glasses of premium Italian red wine',
    description: 'Bacon Crostini',
    icon: '🍷',
  },
  {
    category: 'MAIN COURSE 1',
    name: 'Oven-baked shrimp with cheese & lemon',
    description: '',
    icon: '🦐',
  },
  {
    category: 'MAIN COURSE 2',
    name: 'Pan-seared goose breast with pink sauce',
    description: '',
    icon: '🦆',
  },
  {
    category: 'PALATE CLEANSER',
    name: 'Fruit sorbet',
    description: '',
    icon: '🍨',
  },
  {
    category: 'MAIN COURSE 3',
    name: 'Australian sirloin steak',
    description: 'Mashed potatoes & black pepper sauce',
    icon: '🥩',
  },
  {
    category: 'DESSERT',
    name: 'Vodka Chocolate Affogato',
    description: '❤️',
    icon: '🍫',
  },
];

export default function ElegantMenu() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
          <Wine className="w-6 h-6 text-primary" strokeWidth={1.5} />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
        </div>
        <h3 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-2">
          A Special Menu for My Little Lady 💖
        </h3>
        <p className="text-sm tracking-widest text-primary uppercase font-light">
          Six Course Tasting
        </p>
      </div>

      {/* Menu Grid */}
      <div className="space-y-8">
        {menuItems.map((item, index) => (
          <div key={index} className="group">
            {/* Category Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className="text-xl">{item.icon}</div>
              <p className="text-xs tracking-widest font-semibold text-primary uppercase letter-spacing">
                {item.category}
              </p>
            </div>

            {/* Dish Name */}
            <div className="ml-8">
              <h4 className="text-lg md:text-xl font-serif text-foreground font-light leading-relaxed mb-1 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </h4>

              {/* Description */}
              {item.description && (
                <p className="text-sm text-muted-foreground italic pl-0">
                  {item.description}
                </p>
              )}
            </div>

            {/* Divider */}
            {index < menuItems.length - 1 && (
              <div className="flex items-center gap-2 my-6 ml-8">
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                <span className="text-primary/30 text-xs">•</span>
                <div className="flex-1 h-px bg-gradient-to-l from-primary/20 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 pt-8 border-t border-primary/10">
        <p className="text-center text-sm text-muted-foreground italic leading-relaxed">
          "Every dish is prepared with love and sincerity by our chef"
        </p>
      </div>
    </div>
  );
}