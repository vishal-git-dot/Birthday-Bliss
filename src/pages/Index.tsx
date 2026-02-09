import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { MessageSlide } from "@/components/MessageSlide";
import { LyricsSlide } from "@/components/LyricsSlide";
import { WishPage } from "@/components/WishPage";
import { FinalCelebration } from "@/components/FinalCelebration";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Sparkles } from "@/components/Sparkles";
import { SlideIndicator } from "@/components/SlideIndicator";
// 🎀 Customize your birthday message here!
const BIRTHDAY_GIRL_NAME = " YOUR NAME ";

const messages = [
  {
    emoji: "🌸",
    title: "Hey Beautiful!",
    message: (
      <>
        Today is a <span className="text-rose font-semibold">very special day</span>, 
        and I wanted to make it even more memorable for you...
      </>
    ),
  },
  {
    emoji: "💭",
    title: "I've Been Thinking...",
    message: (
      <>
        About all the <span className="text-rose font-semibold">amazing moments</span> we've shared 
        and how lucky I am to have you in my life.
      </>
    ),
  },
  {
    emoji: "💝",
    title: "You Are So Special",
    message: (
      <>
        Your smile lights up every room, your kindness touches every heart, 
        and your friendship means the <span className="text-rose font-semibold">world</span> to me.
      </>
    ),
  },
  {
    emoji: "🌟",
    title: "On Your Special Day",
    message: (
      <>
        I want you to know that you deserve all the 
        <span className="text-rose font-semibold"> love</span>, 
        <span className="text-lavender-dark font-semibold"> happiness</span>, and 
        <span className="text-gold font-semibold"> magic</span> in the world!
      </>
    ),
  },
];

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wishComplete, setWishComplete] = useState(false);
  const totalSlides = messages.length + 3; // +1 for lyrics, +1 for wish page, +1 for final celebration

  const handleStart = () => {
    setStarted(true);
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-dreamy overflow-hidden touch-action-pan-y relative">
      <FloatingHearts />
      <Sparkles />
      

      <AnimatePresence mode="wait">
        {!started ? (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        ) : (
          <motion.div
            key="content"
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Navigation overlay */}
            <div className="fixed inset-0 z-40 flex">
              <button
                onClick={handlePrev}
                className="w-1/3 h-full focus:outline-none"
                aria-label="Previous"
                disabled={currentSlide === 0}
              />
              <div className="w-1/3" />
              <button
                onClick={handleNext}
                className="w-1/3 h-full focus:outline-none"
                aria-label="Next"
                disabled={currentSlide === totalSlides - 1}
              />
            </div>

            <AnimatePresence mode="wait">
              {currentSlide < messages.length ? (
                <MessageSlide
                  key={`message-${currentSlide}`}
                  emoji={messages[currentSlide].emoji}
                  title={messages[currentSlide].title}
                  message={messages[currentSlide].message}
                />
              ) : currentSlide === messages.length ? (
                <WishPage 
                  key="wish" 
                  onComplete={() => {
                    setWishComplete(true);
                    setCurrentSlide(currentSlide + 1);
                  }} 
                />
              ) : currentSlide === messages.length + 1 ? (
                <FinalCelebration key="celebration" name={BIRTHDAY_GIRL_NAME} />
              ) : (
                <LyricsSlide 
                  key="lyrics" 
                  onComplete={() => setCurrentSlide(messages.length + 1)} 
                />
              )}
            </AnimatePresence>

            <SlideIndicator total={totalSlides} current={currentSlide} />

            {/* Tap hint */}
            {currentSlide < totalSlides - 1 && (
              <motion.div
                className="fixed bottom-16 left-1/2 -translate-x-1/2 text-muted-foreground text-sm font-body z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Tap right side to continue →
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
