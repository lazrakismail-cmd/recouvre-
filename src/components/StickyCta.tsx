"use client";

import { useEffect, useState } from "react";

// Barre fixe en bas de l'écran (mobile), visible seulement quand le bouton
// principal n'est plus à l'écran : un seul bouton visible à la fois.
export function StickyCta({ cibleId, children }: { cibleId: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cible = document.getElementById(cibleId);
    if (!cible) return;
    const obs = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting));
    obs.observe(cible);
    return () => obs.disconnect();
  }, [cibleId]);

  return (
    <div
      aria-hidden={!visible}
      className={`cta-fixe fixed inset-x-0 bottom-0 z-10 border-t border-filet bg-papier/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-200 sm:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      {children}
    </div>
  );
}
