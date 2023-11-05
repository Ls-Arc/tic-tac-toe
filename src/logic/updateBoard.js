
export const updateBoard = (index,boardt,turn,winner) => {
  // validar que el tablero este en blando 
  // o haya un ganador para dejar de actualizar tablero
  if(boardt[index]|| winner) return
  // Actualizar tablero con cada jugada
  const newBoard = [...boardt]
  newBoard[index] = turn
  setBoard(newBoard)
  // Actualizar tablero con el turno siguente 
  setTurn(newTurn(turn))
  // Validar que haya ganador en cada jugada
  const newWinner = check(newBoard)
  if(newWinner){
    setWinner(newWinner)
  } else if (checkEnd(newBoard)){
    setWinner(false)
  }
}