import { RefObject, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        event.preventDefault();
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
export const useHideHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = 112; // should be updated to dynamical $footer-height
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // check, if documentHeight = viewport height
      if (document.body.clientHeight === documentHeight) {
        setIsHeaderVisible(true);
        return;
      }

      if (scrollTop + windowHeight >= documentHeight - footerHeight) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return isHeaderVisible;
};

export const useDisabledPageScroll = () => {
  useEffect(() => {
    const disableScroll = (e: Event) => e.preventDefault();
    document.body.addEventListener("wheel", disableScroll, { passive: false });
    const disableArrows = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", disableArrows);

    return () => {
      document.body.removeEventListener("wheel", disableScroll);
      window.removeEventListener("keydown", disableArrows);
    };
  }, []);
};
