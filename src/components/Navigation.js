import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChevronUp, 
  FaChevronDown, 
  FaExpand, 
  FaCompress, 
  FaHome,
  FaDownload,
  FaGithub,
  FaCircle
} from 'react-icons/fa';

const Navigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onGoToSlide, 
  onToggleFullscreen,
  isFullscreen 
}) => {
  return (
    <motion.div 
      className="navigation"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Seção de Navegação Principal */}
      <div className="nav-section">
        <motion.button
          className="nav-btn prev"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          title="Slide anterior"
        >
          <FaChevronUp />
        </motion.button>

        <div className="slide-counter">
          <span className="current">{currentSlide + 1}</span>
          <span className="divider">/</span>
          <span className="total">{totalSlides}</span>
        </div>

        <div className="slide-indicators">
          <div className="indicator-track">
            <motion.div 
              className="indicator-progress"
              initial={{ height: 0 }}
              animate={{ height: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'passed' : ''}`}
                onClick={() => onGoToSlide(index)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                title={`Slide ${index + 1}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <FaCircle />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          className="nav-btn next"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          title="Próximo slide"
        >
          <FaChevronDown />
        </motion.button>
      </div>

      {/* Divisor Estilizado */}
      <div className="elegant-divider">
        <div className="divider-dot"></div>
        <div className="divider-line"></div>
        <div className="divider-dot"></div>
      </div>

      {/* Seção de Controles Extras */}
      <div className="controls-section">
        <motion.button
          className="control-btn fullscreen"
          onClick={onToggleFullscreen}
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
        >
          <div className="btn-glow"></div>
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </motion.button>

        <motion.button
          className="control-btn home"
          onClick={() => window.open('https://petcareai.vercel.app/', '_blank')}
          whileHover={{ scale: 1.15, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          title="Site oficial"
        >
          <div className="btn-glow"></div>
          <FaHome />
        </motion.button>

        <motion.button
          className="control-btn download"
          onClick={() => window.open('https://github.com/estevam5s/petcare-ai-app/releases', '_blank')}
          whileHover={{ scale: 1.15, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          title="Download APK"
        >
          <div className="btn-glow"></div>
          <FaDownload />
        </motion.button>

        <motion.button
          className="control-btn github"
          onClick={() => window.open('https://github.com/estevam5s/petcare-ai', '_blank')}
          whileHover={{ scale: 1.15, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          title="Código fonte"
        >
          <div className="btn-glow"></div>
          <FaGithub />
        </motion.button>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 25%;
          right: 30px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          z-index: 100;
          padding: 25px 15px;
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(25px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .navigation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, transparent, rgba(76, 175, 80, 0.1));
          border-radius: 30px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .navigation:hover::before {
          opacity: 1;
        }

        .nav-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .nav-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          background: linear-gradient(145deg, #4CAF50, #66BB6A);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.3rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 25px rgba(76, 175, 80, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          overflow: hidden;
        }

        .nav-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .nav-btn:hover::before {
          left: 100%;
        }

        .nav-btn:disabled {
          background: linear-gradient(145deg, #9e9e9e, #bdbdbd);
          cursor: not-allowed;
          opacity: 0.5;
          transform: none !important;
        }

        .slide-counter {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .slide-counter .current {
          color: #4CAF50;
          font-size: 1.2rem;
        }

        .slide-counter .divider {
          margin: 0 8px;
          opacity: 0.6;
        }

        .slide-counter .total {
          opacity: 0.8;
        }

        .slide-indicators {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .indicator-track {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
        }

        .indicator-progress {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          background: linear-gradient(to bottom, #4CAF50, #66BB6A);
          border-radius: 1px;
          transform: translateX(-50%);
          box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
        }

        .indicator {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.4);
          font-size: 8px;
          transition: all 0.3s ease;
          animation: indicatorFadeIn 0.5s ease var(--delay) both;
          z-index: 1;
        }

        .indicator.active {
          color: #4CAF50;
          filter: drop-shadow(0 0 8px #4CAF50);
          animation: indicatorPulse 2s ease-in-out infinite;
        }

        .indicator.passed {
          color: rgba(76, 175, 80, 0.6);
        }

        .indicator:hover {
          color: #66BB6A;
          transform: scale(1.4);
        }

        .elegant-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 8px 0;
        }

        .divider-dot {
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #4CAF50, #66BB6A);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
        }

        .divider-line {
          width: 1px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, rgba(76, 175, 80, 0.3), transparent);
        }

        .controls-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .control-btn {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.1rem;
          color: white;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .control-btn.fullscreen {
          background: linear-gradient(145deg, #2196F3, #42A5F5);
          box-shadow: 0 6px 20px rgba(33, 150, 243, 0.3);
        }

        .control-btn.home {
          background: linear-gradient(145deg, #FF9800, #FFB74D);
          box-shadow: 0 6px 20px rgba(255, 152, 0, 0.3);
        }

        .control-btn.download {
          background: linear-gradient(145deg, #9C27B0, #BA68C8);
          box-shadow: 0 6px 20px rgba(156, 39, 176, 0.3);
        }

        .control-btn.github {
          background: linear-gradient(145deg, #424242, #757575);
          box-shadow: 0 6px 20px rgba(66, 66, 66, 0.3);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .control-btn:hover .btn-glow {
          opacity: 1;
        }

        .control-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        /* Animações */
        @keyframes indicatorFadeIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes indicatorPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .navigation {
            right: 20px;
            top: 30%;
            padding: 20px 12px;
            gap: 1.2rem;
          }

          .nav-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .control-btn {
            width: 44px;
            height: 44px;
            font-size: 1rem;
          }

          .slide-counter {
            font-size: 0.9rem;
            padding: 6px 12px;
          }
        }

        @media (max-width: 480px) {
          .navigation {
            position: fixed;
            bottom: 20px;
            right: 50%;
            top: auto;
            transform: translateX(50%);
            flex-direction: row;
            padding: 15px 25px;
            border-radius: 50px;
            gap: 1rem;
          }

          .nav-section {
            flex-direction: row;
            gap: 1rem;
          }

          .slide-indicators {
            padding: 8px;
          }

          .indicator-track {
            flex-direction: row;
            gap: 8px;
          }

          .indicator-progress {
            width: auto;
            height: 2px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }

          .controls-section {
            flex-direction: row;
            gap: 8px;
          }

          .elegant-divider {
            flex-direction: row;
            padding: 0 8px;
          }

          .divider-line {
            width: 20px;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(76, 175, 80, 0.3), transparent);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Navigation;