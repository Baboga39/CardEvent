'use client';

import { useEffect, useState } from 'react';

const quotes = [
  "Ở bên chị bé, mấy chuyện bình thường cũng tự nhiên trở nên đặc biệt.",
  "Em không cần gì nhiều, chỉ cần những lúc được ngồi cạnh chị bé như vậy thôi.",
  "Một bữa ăn với chị bé lúc nào cũng đáng giá hơn bất cứ nơi nào khác.",
  "Không biết từ lúc nào, chị bé lại trở thành người em muốn gặp mỗi ngày.",
  "Em chỉ muốn dành cho chị bé những điều tốt đẹp nhất thôi.",
];

export default function RomanticQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg p-8 text-center">
      <div className="min-h-24 flex flex-col items-center justify-center">
        <p className="text-lg md:text-xl text-foreground/80 italic font-light leading-relaxed transition-all duration-500">
          &quot;{quotes[currentQuote]}&quot;
        </p>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuote ? 'bg-primary w-6' : 'bg-primary/30'
            }`}
            aria-label={`Quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}