import React, { useEffect, useState } from "react";

const useTicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserX, setIsUserX] = useState(true);
  const [winMsg, setWinMsg] = useState("");

  const WinningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const winner = checkWin();
    // console.log("winner", winner);
    if (winner) {
      handleWinMessage(winner);
      setIsUserX(true);
      setBoard(Array(9).fill(null));
    }
  }, [board]);

  const handleWinMessage = (a) => {
    if (a === "X") {
      setWinMsg("Player X Won!!!");
    } else if (a === "O") {
      setWinMsg("Player Y Won!!!");
    } else {
      setWinMsg("Game Started...!");
    }
  };

  const checkWin = () => {
    for (let i = 0; i < WinningPattern.length; i++) {
      const [a, b, c] = WinningPattern[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // setIsUserX(true);
        // setBoard(Array(9).fill(null));
        return board[a]; //X or O will be returned
      }
    }
    if (!board.includes(null)) {
      return "draw";
    }
    return null;
  };

  const handleClickBox = (index) => {
    // console.log("CHECKCLICK");
    const check = checkWin(board); //Check krlo pehle k koi winner to nai bn rha

    if (check == true || board[index] != null) return;

    const newVal = isUserX ? "X" : "O";
    const newBoard = [...board];
    newBoard[index] = newVal;
    // console.log("New Board", newBoard);
    setBoard(newBoard);
    setIsUserX(!isUserX);
  };

  return { board, isUserX, handleClickBox, winMsg };
};

export default useTicTacToe;
