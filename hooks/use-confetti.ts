export const useConfetti = () => {
  const createConfetti = (x: number, y: number) => {
    if (typeof window === 'undefined') return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
    }> = [];

    const colors = ['#ec4899', '#f472b6', '#fbcfe8', '#fce7f3', '#fda4af', '#ff69b4'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: x || canvas.width / 2,
        y: y || canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12 - 5,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let hasAlive = false;
      particles.forEach((p) => {
        p.life -= 0.02;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2; // gravity

        if (p.life > 0) {
          hasAlive = true;
          ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
          ctx.fillRect(p.x, p.y, 8, 8);
        }
      });

      if (hasAlive) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };

    animate();
  };

  return { createConfetti };
};
