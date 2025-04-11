import React, { useState } from "react";
import "./TicTacToe.css";
import useTicTacToe from "../src/hooks/useTicTacToe"

const TicTacToe = () => {

  const {board, isUserX,handleClickBox, winMsg}  = useTicTacToe()

  return (
    <div className="game">
      {/* {console.log(board)} */}
      <h1>TIC - TAC - TOE</h1>
      <p>Player {isUserX ? "X" : "Y"}'s Turn</p>

      <div className="board">
        {board.map((b, index) => (
          <button onClick={() => handleClickBox(index)} className="boardCell" key={index}>
            {b}
          </button>
        ))}
      </div>
      <p className="winMessage">{winMsg}</p>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTacToe;
