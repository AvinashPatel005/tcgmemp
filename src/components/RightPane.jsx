import React from "react";

function RightPane({best}) {
  return (
    <div className="right-pane">
      <div className="tutorial">
        <h3>HOW TO PLAY?</h3>
        <ol>
          <li>
            <strong>Start the Game:</strong> Click on the cards to flip them
            over and reveal the hidden symbols.
          </li>
          <li>
            <strong>Match the Pairs:</strong> Each card has a matching pair. You
            need to find and flip the two matching cards.
          </li>
          <li>
            <strong>Keep Track of Flips:</strong> The cards you flip will stay
            revealed until you flip another one. If the cards match, they will
            stay open.
          </li>
          <li>
            <strong>Win the Game:</strong> The game is won when all pairs of
            cards have been matched.
          </li>
          <li>
            <strong>Reset the Game:</strong> If you want to start over, click
            the "Restart Game" button to reshuffle and reset the board.
          </li>
        </ol>
      </div>
     <div>
      <h3>PERSONAL BEST</h3>
      <div>
          <p>Move: {best.move}</p>
          <p>Accuracy: {best.acc}%</p>
      </div>
     </div>
    </div>
  );
}

export default RightPane;
