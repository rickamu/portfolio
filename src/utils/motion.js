import { easeOut } from "framer-motion";
import { cubicBezier } from "framer-motion";


export const fadeIn = (direction, type, delay, duration, distance, initopacity, finopacity, hover) => {
  return {
    hidden: {
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        opacity: initopacity,
       transition: {
          type: type,
          delay: delay,
          duration: duration,
        },
        width: 0,
        // display: "none"
      },
      show: {
        x: 0,
        y: 0,
        opacity: finopacity,
         transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: easeOut(0.5),
          delayChildren: delay,
          staggerChildren: delay
        },
        width: "50%",
        display: "flex",
      },
      expand: {
        x: 0,
        y: 0,
        opacity: finopacity,
         transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: easeOut(0.5),
          delayChildren: delay,
          staggerChildren: delay
        },
        width: "100%",
        display: "flex",
      },
  };
}

  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
