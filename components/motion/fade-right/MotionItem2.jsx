"use client";
import { motion } from "framer-motion";

export default function MotionItem2({ children, className }) {
  const item = {
    hidden: { x: -500, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 0.3 } },
  };
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}