import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div className="progress-text">
        {current} de {total}
      </div>

      <style jsx>{`
        .progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          z-index: 100;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: var(--gradient-primary);
          box-shadow: 0 0 20px var(--primary-color);
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          animation: shimmer 2s infinite;
        }

        .progress-text {
          position: fixed;
          top: 15px;
          left: 20px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          z-index: 101;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @media (max-width: 768px) {
          .progress-container {
            height: 4px;
          }

          .progress-text {
            top: 10px;
            left: 15px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;