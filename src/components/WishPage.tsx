import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface WishPageProps {
  onComplete: () => void;
}

export const WishPage = ({ onComplete }: WishPageProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showWishText, setShowWishText] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isBlownOut) {
      setIsBlownOut(true);
      setTimeout(() => setShowWishText(true), 500);
      setTimeout(() => onComplete(), 3000);
    }
  }, [countdown, isBlownOut, onComplete]);

  return (
    <motion.div
      className="section-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="font-display text-2xl sm:text-3xl text-center text-foreground mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Close Your Eyes...
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-center text-lg font-body mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Make a wish! 💫
      </motion.p>

      {/* Candle */}
      <div className="relative flex flex-col items-center mb-8">
        {/* Flame and wick container - positioned above candle */}
        <div className="flex flex-col items-center">
          {/* Flame */}
          <AnimatePresence>
            {!isBlownOut && (
              <motion.div
                className="relative flex justify-center"
                exit={{ 
                  opacity: 0, 
                  scale: 0,
                  y: -20,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Outer ambient glow */}
                <motion.div
                  className="absolute -inset-6 rounded-full blur-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(255,180,50,0.4) 0%, rgba(255,120,20,0.2) 40%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Flame container with subtle movement */}
                <motion.div
                  className="relative"
                  animate={{
                    x: [0, 0.3, -0.3, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Main flame shape - proportionate to candle width (16) */}
                  <div className="w-5 h-10 relative">
                    {/* Outer flame - yellow/orange */}
                    <motion.div 
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, #ff6b00 0%, #ff9500 30%, #ffcc00 60%, #fff4b8 90%)",
                        borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                        filter: "blur(0.5px)",
                      }}
                      animate={{
                        scaleY: [1, 1.03, 0.98, 1.02, 1],
                        scaleX: [1, 0.98, 1.02, 0.99, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Middle flame - orange/red */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-7"
                      style={{
                        background: "linear-gradient(to top, #ff4500 0%, #ff7b00 40%, #ffaa00 80%)",
                        borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                      }}
                      animate={{
                        scaleY: [1, 1.04, 0.97, 1.02, 1],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    />
                    
                    {/* Inner flame - white/blue core */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3"
                      style={{
                        background: "linear-gradient(to top, #4dabff 0%, #ffffff 50%, #fffef0 100%)",
                        borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                        filter: "blur(0.3px)",
                      }}
                      animate={{
                        scaleY: [1, 1.05, 0.96, 1.03, 1],
                        opacity: [0.9, 1, 0.85, 0.95, 0.9],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Smoke when blown out */}
          <AnimatePresence>
            {isBlownOut && (
              <motion.div
                className="h-10 flex items-end justify-center"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 0.6, 0], y: -20 }}
                transition={{ duration: 1.5 }}
              >
                <div className="text-xl">💨</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wick - centered */}
          <div className="w-0.5 h-2 bg-gray-800 rounded-full" />
        </div>

        {/* Candle body */}
        <div className="relative flex flex-col items-center">
          {/* Main candle */}
          <div className="w-14 h-24 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-400 rounded-lg rounded-t-sm shadow-lg relative overflow-hidden">
            {/* Candle decorations */}
            <div className="absolute top-3 left-0 right-0 flex justify-center gap-1">
              {["💕", "🌸", "💕"].map((emoji, i) => (
                <span key={i} className="text-[10px]">{emoji}</span>
              ))}
            </div>
            <div className="absolute top-10 left-0 right-0 flex justify-center">
              <span className="text-[10px]">✨</span>
            </div>
            {/* Wax drips */}
            <div className="absolute top-0 left-2 w-1.5 h-3 bg-rose-100 rounded-b-full" />
            <div className="absolute top-0 right-2 w-1 h-2 bg-rose-100 rounded-b-full" />
          </div>
          
          {/* Candle holder - proportionate to candle */}
          <div className="w-16 h-2 bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 rounded-full -mt-0.5" />
          <div className="w-10 h-5 bg-gradient-to-b from-rose-300 to-rose-400 rounded-b-lg shadow-md" />
        </div>
      </div>

      {/* Countdown or Wish Text */}
      <AnimatePresence mode="wait">
        {!isBlownOut ? (
          <motion.div
            key="countdown"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={countdown}
              className="font-display text-6xl sm:text-7xl text-rose"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {countdown}
            </motion.div>
            <p className="text-muted-foreground font-body mt-2">
              seconds to wish...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="wish"
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {showWishText && (
              <>
                <motion.p
                  className="font-display text-2xl sm:text-3xl text-rose mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your wish is sent! 💫
                </motion.p>
                <motion.p
                  className="text-muted-foreground font-body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  May all your dreams come true ✨
                </motion.p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom decorative hearts */}
      <motion.div
        className="absolute bottom-8 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["🎀", "💖", "🌸", "💖", "🎀"].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-xl"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};
