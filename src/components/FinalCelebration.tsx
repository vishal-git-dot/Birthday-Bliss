import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface FinalCelebrationProps {
  name: string;
}

export const FinalCelebration = ({ name }: FinalCelebrationProps) => {
  useEffect(() => {
    // Initial burst
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#f472b6", "#fb7185", "#fda4af", "#fcd34d", "#c4b5fd"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Big initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });

    frame();
  }, []);

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  const titleText = "Happy Birthday!";

  return (
    <motion.div
      className="section-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-80 h-80 rounded-full bg-rose/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Realistic layered cake */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative mb-6"
      >
        {/* Cake container */}
        <div className="flex flex-col items-center">
          {/* Candles */}
          <div className="flex gap-3 mb-1 z-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Flame */}
                <motion.div
                  className="w-2 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(to top, #ff6b00 0%, #ffcc00 60%, #fff4b8 100%)",
                    borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                  }}
                  animate={{
                    scaleY: [1, 1.1, 0.95, 1],
                    opacity: [0.9, 1, 0.85, 0.9],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
                {/* Candle stick */}
                <div 
                  className="w-1 h-6 rounded-sm"
                  style={{
                    background: `linear-gradient(to right, ${i % 2 === 0 ? '#f9a8d4, #f472b6' : '#a78bfa, #8b5cf6'})`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top layer - smallest */}
          <div className="relative">
            <div 
              className="w-20 h-8 rounded-t-lg"
              style={{
                background: "linear-gradient(to bottom, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)",
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.1)",
              }}
            />
            {/* Frosting drips */}
            <div className="absolute -bottom-1 left-2 w-2 h-3 bg-pink-200 rounded-b-full" />
            <div className="absolute -bottom-2 left-6 w-3 h-4 bg-pink-200 rounded-b-full" />
            <div className="absolute -bottom-1 right-3 w-2 h-3 bg-pink-200 rounded-b-full" />
            {/* Decorations */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="text-[8px]">🍓</span>
              <span className="text-[8px]">💕</span>
              <span className="text-[8px]">🍓</span>
            </div>
          </div>

          {/* Cream layer 1 */}
          <div 
            className="w-20 h-2 -mt-0.5"
            style={{
              background: "linear-gradient(to bottom, #fbcfe8 0%, #f9a8d4 100%)",
            }}
          />

          {/* Middle layer */}
          <div className="relative">
            <div 
              className="w-28 h-10"
              style={{
                background: "linear-gradient(to bottom, #fecaca 0%, #fca5a5 50%, #f87171 100%)",
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.1)",
              }}
            />
            {/* Frosting drips */}
            <div className="absolute -bottom-1 left-3 w-3 h-4 bg-pink-100 rounded-b-full" />
            <div className="absolute -bottom-2 left-10 w-2 h-3 bg-pink-100 rounded-b-full" />
            <div className="absolute -bottom-1 right-4 w-3 h-4 bg-pink-100 rounded-b-full" />
            <div className="absolute -bottom-2 right-10 w-2 h-3 bg-pink-100 rounded-b-full" />
            {/* Side decorations */}
            <div className="absolute top-3 left-2 text-[10px]">🌸</div>
            <div className="absolute top-3 right-2 text-[10px]">🌸</div>
          </div>

          {/* Cream layer 2 */}
          <div 
            className="w-28 h-2 -mt-0.5"
            style={{
              background: "linear-gradient(to bottom, #fce7f3 0%, #fbcfe8 100%)",
            }}
          />

          {/* Bottom layer - largest */}
          <div className="relative">
            <div 
              className="w-36 h-12 rounded-b-lg"
              style={{
                background: "linear-gradient(to bottom, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)",
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
            {/* Pattern decoration */}
            <div className="absolute top-2 left-0 right-0 flex justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
            </div>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
              <span className="text-xs">✨</span>
              <span className="text-xs">💖</span>
              <span className="text-xs">✨</span>
            </div>
          </div>

          {/* Cake plate */}
          <div 
            className="w-44 h-3 rounded-full -mt-0.5"
            style={{
              background: "linear-gradient(to bottom, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {titleText.split("").map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-6xl text-rose-dark inline-block"
            style={{ display: letter === " " ? "inline" : "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      <motion.h2
        className="font-display text-5xl sm:text-7xl text-center italic text-rose mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      >
        {name}
      </motion.h2>

      <motion.div
        className="text-center text-foreground text-lg sm:text-xl max-w-sm font-body leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className="mb-4">
          Wishing you a day as beautiful and special as you are! 🌸
        </p>
        <p className="text-muted-foreground">
          May all your dreams come true ✨
        </p>
      </motion.div>

      <motion.div
        className="flex gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {["🎀", "💕", "🌷", "💐", "🎁"].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-3xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        className="absolute bottom-8 text-muted-foreground text-sm font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Made with 💖 just for you
      </motion.p>
    </motion.div>
  );
};
