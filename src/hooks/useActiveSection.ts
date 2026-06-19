import { useState, useEffect } from 'react';

const SECTIONS = [
  'hero',
  'quem-somos',
  'nossa-historia',
  'nossos-servicos',
  'estrutura-frota',
  'setores-aplicacoes',
  'onde-atuamos',
  'vamos-trabalhar-juntos',
];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(sectionId, entry.intersectionRatio);
            } else {
              visibleSections.delete(sectionId);
            }

            // Find the section with the highest visibility
            let maxRatio = 0;
            let maxSection = 'hero';
            visibleSections.forEach((ratio, id) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxSection = id;
              }
            });
            setActiveSection(maxSection);
          });
        },
        { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}
