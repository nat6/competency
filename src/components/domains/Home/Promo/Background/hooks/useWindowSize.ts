import { useEffect, useState } from 'react';

type TSize = { width: number; height: number };

export const useWindowSize = (): TSize => {
  const [size, setSize] = useState<TSize>({ width: 0, height: 0 });

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
                                    setSize({ width: window.innerWidth, height: window.innerHeight })
      );
    };
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
};
