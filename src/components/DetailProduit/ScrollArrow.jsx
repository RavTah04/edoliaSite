import React from 'react';

const ScrollArrow = ({ show = false }) => {
  return (
    <>
      <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-3 pointer-events-none transition-opacity duration-200 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true">
        <div className="w-8 h-8 text-gray-600 flex items-center justify-center animate-bounce-down">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes bounceDown { 0% { transform: translateY(0); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0); } }
        .animate-bounce-down { animation: bounceDown 1.2s infinite ease-in-out; }
      `}</style>
    </>
  );
};

export default ScrollArrow;