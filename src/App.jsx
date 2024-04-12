import Header from './components/Header'
import InputBoardDimensions from './components/InputBoardDimensions'
import { useState, useEffect } from 'react'
import InputBoardObstacles from './components/InputBoardObstacles';
import Process from './components/Process';
import PathBoard from './components/PathBoard';
import AnswerBoard from './components/AnswerBoard';

function App() {
  const [board, setBoard] = useState([]);
  const [newBoard, setNewBoard] = useState([]);
  const [pathBoard, setPathBoard] = useState([]);
  const [executing, setExecuting] = useState(false);

  function handlDesignBoardeSetRowsCols(val1, val2) {
    let b = []
    for (let i = 0; i < val1; i++) {
      b.push(new Array(val2).fill('O'));
    }
    setBoard(b)
  }

  useEffect(() => {
    // console.log("New board state:", newBoard);
    // setNewBoard(board);
    setPathBoard(board);


  }, [board]);


  function handleReset() {
    setBoard([]);
    setNewBoard([]);
    setPathBoard([]);
    setExecuting(false);
  }

  function handleButton() {
    setExecuting(true);
    // setShowProcess(true);
    // console.log(board);
    let maze = board.map(inner => Array.isArray(inner) ? deepClone(inner) : inner);

    function deepClone(arr) {
      return arr.map(inner => Array.isArray(inner) ? deepClone(inner) : inner);
    }

    function paths(maze, i, j, M, N, asf) {
      if (i == M - 1 && j == N - 1) {
        console.log(asf);
        setNewBoard((prev) => {
          return [...prev, deepClone(maze)]
        });
        return;
      }
      if (i < 0 || i >= M || j < 0 || j >= N || maze[i][j] == 'X' || maze[i][j] == 1) {
        return;
      }

      let temp = maze[i][j];
      maze[i][j] = 1;

      setTimeout(() => {
        setPathBoard(deepClone(maze));
      }, 100);

      // setBoard((prev_board) => {
      //   prev_board[i][j] = 1;
      //   return prev_board;
      // })


      // console.log("Updated maze:", maze); // Log updated maze
      // setNewBoard(prevBoard => {
      //   const updatedBoard = deepClone(prevBoard); // Deep clone previous state
      //   updatedBoard[i][j] = 1; // Update the current cell
      //   return updatedBoard;
      // });
      // console.log("New board state:", newBoard);

      paths(deepClone(maze), i, j + 1, M, N, asf + "R");
      setTimeout(() => {

      }, 100)
      paths(deepClone(maze), i + 1, j, M, N, asf + "D");
      setTimeout(() => {

      }, 100)
      paths(deepClone(maze), i, j - 1, M, N, asf + "L");
      setTimeout(() => {

      }, 100)
      paths(deepClone(maze), i - 1, j, M, N, asf + "U");

      maze[i][j] = temp;

      setTimeout(() => {
        setPathBoard(deepClone(maze));
      }, 100);

      // console.log("Restored maze:", maze); // Log restored maze
      // setNewBoard(prevBoard => {
      //   const updatedBoard = deepClone(prevBoard); // Deep clone previous state
      //   updatedBoard[i][j] = temp; // Update the current cell
      //   return updatedBoard;
      // });
      // console.log("New board state after restoration:", newBoard);
      // setBoard((prev_board) => {
      //   prev_board[i][j] = temp;
      //   return prev_board;
      // })
    }

    paths(maze, 0, 0, maze.length, maze[0].length, "");
  }

  return (
    <>
      <Header />
      {board.length == 0 ? <InputBoardDimensions setRowsCols={handlDesignBoardeSetRowsCols} /> : !executing ? <InputBoardObstacles setBoard={setBoard} board={board} /> : <></>}
      {(board.length != 0 && !executing) && <button
        style={
          {
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10px",
            marginBottom: "15px"
          }
        }
        onClick={handleButton}
      >Get possible paths</button>}

      {board.length != 0 && <button
        style={
          {
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10px",
            marginBottom: "15px"
          }
        }
        onClick={handleReset}>Try again</button>}
      <div style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto', alignItems: 'center', textAlign: 'center', }}><AnswerBoard height={"50px"} width={'50px'} board={pathBoard} /></div>
      <Process board={newBoard} />




    </>
  )
}

export default App
