import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Always show near the top
      if (currentY < 80) {
        setVisible(true);
        lastY.current = currentY;
        return;
      }
      setVisible(currentY < lastY.current);
      lastY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
}
