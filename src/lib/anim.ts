import { Variants } from "motion/react";
import { easeInOutQuint } from "./constants";

export const variantsSlide: Variants = {
  initial: {
    x: "calc(-100% - 99px)",
  },
  enter: {
    x: 0,
  },
  exit: {
    x: "calc(-100% - 99px)",
  },
};
export const links: Variants = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};

export const SLIDE_UP: Variants = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
  },
  close: {
    y: "100%",
    transition: {
      duration: 0.1,
    },
  },
};
export const SCALE_UP_DOWN: Variants = {
  initial: {
    scale: 0,
    translateX: "-50%",
    translateY: "-50%",
  },
  enter: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};
export const FADE_IN_OUT: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
export const backDropSlideVariants = {
  initial: {
    top: '140%'
  },
  enter: {
    top: '-20%'
  },
  exit: {
    top: '-140%'
  }
}