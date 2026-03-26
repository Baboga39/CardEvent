'use client';

import Image from 'next/image';

export default function RomanticGallery() {
  const images = [
    { src: '/romantic-dinner.jpg', alt: 'Bữa ăn tối lãng mạn', title: 'Bàn ăn được chuẩn bị đặc biệt' },
    { src: '/roses.jpg', alt: 'Hoa hồng đẹp', title: 'Hoa tươi từ anh dành cho em' },
    { src: '/candles.jpg', alt: 'Nến ánh sáng ấm', title: 'Ánh sáng dịu dàng' },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-40 md:h-48 rounded-lg overflow-hidden group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white font-serif text-sm p-4 w-full text-center">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
