"use client";

import { motion } from "motion/react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

function Slider() {
  const slides = [<SlideOne key="slide1" />, <SlideTwo key="slide2" />];

  return (
    <div
      className="relative h-20 md:h-40 xl:h-50 w-full mb-10
      bd:mb-15 xl:mb-20"
    >
      {slides.map((slide, index) => (
        <motion.div
          key={`slide-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            // Задержка между циклами анимации
            repeatDelay: slides.length * 5 - 5,
            // Замержка по переключении слайдов
            delay: index * 5,
          }}
          className="absolute w-full h-full"
        >
          {slide}
        </motion.div>
      ))}
    </div>
  );
}

export default Slider;
