import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const funnyQuestions = [
  { question: "Do you love your bestie?", noResponse: "Wrong answer! 😤" },
  { question: "Are you ready for a surprise?", noResponse: "Too bad, you're getting one! 🎁" },
  { question: "Promise to smile?", noResponse: "I'll make you! 😏" },
  { question: "Will you say YES already?!", noResponse: "The button is getting ANGRY! 😡" },
];

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showNoResponse, setShowNoResponse] = useState(false);
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  const handleNoClick = () => {
    // Prevent multiple clicks while response is showing
    if (showNoResponse) return;
    
    // Show funny response
    setShowNoResponse(true);
    
    // Grow the yes button
    setYesScale(prev => Math.min(prev + 0.3, 2.5));
    
    // Move the no button to random position or make it smaller/hide
    if (questionIndex < funnyQuestions.length - 1) {
      const randomX = (Math.random() - 0.5) * 150;
      const randomY = (Math.random() - 0.5) * 100;
      setNoPosition({ x: randomX, y: randomY });
      
      setTimeout(() => {
        setShowNoResponse(false);
        setQuestionIndex(prev => prev + 1);
      }, 1200);
    } else {
      // Last question - hide the no button completely
      setNoButtonVisible(false);
      setTimeout(() => {
        setShowNoResponse(false);
      }, 1200);
    }
  };

  const handleYesClick = () => {
    onStart();
  };

  return (
    <motion.div
      className="section-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-rose-light/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-lavender/40 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gold-light/30 blur-2xl" />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
        className="mb-6"
      >
        <span className="text-6xl">🎀</span>
      </motion.div>

      <motion.h1
        className="font-display text-3xl sm:text-4xl text-center text-foreground mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I Have Something
        <br />
        <span className="text-rose italic">Special</span> For You
      </motion.h1>

      {/* Funny Question */}
      <AnimatePresence mode="wait">
        <motion.p
          key={questionIndex}
          className="text-foreground text-center text-xl font-body font-semibold mb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {funnyQuestions[questionIndex].question}
        </motion.p>
      </AnimatePresence>

      {/* Funny Response Popup */}
      <AnimatePresence>
        {showNoResponse && (
          <motion.div
            className="absolute top-1/3 bg-rose text-white px-6 py-3 rounded-full font-body font-bold text-lg shadow-lg z-20"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: [0, -5, 5, 0] }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {funnyQuestions[questionIndex].noResponse}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Yes/No Buttons */}
      <div className="flex gap-6 items-center justify-center relative min-h-[80px]">
        <motion.button
          onClick={handleYesClick}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-bold text-lg shadow-glow"
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale + 0.1 }}
          whileTap={{ scale: yesScale - 0.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          YES! 💕
        </motion.button>

        <AnimatePresence>
          {noButtonVisible && (
            <motion.button
              onClick={handleNoClick}
              className="px-6 py-3 bg-muted text-muted-foreground rounded-full font-body font-medium text-sm border border-border"
              animate={{ 
                x: noPosition.x, 
                y: noPosition.y,
                scale: 1 - (questionIndex * 0.15)
              }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              whileHover={{ x: noPosition.x + (Math.random() - 0.5) * 50 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              no...
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Hint text */}
      <motion.p
        className="text-muted-foreground text-center text-sm mt-6 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
      >
        (psst... just click YES 😉)
      </motion.p>

      <motion.div
        className="absolute bottom-8 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-rose/50"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};