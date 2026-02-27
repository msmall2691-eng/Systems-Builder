import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll(".animate-on-scroll:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    const timer = setTimeout(observe, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
