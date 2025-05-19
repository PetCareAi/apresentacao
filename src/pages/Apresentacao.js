import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Slide from '../components/Slide';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import ParticleBackground from '../components/ParticleBackground';
import { slidesData } from '../data/slidesData';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

const Apresentacao = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slidesData.length;

  // Navegação por slide
  const goToSlide = useCallback((slideIndex, dir = 0) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setDirection(dir);
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1, 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, -1);
    }
  }, [currentSlide, goToSlide]);

  // Hook para navegação por teclado
  useKeyboardNavigation(nextSlide, prevSlide);

  // Controle de tela cheia
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Variantes de animação
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 },
    scale: { duration: 0.3 }
  };

  return (
    <>
      <Helmet>
        <title>PetCare AI - Apresentação Profissional</title>
        <meta name="description" content="Apresentação do aplicativo PetCare AI - Cuidado Inteligente para seu Pet" />
        <meta property="og:title" content="PetCare AI - Apresentação" />
        <meta property="og:description" content="Revolucione o cuidado com seu pet através da Inteligência Artificial" />
      </Helmet>

      <div className="presentation-container">
        <ParticleBackground />
        
        <ProgressBar current={currentSlide + 1} total={totalSlides} />

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="slide-container"
          >
            <Slide
              data={slidesData[currentSlide]}
              slideNumber={currentSlide + 1}
              totalSlides={totalSlides}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>

        <Navigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevious={prevSlide}
          onNext={nextSlide}
          onGoToSlide={goToSlide}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />
      </div>

      <style jsx>{`
        .presentation-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: var(--gradient-bg);
        }

        .slide-container {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Apresentacao;