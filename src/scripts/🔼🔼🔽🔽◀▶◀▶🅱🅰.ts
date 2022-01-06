/* eslint-disable prefer-object-spread */
/* eslint-disable wrap-iife */
import confetti from 'canvas-confetti';

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const kaioken = (colors: string[]) => {
  const duration = 162000;
  const animationEnd = Date.now() + duration;
  let skew = 1;

  const timeLeft = animationEnd - Date.now();
  const ticks = Math.max(50, 250 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  (function frame() {
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks,
      origin: {
        x: Math.random(),
        y: Math.random() * skew - 0.2,
      },
      colors,
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  })();
};

export const superSaiyan = (colors: string[], duration: number) => {
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const goEvenFurtherBeyond = (duration: number) => {
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 180;
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.5, 0.9), y: Math.random() - 0 },
      }),
    );

    return null;
  }, 250);
};
