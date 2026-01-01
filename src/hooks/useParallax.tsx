import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = 100, direction = "up" } = options;
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let transform: MotionValue<number>;
  
  switch (direction) {
    case "up":
      transform = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      break;
    case "down":
      transform = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      break;
    case "left":
      transform = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      break;
    case "right":
      transform = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      break;
    default:
      transform = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  }

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return {
    ref,
    y: direction === "up" || direction === "down" ? transform : undefined,
    x: direction === "left" || direction === "right" ? transform : undefined,
    opacity,
    scale,
    scrollYProgress,
  };
};

export const useParallaxLayer = (speed: number = 0.5) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * speed);
  
  return { y };
};
