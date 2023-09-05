import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "./button";



export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [status, setStatus] = useState("");

  function isBoardFull(board) {
    return board.every((cell) => cell !== null);
  }


  function verifyPlayer(index) {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  }

  function renderButton(index) {
    return (
      <Button
        key={index}
        label={board[index]}
        onClick={() => {
          verifyPlayer(index);
        }}
      />
    );
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setStatus("");
  }

  const winner = calculateWinner(board);

  if (!winner && isBoardFull(board) && !status) {
    setStatus("Deu velha! Clique para reiniciar.");
  } else if (winner && !status) {
    setStatus(`Vencedor: ${winner}. Clique para reiniciar.`);
  }
  return (
    <>
      <View  style={styles.containerBoard}>
        {board.map((_, index) => renderButton(index))}
      </View>
      {status && (
        <View style={styles.resultButtom}>
          <Text style={styles.status}>{status}</Text>
          <Button
            label="Reiniciar"
            buttonTop
            onClick={() => {
              resetGame();
            }}
          />
        </View>
      )}
    </>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}


const styles = StyleSheet.create({
    containerBoard: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    status: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        color: 'red'
    },
    resultButtom: {
        fontSize:10,
        justifyContent: "center",
        alignItems: "center",
    }

})
