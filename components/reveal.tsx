"use client";

import { useReducedMotion, motion } from "motion/react";
import { createElement } from "react";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type RevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  children,
  delay = 0,
  y = 20,
  x,
  className,
  as,
  ...props
}: RevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as ?? "div";

  if (shouldReduceMotion) {
    return createElement(Component, { className, ...props }, children);
  }

  const MotionComponent = motion.create(Component);
  const initial = { opacity: 0, y, ...(x === undefined ? {} : { x }) };
  const animate = { opacity: 1, y: 0, ...(x === undefined ? {} : { x: 0 }) };

  return (
    <MotionComponent
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export function ScaleReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <motion.article
      className={className}
      whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(23,23,23,0.08)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
