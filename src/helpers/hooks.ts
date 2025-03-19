import { RefObject, useEffect, useState } from "react";

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

    const handleEscPressed = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscPressed);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscPressed);
    };
  }, [callback, ref]);
};

// to hide Header when Footer is shown
export const useHideFooter = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = 112; // should be updated to dynamical $footer-height
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - footerHeight) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isHeaderVisible;
};
