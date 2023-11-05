import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { Table } from "./components/Table.jsx"
import { check } from "./logic/checkWinner.js"
import { Modal } from "./components/Modal.jsx"
import { TURNS, checkEnd, resetGame, newTurn} from "./logic/constans.js"
import { Buttonreset } from "./components/Buttonreset.jsx"
// tareas 
// Mostrar el turno ...........
// No dejar reescribir casilla .............
// Actualizar la casilla ..................
// Determinar el ganador .........
// Determinar si es empate  .....
// mostrar la modal del ganador ....
// Resetear el juego ......
// guardar la partida en el local storage 
// Historial de wins
// 

function App(){
  // Estados
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.O)
  const [winner, setWinner] = useState(null)
  
  // funciones para acutalizar los estados
  const updateBoard = (index,newborad,newturn,newWinner) => {
        // validar que el tablero este en blando 
        // o haya un ganador para dejar de actualizar tablero
        if(newborad[index]|| newWinner) return
        // Actualizar tablero con cada jugada
        //const newBoard = [...boardt]
        newborad[index] = newturn
        console.log(newborad)
        console.log(newturn)
        setBoard(newborad)
        // Actualizar tablero con el turno siguente 
        setTurn(newTurn(newturn))
        // Validar que haya ganador en cada jugada
        newWinner = check(newborad)
        if(newWinner){
          setWinner(newWinner)
        } else if (checkEnd(newborad)){
          setWinner(false)
        }
      }
    
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <Buttonreset resetGame={resetGame} setBoard={setBoard} setWinner={setWinner}
         >Jugar de nuevo</Buttonreset>
         <Table 
         upclass = 'game'
         >
          {
            board.map((current,index)=>{
              return (
               <Square key={index}
               index={index}
               newboard={[...board]}
               newturn={turn}
               newWinnwe={winner}
               updateBoard={updateBoard}
               >
                {current}
               </Square>
              )
            })
          }
         </Table>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {winner !== null && 
      <Modal 
      isWinner={false}
      winner = {winner}
      >
          {winner&&<header className="win">
          <Square>
            {winner}
          </Square>
          </header>}
         <Buttonreset 
         resetGame={resetGame} 
         setBoard={setBoard}
         setWinner={setWinner}
         >Jugar de nuevo</Buttonreset>
      </Modal>
      }
    </main>
  )
}
export default App


