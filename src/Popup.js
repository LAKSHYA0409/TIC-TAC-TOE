import React from 'react';
import './Popup.css';

const Popup = ({ winner, resetGame }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{winner} wins!</h2>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;