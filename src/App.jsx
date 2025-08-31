import { useState, useRef } from "react";
import Confetti from "react-confetti";

export default function LoveApp() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [noBtnMoved, setNoBtnMoved] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({});
  const noBtnRef = useRef(null);

  const moveNoButton = () => {
    if (noBtnRef.current) {
      const buttonWidth = noBtnRef.current.offsetWidth;
      const buttonHeight = noBtnRef.current.offsetHeight;
      
      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;
      
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      
      setNoBtnPos({
        position: 'fixed',
        top: `${randomY}px`,
        left: `${randomX}px`,
      });
      setNoBtnMoved(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 relative overflow-hidden">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <h1 className="text-3xl font-bold text-gray-800 mb-8 z-10">
        beni seviyor musun? <span className="text-pink-500">❤</span>
      </h1>

      <div className="flex gap-6 relative z-10">
        <button
          onClick={() => setShowConfetti(true)}
          className="px-6 py-3 rounded-2xl text-white font-semibold text-lg shadow-lg bg-gradient-to-r from-red-500 to-pink-400 hover:scale-110 transition-transform"
        >
          Evet
        </button>

        <button
          ref={noBtnRef}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          className={`px-6 py-3 rounded-2xl text-gray-700 font-semibold text-lg shadow-md bg-gray-200 flex items-center gap-2 select-none ${
            noBtnMoved ? '' : 'relative'
          }`}
          style={noBtnMoved ? noBtnPos : {}}
        >
          Hayır 😢
        </button>
      </div>
    </div>
  );
}