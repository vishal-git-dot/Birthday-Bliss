import { motion } from "framer-motion";

interface SlideIndicatorProps {
  total: number;
  current: number;
}

export const SlideIndicator = ({ total, current }: SlideIndicatorProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === current
              ? "w-8 bg-rose"
              : i < current
              ? "w-2 bg-rose/60"
              : "w-2 bg-rose/30"
          }`}
          initial={false}
          animate={{
            scale: i === current ? 1 : 0.8,
          }}
        />
      ))}
    </div>
  );
};
