import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pending = false;

    const update = () => {
      el.style.left = `${pos.current.x}px`;
      el.style.top = `${pos.current.y}px`;
      pending = false;
    };

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      el.style.opacity = "1";
      if (!pending) {
        pending = true;
        raf.current = requestAnimationFrame(update);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={ref} className="cursor-glow hidden lg:block" style={{ opacity: 0 }} />;
}
