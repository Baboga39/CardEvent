'use client';

import { useState, useEffect } from 'react';
import InvitationCard from '@/components/invitation-card';
import DetailsModal from '@/components/details-modal';
import FallingPetals from '@/components/falling-petals';
import FloatingHearts from '@/components/floating-hearts';
import AmbientMusic from '@/components/ambient-music';
import PersonalMessage from '@/components/personal-message';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPersonalMessage, setShowPersonalMessage] = useState(false);

  useEffect(() => {
    // Show personal message on page load with a slight delay
    const timer = setTimeout(() => {
      setShowPersonalMessage(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center p-4 relative overflow-hidden">
      <FallingPetals />
      <FloatingHearts />
      <AmbientMusic />
      <PersonalMessage isVisible={showPersonalMessage} onClose={() => setShowPersonalMessage(false)} />
      <InvitationCard onOpenDetails={() => setIsModalOpen(true)} />
      <DetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
