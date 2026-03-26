'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

interface PersonalMessageProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PersonalMessage({ isVisible, onClose }: PersonalMessageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heart icon */}
        <div className="flex justify-center">
          <Heart className="w-12 h-12 text-primary fill-primary" />
        </div>

        {/* Main message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-serif text-center text-foreground">
            Chị bé
          </h2>

          <p className="text-lg text-center text-foreground/80 leading-relaxed font-light">
            Em muốn mời chị đi ăn tối ở một nơi hơi đặc biệt một xíu... 
            Không chỉ vì đồ ăn ngon đâu, mà vì em muốn có một buổi chỉ có hai đứa mình thôi á.
          </p>

          {/* Expandable personal message */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-primary hover:text-primary/80 font-serif text-lg font-semibold transition-colors"
          >
            {isExpanded ? 'Thu lại' : 'Đọc lời em'}
          </button>

          {isExpanded && (
            <div className="bg-secondary/30 rounded-lg p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <p className="text-foreground/80 italic leading-relaxed">
                "Mỗi lần nhìn chị, em đều thấy mình may mắn kiểu gì á.
                Chị không chỉ là người em thích, mà còn là người làm em vui lên mỗi ngày luôn.

                Cho em cơ hội được quan tâm chị nhiều hơn một chút nha…
                từ từ thôi, nhưng mà là thật lòng đó."
              </p>

              <div className="pt-4 border-t border-primary/20">
                <p className="text-primary font-serif font-semibold">
                  - Em của chị bé ❤️
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Decoration */}
        <div className="flex justify-center gap-2">
          <div className="w-1 h-1 rounded-full bg-primary/30" />
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary/30" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full py-3 text-primary font-semibold hover:bg-secondary/50 rounded-lg transition-colors"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}