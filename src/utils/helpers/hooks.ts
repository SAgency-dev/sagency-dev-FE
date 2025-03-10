import type { RefObject } from "react";
import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  xs: 320,
  sm: 430,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const useBreakpoint = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState("sm");

  const getBreakpoint = (width: number) => {
    if (width >= BREAKPOINTS["2xl"]) return "2xl";
    if (width >= BREAKPOINTS.xl) return "xl";
    if (width >= BREAKPOINTS.lg) return "lg";
    if (width >= BREAKPOINTS.md) return "md";
    if (width >= BREAKPOINTS.sm) return "sm";
    return "xs";
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenWidth, breakpoint };
};

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
};

const useScrollShadows = (ref: RefObject<HTMLElement>) => {
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(true);

  useEffect(() => {
    const container = ref.current;

    const handleScroll = () => {
      if (!container) return;
      const { scrollLeft } = container;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setShowBefore(scrollLeft > 0);
      setShowAfter(scrollLeft + 1 < maxScrollLeft);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return { showBefore, showAfter };
};

export default useScrollShadows;
