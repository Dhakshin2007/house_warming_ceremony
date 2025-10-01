
import React from 'react';

const FloatingPetals: React.FC = () => {
  const petals = Array.from({ length: 15 }).map((_, i) => {
    const style: React.CSSProperties = {
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 5 + 10}s`, // 10s to 15s
      animationDelay: `${Math.random() * 10}s`,
    };
    return <div key={i} className="petal" style={style}></div>;
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <style>
        {`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .petal {
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: rgba(255, 165, 0, 0.4); /* Saffron-like color */
          border-radius: 0% 50% 50% 50%;
          transform: rotate(-45deg);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        `}
      </style>
      {petals}
    </div>
  );
};

export default FloatingPetals;
