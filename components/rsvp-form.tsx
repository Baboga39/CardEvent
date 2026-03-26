'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useConfetti } from '@/hooks/use-confetti';

interface RSVPFormProps {
  onSubmit?: (data: RSVPData) => void;
}

export interface RSVPData {
  name: string;
  email: string;
  phone: string;
  guestCount: number;
  menuPreference: string;
  message: string;
  willAttend: boolean;
}

export default function RSVPForm({ onSubmit }: RSVPFormProps) {
  const { createConfetti } = useConfetti();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    email: '',
    phone: '',
    guestCount: 1,
    menuPreference: 'crab',
    message: '',
    willAttend: true,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Trigger confetti
    createConfetti(window.innerWidth / 2, window.innerHeight / 2);

    onSubmit?.(formData);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guestCount: 1,
        menuPreference: 'crab',
        message: '',
        willAttend: true,
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="text-5xl">💕</div>
        <h3 className="text-2xl font-serif text-primary">
          Cảm ơn bạn!
        </h3>
        <p className="text-foreground/70">
          Chúng tôi đã nhận được xác nhận của bạn. Hẹn gặp bạn tại tiệc!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Tên của bạn
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          placeholder="Nhập tên"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          placeholder="example@mail.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Số điện thoại
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          placeholder="0123456789"
        />
      </div>

      {/* Guest Count */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Số lượng khách
        </label>
        <select
          name="guestCount"
          value={formData.guestCount}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value={1}>1 người</option>
          <option value={2}>2 người</option>
          <option value={3}>3 người</option>
          <option value={4}>4 người</option>
          <option value={5}>5+ người</option>
        </select>
      </div>

      {/* Menu Preference */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Menu ưa thích
        </label>
        <select
          name="menuPreference"
          value={formData.menuPreference}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="shrimp">Tôm sú nướng mía (Khai vị)</option>
          <option value="crab">Cua hoàng đế nước dùng (Chính)</option>
          <option value="venison">Thịt nai nướng ớt (Thứ ba)</option>
          <option value="chocolate">Bánh mousse chocolate (Tráng miệng)</option>
        </select>
      </div>

      {/* Message - Love words */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Lời yêu thương cho anh/em (tùy chọn)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2.5 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none placeholder:text-primary/40"
          placeholder="Viết lời lãng mạn, lời yêu thương dành cho người mình yêu...&#10;&#10;Ví dụ: Anh/em yêu, em/anh là tình yêu của anh/em..."
        />
      </div>

      {/* Will Attend */}
      <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
        <input
          type="checkbox"
          name="willAttend"
          id="willAttend"
          checked={formData.willAttend}
          onChange={handleChange}
          className="w-5 h-5 rounded cursor-pointer accent-primary"
        />
        <label
          htmlFor="willAttend"
          className="flex-1 cursor-pointer text-foreground"
        >
          Tôi sẽ tham dự tiệc này
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all"
      >
        {isSubmitting ? 'Đang gửi...' : 'Xác nhận tham dự'}
      </Button>
    </form>
  );
}
