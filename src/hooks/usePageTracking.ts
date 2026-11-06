import { useEffect } from 'react';
import { initializePageTracking, trackNavigation, trackCTAClick } from '@/lib/trackingManager';

/**
 * Hook to initialize tracking for a page
 * Automatically handles scroll-to-bottom tracking
 * 
 * Example:
 * ```
 * const { trackNav, trackCTA } = usePageTracking('Discover');
 * ```
 */
export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    const cleanup = initializePageTracking(pageName);
    return cleanup;
  }, [pageName]);

  return {
    trackNav: (navName: string, url: string) => trackNavigation(navName, url),
    trackCTA: (ctaName: string) => trackCTAClick(ctaName, pageName),
  };
};
