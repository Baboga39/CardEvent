"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/countdown-timer";
import RSVPForm from "@/components/rsvp-form";
import RomanticGallery from "@/components/romantic-gallery";
import RomanticQuotes from "@/components/romantic-quotes";
import ElegantMenu from "@/components/elegant-menu";
import type { RSVPData } from "@/components/rsvp-form";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailsModal({ isOpen, onClose }: DetailsModalProps) {
  const [showRSVP, setShowRSVP] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleRSVPSubmit = (data: RSVPData) => {
    console.log("RSVP Data:", data);
    // Here you can send data to your backend
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-300">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground/60 hover:text-foreground rounded-full hover:bg-secondary transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-2">
              Một Đêm Chỉ Có Mình Ta
            </h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Romantic Quotes */}
            <div>
              <RomanticQuotes />
            </div>

            {/* Countdown Timer */}
            <div>
              <CountdownTimer eventDate="2026-03-29T19:00:00" />
            </div>

            {/* Romantic Gallery */}
            <div>
              <h3 className="text-xl font-serif text-foreground mb-4">
                Chuẩn bị cho bạn
              </h3>
              <RomanticGallery />
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-primary flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Ngày
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Chủ Nhật, 29 tháng 3
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    Giờ
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    19:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 p-6 bg-secondary/50 rounded-xl">
              <div className="text-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  Địa điểm
                </p>
                <p className="text-lg font-semibold text-foreground mb-1">
                  Ruby Koi Bistro
                </p>
                <p className="text-foreground/70 text-sm">
                  115 Nguyễn Hữu Thọ, Bà Rịa, Hồ Chí Minh, Vietnam
                </p>
              </div>
            </div>

            {/* Guest count */}
            <div className="flex gap-4 p-6 bg-secondary/50 rounded-xl">
              <div className="text-primary flex-shrink-0">
                <Users size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  Số lượng khách
                </p>
                <p className="text-lg font-semibold text-foreground">2 người</p>
              </div>
            </div>

            {/* Message */}
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground/80 italic leading-relaxed text-lg">
                {`"Cuộc sống được sáng rỡ bởi những khoảnh khắc đặc biệt cùng những người mình yêu thương. Hãy cùng mình tạo nên một buổi tối không quên."`}
              </p>
            </div>

            {/* Menu preview */}
            <div>
              <ElegantMenu />
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />
<Button
  onClick={async () => {
    try {
      const res = await fetch(
        "https://trungnamhub-server.onrender.com/api/v1/users/test-send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // BE đang hardcode nên không cần gửi gì
        }
      );

      if (!res.ok) throw new Error();

      alert("💌 Đã gửi thiệp! Check email nha!");
    } catch (err) {
      console.error(err);
      alert("❌ Gửi thất bại!");
    }
  }}
  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-lg font-semibold"
>
  Confirm Attendance 💌
</Button>
         
          </div>
        </div>
      </div>
    </>
  );
}
