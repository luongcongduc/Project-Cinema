// Board.js

import React from "react";

import Square from "./square";

export default function Board({ squares, onClick }) {
  const renderSquares = numbs => {
    return numbs.map(num => (
      <Square value={squares[num]} onClick={() => onClick(num)} />
    ));
  };

  return (
    <div>
      <div className="board-row">{renderSquares([0, 1, 2,15,16])}</div>
      <div className="board-row">{renderSquares([3, 4, 5,17,18])}</div>
      <div className="board-row">{renderSquares([6, 7, 8,19,20])}</div>
      <div className="board-row">{renderSquares([9, 10, 11,21,22])}</div>
      <div className="board-row">{renderSquares([12, 13, 14,23,24])}</div>
      {/* <div className="board-row">{renderSquares([-9, -10, -11])}</div> */}


    </div>
  );
}