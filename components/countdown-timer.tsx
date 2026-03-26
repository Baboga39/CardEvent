'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  eventDate: string;
}

export default function CountdownTimer({ eventDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTimeLeft = () => {
      const targetDate = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-primary">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );

  if (!isClient) {
    return (
      <div className="w-full bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-xl p-6 md:p-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-4">
          Còn lại
        </p>
        <div className="flex justify-center gap-3 md:gap-4">
          <TimeUnit value={0} label="Ngày" />
          <TimeUnit value={0} label="Giờ" />
          <TimeUnit value={0} label="Phút" />
          <TimeUnit value={0} label="Giây" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-xl p-6 md:p-8">
      <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-4">
        Còn lại
      </p>
      <div className="flex justify-center gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="Ngày" />
        <TimeUnit value={timeLeft.hours} label="Giờ" />
        <TimeUnit value={timeLeft.minutes} label="Phút" />
        <TimeUnit value={timeLeft.seconds} label="Giây" />
      </div>
    </div>
  );
}
