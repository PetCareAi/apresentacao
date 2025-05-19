import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaExpand, 
  FaCompress, 
  FaHome,
  FaDownload,
  FaGithub
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
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="nav-controls">
        <motion.button
          className="nav-btn"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft />
          <span>Anterior</span>
        </motion.button>

        <div className="slide-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => onGoToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          className="nav-btn"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Próximo</span>
          <FaChevronRight />
        </motion.button>
      </div>

      <div className="extra-controls">
        <motion.button
          className="control-btn"
          onClick={onToggleFullscreen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </motion.button>

        <motion.button
          className="control-btn"
          onClick={() => window.open('https://petcareai.vercel.app/', '_blank')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Visitar site oficial"
        >
          <FaHome />
        </motion.button>

        <motion.button
          className="control-btn"
          onClick={() => window.open('https://github.com/estevam5s/petcare-ai-app/releases', '_blank')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Download APK"
        >
          <FaDownload />
        </motion.button>

        <motion.button
          className="control-btn"
          onClick={() => window.open('https://github.com/estevam5s/petcare-ai', '_blank')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Código fonte"
        >
          <FaGithub />
        </motion.button>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 100;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 15px 25px;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: var(--transition);
          box-shadow: 0 10px 30px var(--shadow-primary);
        }

        .nav-btn:disabled {
          background: var(--gray-medium);
          cursor: not-allowed;
          opacity: 0.5;
        }

        .slide-indicators {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: transparent;
          cursor: pointer;
          transition: var(--transition);
        }

        .indicator.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
        }

        .extra-controls {
          display: flex;
          gap: 1rem;
        }

        .control-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .navigation {
            bottom: 20px;
            padding: 15px;
            flex-direction: column;
            gap: 1rem;
          }

          .nav-controls {
            gap: 1rem;
          }

          .nav-btn {
            padding: 12px 20px;
            font-size: 0.9rem;
          }

          .nav-btn span {
            display: none;
          }

          .control-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Navigation;