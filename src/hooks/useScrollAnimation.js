import { useState, useEffect, useRef } from 'react';

/**
 * Enhanced Scroll Animation Hook with Smooth Transitions
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold
 * @param {string} options.rootMargin - Margin around root
 * @param {number} options.delay - Delay before setting visibility
 * @param {function} options.onEnter - Callback when element becomes visible
 * @returns [ref, isVisible]
 */
const useScrollAnimation = ({
  threshold = 0.2,
  rootMargin = '-10% 0px',
  delay = 0,
  onEnter = () => {},
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const observerRef = useRef(null);

  useEffect(() => {
    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Reset animation state when element leaves viewport
        if (!entry.isIntersecting) {
          setIsVisible(false);
          return;
        }

        // Trigger animation with delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              onEnter();
            }, delay);
          } else {
            setIsVisible(true);
            onEnter();
          }
      },
      {
        threshold: [0, threshold],
        rootMargin,
      }
    );

    // Start observing
    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, delay, onEnter]);

  return [ref, isVisible];
};

export default useScrollAnimation;
