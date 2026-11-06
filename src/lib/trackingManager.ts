/**
 * Tracking Manager - Manages all analytics events for LiquidAmber
 * Tracks:
 * - Navigation clicks
 * - Scroll depth (bottom of page)
 * - CTA clicks (Request a demo)
 */

import { url } from "inspector/promises";

type EventParams = Record<string, string | number | boolean>;

/**
 * Core tracking function using Google Analytics (gtag)
 */
export const trackEvent = (
  eventName: string,
  params: EventParams = {},
): void => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

/**
 * Track navigation clicks to subpages
 * Usage: Call this when users click on navigation links
 */
export const trackNavigation = (pageName: string, url: string): void => {
  console.log("tracking navigation click", { pageName, url });
  trackEvent("navigation_click", {
    page_name: pageName,
    url: url,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track when user scrolls to bottom of page
 * Usage: Attach to scroll event listener
 */
export const trackScrollToBottom = (pageName: string): void => {
  console.log("tracking scroll to bottom", { pageName });
  trackEvent("scroll_to_bottom", {
    page_name: pageName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track CTA clicks (Request a demo, etc.)
 * Usage: Call when users click on CTA buttons
 */
export const trackCTAClick = (ctaName: string, pageName: string): void => {
  console.log("tracking CTA click", { ctaName, pageName });
  trackEvent("cta_click", {
    cta_name: ctaName,
    page_name: pageName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Initialize scroll tracking for the current page
 * Detects when user scrolls to bottom and tracks it once per page load
 */
export const initializeScrollTracking = (pageName: string): (() => void) => {
  let hasTrackedScroll = false;

  const handleScroll = (): void => {
    if (hasTrackedScroll) return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Threshold: 90% of page height scrolled
    const scrollThreshold = documentHeight * 0.9;

    if (scrollTop + windowHeight >= scrollThreshold) {
      trackScrollToBottom(pageName);
      hasTrackedScroll = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

/**
 * Initialize all tracking for a page
 * Should be called once when page/component mounts
 */
export const initializePageTracking = (pageName: string): (() => void) => {
  const cleanupScroll = initializeScrollTracking(pageName);

  return () => {
    cleanupScroll();
  };
};

/**
 * Track page view
 * Usage: Call when page loads or route changes
 */
export const trackPageView = (pageName: string, pagePath: string): void => {
  trackEvent("page_view", {
    page_name: pageName,
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  });
};
