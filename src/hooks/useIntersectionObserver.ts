'use client'
import { useEffect } from 'react';

export function useIntersectionObserver(selector: string, callback?: (el: Element) => void) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (callback) callback(entry.target);
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, callback]);
}
