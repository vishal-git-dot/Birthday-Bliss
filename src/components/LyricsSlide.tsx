import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const lyrics = [
  "You are in my heart",
  "You shall be in there forever",
  "My greatest wish",
  "Is that you are happy",
  "When you think of me",
  "I am when I think of you",
];

interface LyricsSlideProps {
  onComplete?: () => void;
}

export const LyricsSlide = ({ onComplete }: LyricsSlideProps) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lyrics.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (currentLine === lyrics.length - 1 && onComplete) {
      // Wait for the last line to display, then trigger completion
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div
      className="section-full flex flex-col items-center justify-center px-8 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="text-5xl mb-8"
      >
        💕
      </motion.div>

      <div className="flex flex-col items-center gap-3 max-w-sm">
        {lyrics.map((line, index) => {
          const isActive = index === currentLine;
          const isPast = index < currentLine;
          const isFuture = index > currentLine;

          return (
            <motion.p
              key={index}
              className="font-display text-lg sm:text-xl text-center transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isFuture ? 0 : 1,
                y: isFuture ? 20 : 0,
                filter: isActive ? "blur(0px)" : "blur(3px)",
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, delay: isPast ? 0 : 0.2 }}
              style={{
                color: isActive
                  ? "hsl(var(--rose))"
                  : "hsl(var(--muted-foreground))",
              }}
            >
              {line}
            </motion.p>
          );
        })}
      </div>

      <motion.div
        className="absolute bottom-32 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {lyrics.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor:
                index <= currentLine
                  ? "hsl(var(--rose))"
                  : "hsl(var(--muted-foreground) / 0.3)",
              scale: index === currentLine ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
