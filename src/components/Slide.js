import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ data, slideNumber, totalSlides, isActive }) => {
  const { type, title, subtitle, content, layout, style } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`slide ${type || ''} ${layout || ''}`} style={style}>
      <div className="slide-number">
        {slideNumber}/{totalSlides}
      </div>

      <motion.div
        className="slide-content"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        {data.icon && (
          <motion.div className="slide-icon" variants={itemVariants}>
            {data.icon}
          </motion.div>
        )}

        {title && (
          <motion.h1 className="slide-title" variants={itemVariants}>
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.h2 className="slide-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.h2>
        )}

        {content && (
          <motion.div className="slide-main-content" variants={itemVariants}>
            {content}
          </motion.div>
        )}
      </motion.div>

      <style jsx>{`
        .slide {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          padding: 60px;
          position: relative;
          backdrop-filter: blur(20px);
        }

        .slide-number {
          position: absolute;
          top: 40px;
          right: 40px;
          background: var(--gradient-primary);
          padding: 15px 25px;
          border-radius: 50px;
          font-weight: 600;
          color: white;
          box-shadow: 0 10px 30px var(--shadow-primary);
          font-size: 1.1rem;
          z-index: 10;
        }

        .slide-content {
          max-width: 1400px;
          text-align: center;
          z-index: 2;
        }

        .slide-icon {
          font-size: 5rem;
          margin-bottom: 2rem;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
        }

        .slide-title {
          font-size: 5rem;
          margin-bottom: 2rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .slide-subtitle {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: var(--dark-color);
          font-weight: 700;
          letter-spacing: -1px;
        }

        .slide-main-content {
          font-size: 1.5rem;
          line-height: 1.8;
          font-weight: 400;
        }

        /* Layouts específicos */
        .slide.title {
          background: var(--gradient-bg);
          color: white;
        }

        .slide.content {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .slide.feature-grid {
          padding: 40px;
        }

        .slide.demo {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          color: white;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .slide {
            padding: 40px 20px;
          }

          .slide-title {
            font-size: 3.5rem;
          }

          .slide-subtitle {
            font-size: 2.5rem;
          }

          .slide-main-content {
            font-size: 1.2rem;
          }

          .slide-number {
            top: 20px;
            right: 20px;
            padding: 10px 15px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Slide;