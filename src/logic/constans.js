
export const TURNS = {
    X: '✖️',
    O: '⚪'
  }

export const checkEnd = (boardtoCheck) => {
    return boardtoCheck.every((square)=>square !== null)
  }

export const resetGame = (setBoard,setWinner) =>{
    setBoard(Array(9).fill(null))
    setWinner(null)
  }
export const newTurn=(turn) => turn === TURNS.X?TURNS.O:TURNS.X


// export  const updateBoard = (index,newborad,newturn,newWinner) => {
//     // validar que el tablero este en blando 
//     // o haya un ganador para dejar de actualizar tablero
//     if(newborad[index]|| newWinner) return
//     // Actualizar tablero con cada jugada
//     //const newBoard = [...boardt]
//     newborad[index] = newturn
//     console.log(newborad)
//     console.log(newturn)
//     setBoard(newborad)
//     // Actualizar tablero con el turno siguente 
//     setTurn(newTurn(newturn))
//     // Validar que haya ganador en cada jugada
//     newWinner = check(newborad)
//     if(newWinner){
//       setWinner(newWinner)
//     } else if (checkEnd(newborad)){
//       setWinner(false)
//     }
//   }