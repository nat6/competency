import { useEffect, useState } from 'react';

type TPoint = { x: number; y: number };

export const usePointerPosition = (): TPoint => {
  const [point, setPoint] = useState<TPoint>({ x: -9999, y: -9999 });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPoint({ x: clientX, y: clientY }));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return point;
};
