"use client";
import React, { useEffect, useRef, useState } from "react";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useVelocity, 
  useAnimationFrame,
  useMotionValue,
  wrap
} from "motion/react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* Fade up on scroll */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Fade in from left */
export function FadeLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Fade in from right */
export function FadeRight({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Animated typing text */
export function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[index];
      if (isDeleting) {
        setDisplayed(current.substring(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayed(current.substring(0, displayed.length + 1));
        if (displayed.length === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts]);

  return (
    <span className="border-r-2 border-black pr-1 animate-pulse">
      {displayed}
    </span>
  );
}

/* Animated number counter */
export function CountUp({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const timer = setInterval(() => {
        start += Math.ceil(target / (duration / 16));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* --- NEW PREMIUM ANIMATIONS --- */

/**
 * Scroll Progress Bar (Gold)
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#E6BE8A] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

/**
 * Velocity-based Marquee
 */
interface MarqueeProps {
  children: string;
  baseVelocity: number;
}

export function VelocityMarquee({ children, baseVelocity = 5 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax flex whitespace-nowrap overflow-hidden flex-nowrap py-12 md:py-20 border-y border-zinc-100 bg-white/50 backdrop-blur-sm">
      <motion.div className="scroller flex whitespace-nowrap flex-nowrap text-8xl md:text-[14rem] font-black uppercase tracking-tighter text-black/5" style={{ x }}>
        <span className="mr-24">{children} </span>
        <span className="mr-24">{children} </span>
        <span className="mr-24">{children} </span>
        <span className="mr-24">{children} </span>
      </motion.div>
    </div>
  );
}

/**
 * Magnetic element wrapper
 */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text Reveal Mask
 */
export function TextReveal({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView(0.5);

  return (
    <div ref={ref} className="overflow-hidden relative">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Section Parallax Number
 */
export function ParallaxNumber({ value }: { value: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.span 
      style={{ y }} 
      className="absolute -top-20 -left-10 text-[20rem] font-black text-black/[0.03] select-none -z-10 pointer-events-none"
    >
      {value}
    </motion.span>
  );
}
