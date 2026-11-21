import { useState, useEffect, useCallback } from 'react';

interface NetworkInformationLike extends EventTarget {
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  addEventListener: (type: 'change', listener: () => void) => void;
  removeEventListener: (type: 'change', listener: () => void) => void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformationLike;
  mozConnection?: NetworkInformationLike;
  webkitConnection?: NetworkInformationLike;
}

export interface NetworkState {
  isOffline: boolean;
  isSlowNetwork: boolean;
  isChecking: boolean;
  lastCheckFailed: boolean;
  checkConnection: () => Promise<void>;
}

function getConnectionObject(): NetworkInformationLike | undefined {
  if (typeof navigator === 'undefined') return undefined;
  const nav = navigator as NavigatorWithConnection;
  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection;
}

function evaluateSlowConnection(conn: NetworkInformationLike | undefined): boolean {
  if (!conn) return false;
  if (conn.saveData) return true;
  if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return true;
  if (typeof conn.downlink === 'number' && conn.downlink > 0 && conn.downlink < 0.4) {
    return true;
  }
  if (typeof conn.rtt === 'number' && conn.rtt > 1200) return true;
  return false;
}

function detectInitialSlowNavigation(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as unknown as { __PATNA_SLOW_BOOT__?: boolean };
  if (win.__PATNA_SLOW_BOOT__) return true;

  if (typeof performance !== 'undefined' && performance.getEntriesByType) {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const navEntry = navEntries[0];
    if (navEntry && navEntry.responseEnd > 0 && navEntry.responseEnd - navEntry.startTime > 3500) {
      return true;
    }
  }
  return false;
}

export function useNetworkState(): NetworkState {
  const [isOffline, setIsOffline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );
  const [isSlowNetwork, setIsSlowNetwork] = useState<boolean>(() =>
    evaluateSlowConnection(getConnectionObject()) || detectInitialSlowNavigation()
  );
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [lastCheckFailed, setLastCheckFailed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleOnline = () => {
      setIsOffline(false);
      setLastCheckFailed(false);
      setIsSlowNetwork(evaluateSlowConnection(getConnectionObject()));
    };

    const handleOffline = () => {
      setIsOffline(true);
      setLastCheckFailed(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const conn = getConnectionObject();
    const handleConnectionChange = () => {
      setIsSlowNetwork(evaluateSlowConnection(conn));
    };

    if (conn && typeof conn.addEventListener === 'function') {
      conn.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (conn && typeof conn.removeEventListener === 'function') {
        conn.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  const checkConnection = useCallback(async () => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setIsOffline(true);
      setLastCheckFailed(true);
      return;
    }

    setIsChecking(true);
    setLastCheckFailed(false);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);
    const startedAt = Date.now();

    try {
      const response = await fetch(`${window.location.origin}/favicon.svg?_=${startedAt}`, {
        method: 'HEAD',
        cache: 'no-store',
        signal: controller.signal,
      });

      const elapsed = Date.now() - startedAt;
      if (response.ok) {
        setIsOffline(false);
        setLastCheckFailed(false);
        setIsSlowNetwork(elapsed > 2500 || evaluateSlowConnection(getConnectionObject()));
      } else {
        setLastCheckFailed(true);
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setIsSlowNetwork(true);
        setLastCheckFailed(true);
      } else if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setIsOffline(true);
        setLastCheckFailed(true);
      } else {
        setLastCheckFailed(true);
      }
    } finally {
      window.clearTimeout(timeoutId);
      setIsChecking(false);
    }
  }, []);

  return {
    isOffline,
    isSlowNetwork,
    isChecking,
    lastCheckFailed,
    checkConnection,
  };
}
