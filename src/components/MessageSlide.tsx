import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MessageSlideProps {
  emoji: string;
  title: string;
  message: ReactNode;
  delay?: number;
}

export const MessageSlide = ({ emoji, title, message, delay = 0 }: MessageSlideProps) => {
  return (
    <motion.div
      className="section-full flex flex-col items-center justify-center px-8 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, delay: delay }}
        className="text-6xl sm:text-7xl mb-6"
      >
        {emoji}
      </motion.div>

      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center text-foreground mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="text-center text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-sm font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.6 }}
      >
        {message}
      </motion.div>
    </motion.div>
  );
};
