'use client';

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';

export type Density = 'standard' | 'moderate' | 'fancy';

interface DensityContextType {
  density: Density;
  setDensity: (density: Density) => void;
}

const DensityContext = createContext<DensityContextType>({
  density: 'standard',
  setDensity: () => {},
});

export function useDensity() {
  return useContext(DensityContext);
}

function getInitialDensity(): Density {
  if (typeof window === 'undefined') return 'standard';
  const stored = localStorage.getItem('density') as Density | null;
  if (stored === 'standard' || stored === 'moderate' || stored === 'fancy') return stored;
  return 'standard';
}

// Track whether we're mounted on the client
function subscribe(callback: () => void) {
  // No-op: we only need the snapshot
  void callback;
  return () => {};
}

export function DensityProvider({ children }: { children: ReactNode }) {
  const [density, setDensityState] = useState<Density>(getInitialDensity);
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    document.documentElement.setAttribute('data-density', density);
  }, [density]);

  const setDensity = (next: Density) => {
    setDensityState(next);
    localStorage.setItem('density', next);
    document.documentElement.setAttribute('data-density', next);
  };

  // Prevent flash of wrong density
  if (!mounted) {
    return (
      <DensityContext.Provider value={{ density: 'standard', setDensity }}>
        {children}
      </DensityContext.Provider>
    );
  }

  return (
    <DensityContext.Provider value={{ density, setDensity }}>
      {children}
    </DensityContext.Provider>
  );
}
